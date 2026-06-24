import { describe, expect, it } from 'vitest';
import { cases } from '../../src/data/cases';
import { validateCaseData } from '../../src/data/cases/validateCases';
import { validateBoard } from '../../src/game/validation';

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
});
