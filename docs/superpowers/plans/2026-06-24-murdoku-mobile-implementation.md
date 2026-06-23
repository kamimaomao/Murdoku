# Murdoku Mobile Portrait Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first portrait React/Vite version of Murdoku with 10 playable manually observed reference cases, touch-first solving, local progress, and validation.

**Architecture:** Keep game rules and serializable board state outside React. React owns rendering, touch interaction, sheets, and routing-like screen state. Case data lives in structured local files and is validated by tests/scripts before UI work is considered complete.

**Tech Stack:** React, Vite, TypeScript, Vitest, Testing Library, CSS modules or plain CSS, localStorage, Playwright only for browser smoke tests.

---

## Reference Inputs

- Approved design spec: `docs/superpowers/specs/2026-06-24-murdoku-mobile-design.md`
- Reference game to observe manually: `https://murdoku.com/play/`
- Confirmed layout direction: A, board-first mobile portrait with bottom toolbar
- First release scope: 10 cases

## File Structure

- Create `package.json`: scripts and dependencies.
- Create `index.html`: Vite root.
- Create `src/main.tsx`: React entrypoint.
- Create `src/App.tsx`: screen composition only.
- Create `src/styles/tokens.css`: colors, spacing, touch target tokens.
- Create `src/styles/global.css`: reset, viewport sizing, base typography.
- Create `src/game/types.ts`: board, case, cell, suspect, mark, validation types.
- Create `src/game/board.ts`: board reducer helpers and undo stack helpers.
- Create `src/game/validation.ts`: row/column uniqueness and solution validation.
- Create `src/game/storage.ts`: localStorage load/save helpers.
- Create `src/data/cases/index.ts`: exports all 10 case definitions.
- Create `src/data/cases/case-01.ts` through `src/data/cases/case-10.ts`: manually observed case data.
- Create `src/data/cases/validateCases.ts`: data integrity checks.
- Create `src/components/CaseList.tsx`: case selection screen.
- Create `src/components/GameScreen.tsx`: mobile game screen composition.
- Create `src/components/Board.tsx`: grid and cell rendering.
- Create `src/components/SuspectRail.tsx`: horizontal suspect selection.
- Create `src/components/Toolbar.tsx`: place, X mark, erase, undo, clues controls.
- Create `src/components/BottomSheet.tsx`: reusable mobile sheet.
- Create `src/components/ClueSheet.tsx`: case notes and suspect clues.
- Create `src/components/SubmitSheet.tsx`: validation and win feedback.
- Create `src/components/SettingsSheet.tsx`: reset and return controls.
- Create `src/assets/README.md`: rules for recreated/local art assets.
- Create `tests/game/board.test.ts`: reducer and undo tests.
- Create `tests/game/validation.test.ts`: validation tests.
- Create `tests/game/storage.test.ts`: persistence tests.
- Create `tests/data/cases.test.ts`: data integrity tests.
- Create `tests/ui/app.test.tsx`: basic UI behavior tests.
- Create `tests/smoke/mobile.spec.ts`: mobile browser smoke test.

## Task 1: Scaffold React/Vite/TypeScript App

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`

- [ ] **Step 1: Initialize Vite React TypeScript files**

Run:

```bash
npm create vite@latest . -- --template react-ts
```

Expected: Vite writes `package.json`, `index.html`, `src/`, and TypeScript config files.

- [ ] **Step 2: Install test and browser tooling**

Run:

```bash
npm install
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom playwright
```

Expected: dependencies install without errors and `package-lock.json` is created.

- [ ] **Step 3: Replace scripts in `package.json`**

Use these scripts:

```json
{
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "build": "tsc -b && vite build",
    "preview": "vite preview --host 127.0.0.1",
    "test": "vitest run",
    "test:watch": "vitest",
    "smoke": "playwright test tests/smoke/mobile.spec.ts"
  }
}
```

- [ ] **Step 4: Configure Vitest in `vite.config.ts`**

Use this structure:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    globals: true,
  },
});
```

- [ ] **Step 5: Create `tests/setup.ts`**

```ts
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 6: Add base styles**

`src/styles/tokens.css`:

```css
:root {
  --bg: #0e0b13;
  --panel: #17111f;
  --paper: #efe3c2;
  --paper-ink: #271a21;
  --text: #f8f0dc;
  --muted: #bcaec8;
  --accent: #ffd54a;
  --danger: #ff6b6b;
  --valid: #78d7b3;
  --border: rgba(255, 255, 255, 0.14);
  --touch: 44px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
}
```

`src/styles/global.css`:

```css
@import './tokens.css';

