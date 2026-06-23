import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Woods"
  },
  "0-1": {
    "room": "Woods",
    "object": "Flowers"
  },
  "0-2": {
    "room": "Woods"
  },
  "0-3": {
    "room": "Woods",
    "object": "Bush"
  },
  "0-4": {
    "room": "Woods",
    "object": "Tree"
  },
  "0-5": {
    "room": "Tavern"
  },
  "0-6": {
    "room": "Tavern"
  },
  "0-7": {
    "room": "Tavern",
    "object": "Shelf"
  },
  "0-8": {
    "room": "Tavern",
    "object": "Chair"
  },
  "1-0": {
    "room": "Woods"
  },
  "1-1": {
    "room": "Woods"
  },
  "1-2": {
    "room": "Woods"
  },
  "1-3": {
    "room": "Woods"
  },
  "1-4": {
    "room": "Woods"
  },
  "1-5": {
    "room": "Tavern"
  },
  "1-6": {
    "room": "Tavern",
    "object": "Chair"
  },
  "1-7": {
    "room": "Tavern",
    "object": "Table"
  },
  "1-8": {
    "room": "Tavern"
  },
  "2-0": {
    "room": "Storage",
    "object": "Box"
  },
  "2-1": {
    "room": "Storage"
  },
  "2-2": {
    "room": "Storage",
    "object": "Box"
  },
  "2-3": {
    "room": "Woods"
  },
  "2-4": {
    "room": "Woods"
  },
  "2-5": {
    "room": "Tavern"
  },
  "2-6": {
    "room": "Tavern",
    "object": "Chair"
  },
  "2-7": {
    "room": "Tavern",
    "object": "Table"
  },
  "2-8": {
    "room": "Tavern",
    "object": "Table"
  },
  "3-0": {
    "room": "Storage",
    "object": "Box"
  },
  "3-1": {
    "room": "Storage"
  },
  "3-2": {
    "room": "Storage"
  },
  "3-3": {
    "room": "Woods",
    "object": "Flowers"
  },
  "3-4": {
    "room": "Woods"
  },
  "3-5": {
    "room": "Tavern"
  },
  "3-6": {
    "room": "Tavern",
    "object": "Carpet"
  },
  "3-7": {
    "room": "Tavern",
    "object": "Carpet"
  },
  "3-8": {
    "room": "Tavern"
  },
  "4-0": {
    "room": "General Store",
    "object": "Shelf"
  },
  "4-1": {
    "room": "General Store",
    "object": "Shelf"
  },
  "4-2": {
    "room": "General Store",
    "object": "Carpet"
  },
  "4-3": {
    "room": "Woods"
  },
  "4-4": {
    "room": "Woods"
  },
  "4-5": {
    "room": "Woods"
  },
  "4-6": {
    "room": "Tavern"
  },
  "4-7": {
    "room": "Tavern"
  },
  "4-8": {
    "room": "Tavern",
    "object": "Chair"
  },
  "5-0": {
    "room": "General Store"
  },
  "5-1": {
    "room": "General Store"
  },
  "5-2": {
    "room": "General Store",
    "object": "Carpet"
  },
  "5-3": {
    "room": "Woods"
  },
  "5-4": {
    "room": "Woods",
    "object": "Bush"
  },
  "5-5": {
    "room": "Path",
    "object": "Car"
  },
  "5-6": {
    "room": "Path"
  },
  "5-7": {
    "room": "Path"
  },
  "5-8": {
    "room": "General Store"
  },
  "6-0": {
    "room": "General Store",
    "object": "Shelf"
  },
  "6-1": {
    "room": "General Store",
    "object": "Shelf"
  },
  "6-2": {
    "room": "General Store",
    "object": "Carpet"
  },
  "6-3": {
    "room": "Woods"
  },
  "6-4": {
    "room": "Path",
    "object": "Car"
  },
  "6-5": {
    "room": "Path"
  },
  "6-6": {
    "room": "Path"
  },
  "6-7": {
    "room": "Woods"
  },
  "6-8": {
    "room": "Woods"
  },
  "7-0": {
    "room": "General Store",
    "object": "Chair"
  },
  "7-1": {
    "room": "General Store",
    "object": "Table"
  },
  "7-2": {
    "room": "General Store",
    "object": "Carpet"
  },
  "7-3": {
    "room": "General Store",
    "object": "Carpet"
  },
  "7-4": {
    "room": "General Store"
  },
  "7-5": {
    "room": "Path"
  },
  "7-6": {
    "room": "Woods",
    "object": "Tree"
  },
  "7-7": {
    "room": "Woods"
  },
  "7-8": {
    "room": "Woods"
  },
  "8-0": {
    "room": "General Store",
    "object": "Table"
  },
  "8-1": {
    "room": "General Store",
    "object": "Table"
  },
  "8-2": {
    "room": "General Store"
  },
  "8-3": {
    "room": "General Store",
    "object": "Box"
  },
  "8-4": {
    "room": "General Store"
  },
  "8-5": {
    "room": "Path"
  },
  "8-6": {
    "room": "Woods",
    "object": "Flowers"
  },
  "8-7": {
    "room": "Woods"
  },
  "8-8": {
    "room": "Woods"
  }
};

