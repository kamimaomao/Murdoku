export type Difficulty = 'very-easy' | 'easy' | 'medium' | 'hard' | 'expert';

export type Tool = 'place' | 'x' | 'erase';

export type CellId = `${number}-${number}`;
export type SuspectId = string;

export interface GridSize {
  rows: number;
  columns: number;
}

export interface CellDefinition {
  id: CellId;
  row: number;
  column: number;
  room?: string;
  object?: string;
  blocked?: boolean;
}

export interface Suspect {
  id: SuspectId;
  name: string;
  accent: string;
  portraitKey: string;
  clues: string[];
}

export interface Placement {
  suspectId: SuspectId;
  cellId: CellId;
}

export interface CaseDefinition {
  id: string;
  title: string;
  difficulty: Difficulty;
  size: GridSize;
  intro: string;
  victimId: SuspectId;
  murdererId: SuspectId;
  cells: CellDefinition[];
  suspects: Suspect[];
  solution: Placement[];
}

export interface BoardState {
  placements: Record<CellId, SuspectId | undefined>;
  marks: Record<CellId, boolean | undefined>;
}

export interface GameState {
  caseId: string;
  selectedSuspectId?: SuspectId;
  activeTool: Tool;
  board: BoardState;
  undoStack: BoardState[];
}

export type ValidationIssue =
  | { type: 'incomplete'; message: string }
  | { type: 'duplicate-suspect'; suspectId: SuspectId; message: string }
  | { type: 'duplicate-row'; row: number; suspectId: SuspectId; message: string }
  | { type: 'duplicate-column'; column: number; suspectId: SuspectId; message: string }
  | { type: 'wrong-placement'; suspectId: SuspectId; message: string };

export interface ValidationResult {
  solved: boolean;
  issues: ValidationIssue[];
}