* {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
  margin: 0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

button {
  min-height: var(--touch);
  font: inherit;
}
```

- [ ] **Step 7: Wire `src/main.tsx`**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- [ ] **Step 8: Create a minimal `src/App.tsx`**

```tsx
export default function App() {
  return (
    <main aria-label="Murdoku mobile app">
      <h1>Murdoku</h1>
    </main>
  );
}
```

- [ ] **Step 9: Verify scaffold**

Run:

```bash
npm run build
npm test
```

Expected: build succeeds; Vitest reports no tests or passes setup.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json index.html tsconfig.json tsconfig.node.json vite.config.ts src tests
git commit -m "chore: scaffold mobile app"
```

## Task 2: Define Domain Types And Reference Observation Contract

**Files:**
- Create: `src/game/types.ts`
- Create: `docs/reference/case-observation-template.md`
- Create: `src/assets/README.md`

- [ ] **Step 1: Create `src/game/types.ts`**

```ts
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
  | { type: 'duplicate-row'; row: number; suspectId: SuspectId; message: string }
  | { type: 'duplicate-column'; column: number; suspectId: SuspectId; message: string }
  | { type: 'wrong-placement'; suspectId: SuspectId; message: string };

export interface ValidationResult {
  solved: boolean;
  issues: ValidationIssue[];
}
```

- [ ] **Step 2: Create observation template**

`docs/reference/case-observation-template.md`:

```md
# Case Observation Template

Use this file format while manually observing `https://murdoku.com/play/`.
Do not paste bundled code or imported original assets.

## Case N

- Reference order:
- Reference title:
- Difficulty:
- Grid size:
- Intro/case note:
- Victim:
- Murderer from solved reference:

### Suspects

| id | reference name | portrait description | accent color | clues |
| --- | --- | --- | --- | --- |
| suspect-1 |  |  |  |  |

### Grid

| cell id | row | column | room/object visual description | blocked |
| --- | --- | --- | --- | --- |
| 0-0 | 0 | 0 |  | false |

### Solution

| suspect id | cell id |
| --- | --- |
| suspect-1 |  |

### Mobile Art Notes

- Board background:
- Important objects:
- Portrait treatment:
- Any mobile-specific simplification:
```

- [ ] **Step 3: Create asset policy**

`src/assets/README.md`:

```md
# Local Asset Policy

Assets in this folder must be recreated locally from manual observation or generated/redrawn for this app.
Do not copy files from the reference site's network bundles.

Use stable keys that match `portraitKey` and board object metadata in case data.
```

- [ ] **Step 4: Verify types compile**

Run:

```bash
npm run build
```

Expected: TypeScript build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/game/types.ts docs/reference/case-observation-template.md src/assets/README.md
git commit -m "feat: define game domain types"
```

## Task 3: Implement Board State And Undo With TDD

**Files:**
- Create: `src/game/board.ts`
- Create: `tests/game/board.test.ts`

- [ ] **Step 1: Write failing board tests**

```ts
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
      selectedSuspectId: 'ada',
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
      '0-0',
    );

    const previous = undo(state);

    expect(previous.board.placements['0-0']).toBeUndefined();
    expect(previous.undoStack).toHaveLength(0);
  });
});
```

- [ ] **Step 2: Run tests to verify failure**

Run:

```bash
npm test -- tests/game/board.test.ts
```

Expected: fails because `src/game/board.ts` does not exist.

- [ ] **Step 3: Implement `src/game/board.ts`**

```ts
import type { BoardState, CellId, GameState, Tool } from './types';

const emptyBoard = (): BoardState => ({
  placements: {},
  marks: {},
});

const cloneBoard = (board: BoardState): BoardState => ({
  placements: { ...board.placements },
  marks: { ...board.marks },
});

export function createInitialGameState(caseId: string): GameState {
  return {
    caseId,
    activeTool: 'place',
    board: emptyBoard(),
    undoStack: [],
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
    undoStack: [...state.undoStack, cloneBoard(state.board)],
  };
}

export function undo(state: GameState): GameState {
  const previous = state.undoStack[state.undoStack.length - 1];
  if (!previous) return state;

  return {
    ...state,
    board: previous,
    undoStack: state.undoStack.slice(0, -1),
  };
}
```

- [ ] **Step 4: Run tests to verify pass**

Run:

```bash
npm test -- tests/game/board.test.ts
```

Expected: all board tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/game/board.ts tests/game/board.test.ts
git commit -m "feat: add board state reducer"
```

## Task 4: Implement Validation With TDD

**Files:**
- Create: `src/game/validation.ts`
- Create: `tests/game/validation.test.ts`

- [ ] **Step 1: Write failing validation tests**

```ts
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
    { id: '1-1', row: 1, column: 1 },
  ],
  suspects: [
    { id: 'ada', name: 'Ada', accent: '#ffd54a', portraitKey: 'ada', clues: ['Ada clue'] },
    { id: 'victim', name: 'Victim', accent: '#ff6b6b', portraitKey: 'victim', clues: ['Victim clue'] },
  ],
  solution: [
    { suspectId: 'ada', cellId: '0-0' },
    { suspectId: 'victim', cellId: '1-1' },
  ],
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
      marks: {},
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-row')).toBe(true);
  });

  it('reports duplicate suspect in the same column', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '1-0': 'ada', '1-1': 'victim' },
      marks: {},
    });

    expect(result.solved).toBe(false);
    expect(result.issues.some((issue) => issue.type === 'duplicate-column')).toBe(true);
  });

  it('solves when placements match solution', () => {
    const result = validateBoard(testCase, {
      placements: { '0-0': 'ada', '1-1': 'victim' },
      marks: {},
    });

    expect(result.solved).toBe(true);
    expect(result.issues).toHaveLength(0);
  });

  it('reports wrong placement without revealing the correct cell', () => {
    const result = validateBoard(testCase, {
      placements: { '0-1': 'ada', '1-1': 'victim' },
      marks: {},
    });

    expect(result.solved).toBe(false);
    expect(result.issues[0]).toMatchObject({ type: 'wrong-placement', suspectId: 'ada' });
    expect(result.issues[0]?.message).not.toContain('0-0');
  });
});
```

- [ ] **Step 2: Run tests to verify failure**

Run:

```bash
npm test -- tests/game/validation.test.ts
```

Expected: fails because `src/game/validation.ts` does not exist.

- [ ] **Step 3: Implement `src/game/validation.ts`**

```ts
import type { BoardState, CaseDefinition, CellId, SuspectId, ValidationIssue, ValidationResult } from './types';

