import type { CaseDefinition, CellDefinition, Difficulty, Suspect } from '../../game/types';
import { case01 } from './case-01';
import { case02 } from './case-02';
import { case03 } from './case-03';
import { case04 } from './case-04';
import { case05 } from './case-05';
import { case07 } from './case-07';
import { case08 } from './case-08';
import { case10 } from './case-10';
import { createGrid } from './grid';

interface TutorialCaseConfig {
  id: string;
  title: string;
  difficulty: Difficulty;
  size: number;
  intro: string;
  source: CaseDefinition;
  rooms: [string, string, string, string];
  objects: Record<string, string>;
  solutionCells: Array<`${number}-${number}`>;
}

function roomForCell(row: number, column: number, size: number, rooms: TutorialCaseConfig['rooms']): string {
  if (row < Math.ceil(size / 2) && column < Math.ceil(size / 2)) return rooms[0];
  if (row < Math.ceil(size / 2)) return rooms[1];
  if (column < Math.ceil(size / 2)) return rooms[2];
  return rooms[3];
}

function tutorialClue(index: number, cellId: string, room: string, object?: string): string {
  const [row, column] = cellId.split('-').map(Number);
  const direct = [
    `Start in row ${row + 1}.`,
    `Check column ${column + 1}.`,
    `This suspect belongs in the ${room}.`,
    object ? `This suspect is beside the ${object}.` : `This suspect is in row ${row + 1} or column ${column + 1}.`
  ];
  return direct[index % direct.length];
}

function buildCase(config: TutorialCaseConfig): CaseDefinition {
  const cells = createGrid(config.size, config.size, (cell): Partial<CellDefinition> => ({
    room: roomForCell(cell.row, cell.column, config.size, config.rooms),
    object: config.objects[cell.id]
  }));
  const cellsById = Object.fromEntries(cells.map((cell) => [cell.id, cell]));
  const suspects = config.source.suspects.slice(0, config.solutionCells.length).map((suspect, index): Suspect => {
    const solutionCell = cellsById[config.solutionCells[index]];
    return {
      ...suspect,
      clues: [tutorialClue(index, config.solutionCells[index], solutionCell?.room ?? config.rooms[0], solutionCell?.object)]
    };
  });

  return {
    id: config.id,
    title: config.title,
    difficulty: config.difficulty,
    size: { rows: config.size, columns: config.size },
    intro: config.intro,
    victimId: suspects[suspects.length - 1].id,
    murdererId: suspects[Math.min(2, suspects.length - 2)].id,
    cells,
    suspects,
    solution: suspects.map((suspect, index) => ({
      suspectId: suspect.id,
      cellId: config.solutionCells[index]
    }))
  };
}

