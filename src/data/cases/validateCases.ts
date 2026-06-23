import type { CaseDefinition, CellId } from '../../game/types';

export function validateCaseData(caseDef: CaseDefinition): string[] {
  const errors: string[] = [];
  const cellIds = new Set(caseDef.cells.map((cell) => cell.id));
  const suspectIds = new Set(caseDef.suspects.map((suspect) => suspect.id));

  if (/^case\s*\d+$/i.test(caseDef.title.trim())) {
    errors.push(`${caseDef.id}: title is generic`);
  }

  if (caseDef.intro.trim().length === 0) {
    errors.push(`${caseDef.id}: intro is empty`);
  }

  if (caseDef.cells.length !== caseDef.size.rows * caseDef.size.columns) {
    errors.push(`${caseDef.id}: cell count does not match grid size`);
  }

  if (!suspectIds.has(caseDef.victimId)) {
    errors.push(`${caseDef.id}: victimId is not a suspect`);
  }

  if (!suspectIds.has(caseDef.murdererId)) {
    errors.push(`${caseDef.id}: murdererId is not a suspect`);
  }

  if (caseDef.solution.length !== caseDef.suspects.length) {
    errors.push(`${caseDef.id}: solution length does not match suspect count`);
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