const solutionMap = (caseDef: CaseDefinition): Record<SuspectId, CellId> =>
  Object.fromEntries(caseDef.solution.map((placement) => [placement.suspectId, placement.cellId]));

const cellMap = (caseDef: CaseDefinition) =>
  Object.fromEntries(caseDef.cells.map((cell) => [cell.id, cell]));

export function validateBoard(caseDef: CaseDefinition, board: BoardState): ValidationResult {
  const issues: ValidationIssue[] = [];
  const cellsById = cellMap(caseDef);
  const requiredSuspects = caseDef.suspects.map((suspect) => suspect.id);
  const placedEntries = Object.entries(board.placements).filter((entry): entry is [CellId, SuspectId] => Boolean(entry[1]));

  for (const suspectId of requiredSuspects) {
    if (!placedEntries.some(([, placedSuspectId]) => placedSuspectId === suspectId)) {
      issues.push({ type: 'incomplete', message: 'Every suspect must be placed before submitting.' });
      return { solved: false, issues };
    }
  }

  for (const suspectId of requiredSuspects) {
    const suspectCells = placedEntries
      .filter(([, placedSuspectId]) => placedSuspectId === suspectId)
      .map(([cellId]) => cellsById[cellId]);

    const rows = new Set<number>();
    const columns = new Set<number>();

    for (const cell of suspectCells) {
      if (!cell) continue;
      if (rows.has(cell.row)) {
        issues.push({
          type: 'duplicate-row',
          row: cell.row,
          suspectId,
          message: 'A suspect appears more than once in the same row.',
        });
      }
      if (columns.has(cell.column)) {
        issues.push({
          type: 'duplicate-column',
          column: cell.column,
          suspectId,
          message: 'A suspect appears more than once in the same column.',
        });
      }
      rows.add(cell.row);
      columns.add(cell.column);
    }
  }

  if (issues.length > 0) return { solved: false, issues };

  const expected = solutionMap(caseDef);
  for (const suspectId of requiredSuspects) {
    const expectedCell = expected[suspectId];
    const actualCell = placedEntries.find(([, placedSuspectId]) => placedSuspectId === suspectId)?.[0];
    if (actualCell !== expectedCell) {
      issues.push({
        type: 'wrong-placement',
        suspectId,
        message: 'At least one suspect conflicts with the case evidence.',
      });
      break;
    }
  }

  return { solved: issues.length === 0, issues };
}
```

- [ ] **Step 4: Run tests to verify pass**

Run:

```bash
npm test -- tests/game/validation.test.ts
```

Expected: all validation tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/game/validation.ts tests/game/validation.test.ts
git commit -m "feat: add board validation"
```

## Task 5: Implement Persistence With TDD

**Files:**
- Create: `src/game/storage.ts`
- Create: `tests/game/storage.test.ts`

- [ ] **Step 1: Write failing storage tests**

```ts
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
      board: { placements: { '0-0': 'ada' }, marks: { '0-1': true } },
    };

    saveProgress({ cases: { 'case-01': { state, completed: true } } });

    expect(loadProgress().cases['case-01']?.completed).toBe(true);
    expect(loadProgress().cases['case-01']?.state.board.placements['0-0']).toBe('ada');
  });

  it('recovers from invalid stored JSON', () => {
    localStorage.setItem('murdoku-mobile-progress', '{bad json');

    expect(loadProgress()).toEqual({ cases: {} });
  });
});
```

- [ ] **Step 2: Run tests to verify failure**

Run:

```bash
npm test -- tests/game/storage.test.ts
```

Expected: fails because `src/game/storage.ts` does not exist.

- [ ] **Step 3: Implement `src/game/storage.ts`**

```ts
import type { GameState } from './types';

const STORAGE_KEY = 'murdoku-mobile-progress';

export interface CaseProgress {
  state: GameState;
  completed: boolean;
}

export interface ProgressState {
  cases: Record<string, CaseProgress>;
}

const emptyProgress = (): ProgressState => ({ cases: {} });

export function loadProgress(): ProgressState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyProgress();

  try {
    const parsed = JSON.parse(raw) as ProgressState;
    if (!parsed || typeof parsed !== 'object' || !parsed.cases) return emptyProgress();
    return parsed;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
```

- [ ] **Step 4: Run tests to verify pass**

Run:

```bash
npm test -- tests/game/storage.test.ts
```

