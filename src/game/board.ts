import type { BoardState, CellId, GameState, Tool } from './types';

const emptyBoard = (): BoardState => ({
  placements: {},
  marks: {}
});

const cloneBoard = (board: BoardState): BoardState => ({
  placements: { ...board.placements },
  marks: { ...board.marks }
});

export function createInitialGameState(caseId: string): GameState {
  return {
    caseId,
    activeTool: 'place',
    board: emptyBoard(),
    undoStack: []
  };
}

export function setTool(state: GameState, activeTool: Tool): GameState {
  return { ...state, activeTool };
}

export function selectSuspect(state: GameState, selectedSuspectId: string): GameState {
  return { ...state, selectedSuspectId, activeTool: 'place' };
}

export function applyCellAction(state: GameState, cellId: CellId): GameState {
  const board = cloneBoard(state.board);

  if (state.activeTool === 'place') {
    if (!state.selectedSuspectId) return state;
    board.placements[cellId] = state.selectedSuspectId;
    delete board.marks[cellId];
  }

  if (state.activeTool === 'x') {
    delete board.placements[cellId];
    board.marks[cellId] = true;
  }

  if (state.activeTool === 'erase') {
    delete board.placements[cellId];
    delete board.marks[cellId];
  }

  return {
    ...state,
    board,
    undoStack: [...state.undoStack, cloneBoard(state.board)]
  };
}

export function undo(state: GameState): GameState {
  const previous = state.undoStack[state.undoStack.length - 1];
  if (!previous) return state;

  return {
    ...state,
    board: previous,
    undoStack: state.undoStack.slice(0, -1)
  };
}
