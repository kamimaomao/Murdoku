import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Clearing"
  },
  "0-1": {
    "room": "Clearing",
    "object": "Car"
  },
  "0-2": {
    "room": "Clearing"
  },
  "0-3": {
    "room": "Clearing"
  },
  "0-4": {
    "room": "Clearing"
  },
  "0-5": {
    "room": "Tent A",
    "object": "Table"
  },
  "0-6": {
    "room": "Tent A"
  },
  "0-7": {
    "room": "Tent A"
  },
  "0-8": {
    "room": "Tent A"
  },
  "1-0": {
    "room": "Clearing",
    "object": "Bush"
  },
  "1-1": {
    "room": "Clearing"
  },
  "1-2": {
    "room": "Clearing"
  },
  "1-3": {
    "room": "Clearing",
    "object": "Car"
  },
  "1-4": {
    "room": "Clearing"
  },
  "1-5": {
    "room": "Tent A"
  },
  "1-6": {
    "room": "Tent A",
    "object": "Bed"
  },
  "1-7": {
    "room": "Tent A"
  },
  "1-8": {
    "room": "Tent A"
  },
  "2-0": {
    "room": "Clearing"
  },
  "2-1": {
    "room": "Clearing"
  },
  "2-2": {
    "room": "Woods"
  },
  "2-3": {
    "room": "Woods"
  },
  "2-4": {
    "room": "Tent A"
  },
  "2-5": {
    "room": "Tent A"
  },
  "2-6": {
    "room": "Tent A",
    "object": "Carpet",
    "carpet": "1"
  },
  "2-7": {
    "room": "Tent A",
    "object": "Carpet",
    "carpet": "13"
  },
  "2-8": {
    "room": "Tent A"
  },
  "3-0": {
    "room": "Woods",
    "object": "Bush"
  },
  "3-1": {
    "room": "Woods"
  },
  "3-2": {
    "room": "Woods"
  },
  "3-3": {
    "room": "Woods"
  },
  "3-4": {
    "room": "Woods",
    "object": "Bush"
  },
  "3-5": {
    "room": "Woods",
    "object": "Table"
  },
  "3-6": {
    "room": "Woods"
  },
  "3-7": {
    "room": "Woods"
  },
  "3-8": {
    "room": "Woods"
  },
  "4-0": {
    "room": "Tent B"
  },
  "4-1": {
    "room": "Tent B"
  },
  "4-2": {
    "room": "Woods"
  },
  "4-3": {
    "room": "Woods",
    "object": "Bear"
  },
  "4-4": {
    "room": "Woods"
  },
  "4-5": {
    "room": "Woods",
    "object": "Table"
  },
  "4-6": {
    "room": "Woods",
    "object": "Chair"
  },
  "4-7": {
    "room": "Woods"
  },
  "4-8": {
    "room": "Woods",
    "object": "Bush"
  },
  "5-0": {
    "room": "Tent B"
  },
  "5-1": {
    "room": "Tent B"
  },
  "5-2": {
    "room": "Tent B"
  },
  "5-3": {
    "room": "Woods",
    "object": "Tree"
  },
  "5-4": {
    "room": "Woods"
  },
  "5-5": {
    "room": "Woods"
  },
  "5-6": {
    "room": "Woods"
  },
  "5-7": {
    "room": "Woods"
  },
  "5-8": {
    "room": "Woods"
  },
  "6-0": {
    "room": "Tent B"
  },
  "6-1": {
    "room": "Tent B",
    "object": "Bed"
  },
  "6-2": {
    "room": "Tent B"
  },
  "6-3": {
    "room": "Woods"
  },
  "6-4": {
    "room": "Woods",
    "object": "Chair"
  },
  "6-5": {
    "room": "Tent C"
  },
  "6-6": {
    "room": "Tent C"
  },
  "6-7": {
    "room": "Tent C",
    "object": "Chair"
  },
  "6-8": {
    "room": "Tent C"
  },
  "7-0": {
    "room": "Tent B",
    "object": "Chair"
  },
  "7-1": {
    "room": "Tent B"
  },
  "7-2": {
    "room": "Tent B",
    "object": "Carpet",
    "carpet": "7"
  },
  "7-3": {
    "room": "Woods",
    "object": "Bush"
  },
  "7-4": {
    "room": "Woods"
  },
  "7-5": {
    "room": "Tent C"
  },
  "7-6": {
    "room": "Tent C",
    "object": "Bed"
  },
  "7-7": {
    "room": "Tent C"
  },
  "7-8": {
    "room": "Tent C"
  },
  "8-0": {
    "room": "Tent B",
    "object": "Carpet",
    "carpet": "1"
  },
  "8-1": {
    "room": "Tent B",
    "object": "Carpet",
    "carpet": "47"
  },
  "8-2": {
    "room": "Tent B",
    "object": "Carpet",
    "carpet": "48"
  },
  "8-3": {
    "room": "Woods"
  },
  "8-4": {
    "room": "Woods",
    "object": "Tree"
  },
  "8-5": {
    "room": "Tent C",
    "object": "Carpet",
    "carpet": "1"
  },
  "8-6": {
    "room": "Tent C",
    "object": "Carpet",
    "carpet": "47"
  },
  "8-7": {
    "room": "Tent C",
    "object": "Carpet",
    "carpet": "13"
  },
  "8-8": {
    "room": "Tent C",
    "object": "Table"
  }
};

