import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "West Court"
  },
  "0-1": {
    "room": "West Court",
    "object": "Flowers"
  },
  "0-2": {
    "room": "Chapel"
  },
  "0-3": {
    "room": "Altar",
    "object": "Carpet"
  },
  "0-4": {
    "room": "Altar",
    "object": "Table / Carpet"
  },
  "0-5": {
    "room": "Altar",
    "object": "Carpet"
  },
  "0-6": {
    "room": "Chapel"
  },
  "0-7": {
    "room": "East Court"
  },
  "0-8": {
    "room": "East Court",
    "object": "Tree"
  },
  "1-0": {
    "room": "West Court",
    "object": "Tree"
  },
  "1-1": {
    "room": "West Court"
  },
  "1-2": {
    "room": "Chapel"
  },
  "1-3": {
    "room": "Altar",
    "object": "Carpet"
  },
  "1-4": {
    "room": "Altar",
    "object": "Carpet"
  },
  "1-5": {
    "room": "Altar",
    "object": "Carpet"
  },
  "1-6": {
    "room": "Chapel"
  },
  "1-7": {
    "room": "East Court"
  },
  "1-8": {
    "room": "East Court"
  },
  "2-0": {
    "room": "West Court"
  },
  "2-1": {
    "room": "West Court"
  },
  "2-2": {
    "room": "Chapel"
  },
  "2-3": {
    "room": "Chapel"
  },
  "2-4": {
    "room": "Chapel",
    "object": "Carpet"
  },
  "2-5": {
    "room": "Chapel",
    "object": "Flowers"
  },
  "2-6": {
    "room": "Chapel"
  },
  "2-7": {
    "room": "East Court"
  },
  "2-8": {
    "room": "East Court"
  },
  "3-0": {
    "room": "West Court"
  },
  "3-1": {
    "room": "West Court"
  },
  "3-2": {
    "room": "Chapel",
    "object": "Flowers"
  },
  "3-3": {
    "room": "Chapel",
    "object": "Chair"
  },
  "3-4": {
    "room": "Chapel",
    "object": "Carpet"
  },
  "3-5": {
    "room": "Chapel",
    "object": "Chair"
  },
  "3-6": {
    "room": "Chapel"
  },
  "3-7": {
    "room": "East Court"
  },
  "3-8": {
    "room": "East Court",
    "object": "Tree"
  },
  "4-0": {
    "room": "West Court"
  },
  "4-1": {
    "room": "West Court"
  },
  "4-2": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-3": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-4": {
    "room": "Chapel",
    "object": "Carpet"
  },
  "4-5": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-6": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-7": {
    "room": "East Court"
  },
  "4-8": {
    "room": "East Court",
    "object": "Table"
  },
  "5-0": {
    "room": "West Court",
    "object": "Flowers"
  },
  "5-1": {
    "room": "West Court"
  },
  "5-2": {
    "room": "Chapel"
  },
  "5-3": {
    "room": "Chapel"
  },
  "5-4": {
    "room": "Chapel",
    "object": "Carpet"
  },
  "5-5": {
    "room": "Chapel"
  },
  "5-6": {
    "room": "Chapel"
  },
  "5-7": {
    "room": "East Court"
  },
  "5-8": {
    "room": "East Court"
  },
  "6-0": {
    "room": "West Court"
  },
  "6-1": {
    "room": "West Court"
  },
  "6-2": {
    "room": "Chapel",
    "object": "Flowers"
  },
  "6-3": {
    "room": "Chapel",
    "object": "Chair"
  },
  "6-4": {
    "room": "Chapel",
    "object": "Carpet"
  },
  "6-5": {
    "room": "Chapel",
    "object": "Chair"
  },
  "6-6": {
    "room": "Chapel",
    "object": "Chair"
  },
  "6-7": {
    "room": "East Court",
    "object": "Flowers"
  },
  "6-8": {
    "room": "East Court",
    "object": "Tree"
  },
  "7-0": {
    "room": "West Court",
    "object": "Tree"
  },
  "7-1": {
    "room": "West Court",
    "object": "Table"
  },
  "7-2": {
    "room": "West Court",
    "object": "Table"
  },
  "7-3": {
    "room": "Porch",
    "object": "Flowers"
  },
  "7-4": {
    "room": "Porch"
  },
  "7-5": {
    "room": "Porch"
  },
  "7-6": {
    "room": "East Court",
    "object": "Flowers"
  },
  "7-7": {
    "room": "East Court"
  },
  "7-8": {
    "room": "East Court"
  },
  "8-0": {
    "room": "West Court"
  },
  "8-1": {
    "room": "West Court"
  },
  "8-2": {
    "room": "West Court",
    "object": "Table"
  },
  "8-3": {
    "room": "Porch"
  },
  "8-4": {
    "room": "Porch"
  },
  "8-5": {
    "room": "Porch"
  },
  "8-6": {
    "room": "East Court"
  },
  "8-7": {
    "room": "East Court"
  },
  "8-8": {
    "room": "East Court"
  }
};

