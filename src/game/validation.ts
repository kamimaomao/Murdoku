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
          message: 'A suspect appears more than once in the same row.'
        });
      }
      if (columns.has(cell.column)) {
        issues.push({
          type: 'duplicate-column',
          column: cell.column,
          suspectId,
          message: 'A suspect appears more than once in the same column.'
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
        message: 'At least one suspect conflicts with the case evidence.'
      });
      break;
    }
  }

  return { solved: issues.length === 0, issues };
}
