import { type CSSProperties, useMemo, useState } from 'react';
import { murdokuLogo, objectAssetFor } from './assets/murdokuAssets';
import { cases, casesById } from './data/cases';
import { applyCellAction, createInitialGameState, selectSuspect, setTool, undo } from './game/board';
import { loadProgress, saveProgress, type ProgressState } from './game/storage';
import type { BoardState, CaseDefinition, CellDefinition, GameState, Suspect, Tool, ValidationResult } from './game/types';
import { validateBoard } from './game/validation';

const difficultyLabels: Record<CaseDefinition['difficulty'], string> = {
  'very-easy': 'Very easy',
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
  expert: 'Expert'
};

function boardKey(board: BoardState): string {
  return JSON.stringify(board);
}

function suspectForCell(caseDef: CaseDefinition, board: BoardState, cellId: CellDefinition['id']): Suspect | undefined {
  const suspectId = board.placements[cellId];
  return suspectId ? caseDef.suspects.find((suspect) => suspect.id === suspectId) : undefined;
}

function cellLabel(cell: CellDefinition, suspect: Suspect | undefined, marked: boolean | undefined): string {
  const parts = [`Row ${cell.row + 1} column ${cell.column + 1}`];
  if (suspect) parts.push(suspect.name);
  if (marked) parts.push('marked');
  return parts.join(', ');
}

function toolLabel(tool: Tool): string {
  if (tool === 'x') return 'Mark unavailable';
  if (tool === 'erase') return 'Erase';
  return 'Place';
}

function firstSavedGame(progress: ProgressState): GameState {
  return progress.cases[cases[0].id]?.state ?? createInitialGameState(cases[0].id);
}