export const case10: CaseDefinition = {
  id: 'case-10',
  title: 'White Wedding',
  difficulty: 'medium',
  size: { rows: 9, columns: 9 },
  intro: 'There was a man and a woman on the Altar.',
  victimId: 'i-vikram',
  murdererId: 'g-giulia',
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-archer",
        "name": "Archer",
        "accent": "#f4c76d",
        "portraitKey": "case-10-a-archer",
        "clues": [
            "He was beside a table."
        ]
    },
    {
        "id": "b-brooke",
        "name": "Brooke",
        "accent": "#80c9c1",
        "portraitKey": "case-10-b-brooke",
        "clues": [
            "She was beside some flowers."
        ]
    },
    {
        "id": "c-crystal",
        "name": "Crystal",
        "accent": "#d7939d",
        "portraitKey": "case-10-c-crystal",
        "clues": [
            "She was in the fifth column."
        ]
    },
    {
        "id": "d-daisy",
        "name": "Daisy",
        "accent": "#9db7dc",
        "portraitKey": "case-10-d-daisy",
        "clues": [
            "She was on the Porch."
        ]
    },
    {
        "id": "e-ernie",
        "name": "Ernie",
        "accent": "#c7d783",
        "portraitKey": "case-10-e-ernie",
        "clues": [
            "He was northeast of Crystal."
        ]
    },
    {
        "id": "f-finn",
        "name": "Finn",
        "accent": "#f4c76d",
        "portraitKey": "case-10-f-finn",
        "clues": [
            "He was in a corner of his area."
        ]
    },
    {
        "id": "g-giulia",
        "name": "Giulia",
        "accent": "#80c9c1",
        "portraitKey": "case-10-g-giulia",
        "clues": [
            "She was with someone who was beside a tree."
        ]
    },
    {
        "id": "h-harper",
        "name": "Harper",
        "accent": "#d7939d",
        "portraitKey": "case-10-h-harper",
        "clues": [
            "She was sitting in a chair."
        ]
    },
    {
        "id": "i-vikram",
        "name": "Vikram",
        "accent": "#9db7dc",
        "portraitKey": "case-10-i-vikram",
        "clues": [
            "The Victim. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-archer",
        "cellId": "5-8"
    },
    {
        "suspectId": "b-brooke",
        "cellId": "7-7"
    },
    {
        "suspectId": "c-crystal",
        "cellId": "1-4"
    },
    {
        "suspectId": "d-daisy",
        "cellId": "8-3"
    },
    {
        "suspectId": "e-ernie",
        "cellId": "0-5"
    },
    {
        "suspectId": "f-finn",
        "cellId": "6-6"
    },
    {
        "suspectId": "g-giulia",
        "cellId": "3-1"
    },
    {
        "suspectId": "h-harper",
        "cellId": "4-2"
    },
    {
        "suspectId": "i-vikram",
        "cellId": "2-0"
    }
]
};
