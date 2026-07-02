import { describe, expect, it } from 'vitest';
import { cases } from '../../src/data/cases';
import { validateCaseData } from '../../src/data/cases/validateCases';
import { validateBoard } from '../../src/game/validation';
import { caseIntro, caseTitle, objectName, roomName, suspectClues } from '../../src/i18n/zhHans';

const isVisibleText = (value: string | undefined): value is string => Boolean(value);

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
    expect(cases[4].intro).not.toMatch(/murderer|victim/i);
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

  it('keeps tutorial cases framed as practice scenes instead of fatal cases', () => {
    const fatalWords = /凶手|受害者|被害人|命案|遇害|死亡|murderer|victim/i;

    for (const caseDef of cases.slice(0, 5)) {
      const visibleText = [
        caseIntro(caseDef),
        ...caseDef.suspects.flatMap((suspect) => suspectClues(caseDef.id, suspect))
      ].join(' ');

      expect(visibleText, caseDef.id).not.toMatch(fatalWords);
      expect(caseDef.culpritLabel, caseDef.id).toBe('关键人物');
    }
  });

  it('translates object cell clues as being in that object cell instead of beside it', () => {
    const allClues = cases
      .flatMap((caseDef) => caseDef.suspects.flatMap((suspect) => suspectClues(caseDef.id, suspect)))
      .join('\n');

    expect(allClues).not.toMatch(/旁边|边上|旁/);
    expect(suspectClues(cases[0].id, cases[0].suspects[0]).join(' ')).toContain('仙人掌格');
  });

  it('keeps visible localized text from falling back to English clue wording', () => {
    const boardLabels = cases.flatMap((caseDef) =>
      caseDef.cells.flatMap((cell) => [roomName(cell.room), objectName(cell.object)].filter(isVisibleText))
    );
    const visibleText = cases.flatMap((caseDef) => [
      caseTitle(caseDef),
      caseIntro(caseDef),
      ...boardLabels,
      ...caseDef.suspects.flatMap((suspect) => suspectClues(caseDef.id, suspect))
    ]);

    const englishClueWording =
      /\b(?:place|using|clues|there|victim|murderer|outlaw|was|were|alone|north|south|east|west|row|column|area|same|exactly|least|only|person|people|man|woman|empty|suspect)\b/i;

    expect(boardLabels.filter((label) => /[A-Za-z]/.test(label))).toEqual([]);
    expect(visibleText.filter((text) => englishClueWording.test(text))).toEqual([]);
  });

  it('uses less ambiguous area wording for directional clues and square wording for horse clues', () => {
    const horseCase = cases.find((caseDef) => caseTitle(caseDef) === '无名之马');
    expect(horseCase).toBeDefined();
    const cornelius = horseCase!.suspects.find((suspect) => suspect.name === 'Cornelius');
    expect(cornelius).toBeDefined();

    const corneliusClues = suspectClues(horseCase!.id, cornelius!).join('');
    expect(corneliusClues).toContain('上方区域');
    expect(corneliusClues).not.toMatch(/北边|北侧/);

    const ridingLesson = cases.find((caseDef) => caseTitle(caseDef) === '骑术课');
    expect(ridingLesson).toBeDefined();
    const ridingClues = ridingLesson!.suspects.flatMap((suspect) => suspectClues(ridingLesson!.id, suspect)).join('');
    expect(ridingClues).toContain('马格');
    expect(ridingClues).toContain('训练场的马格');
    expect(ridingClues).not.toMatch(/骑在|horse|Horse/);
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