Expected: all storage tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/game/storage.ts tests/game/storage.test.ts
git commit -m "feat: persist local progress"
```

## Task 6: Observe And Encode The First 10 Cases

**Files:**
- Create: `docs/reference/observed-cases.md`
- Create: `src/data/cases/case-01.ts` through `src/data/cases/case-10.ts`
- Create: `src/data/cases/grid.ts`
- Create: `src/data/cases/index.ts`
- Create: `src/data/cases/validateCases.ts`
- Create: `tests/data/cases.test.ts`

- [ ] **Step 1: Manually observe the online case list**

Open `https://murdoku.com/play/` in a mobile-size browser viewport. Record the first 10 accessible cases in `docs/reference/observed-cases.md` using the template from Task 2. The recorded document must include title, difficulty, grid size, suspect names, clue text summaries, grid object descriptions, and solved placements.

Expected: `docs/reference/observed-cases.md` contains 10 sections named `Case 1` through `Case 10`.

- [ ] **Step 2: Create case data index**

`src/data/cases/grid.ts`:

```ts
import type { CellDefinition } from '../../game/types';

export function createGrid(rows: number, columns: number, decorate?: (cell: CellDefinition) => Partial<CellDefinition>): CellDefinition[] {
  return Array.from({ length: rows * columns }, (_, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const base: CellDefinition = { id: `${row}-${column}`, row, column };
    return { ...base, ...(decorate ? decorate(base) : {}) };
  });
}
```

`src/data/cases/index.ts`:

```ts
import { case01 } from './case-01';
import { case02 } from './case-02';
import { case03 } from './case-03';
import { case04 } from './case-04';
import { case05 } from './case-05';
import { case06 } from './case-06';
import { case07 } from './case-07';
import { case08 } from './case-08';
import { case09 } from './case-09';
import { case10 } from './case-10';
import type { CaseDefinition } from '../../game/types';

export const cases: CaseDefinition[] = [
  case01,
  case02,
  case03,
  case04,
  case05,
  case06,
  case07,
  case08,
  case09,
  case10,
];

export const casesById = Object.fromEntries(cases.map((caseDef) => [caseDef.id, caseDef]));
```

- [ ] **Step 3: Create `src/data/cases/validateCases.ts`**

```ts
import type { CaseDefinition, CellId } from '../../game/types';

export function validateCaseData(caseDef: CaseDefinition): string[] {
  const errors: string[] = [];
  const cellIds = new Set(caseDef.cells.map((cell) => cell.id));
  const suspectIds = new Set(caseDef.suspects.map((suspect) => suspect.id));

  if (caseDef.cells.length !== caseDef.size.rows * caseDef.size.columns) {
    errors.push(`${caseDef.id}: cell count does not match grid size`);
  }

  if (!suspectIds.has(caseDef.victimId)) {
    errors.push(`${caseDef.id}: victimId is not a suspect`);
  }

  if (!suspectIds.has(caseDef.murdererId)) {
    errors.push(`${caseDef.id}: murdererId is not a suspect`);
  }

  for (const placement of caseDef.solution) {
    if (!suspectIds.has(placement.suspectId)) {
      errors.push(`${caseDef.id}: unknown solution suspect ${placement.suspectId}`);
    }
    if (!cellIds.has(placement.cellId as CellId)) {
      errors.push(`${caseDef.id}: unknown solution cell ${placement.cellId}`);
    }
  }

  for (const suspect of caseDef.suspects) {
    if (suspect.clues.length === 0) {
      errors.push(`${caseDef.id}: suspect ${suspect.id} has no clues`);
    }
  }

  return errors;
}
```

- [ ] **Step 4: Write failing case data tests**

```ts
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
        marks: {},
      };

      expect(validateBoard(caseDef, board).solved).toBe(true);
    }
  });
});
```

- [ ] **Step 5: Create each case file from observation notes**

Each file must export one complete `CaseDefinition` using the exact values recorded in `docs/reference/observed-cases.md`. Add `room` and `object` metadata to cells that have visible room or object meaning in the reference. The file is incomplete if any of these are true:

```text
- title is a generic label such as "Case 1"
- intro is empty
- any suspect has an empty clue list
- any suspect name is invented instead of recorded from the reference
- victimId or murdererId does not match a recorded suspect id
- solution length does not equal suspect count
- any solution cell is not present in cells
```

Use this import pattern at the top of every case file:

```ts
import type { CaseDefinition } from '../../game/types';
import { createGrid } from './grid';
```

Use this complete cell helper expression when a 6 x 6 case has no per-cell decoration:

```ts
cells: createGrid(6, 6),
```

Use this decorated cell helper expression when the reference contains room/object information that should be visible on mobile:

```ts
cells: createGrid(6, 6, (cell) => {
  const decorations: Record<string, Partial<typeof cell>> = {
    '0-0': { room: 'entry', object: 'umbrella stand' },
    '0-1': { room: 'entry' },
    '1-4': { room: 'study', object: 'desk' },
  };
  return decorations[cell.id] ?? {};
}),
```

The decoration map must be rewritten from the recorded notes for the specific case before committing; `tests/data/cases.test.ts` must pass after all 10 case files are written.

- [ ] **Step 6: Run case data tests**

Run:

```bash
npm test -- tests/data/cases.test.ts
```

Expected: all case data tests pass and there are exactly 10 cases.

- [ ] **Step 7: Commit**

