import { describe, expect, it } from 'vitest';
import { cases } from '../../src/data/cases';
import { validateCaseData } from '../../src/data/cases/validateCases';
import { validateBoard } from '../../src/game/validation';
import { suspectClues } from '../../src/i18n/zhHans';

describe('case data', () => {
  it('contains exactly 20 first-release cases', () => {
    expect(cases).toHaveLength(20);
  });

  it('uses unique ids', () => {
    const ids = new Set(cases.map((caseDef) => caseDef.id));

    expect(ids.size).toBe(20);
  });

  it('has internally valid data', () => {
    const errors = cases.flatMap(validateCaseData);

    expect(errors).toEqual([]);
  });

  it('solution placements solve every case', () => {
    for (const caseDef of cases) {
      const board = {
        placements: Object.fromEntries(caseDef.solution.map((placement) => [placement.cellId, placement.suspectId])),
        marks: {}
      };

      expect(validateBoard(caseDef, board).solved).toBe(true);
    }
  });

  it('starts with smaller teaching boards before increasing the grid size', () => {
    expect(cases.slice(0, 5).map((caseDef) => caseDef.size)).toEqual([
      { rows: 4, columns: 4 },
      { rows: 5, columns: 5 },
      { rows: 6, columns: 6 },
      { rows: 6, columns: 6 },
      { rows: 6, columns: 6 }
    ]);
  });

  it('keeps the first five teaching cases before switching to original puzzles', () => {
    expect(cases.slice(0, 4).map((caseDef) => caseDef.intro).join(' ')).not.toMatch(/outlaw/i);
    expect(cases[4].intro).toMatch(/outlaw/i);
    expect(cases[4].intro).toMatch(/may or may not be the murderer/i);
    expect(cases.slice(5).map((caseDef) => caseDef.title)).toEqual([
      'A Horse With No Name',
      'Frontier Town',
      'A Remote Village',
      'Minigolf',
      'Grizzly Night',
      'The Book Club',
      'The Flower Store',
      'A Messy Situation',
      'The Riding Lesson',
      'White Wedding',
      'The Beach',
      "Hell's Kitchen",
      'Lakeside Cabin',
      'Surprise Visitors',
      'The Abandoned Museum'
    ]);
  });

  it('translates object cell clues as being in that object cell instead of beside it', () => {
    const allClues = cases
      .flatMap((caseDef) => caseDef.suspects.flatMap((suspect) => suspectClues(caseDef.id, suspect)))
      .join('\n');

    expect(allClues).not.toMatch(/旁边|边上|旁/);
    expect(suspectClues(cases[0].id, cases[0].suspects[0]).join(' ')).toContain('仙人掌格');
  });

  it('keeps localized direct clue text aligned with each solution cell', () => {
    const failures: string[] = [];

    for (const caseDef of cases) {
      for (const suspect of caseDef.suspects) {
        const placement = caseDef.solution.find((candidate) => candidate.suspectId === suspect.id);
        const cell = caseDef.cells.find((candidate) => candidate.id === placement?.cellId);

        expect(placement).toBeDefined();
        expect(cell).toBeDefined();

        for (const clue of suspectClues(caseDef.id, suspect)) {
          for (const rowMatch of clue.matchAll(/第\s*(\d+)\s*行/g)) {
            const expected = cell!.row + 1;
            const actual = Number(rowMatch[1]);
            if (actual !== expected) failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected row ${expected}`);
          }

          for (const columnMatch of clue.matchAll(/第\s*(\d+)\s*列/g)) {
            const expected = cell!.column + 1;
            const actual = Number(columnMatch[1]);
            if (actual !== expected) failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected column ${expected}`);
          }

          if (clue.includes('最后一行') && cell!.row !== caseDef.size.rows - 1) {
            failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected final row`);
          }

          if (clue.includes('最后一列') && cell!.column !== caseDef.size.columns - 1) {
            failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected final column`);
          }
        }
      }
    }

    expect(failures).toEqual([]);
  });
});