export const tutorialCases: CaseDefinition[] = [
  buildCase({
    id: 'case-01',
    title: 'Town Gate',
    difficulty: 'very-easy',
    size: 4,
    intro: 'Learn the basics: each suspect can appear once, and each row and column can hold only one suspect.',
    source: case01,
    rooms: ['Desert', 'Canyon', 'Shack', 'The Desert'],
    objects: {
      '0-1': 'Horse',
      '1-1': 'Cactus',
      '2-0': 'Boulder',
      '3-2': 'Table'
    },
    solutionCells: ['1-1', '0-3', '2-0', '3-2']
  }),
  buildCase({
    id: 'case-02',
    title: 'Front Room',
    difficulty: 'easy',
    size: 5,
    intro: 'A slightly larger board introduces object clues and simple row-column exclusion.',
    source: case02,
    rooms: ['Store Floor', 'cashier', 'Storage', 'General Store'],
    objects: {
      '0-4': 'Register',
      '1-1': 'Shelf',
      '2-3': 'Chair',
      '3-0': 'Table',
      '4-2': 'Crate'
    },
    solutionCells: ['0-4', '1-1', '2-3', '3-0', '4-2']
  }),
  buildCase({
    id: 'case-03',
    title: 'Reading Table',
    difficulty: 'easy',
    size: 6,
    intro: 'The first 6x6 case keeps clues direct while giving players more empty space.',
    source: case03,
    rooms: ['Library', 'Discussion Circle', 'Refreshments', 'Living Room'],
    objects: {
      '0-5': 'Shelf',
      '1-2': 'Plant',
      '2-4': 'Carpet',
      '3-1': 'Chair',
      '4-3': 'Table / Carpet',
      '5-0': 'Table'
    },
    solutionCells: ['0-5', '1-2', '2-4', '3-1', '4-3', '5-0']
  }),
  buildCase({
    id: 'case-04',
    title: 'Flower Count',
    difficulty: 'medium',
    size: 6,
    intro: 'Another 6x6 case uses clearer room boundaries before adding special identities.',
    source: case04,
    rooms: ['Store Floor', 'Preparation', 'Refreshments', 'Outside'],
    objects: {
      '0-1': 'Flowers',
      '1-4': 'Object 44',
      '2-0': 'Plant',
      '3-5': 'Chair',
      '4-2': 'Table',
      '5-3': 'Shelf'
    },
    solutionCells: ['0-1', '1-4', '2-0', '3-5', '4-2', '5-3']
  }),
  buildCase({
    id: 'case-05',
    title: 'Stable Trouble',
    difficulty: 'medium',
    size: 6,
    intro:
      'This case introduces the outlaw: the outlaw is a special identity, and they may or may not be the murderer.',
    source: case05,
    rooms: ['Stable', 'Training Ring', 'Grazing Pasture', 'Tool Shed'],
    objects: {
      '0-2': 'Bush',
      '1-5': 'Horse',
      '2-1': 'Chair',
      '3-4': 'Puddle',
      '4-0': 'Sack',
      '5-3': 'Tree'
    },
    solutionCells: ['0-2', '1-5', '2-1', '3-4', '4-0', '5-3']
  }),
  buildCase({
    id: 'case-06',
    title: 'Market Corners',
    difficulty: 'medium',
    size: 7,
    intro: 'The board grows to 7x7 with more room edges and one extra suspect.',
    source: case02,
    rooms: ['General Store', 'cashier', 'Storage', 'Tavern'],
    objects: {
      '0-6': 'Register',
      '1-1': 'Shelf',
      '2-3': 'Chair',
      '3-5': 'Table',
      '4-0': 'Crate',
      '5-2': 'Safe',
      '6-4': 'Barrel'
    },
    solutionCells: ['0-6', '1-1', '2-3', '3-5', '4-0', '5-2', '6-4']
  }),
  buildCase({
    id: 'case-07',
    title: 'Greenhouse Path',
    difficulty: 'hard',
    size: 7,
    intro: 'A harder 7x7 case mixes direct object clues with relative position clues.',
    source: case07,
    rooms: ['Preparation', 'Store Floor', 'Outside', 'Back Yard'],
    objects: {
      '0-3': 'Object 44',
      '1-6': 'Flowers',
      '2-1': 'Plant',
      '3-4': 'Carpet',
      '4-0': 'Chair',
      '5-2': 'Table',
      '6-5': 'Shelf'
    },
    solutionCells: ['0-3', '1-6', '2-1', '3-4', '4-0', '5-2', '6-5']
  }),
  buildCase({
    id: 'case-08',
    title: 'Golf Back Nine',
    difficulty: 'hard',
    size: 8,
    intro: 'The first 8x8 case adds more suspects while keeping the grid readable on mobile.',
    source: case04,
    rooms: ['The Desert', 'Path', 'Walkway', 'Entrance'],
    objects: {
      '0-7': 'Cactus',
      '1-2': 'Object 58',
      '2-5': 'Chair',
      '3-0': 'Flowers',
      '4-6': 'Barrel',
      '5-1': 'Table',
      '6-4': 'Rubble',
      '7-3': 'Tree'
    },
    solutionCells: ['0-7', '1-2', '2-5', '3-0', '4-6', '5-1', '6-4', '7-3']
  }),
  buildCase({
    id: 'case-09',
    title: 'Camp Cleanup',
    difficulty: 'hard',
    size: 8,
    intro: 'This 8x8 case increases clue density without changing the core rules.',
    source: case08,
    rooms: ['Tent A', 'Tent B', 'Tent C', 'Woods'],
    objects: {
      '0-4': 'Bear',
      '1-7': 'Bed',
      '2-2': 'Puddle',
      '3-5': 'Car',
      '4-0': 'Bush',
      '5-3': 'Chair',
      '6-6': 'Table',
      '7-1': 'Tree'
    },
    solutionCells: ['0-4', '1-7', '2-2', '3-5', '4-0', '5-3', '6-6', '7-1']
  }),
  buildCase({
    id: 'case-10',
    title: 'Wedding Floor',
    difficulty: 'expert',
    size: 9,
    intro: 'The final first-release case uses a 9x9 board and the densest set of suspects.',
    source: case10,
    rooms: ['Chapel', 'Altar', 'West Court', 'East Court'],
    objects: {
      '0-8': 'Flowers',
      '1-1': 'Chair',
      '2-4': 'Table',
      '3-7': 'Plant',
      '4-0': 'Carpet',
      '5-3': 'Shelf',
      '6-6': 'Tree',
      '7-2': 'Table / Carpet',
      '8-5': 'Boulder'
    },
    solutionCells: ['0-8', '1-1', '2-4', '3-7', '4-0', '5-3', '6-6', '7-2', '8-5']
  })
];