export const case03: CaseDefinition = {
  id: 'case-03',
  title: 'A Remote Village',
  difficulty: 'hard',
  size: { rows: 9, columns: 9 },
  intro: 'There was exactly one person sitting in a chair.',
  victimId: 'i-vaughn',
  murdererId: 'g-graham',
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-arnold",
        "name": "Arnold",
        "accent": "#f4c76d",
        "portraitKey": "case-03-a-arnold",
        "clues": [
            "There was a woman inside a car exactly one row south of him."
        ]
    },
    {
        "id": "b-bruce",
        "name": "Bruce",
        "accent": "#80c9c1",
        "portraitKey": "case-03-b-bruce",
        "clues": [
            "He was beside a tree."
        ]
    },
    {
        "id": "c-connor",
        "name": "Connor",
        "accent": "#d7939d",
        "portraitKey": "case-03-c-connor",
        "clues": [
            "He was north of Ethan."
        ]
    },
    {
        "id": "d-delilah",
        "name": "Delilah",
        "accent": "#9db7dc",
        "portraitKey": "case-03-d-delilah",
        "clues": [
            "There was no man in her area."
        ]
    },
    {
        "id": "e-ethan",
        "name": "Ethan",
        "accent": "#c7d783",
        "portraitKey": "case-03-e-ethan",
        "clues": [
            "There was at least one woman in his area."
        ]
    },
    {
        "id": "f-fern",
        "name": "Fern",
        "accent": "#f4c76d",
        "portraitKey": "case-03-f-fern",
        "clues": [
            "She was on a carpet."
        ]
    },
    {
        "id": "g-graham",
        "name": "Graham",
        "accent": "#80c9c1",
        "portraitKey": "case-03-g-graham",
        "clues": [
            "He was in the fifth column."
        ]
    },
    {
        "id": "h-hedda",
        "name": "Hedda",
        "accent": "#d7939d",
        "portraitKey": "case-03-h-hedda",
        "clues": [
            "She was beside a shrub."
        ]
    },
    {
        "id": "i-vaughn",
        "name": "Vaughn",
        "accent": "#9db7dc",
        "portraitKey": "case-03-i-vaughn",
        "clues": [
            "The Victim. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-arnold",
        "cellId": "4-3"
    },
    {
        "suspectId": "b-bruce",
        "cellId": "6-6"
    },
    {
        "suspectId": "c-connor",
        "cellId": "0-2"
    },
    {
        "suspectId": "d-delilah",
        "cellId": "2-1"
    },
    {
        "suspectId": "e-ethan",
        "cellId": "1-8"
    },
    {
        "suspectId": "f-fern",
        "cellId": "3-7"
    },
    {
        "suspectId": "g-graham",
        "cellId": "8-4"
    },
    {
        "suspectId": "h-hedda",
        "cellId": "5-5"
    },
    {
        "suspectId": "i-vaughn",
        "cellId": "7-0"
    }
]
};
