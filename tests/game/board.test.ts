import { describe, expect, it } from 'vitest';
import { applyCellAction, createInitialGameState, undo } from '../../src/game/board';

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
