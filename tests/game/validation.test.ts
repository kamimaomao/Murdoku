import { describe, expect, it } from 'vitest';
import type { CaseDefinition } from '../../src/game/types';
import { validateBoard } from '../../src/game/validation';

const testCase: CaseDefinition = {
  id: 'case-test',
  title: 'Test Case',
  difficulty: 'very-easy',
  size: { rows: 2, columns: 2 },
  intro: 'Test intro',
  victimId: 'victim',
  murdererId: 'ada',
  cells: [
    { id: '0-0', row: 0, column: 0 },
    { id: '0-1', row: 0, column: 1 },
    { id: '1-0', row: 1, column: 0 },
    { id: '1-1', row: 1, column: 1 }
  ],
  suspects: [
    { id: 'ada', name: 'Ada', accent: '#ffd54a', portraitKey: 'ada', clues: ['Ada clue'] },
    { id: 'victim', name: 'Victim', accent: '#ff6b6b', portraitKey: 'victim', clues: ['Victim clue'] }
  ],
  solution: [
    { suspectId: 'ada', cellId: '0-0' },
    { suspectId: 'victim', cellId: '1-1' }
  ]
};

describe('validateBoard', () => {
  it('reports incomplete boards', () => {
    const result = validateBoard(testCase, { placements: {}, marks: {} });

    expect(result.solved).toBe(false);
    expect(result.issues[0]?.type).toBe('incomplete');
  });

  it('reports duplicate suspect in the same row', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '0-1': 'ada', '1-1': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-row')).toBe(true);
  });

  it('reports duplicate suspect across different rows and columns', () => {
    const result = validateBoard(
      {
        ...testCase,
        size: { rows: 3, columns: 3 },
        cells: [
          { id: '0-0', row: 0, column: 0 },
          { id: '0-1', row: 0, column: 1 },
          { id: '0-2', row: 0, column: 2 },
          { id: '1-0', row: 1, column: 0 },
          { id: '1-1', row: 1, column: 1 },
          { id: '1-2', row: 1, column: 2 },
          { id: '2-0', row: 2, column: 0 },
          { id: '2-1', row: 2, column: 1 },
          { id: '2-2', row: 2, column: 2 }
        ]
      },
      {
        placements: { '0-0': 'ada', '1-1': 'victim', '2-2': 'ada' },
        marks: {}
      }
    );

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-suspect')).toBe(true);
  });

  it('reports two different suspects in the same row', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '0-1': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-row')).toBe(true);
  });

  it('reports duplicate suspect in the same column', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '1-0': 'ada', '1-1': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-column')).toBe(true);
  });

  it('reports two different suspects in the same column', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '1-0': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-column')).toBe(true);
  });

  it('solves when placements match solution', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '1-1': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it('reports wrong placement without revealing the correct cell', () => {
    const result = validateBoard(testCase, {
      placements: { '1-0': 'ada', '0-1': 'victim' },
      marks: {}
    });

    expect(result.solved).toBe(false);
    expect(result.issues[0]).toMatchObject({ type: 'wrong-placement', suspectId: 'ada' });
    expect(result.issues[0]?.message).not.toContain('0-0');
  });
});