```bash
git add docs/reference/observed-cases.md src/data/cases tests/data/cases.test.ts
git commit -m "feat: add first ten case data files"
```

## Task 7: Build Case List And Screen State

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/CaseList.tsx`
- Create: `tests/ui/app.test.tsx`

- [ ] **Step 1: Write failing UI tests**

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../../src/App';

describe('app shell', () => {
  it('shows the case list first', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Murdoku' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /start case/i })).toHaveLength(10);
  });

  it('opens a selected case', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getAllByRole('button', { name: /start case/i })[0]);

    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Install user event helper**

Run:

```bash
npm install -D @testing-library/user-event
```

- [ ] **Step 3: Run tests to verify failure**

Run:

```bash
npm test -- tests/ui/app.test.tsx
```

Expected: fails because `CaseList` and game screen are not implemented.

- [ ] **Step 4: Implement `src/components/CaseList.tsx`**

```tsx
import type { CaseDefinition } from '../game/types';

interface CaseListProps {
  cases: CaseDefinition[];
  completedCaseIds: Set<string>;
  onSelect: (caseId: string) => void;
}

export function CaseList({ cases, completedCaseIds, onSelect }: CaseListProps) {
  return (
    <section className="case-list" aria-label="Case list">
      <h1>Murdoku</h1>
      <div className="case-list__cards">
        {cases.map((caseDef, index) => (
          <article className="case-card" key={caseDef.id}>
            <span className="case-card__order">Case {index + 1}</span>
            <h2>{caseDef.title}</h2>
            <p>{caseDef.difficulty}</p>
            {completedCaseIds.has(caseDef.id) ? <p>Completed</p> : null}
            <button type="button" onClick={() => onSelect(caseDef.id)}>
              Start case {index + 1}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Modify `src/App.tsx`**

```tsx
import { useMemo, useState } from 'react';
import { cases, casesById } from './data/cases';
import { CaseList } from './components/CaseList';
import { GameScreen } from './components/GameScreen';
import { loadProgress } from './game/storage';

export default function App() {
  const [activeCaseId, setActiveCaseId] = useState<string | undefined>();
  const progress = useMemo(() => loadProgress(), []);
  const completedCaseIds = useMemo(
    () => new Set(Object.entries(progress.cases).filter(([, value]) => value.completed).map(([caseId]) => caseId)),
    [progress],
  );
  const activeCase = activeCaseId ? casesById[activeCaseId] : undefined;

  if (activeCase) {
    return <GameScreen caseDef={activeCase} onBack={() => setActiveCaseId(undefined)} />;
  }

  return <CaseList cases={cases} completedCaseIds={completedCaseIds} onSelect={setActiveCaseId} />;
}
```

- [ ] **Step 6: Temporarily create `src/components/GameScreen.tsx`**

```tsx
import type { CaseDefinition } from '../game/types';

interface GameScreenProps {
  caseDef: CaseDefinition;
  onBack: () => void;
}

export function GameScreen({ caseDef, onBack }: GameScreenProps) {
  return (
    <section aria-label={caseDef.title}>
      <button type="button" onClick={onBack}>Cases</button>
      <h1>{caseDef.title}</h1>
      <button type="button">Submit</button>
    </section>
  );
}
```

- [ ] **Step 7: Run tests**

Run:

```bash
npm test -- tests/ui/app.test.tsx
```

Expected: app shell tests pass.

- [ ] **Step 8: Commit**

```bash
git add src/App.tsx src/components/CaseList.tsx src/components/GameScreen.tsx tests/ui/app.test.tsx package.json package-lock.json
git commit -m "feat: add case list screen"
```

## Task 8: Build Mobile Game Screen Components

**Files:**
- Modify: `src/components/GameScreen.tsx`
- Create: `src/components/Board.tsx`
- Create: `src/components/SuspectRail.tsx`
- Create: `src/components/Toolbar.tsx`
- Modify: `tests/ui/app.test.tsx`

- [ ] **Step 1: Extend UI tests**

Add this test:

```tsx
it('places a suspect, marks X, and undoes the board action', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole('button', { name: /start case/i })[0]);
  await user.click(screen.getAllByRole('button', { name: /select suspect/i })[0]);
  await user.click(screen.getByRole('button', { name: /cell 1 1/i }));

  expect(screen.getByRole('button', { name: /cell 1 1/i })).toHaveTextContent(/.+/);

  await user.click(screen.getByRole('button', { name: /x mark/i }));
  await user.click(screen.getByRole('button', { name: /cell 1 2/i }));

  expect(screen.getByRole('button', { name: /cell 1 2/i })).toHaveTextContent('X');

  await user.click(screen.getByRole('button', { name: /undo/i }));

  expect(screen.getByRole('button', { name: /cell 1 2/i })).not.toHaveTextContent('X');
});
```

- [ ] **Step 2: Run tests to verify failure**

Run:

```bash
npm test -- tests/ui/app.test.tsx
```

Expected: fails because board controls are not implemented.

- [ ] **Step 3: Implement `src/components/Board.tsx`**

```tsx
import type { BoardState, CaseDefinition, CellId } from '../game/types';

interface BoardProps {
  caseDef: CaseDefinition;
  board: BoardState;
  onCellTap: (cellId: CellId) => void;
}

export function Board({ caseDef, board, onCellTap }: BoardProps) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${caseDef.size.columns}, minmax(0, 1fr))` }}
      aria-label="Crime scene grid"
    >
      {caseDef.cells.map((cell) => {
        const placedSuspectId = board.placements[cell.id];
        const suspect = caseDef.suspects.find((item) => item.id === placedSuspectId);
        const label = `Cell ${cell.row + 1} ${cell.column + 1}`;
        return (
          <button
            className="board__cell"
            key={cell.id}
            type="button"
            aria-label={label}
            onClick={() => onCellTap(cell.id)}
          >
            {suspect?.name.slice(0, 2) ?? (board.marks[cell.id] ? 'X' : '')}
          </button>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Implement `src/components/SuspectRail.tsx`**

```tsx
import type { Suspect } from '../game/types';

interface SuspectRailProps {
  suspects: Suspect[];
  selectedSuspectId?: string;
  onSelect: (suspectId: string) => void;
}

export function SuspectRail({ suspects, selectedSuspectId, onSelect }: SuspectRailProps) {
  return (
    <div className="suspect-rail" aria-label="Suspects">
      {suspects.map((suspect) => (
        <button
          className="suspect-card"
          data-selected={suspect.id === selectedSuspectId}
          key={suspect.id}
          type="button"
          aria-label={`Select suspect ${suspect.name}`}
          onClick={() => onSelect(suspect.id)}
        >
          <span className="suspect-card__portrait" style={{ background: suspect.accent }} />
          <span>{suspect.name}</span>
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Implement `src/components/Toolbar.tsx`**

```tsx
import type { Tool } from '../game/types';

interface ToolbarProps {
  activeTool: Tool;
  canUndo: boolean;
  onSetTool: (tool: Tool) => void;
  onUndo: () => void;
  onOpenClues: () => void;
}

export function Toolbar({ activeTool, canUndo, onSetTool, onUndo, onOpenClues }: ToolbarProps) {
  return (
    <nav className="toolbar" aria-label="Puzzle tools">
      <button type="button" data-active={activeTool === 'place'} onClick={() => onSetTool('place')}>
        Place
      </button>
      <button type="button" aria-label="X mark" data-active={activeTool === 'x'} onClick={() => onSetTool('x')}>
        X
      </button>
      <button type="button" data-active={activeTool === 'erase'} onClick={() => onSetTool('erase')}>
        Erase
      </button>
      <button type="button" disabled={!canUndo} onClick={onUndo}>
        Undo
      </button>
      <button type="button" onClick={onOpenClues}>
        Clues
      </button>
    </nav>
  );
}
```

- [ ] **Step 6: Replace `src/components/GameScreen.tsx`**

```tsx
import { useState } from 'react';
import { applyCellAction, createInitialGameState, selectSuspect, setTool, undo } from '../game/board';
import type { CaseDefinition, Tool } from '../game/types';
import { Board } from './Board';
import { SuspectRail } from './SuspectRail';
import { Toolbar } from './Toolbar';

interface GameScreenProps {
  caseDef: CaseDefinition;
  onBack: () => void;
}

export function GameScreen({ caseDef, onBack }: GameScreenProps) {
  const [state, setState] = useState(() => createInitialGameState(caseDef.id));
  const [sheet, setSheet] = useState<'clues' | 'submit' | undefined>();

  return (
    <section className="game-screen" aria-label={caseDef.title}>
      <header className="game-topbar">
        <button type="button" onClick={onBack}>Cases</button>
        <div>
          <h1>{caseDef.title}</h1>
          <p>{caseDef.difficulty}</p>
        </div>
        <button type="button" onClick={() => setSheet('submit')}>Submit</button>
      </header>
      <Board caseDef={caseDef} board={state.board} onCellTap={(cellId) => setState((current) => applyCellAction(current, cellId))} />
      <p className="context-strip">
        {state.selectedSuspectId ? `Selected ${caseDef.suspects.find((item) => item.id === state.selectedSuspectId)?.name}` : 'Select a suspect to place.'}
      </p>
      <SuspectRail
        suspects={caseDef.suspects}
        selectedSuspectId={state.selectedSuspectId}
        onSelect={(suspectId) => setState((current) => selectSuspect(current, suspectId))}
      />
      <Toolbar
        activeTool={state.activeTool}
        canUndo={state.undoStack.length > 0}
        onSetTool={(tool: Tool) => setState((current) => setTool(current, tool))}
        onUndo={() => setState(undo)}
        onOpenClues={() => setSheet('clues')}
      />
      {sheet ? <div role="dialog">{sheet}</div> : null}
    </section>
  );
}
```

- [ ] **Step 7: Add mobile CSS**

Add to `src/styles/global.css`:

```css
.game-screen {
  min-height: 100svh;
  max-width: 430px;
  margin: 0 auto;
  padding: 10px 12px 78px;
}

.game-topbar {
  display: grid;
  grid-template-columns: 64px 1fr 76px;
  gap: 8px;
  align-items: center;
}

.game-topbar h1 {
  margin: 0;
  font-size: 16px;
  text-align: center;
}

.game-topbar p {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 12px;
  text-align: center;
}

.board {
  display: grid;
  aspect-ratio: 1;
  width: min(100%, 390px);
  margin: 12px auto;
  border: 3px solid var(--accent);
  background: #261d2d;
}

.board__cell {
  min-height: 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(135deg, #403249, #1d2b36);
  color: var(--text);
  font-weight: 800;
}

.context-strip {
  margin: 0 0 10px;
  padding: 9px 12px;
  border: 1px solid rgba(255, 213, 74, 0.24);
  border-radius: var(--radius-md);
  background: rgba(255, 213, 74, 0.13);
  color: #ffe8a3;
  text-align: center;
}

.suspect-rail {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 0 10px;
}

.suspect-card {
  min-width: 76px;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  background: var(--paper);
  color: var(--paper-ink);
  font-weight: 800;
}

.suspect-card[data-selected='true'] {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(255, 213, 74, 0.18);
}

.suspect-card__portrait {
  display: block;
  width: 38px;
  height: 38px;
  margin: 4px auto;
  border-radius: 50%;
}

.toolbar {
  position: fixed;
  right: 12px;
  bottom: 12px;
  left: 12px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  max-width: 406px;
  margin: 0 auto;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: rgba(23, 17, 31, 0.96);
}
```

- [ ] **Step 8: Run tests**

Run:

```bash
npm test -- tests/ui/app.test.tsx
npm run build
```

Expected: UI tests and build pass.

- [ ] **Step 9: Commit**

```bash
git add src/components src/styles/global.css tests/ui/app.test.tsx
git commit -m "feat: add mobile puzzle screen"
```

## Task 9: Add Sheets, Submit Flow, And Progress Saving

**Files:**
- Create: `src/components/BottomSheet.tsx`
- Create: `src/components/ClueSheet.tsx`
- Create: `src/components/SubmitSheet.tsx`
- Create: `src/components/SettingsSheet.tsx`
- Modify: `src/components/GameScreen.tsx`
- Modify: `tests/ui/app.test.tsx`

- [ ] **Step 1: Extend UI tests for sheets and submit**

Add:

```tsx
it('opens clues and shows suspect clues', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole('button', { name: /start case/i })[0]);
  await user.click(screen.getByRole('button', { name: /clues/i }));

  expect(screen.getByRole('dialog', { name: /clues/i })).toBeInTheDocument();
});

it('submits incomplete board with feedback', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getAllByRole('button', { name: /start case/i })[0]);
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/every suspect must be placed/i)).toBeInTheDocument();
});
```

- [ ] **Step 2: Implement `src/components/BottomSheet.tsx`**

```tsx
import type { ReactNode } from 'react';

interface BottomSheetProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function BottomSheet({ title, onClose, children }: BottomSheetProps) {
  return (
    <div className="sheet-backdrop">
      <section className="bottom-sheet" role="dialog" aria-label={title}>
        <header className="bottom-sheet__header">
          <h2>{title}</h2>
          <button type="button" onClick={onClose}>Close</button>
        </header>
        {children}
      </section>
    </div>
  );
}
```

- [ ] **Step 3: Implement `src/components/ClueSheet.tsx`**

```tsx
import type { CaseDefinition } from '../game/types';
import { BottomSheet } from './BottomSheet';

interface ClueSheetProps {
  caseDef: CaseDefinition;
  onClose: () => void;
}

export function ClueSheet({ caseDef, onClose }: ClueSheetProps) {
  return (
    <BottomSheet title="Clues" onClose={onClose}>
      <p>{caseDef.intro}</p>
      {caseDef.suspects.map((suspect) => (
        <article className="clue-card" key={suspect.id}>
          <h3>{suspect.name}</h3>
          <ul>
            {suspect.clues.map((clue) => (
              <li key={clue}>{clue}</li>
            ))}
          </ul>
        </article>
      ))}
    </BottomSheet>
  );
}
```

- [ ] **Step 4: Implement `src/components/SubmitSheet.tsx`**

```tsx
import type { BoardState, CaseDefinition, ValidationResult } from '../game/types';
import { validateBoard } from '../game/validation';
import { BottomSheet } from './BottomSheet';

interface SubmitSheetProps {
  caseDef: CaseDefinition;
  board: BoardState;
  onSolved: () => void;
  onClose: () => void;
}

export function SubmitSheet({ caseDef, board, onSolved, onClose }: SubmitSheetProps) {
  const result: ValidationResult = validateBoard(caseDef, board);

  return (
    <BottomSheet title="Submit" onClose={onClose}>
      {result.solved ? (
        <div>
          <h3>Case solved</h3>
          <p>You found the murderer.</p>
          <button type="button" onClick={onSolved}>Save completion</button>
        </div>
      ) : (
        <div>
          <h3>Not yet</h3>
          <ul>
            {result.issues.map((issue, index) => (
              <li key={`${issue.type}-${index}`}>{issue.message}</li>
            ))}
          </ul>
        </div>
      )}
    </BottomSheet>
  );
}
```

- [ ] **Step 5: Implement `src/components/SettingsSheet.tsx`**

```tsx
import { BottomSheet } from './BottomSheet';

interface SettingsSheetProps {
  onReset: () => void;
  onBackToCases: () => void;
  onClose: () => void;
}

export function SettingsSheet({ onReset, onBackToCases, onClose }: SettingsSheetProps) {
  return (
    <BottomSheet title="Settings" onClose={onClose}>
      <button type="button" onClick={onReset}>Reset case</button>
      <button type="button" onClick={onBackToCases}>Back to cases</button>
    </BottomSheet>
  );
}
```

- [ ] **Step 6: Wire sheets and progress in `GameScreen.tsx`**

Update the component so `sheet` can be `'clues' | 'submit' | 'settings'`, the top bar includes a Settings button, and `SubmitSheet` calls `saveProgress` with completed state. Keep existing board/rail/toolbar logic.

Use this saving helper in the component:

```tsx
const markSolved = () => {
  const progress = loadProgress();
  saveProgress({
    cases: {
      ...progress.cases,
      [caseDef.id]: { state, completed: true },
    },
  });
  setSheet(undefined);
};
```

- [ ] **Step 7: Add sheet CSS**

Add to `src/styles/global.css`:

```css
.sheet-backdrop {
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.36);
}

.bottom-sheet {
  width: 100%;
  max-height: 72svh;
  overflow: auto;
  padding: 16px;
  border-radius: 24px 24px 0 0;
  background: var(--paper);
  color: var(--paper-ink);
}

.bottom-sheet__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.clue-card {
  padding: 12px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.55);
}
```

- [ ] **Step 8: Run tests**

Run:

```bash
npm test -- tests/ui/app.test.tsx
npm run build
```

Expected: UI tests and build pass.

- [ ] **Step 9: Commit**

```bash
git add src/components src/styles/global.css tests/ui/app.test.tsx
git commit -m "feat: add clue and submit sheets"
```

## Task 10: Recreate Mobile Visual Fidelity And Smoke Test

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/data/cases/*.ts`
- Create: `tests/smoke/mobile.spec.ts`
- Modify: `package.json`