export const case05: CaseDefinition = {
  id: 'case-05',
  title: 'Grizzly Night',
  difficulty: 'hard',
  size: { rows: 9, columns: 9 },
  intro: 'There was exactly one person on a carpet.',
  victimId: 'i-victor',
  murdererId: 'd-dylan',
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-alicia",
        "name": "Alicia",
        "accent": "#f4c76d",
        "portraitKey": "case-05-a-alicia",
        "clues": [
            "She was in Tent A or Tent C."
        ]
    },
    {
        "id": "b-brenda",
        "name": "Brenda",
        "accent": "#80c9c1",
        "portraitKey": "case-05-b-brenda",
        "clues": [
            "She was not on a carpet. She was in the top or in the bottom row."
        ]
    },
    {
        "id": "c-clark",
        "name": "Clark",
        "accent": "#d7939d",
        "portraitKey": "case-05-c-clark",
        "clues": [
            "He was the only person beside a shrub."
        ]
    },
    {
        "id": "d-dylan",
        "name": "Dylan",
        "accent": "#9db7dc",
        "portraitKey": "case-05-d-dylan",
        "clues": [
            "He was on a bed."
        ]
    },
    {
        "id": "e-ezequiel",
        "name": "Ezequiel",
        "accent": "#c7d783",
        "portraitKey": "case-05-e-ezequiel",
        "clues": [
            "He was the only person in a car."
        ]
    },
    {
        "id": "f-florence",
        "name": "Florence",
        "accent": "#f4c76d",
        "portraitKey": "case-05-f-florence",
        "clues": [
            "She was in the last column. She was south of Clark."
        ]
    },
    {
        "id": "g-george",
        "name": "George",
        "accent": "#80c9c1",
        "portraitKey": "case-05-g-george",
        "clues": [
            "He was sitting in a chair."
        ]
    },
    {
        "id": "h-holden",
        "name": "Holden",
        "accent": "#d7939d",
        "portraitKey": "case-05-h-holden",
        "clues": [
            "He was in the Woods. Someone else was beside the bear."
        ]
    },
    {
        "id": "i-victor",
        "name": "Victor",
        "accent": "#9db7dc",
        "portraitKey": "case-05-i-victor",
        "clues": [
            "The Victim. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-alicia",
        "cellId": "8-5"
    },
    {
        "suspectId": "b-brenda",
        "cellId": "0-7"
    },
    {
        "suspectId": "c-clark",
        "cellId": "3-3"
    },
    {
        "suspectId": "d-dylan",
        "cellId": "6-1"
    },
    {
        "suspectId": "e-ezequiel",
        "cellId": "1-4"
    },
    {
        "suspectId": "f-florence",
        "cellId": "7-8"
    },
    {
        "suspectId": "g-george",
        "cellId": "4-6"
    },
    {
        "suspectId": "h-holden",
        "cellId": "2-2"
    },
    {
        "suspectId": "i-victor",
        "cellId": "5-0"
    }
]
};
