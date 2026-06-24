import { beforeEach, describe, expect, it } from 'vitest';
import { createInitialGameState } from '../../src/game/board';
import { loadProgress, saveProgress } from '../../src/game/storage';

describe('progress storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns empty progress when nothing is saved', () => {
    expect(loadProgress()).toEqual({ cases: {} });
  });

  it('saves and loads case state', () => {
    const state = {
      ...createInitialGameState('case-01'),
      selectedSuspectId: 'ada',
      board: { placements: { '0-0': 'ada' }, marks: { '0-1': true } }
    };

    saveProgress({ cases: { 'case-01': { state, completed: true } } });

    expect(loadProgress().cases['case-01']?.completed).toBe(true);
    expect(loadProgress().cases['case-01']?.state.board.placements['0-0']).toBe('ada');
  });

  it('recovers from invalid stored JSON', () => {
    localStorage.setItem('murdoku-mobile-progress', '{bad json');

    expect(loadProgress()).toEqual({ cases: {} });
  });

  it('ignores legacy progress from the previous case layout', () => {
    localStorage.setItem(
      'murdoku-mobile-progress',
      JSON.stringify({ cases: { 'case-01': { state: createInitialGameState('case-01'), completed: true } } })
    );

    expect(loadProgress()).toEqual({ cases: {} });
  });
});
