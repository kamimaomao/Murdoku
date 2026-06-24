import { describe, expect, it } from 'vitest';
import { cases } from '../../src/data/cases';
import { validateCaseData } from '../../src/data/cases/validateCases';
import { validateBoard } from '../../src/game/validation';
import { objects, objectName, roomName, rooms, suspectClues } from '../../src/i18n/zhHans';

function matchedLabels(text: string, labels: string[]): string[] {
  let remaining = text;
  return labels
    .sort((a, b) => b.length - a.length)
    .filter((label) => {
      if (!remaining.includes(label)) return false;
      remaining = remaining.replace(label, '');
      return true;
    });
}

describe('case data', () => {
  it('contains exactly 10 first-release cases', () => {
    expect(cases).toHaveLength(10);
  });

  it('uses unique ids', () => {
    const ids = new Set(cases.map((caseDef) => caseDef.id));

    expect(ids.size).toBe(10);
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
    expect(cases.map((caseDef) => caseDef.size)).toEqual([
      { rows: 4, columns: 4 },
      { rows: 5, columns: 5 },
      { rows: 6, columns: 6 },
      { rows: 6, columns: 6 },
      { rows: 6, columns: 6 },
      { rows: 7, columns: 7 },
      { rows: 7, columns: 7 },
      { rows: 8, columns: 8 },
      { rows: 8, columns: 8 },
      { rows: 9, columns: 9 }
    ]);
  });

  it('introduces the outlaw concept only in the fifth case', () => {
    expect(cases.slice(0, 4).map((caseDef) => caseDef.intro).join(' ')).not.toMatch(/outlaw/i);
    expect(cases[4].intro).toMatch(/outlaw/i);
    expect(cases[4].intro).toMatch(/may or may not be the murderer/i);
  });

  it('keeps localized direct clue text aligned with each solution cell', () => {
    const failures: string[] = [];
    const roomLabels = [...new Set(Object.values(rooms))];
    const objectLabels = [...new Set(Object.values(objects))];

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

          const clueRooms = matchedLabels(clue, [...roomLabels]);
          if (clueRooms.length > 0 && !clueRooms.includes(roomName(cell!.room)!)) {
            failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected room ${roomName(cell!.room)}`);
          }

          const clueObjects = matchedLabels(clue, [...objectLabels]);
          if (clueObjects.length > 0 && !clueObjects.includes(objectName(cell!.object)!)) {
            failures.push(`${caseDef.id} ${suspect.id}: ${clue} expected object ${objectName(cell!.object)}`);
          }
        }
      }
    }

    expect(failures).toEqual([]);
  });
});