- [ ] **Step 1: Add Playwright smoke test**

`tests/smoke/mobile.spec.ts`:

```ts
import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 }, isMobile: true });

test('mobile portrait core flow', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await expect(page.getByRole('heading', { name: 'Murdoku' })).toBeVisible();

  await page.getByRole('button', { name: /start case 1/i }).click();
  await expect(page.getByRole('button', { name: /submit/i })).toBeVisible();

  await page.getByRole('button', { name: /select suspect/i }).first().click();
  await page.getByRole('button', { name: /cell 1 1/i }).click();
  await page.getByRole('button', { name: /x mark/i }).click();
  await page.getByRole('button', { name: /cell 1 2/i }).click();
  await page.getByRole('button', { name: /undo/i }).click();
  await page.getByRole('button', { name: /clues/i }).click();
  await expect(page.getByRole('dialog', { name: /clues/i })).toBeVisible();
});
```

- [ ] **Step 2: Add Playwright config if missing**

`playwright.config.ts`:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'npm run dev',
    url: 'http://127.0.0.1:5173/',
    reuseExistingServer: true,
  },
});
```

- [ ] **Step 3: Tighten visual fidelity**

Compare against the online reference by manual observation and update CSS/case metadata until these checks pass:

```text
- dark mystery shell resembles the reference screen language
- paper clue cards resemble the reference material treatment
- suspect cards have bright portrait blocks and strong selected states
- board room/object descriptions from case data are visible enough on 390 x 844
- bottom toolbar remains fixed and reachable
- no button text clips at 390 x 844
```

Implementation should stay CSS/React-based unless a specific local image is needed for a portrait or board object.

- [ ] **Step 4: Run full verification**

Run:

```bash
npm test
npm run build
npm run smoke
```

Expected: all unit/UI/data tests pass, production build succeeds, and Playwright smoke test passes at 390 x 844.

- [ ] **Step 5: Browser visual check**

Start the dev server:

```bash
npm run dev
```

Open `http://127.0.0.1:5173/` in a 390 x 844 browser viewport and manually check:

