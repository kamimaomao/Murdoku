import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Preparation",
    "object": "Table"
  },
  "0-1": {
    "room": "Preparation",
    "object": "Table"
  },
  "0-2": {
    "room": "Preparation"
  },
  "0-3": {
    "room": "Preparation",
    "object": "Shelf"
  },
  "0-4": {
    "room": "Preparation",
    "object": "Flowers"
  },
  "0-5": {
    "room": "Preparation",
    "object": "Flowers"
  },
  "0-6": {
    "room": "Preparation"
  },
  "1-0": {
    "room": "Preparation"
  },
  "1-1": {
    "room": "Preparation",
    "object": "Chair"
  },
  "1-2": {
    "room": "Preparation"
  },
  "1-3": {
    "room": "Preparation"
  },
  "1-4": {
    "room": "Preparation",
    "object": "Carpet"
  },
  "1-5": {
    "room": "Preparation",
    "object": "Carpet"
  },
  "1-6": {
    "room": "Preparation"
  },
  "2-0": {
    "room": "Store Floor",
    "object": "Flowers"
  },
  "2-1": {
    "room": "Store Floor"
  },
  "2-2": {
    "room": "Store Floor",
    "object": "Flowers"
  },
  "2-3": {
    "room": "Store Floor"
  },
  "2-4": {
    "room": "Preparation"
  },
  "2-5": {
    "room": "Preparation",
    "object": "Carpet"
  },
  "2-6": {
    "room": "Preparation",
    "object": "Shelf"
  },
  "3-0": {
    "room": "Store Floor",
    "object": "Flowers"
  },
  "3-1": {
    "room": "Store Floor"
  },
  "3-2": {
    "room": "Store Floor"
  },
  "3-3": {
    "room": "Store Floor"
  },
  "3-4": {
    "room": "cashier"
  },
  "3-5": {
    "room": "cashier"
  },
  "3-6": {
    "room": "cashier",
    "object": "Shelf"
  },
  "4-0": {
    "room": "Store Floor"
  },
  "4-1": {
    "room": "Store Floor"
  },
  "4-2": {
    "room": "Store Floor",
    "object": "Carpet"
  },
  "4-3": {
    "room": "Store Floor",
    "object": "Flowers"
  },
  "4-4": {
    "room": "cashier",
    "object": "Register"
  },
  "4-5": {
    "room": "cashier"
  },
  "4-6": {
    "room": "cashier",
    "object": "Object 44"
  },
  "5-0": {
    "room": "Store Floor",
    "object": "Shelf"
  },
  "5-1": {
    "room": "Store Floor"
  },
  "5-2": {
    "room": "Store Floor",
    "object": "Carpet"
  },
  "5-3": {
    "room": "Store Floor"
  },
  "5-4": {
    "room": "cashier",
    "object": "Table"
  },
  "5-5": {
    "room": "cashier",
    "object": "Chair"
  },
  "5-6": {
    "room": "cashier"
  },
  "6-0": {
    "room": "Store Floor",
    "object": "Flowers"
  },
  "6-1": {
    "room": "Store Floor"
  },
  "6-2": {
    "room": "Store Floor"
  },
  "6-3": {
    "room": "Store Floor",
    "object": "Shelf"
  },
  "6-4": {
    "room": "cashier"
  },
  "6-5": {
    "room": "cashier"
  },
  "6-6": {
    "room": "cashier"
  }
};

export const case07: CaseDefinition = {
  id: 'case-07',
  title: 'The Flower Store',
  difficulty: 'easy',
  size: { rows: 7, columns: 7 },
  intro: 'Place every suspect in The Flower Store using the case clues.',
  victimId: 'g-vickie',
  murdererId: 'g-vickie',
  cells: createGrid(7, 7, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-amir",
        "name": "Amir",
        "accent": "#a2d9e6",
        "portraitKey": "case-07-a-amir",
        "clues": [
            "He was beside the bonsai."
        ]
    },
    {
        "id": "b-bianca",
        "name": "Bianca",
        "accent": "#ceb3db",
        "portraitKey": "case-07-b-bianca",
        "clues": [
            "She was in the Preparation area."
        ]
    },
    {
        "id": "c-carly",
        "name": "Carly",
        "accent": "#88e7b4",
        "portraitKey": "case-07-c-carly",
        "clues": [
            "She was on a carpet."
        ]
    },
    {
        "id": "d-diane",
        "name": "Diane",
        "accent": "#cfa4db",
        "portraitKey": "case-07-d-diane",
        "clues": [
            "She was sitting in a chair."
        ]
    },
    {
        "id": "e-emmett",
        "name": "Emmett",
        "accent": "#e9a196",
        "portraitKey": "case-07-e-emmett",
        "clues": [
            "He was in the first column."
        ]
    },
    {
        "id": "f-felicia",
        "name": "Felicia",
        "accent": "#ba6d81",
        "portraitKey": "case-07-f-felicia",
        "clues": [
            "She was on the Store Floor. There was a man in her area."
        ]
    },
    {
        "id": "g-vickie",
        "name": "Vickie",
        "accent": "#ff9ea8",
        "portraitKey": "case-07-g-vickie",
        "clues": [
            "The Victim. She was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-amir",
        "cellId": "5-6"
    },
    {
        "suspectId": "b-bianca",
        "cellId": "0-2"
    },
    {
        "suspectId": "c-carly",
        "cellId": "2-5"
    },
    {
        "suspectId": "d-diane",
        "cellId": "1-1"
    },
    {
        "suspectId": "e-emmett",
        "cellId": "4-0"
    },
    {
        "suspectId": "f-felicia",
        "cellId": "3-3"
    },
    {
        "suspectId": "g-vickie",
        "cellId": "6-4"
    }
]
};
