import type { BoardState, CaseDefinition, CellId, GameState, SuspectId, Tool } from './types';

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
    if (board.placements[cellId]) {
      delete board.placements[cellId];
      return {
        ...state,
        board,
        undoStack: [...state.undoStack, cloneBoard(state.board)]
      };
    }
    if (!state.selectedSuspectId) return state;
    for (const [placedCellId, suspectId] of Object.entries(board.placements)) {
      if (suspectId === state.selectedSuspectId) {
        delete board.placements[placedCellId as CellId];
      }
    }
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

export function moveSuspect(state: GameState, suspectId: SuspectId, targetCellId: CellId): GameState {
  const board = cloneBoard(state.board);

  for (const [placedCellId, placedSuspectId] of Object.entries(board.placements)) {
    if (placedSuspectId === suspectId) {
      delete board.placements[placedCellId as CellId];
    }
  }

  board.placements[targetCellId] = suspectId;
  delete board.marks[targetCellId];

  return {
    ...state,
    board,
    undoStack: [...state.undoStack, cloneBoard(state.board)]
  };
}

export function applyHint(caseDef: CaseDefinition, state: GameState): GameState {
  if (!state.selectedSuspectId) return state;
  const placement = caseDef.solution.find((candidate) => candidate.suspectId === state.selectedSuspectId);
  return placement ? moveSuspect(state, state.selectedSuspectId, placement.cellId) : state;
}

export function applyAnswer(caseDef: CaseDefinition, state: GameState): GameState {
  const placements = Object.fromEntries(
    caseDef.solution.map((placement) => [placement.cellId, placement.suspectId])
  ) as BoardState['placements'];

  return {
    ...state,
    board: {
      placements,
      marks: {}
    },
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
