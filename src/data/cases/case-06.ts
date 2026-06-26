import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Library"
  },
  "0-1": {
    "room": "Library",
    "object": "Shelf"
  },
  "0-2": {
    "room": "Library",
    "object": "Plant"
  },
  "0-3": {
    "room": "Library"
  },
  "0-4": {
    "room": "Library",
    "object": "Shelf"
  },
  "0-5": {
    "room": "Library",
    "object": "Shelf"
  },
  "1-0": {
    "room": "Library",
    "object": "Shelf"
  },
  "1-1": {
    "room": "Library",
    "object": "Carpet",
    "carpet": "1"
  },
  "1-2": {
    "room": "Library",
    "object": "Carpet",
    "carpet": "47"
  },
  "1-3": {
    "room": "Library",
    "object": "Carpet",
    "carpet": "47"
  },
  "1-4": {
    "room": "Library",
    "object": "Carpet",
    "carpet": "47"
  },
  "1-5": {
    "room": "Library",
    "object": "Carpet",
    "carpet": "13"
  },
  "2-0": {
    "room": "Discussion Circle"
  },
  "2-1": {
    "room": "Discussion Circle",
    "object": "Chair"
  },
  "2-2": {
    "room": "Discussion Circle"
  },
  "2-3": {
    "room": "Library",
    "object": "Shelf"
  },
  "2-4": {
    "room": "Library",
    "object": "Shelf"
  },
  "2-5": {
    "room": "Refreshments"
  },
  "3-0": {
    "room": "Discussion Circle",
    "object": "Chair"
  },
  "3-1": {
    "room": "Discussion Circle"
  },
  "3-2": {
    "room": "Discussion Circle",
    "object": "Carpet",
    "carpet": "7"
  },
  "3-3": {
    "room": "Discussion Circle"
  },
  "3-4": {
    "room": "Refreshments"
  },
  "3-5": {
    "room": "Refreshments"
  },
  "4-0": {
    "room": "Discussion Circle",
    "object": "Chair"
  },
  "4-1": {
    "room": "Discussion Circle",
    "object": "Carpet",
    "carpet": "1"
  },
  "4-2": {
    "room": "Discussion Circle",
    "object": "Carpet",
    "carpet": "48"
  },
  "4-3": {
    "room": "Discussion Circle"
  },
  "4-4": {
    "room": "Refreshments",
    "object": "Carpet",
    "carpet": "1"
  },
  "4-5": {
    "room": "Refreshments",
    "object": "Table / Carpet",
    "carpet": "13"
  },
  "5-0": {
    "room": "Discussion Circle",
    "object": "Table"
  },
  "5-1": {
    "room": "Discussion Circle"
  },
  "5-2": {
    "room": "Discussion Circle",
    "object": "Chair"
  },
  "5-3": {
    "room": "Discussion Circle",
    "object": "Plant"
  },
  "5-4": {
    "room": "Refreshments",
    "object": "Table"
  },
  "5-5": {
    "room": "Refreshments",
    "object": "Table"
  }
};

export const case06: CaseDefinition = {
  id: 'case-06',
  title: 'The Book Club',
  difficulty: 'very-easy',
  size: { rows: 6, columns: 6 },
  intro: 'Place every suspect in The Book Club using the case clues.',
  victimId: 'f-vinita',
  murdererId: 'c-cameron',
  cells: createGrid(6, 6, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-ada",
        "name": "Ada",
        "accent": "#f4c76d",
        "portraitKey": "case-06-a-ada",
        "clues": [
            "She was beside a plant."
        ]
    },
    {
        "id": "b-brigitte",
        "name": "Brigitte",
        "accent": "#80c9c1",
        "portraitKey": "case-06-b-brigitte",
        "clues": [
            "She was south of Cameron."
        ]
    },
    {
        "id": "c-cameron",
        "name": "Cameron",
        "accent": "#d7939d",
        "portraitKey": "case-06-c-cameron",
        "clues": [
            "She was on a carpet."
        ]
    },
    {
        "id": "d-darlene",
        "name": "Darlene",
        "accent": "#9db7dc",
        "portraitKey": "case-06-d-darlene",
        "clues": [
            "She was the only person sitting in a chair."
        ]
    },
    {
        "id": "e-edison",
        "name": "Edison",
        "accent": "#c7d783",
        "portraitKey": "case-06-e-edison",
        "clues": [
            "He was in the Library. He was not beside a shelf."
        ]
    },
    {
        "id": "f-vinita",
        "name": "Vinita",
        "accent": "#f4c76d",
        "portraitKey": "case-06-f-vinita",
        "clues": [
            "The Victim. She was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-ada",
        "cellId": "0-3"
    },
    {
        "suspectId": "b-brigitte",
        "cellId": "5-1"
    },
    {
        "suspectId": "c-cameron",
        "cellId": "4-4"
    },
    {
        "suspectId": "d-darlene",
        "cellId": "3-0"
    },
    {
        "suspectId": "e-edison",
        "cellId": "1-2"
    },
    {
        "suspectId": "f-vinita",
        "cellId": "2-5"
    }
]
};
