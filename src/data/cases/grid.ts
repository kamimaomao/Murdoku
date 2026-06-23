import type { CellDefinition } from '../../game/types';

export function createGrid(
  rows: number,
  columns: number,
  decorate?: (cell: CellDefinition) => Partial<CellDefinition>
): CellDefinition[] {
  return Array.from({ length: rows * columns }, (_, index) => {
    const row = Math.floor(index / columns);
    const column = index % columns;
    const base: CellDefinition = { id: `${row}-${column}`, row, column };
    return { ...base, ...(decorate ? decorate(base) : {}) };
  });
}
