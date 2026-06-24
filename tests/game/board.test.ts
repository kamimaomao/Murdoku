import { describe, expect, it } from 'vitest';
import { applyAnswer, applyCellAction, applyHint, createInitialGameState, moveSuspect, undo } from '../../src/game/board';
import type { CaseDefinition } from '../../src/game/types';

const hintCase: CaseDefinition = {
  id: 'case-hint',
  title: 'Hint Case',
  difficulty: 'very-easy',
  size: { rows: 2, columns: 2 },
  intro: 'Hint test',
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
    { suspectId: 'ada', cellId: '1-1' },
    { suspectId: 'victim', cellId: '0-0' }
  ]
};

describe('board state', () => {
  it('places the selected suspect in a cell and clears an X mark', () => {
    const state = createInitialGameState('case-01');
    const marked = applyCellAction({ ...state, activeTool: 'x' }, '0-0');
    const selected = { ...marked, activeTool: 'place' as const, selectedSuspectId: 'ada' };

    const next = applyCellAction(selected, '0-0');

    expect(next.board.placements['0-0']).toBe('ada');
    expect(next.board.marks['0-0']).toBeUndefined();
    expect(next.undoStack).toHaveLength(2);
  });

  it('moves an already placed suspect instead of duplicating it', () => {
    const state = {
      ...createInitialGameState('case-01'),
      activeTool: 'place' as const,
      selectedSuspectId: 'ada'
    };

    const first = applyCellAction(state, '0-0');
    const next = applyCellAction(first, '1-1');

    expect(next.board.placements['0-0']).toBeUndefined();
    expect(next.board.placements['1-1']).toBe('ada');
  });

  it('removes a placed suspect when tapping their occupied cell', () => {
    const state = {
      ...createInitialGameState('case-01'),
      activeTool: 'place' as const,
      selectedSuspectId: 'ada'
    };

    const placed = applyCellAction(state, '0-0');
    const next = applyCellAction(placed, '0-0');

    expect(next.board.placements['0-0']).toBeUndefined();
  });

  it('moves a dragged suspect to a new cell and clears the target mark', () => {
    const state = {
      ...createInitialGameState('case-01'),
      activeTool: 'place' as const,
      selectedSuspectId: 'ada'
    };

    const placed = applyCellAction(state, '0-0');
    const marked = applyCellAction({ ...placed, activeTool: 'x' }, '1-1');
    const next = moveSuspect(marked, 'ada', '1-1');

    expect(next.board.placements['0-0']).toBeUndefined();
    expect(next.board.placements['1-1']).toBe('ada');
    expect(next.board.marks['1-1']).toBeUndefined();
  });

  it('places the selected suspect at their solution cell when using a hint', () => {
    const state = {
      ...createInitialGameState('case-hint'),
      activeTool: 'place' as const,
      selectedSuspectId: 'ada',
      board: {
        placements: { '0-0': 'ada' },
        marks: { '1-1': true }
      }
    };

    const next = applyHint(hintCase, state);

    expect(next.board.placements['0-0']).toBeUndefined();
    expect(next.board.placements['1-1']).toBe('ada');
    expect(next.board.marks['1-1']).toBeUndefined();
  });

  it('fills the board with every solution placement when showing the answer', () => {
    const state = {
      ...createInitialGameState('case-hint'),
      activeTool: 'x' as const,
      board: {
        placements: { '0-1': 'ada' },
        marks: { '0-0': true, '1-1': true }
      }
    };

    const next = applyAnswer(hintCase, state);

    expect(next.board.placements).toEqual({
      '1-1': 'ada',
      '0-0': 'victim'
    });
    expect(next.board.marks).toEqual({});
    expect(next.undoStack).toHaveLength(1);
  });

  it('marks X and clears an existing placement', () => {
    const state = {
      ...createInitialGameState('case-01'),
      activeTool: 'place' as const,
      selectedSuspectId: 'ada'
    };

    const placed = applyCellAction(state, '0-0');
    const next = applyCellAction({ ...placed, activeTool: 'x' }, '0-0');

    expect(next.board.placements['0-0']).toBeUndefined();
    expect(next.board.marks['0-0']).toBe(true);
  });

  it('erases placement and mark', () => {
    const state = applyCellAction({ ...createInitialGameState('case-01'), activeTool: 'x' }, '0-0');
    const next = applyCellAction({ ...state, activeTool: 'erase' }, '0-0');

    expect(next.board.placements['0-0']).toBeUndefined();
    expect(next.board.marks['0-0']).toBeUndefined();
  });

  it('undo restores previous board state', () => {
    const state = applyCellAction(
      { ...createInitialGameState('case-01'), activeTool: 'place', selectedSuspectId: 'ada' },
      '0-0'
    );

    const previous = undo(state);

    expect(previous.board.placements['0-0']).toBeUndefined();
    expect(previous.undoStack).toHaveLength(0);
  });
});