export default function App() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());
  const [game, setGame] = useState<GameState>(() => firstSavedGame(loadProgress()));
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const currentCase = casesById[game.caseId] ?? cases[0];
  const selectedSuspect = currentCase.suspects.find((suspect) => suspect.id === game.selectedSuspectId);
  const completed = Boolean(progress.cases[currentCase.id]?.completed);
  const placedCount = useMemo(
    () => Object.values(game.board.placements).filter(Boolean).length,
    [game.board.placements]
  );

  function persist(nextGame: GameState, completedCase?: boolean) {
    setProgress((previous) => {
      const next = {
        cases: {
          ...previous.cases,
          [nextGame.caseId]: {
            state: nextGame,
            completed: completedCase ?? previous.cases[nextGame.caseId]?.completed ?? false
          }
        }
      };
      saveProgress(next);
      return next;
    });
  }

  function updateGame(nextGame: GameState, clearResult = true) {
    const boardChanged = boardKey(nextGame.board) !== boardKey(game.board);
    setGame(nextGame);
    persist(nextGame, boardChanged ? false : undefined);
    if (clearResult && boardChanged) {
      setValidation(null);
    }
  }

  function chooseCase(caseId: string) {
    const saved = progress.cases[caseId]?.state;
    setGame(saved ?? createInitialGameState(caseId));
    setValidation(null);
  }

  function submitAccusation() {
    const result = validateBoard(currentCase, game.board);
    setValidation(result);
    persist(game, result.solved);
  }

  function issueText(result: ValidationResult): string {
    if (result.solved) return `Case closed. ${currentCase.suspects.find((suspect) => suspect.id === currentCase.murdererId)?.name} is the murderer.`;
    return result.issues[0]?.message ?? 'The evidence does not support this accusation.';
  }

  return (
    <main className="app-shell" aria-label="Murdoku mobile app">
      <header className="case-header">
        <div>
          <img className="brand-logo" src={murdokuLogo} alt="Murdoku" />
          <h1>{currentCase.title}</h1>
        </div>
        <div className="case-meta" aria-label="case progress">
          <span>{difficultyLabels[currentCase.difficulty]}</span>
          <span>
            {placedCount}/{currentCase.suspects.length}
          </span>
        </div>
      </header>

      <section className="case-strip" aria-label="cases">
        {cases.map((caseDef, index) => (
          <button
            className={caseDef.id === currentCase.id ? 'case-chip active' : 'case-chip'}
            key={caseDef.id}
            onClick={() => chooseCase(caseDef.id)}
            type="button"
          >
            <span>{index + 1}</span>
            {progress.cases[caseDef.id]?.completed ? 'Closed' : difficultyLabels[caseDef.difficulty]}
          </button>
        ))}
      </section>

      <section className="briefing" aria-label="case briefing">
        <p>{currentCase.intro}</p>
      </section>

      <section
        className="board"
        aria-label="crime board"
        style={{ gridTemplateColumns: `repeat(${currentCase.size.columns}, minmax(0, 1fr))` }}
      >
        {currentCase.cells.map((cell) => {
          const suspect = suspectForCell(currentCase, game.board, cell.id);
          const marked = game.board.marks[cell.id];
          const objectAsset = objectAssetFor(cell.object);

          return (
            <button
              aria-label={cellLabel(cell, suspect, marked)}
              className={suspect ? 'board-cell occupied' : marked ? 'board-cell marked' : 'board-cell'}
              key={cell.id}
              onClick={() => updateGame(applyCellAction(game, cell.id))}
              style={{ '--accent': suspect?.accent } as CSSProperties}
              type="button"
            >
              <span className="cell-room">{cell.room}</span>
              {objectAsset ? (
                <img className="cell-object-art" src={objectAsset} alt={cell.object} />
              ) : cell.object ? (
                <span className="cell-object">{cell.object}</span>
              ) : null}
              {marked ? <span className="cell-mark">X</span> : null}
              {suspect ? (
                <span className="cell-suspect" aria-hidden="true">
                  {suspect.name.slice(0, 1)}
                </span>
              ) : null}
            </button>
          );
        })}
      </section>

      <section className="clue-panel" aria-label="selected suspect clues">
        <div className="selected-row">
          <div className="avatar" style={{ '--accent': selectedSuspect?.accent } as CSSProperties}>
            {selectedSuspect ? selectedSuspect.name.slice(0, 1) : '?'}
          </div>
          <div>
            <p className="eyebrow">{selectedSuspect ? 'Selected suspect' : 'No suspect selected'}</p>
            <h2>{selectedSuspect?.name ?? 'Choose a suspect'}</h2>
          </div>
        </div>
        <ul>
          {(selectedSuspect?.clues ?? ['Select a suspect, then tap a tile.']).map((clue) => (
            <li key={clue}>{clue}</li>
          ))}
        </ul>
      </section>

      <section className="suspect-dock" aria-label="suspects">
        {currentCase.suspects.map((suspect) => {
          const isSelected = suspect.id === game.selectedSuspectId;
          const isPlaced = Object.values(game.board.placements).includes(suspect.id);

          return (
            <button
              className={isSelected ? 'suspect-token active' : 'suspect-token'}
              key={suspect.id}
              onClick={() => updateGame(selectSuspect(game, suspect.id), false)}
              style={{ '--accent': suspect.accent } as CSSProperties}
              type="button"
            >
              <span className="avatar" aria-hidden="true">
                {suspect.name.slice(0, 1)}
              </span>
              <span>{suspect.name}</span>
              {isPlaced ? <span className="placed-dot" aria-label="placed" /> : null}
            </button>
          );
        })}
      </section>

      <footer className="tool-dock">
        {(['place', 'x', 'erase'] as Tool[]).map((tool) => (
          <button
            aria-label={toolLabel(tool)}
            className={game.activeTool === tool ? 'tool-button active' : 'tool-button'}
            key={tool}
            onClick={() => updateGame(setTool(game, tool), false)}
            type="button"
          >
            {tool === 'x' ? 'X' : toolLabel(tool)}
          </button>
        ))}
        <button className="tool-button" disabled={game.undoStack.length === 0} onClick={() => updateGame(undo(game))} type="button">
          Undo
        </button>
        <button className="accuse-button" onClick={submitAccusation} type="button">
          Accuse
        </button>
      </footer>

      <section className={validation?.solved || completed ? 'result solved' : 'result'} role="status" aria-live="polite">
        {validation ? issueText(validation) : completed ? 'Case closed.' : `${toolLabel(game.activeTool)} mode`}
      </section>
    </main>
  );
}
