import type { BoardState, CaseDefinition, CellId, SuspectId, ValidationIssue, ValidationResult } from './types';

const solutionMap = (caseDef: CaseDefinition): Record<SuspectId, CellId> =>
  Object.fromEntries(caseDef.solution.map((placement) => [placement.suspectId, placement.cellId]));

const cellMap = (caseDef: CaseDefinition) => Object.fromEntries(caseDef.cells.map((cell) => [cell.id, cell]));

export function validateBoard(caseDef: CaseDefinition, board: BoardState): ValidationResult {
  const issues: ValidationIssue[] = [];
  const cellsById = cellMap(caseDef);
  const requiredSuspects = caseDef.suspects.map((suspect) => suspect.id);
  const placedEntries = Object.entries(board.placements).filter(
    (entry): entry is [CellId, SuspectId] => Boolean(entry[1])
  );

  for (const suspectId of requiredSuspects) {
    if (!placedEntries.some(([, placedSuspectId]) => placedSuspectId === suspectId)) {
      issues.push({ type: 'incomplete', message: 'Every suspect must be placed before submitting.' });
      return { solved: false, issues };
    }
  }

  const usedRows = new Map<number, SuspectId>();
  const usedColumns = new Map<number, SuspectId>();
  const usedSuspects = new Set<SuspectId>();

  for (const [cellId, suspectId] of placedEntries) {
    const cell = cellsById[cellId];
    if (!cell) continue;

    if (usedSuspects.has(suspectId)) {
      issues.push({
        type: 'duplicate-suspect',
        suspectId,
        message: 'Each suspect can only be placed once.'
      });
    }

    if (usedRows.has(cell.row)) {
      issues.push({
        type: 'duplicate-row',
        row: cell.row,
        suspectId,
        message: 'Only one suspect can occupy each row.'
      });
    }

    if (usedColumns.has(cell.column)) {
      issues.push({
        type: 'duplicate-column',
        column: cell.column,
        suspectId,
        message: 'Only one suspect can occupy each column.'
      });
    }

    usedRows.set(cell.row, suspectId);
    usedColumns.set(cell.column, suspectId);
    usedSuspects.add(suspectId);
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
        message: 'At least one suspect conflicts with the case evidence.'
      });
      break;
    }
  }

  return { solved: issues.length === 0, issues };
}