```text
- case list is usable
- first case opens
- board has no horizontal overflow
- suspect rail scrolls
- bottom toolbar is reachable
- clues sheet opens and closes
- submit feedback is readable
```

- [ ] **Step 6: Commit**

```bash
git add src tests playwright.config.ts package.json package-lock.json
git commit -m "test: add mobile smoke verification"
```

## Final Verification

- [ ] Run `npm test`.
- [ ] Run `npm run build`.
- [ ] Run `npm run smoke`.
- [ ] Start `npm run dev`.
- [ ] Verify `http://127.0.0.1:5173/` at 390 x 844.
- [ ] Confirm `git status --short` is clean except ignored `.superpowers/`.

## Spec Coverage Self-Review

- 10 playable cases: Task 6 records and encodes exactly 10 cases, with data tests.
- Mobile A layout: Tasks 8 and 10 implement board-first layout and fixed bottom toolbar.
- Touch interactions: Tasks 3, 8, and 9 implement select, place, X mark, erase, undo, clues, and submit.
- Validation: Task 4 implements row/column and solution validation; Task 6 verifies each solution solves.
- Local progress: Task 5 implements storage; Task 9 wires solved progress.
- Visual fidelity: Task 10 explicitly compares against the observed reference and tightens CSS/art.
- Verification: Tasks 1, 3, 4, 5, 6, 7, 8, 9, and 10 each include tests/build/smoke checks.
