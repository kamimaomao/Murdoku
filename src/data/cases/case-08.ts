import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Back Yard",
    "object": "Object 33"
  },
  "0-1": {
    "room": "Back Yard"
  },
  "0-2": {
    "room": "Back Yard"
  },
  "0-3": {
    "room": "Back Yard",
    "object": "Puddle"
  },
  "0-4": {
    "room": "Back Yard"
  },
  "0-5": {
    "room": "Back Yard"
  },
  "0-6": {
    "room": "Back Yard",
    "object": "Tree"
  },
  "0-7": {
    "room": "Back Yard"
  },
  "0-8": {
    "room": "Back Yard",
    "object": "Object 33"
  },
  "1-0": {
    "room": "Back Yard",
    "object": "Object 33"
  },
  "1-1": {
    "room": "Back Yard",
    "object": "Tree"
  },
  "1-2": {
    "room": "Back Yard"
  },
  "1-3": {
    "room": "Back Yard"
  },
  "1-4": {
    "room": "Back Yard",
    "object": "Rubble"
  },
  "1-5": {
    "room": "Back Yard"
  },
  "1-6": {
    "room": "Back Yard"
  },
  "1-7": {
    "room": "Back Yard",
    "object": "Rubble"
  },
  "1-8": {
    "room": "Back Yard",
    "object": "Object 33"
  },
  "2-0": {
    "room": "Kitchen",
    "object": "Table"
  },
  "2-1": {
    "room": "Kitchen"
  },
  "2-2": {
    "room": "Kitchen",
    "object": "Table"
  },
  "2-3": {
    "room": "Living Room"
  },
  "2-4": {
    "room": "Living Room"
  },
  "2-5": {
    "room": "Restroom"
  },
  "2-6": {
    "room": "Restroom"
  },
  "2-7": {
    "room": "Restroom",
    "object": "Chair"
  },
  "2-8": {
    "room": "Restroom"
  },
  "3-0": {
    "room": "Kitchen",
    "object": "Table"
  },
  "3-1": {
    "room": "Kitchen"
  },
  "3-2": {
    "room": "Kitchen"
  },
  "3-3": {
    "room": "Living Room"
  },
  "3-4": {
    "room": "Living Room",
    "object": "Puddle"
  },
  "3-5": {
    "room": "Restroom"
  },
  "3-6": {
    "room": "Restroom",
    "object": "Table"
  },
  "3-7": {
    "room": "Restroom"
  },
  "3-8": {
    "room": "Restroom",
    "object": "Puddle"
  },
  "4-0": {
    "room": "Living Room"
  },
  "4-1": {
    "room": "Living Room"
  },
  "4-2": {
    "room": "Living Room"
  },
  "4-3": {
    "room": "Living Room"
  },
  "4-4": {
    "room": "Living Room"
  },
  "4-5": {
    "room": "Living Room",
    "object": "Television"
  },
  "4-6": {
    "room": "Bedroom",
    "object": "Table"
  },
  "4-7": {
    "room": "Bedroom"
  },
  "4-8": {
    "room": "Bedroom"
  },
  "5-0": {
    "room": "Living Room"
  },
  "5-1": {
    "room": "Living Room",
    "object": "Table"
  },
  "5-2": {
    "room": "Living Room",
    "object": "Chair"
  },
  "5-3": {
    "room": "Living Room"
  },
  "5-4": {
    "room": "Living Room"
  },
  "5-5": {
    "room": "Living Room"
  },
  "5-6": {
    "room": "Bedroom"
  },
  "5-7": {
    "room": "Bedroom",
    "object": "Bed"
  },
  "5-8": {
    "room": "Bedroom"
  },
  "6-0": {
    "room": "Living Room",
    "object": "Chair"
  },
  "6-1": {
    "room": "Living Room"
  },
  "6-2": {
    "room": "Living Room"
  },
  "6-3": {
    "room": "Porch"
  },
  "6-4": {
    "room": "Porch"
  },
  "6-5": {
    "room": "Porch",
    "object": "Puddle"
  },
  "6-6": {
    "room": "Bedroom"
  },
  "6-7": {
    "room": "Bedroom"
  },
  "6-8": {
    "room": "Bedroom"
  },
  "7-0": {
    "room": "Front Yard"
  },
  "7-1": {
    "room": "Porch"
  },
  "7-2": {
    "room": "Porch",
    "object": "Puddle"
  },
  "7-3": {
    "room": "Porch"
  },
  "7-4": {
    "room": "Porch"
  },
  "7-5": {
    "room": "Porch"
  },
  "7-6": {
    "room": "Porch"
  },
  "7-7": {
    "room": "Porch"
  },
  "7-8": {
    "room": "Front Yard"
  },
  "8-0": {
    "room": "Front Yard"
  },
  "8-1": {
    "room": "Front Yard"
  },
  "8-2": {
    "room": "Front Yard",
    "object": "Rubble"
  },
  "8-3": {
    "room": "Front Yard"
  },
  "8-4": {
    "room": "Front Yard"
  },
  "8-5": {
    "room": "Front Yard"
  },
  "8-6": {
    "room": "Front Yard",
    "object": "Rubble"
  },
  "8-7": {
    "room": "Front Yard",
    "object": "Tree"
  },
  "8-8": {
    "room": "Front Yard"
  }
};

export const case08: CaseDefinition = {
  id: 'case-08',
  title: 'A Messy Situation',
  difficulty: 'hard',
  size: { rows: 9, columns: 9 },
  intro: 'There was no empty area.',
  victimId: 'i-valentino',
  murdererId: 'g-grace',
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-abigail",
        "name": "Abigail",
        "accent": "#f4c76d",
        "portraitKey": "case-08-a-abigail",
        "clues": [
            "She was alone."
        ]
    },
    {
        "id": "b-ben",
        "name": "Ben",
        "accent": "#80c9c1",
        "portraitKey": "case-08-b-ben",
        "clues": [
            "He was southeast of Abigail and northwest of Hawa"
        ]
    },
    {
        "id": "c-carl",
        "name": "Carl",
        "accent": "#d7939d",
        "portraitKey": "case-08-c-carl",
        "clues": [
            "He was on a mud puddle."
        ]
    },
    {
        "id": "d-david",
        "name": "David",
        "accent": "#9db7dc",
        "portraitKey": "case-08-d-david",
        "clues": [
            "He was alone with Carl."
        ]
    },
    {
        "id": "e-edgar",
        "name": "Edgar",
        "accent": "#c7d783",
        "portraitKey": "case-08-e-edgar",
        "clues": [
            "He was beside a tree."
        ]
    },
    {
        "id": "f-france",
        "name": "France",
        "accent": "#f4c76d",
        "portraitKey": "case-08-f-france",
        "clues": [
            "She was on a mud puddle."
        ]
    },
    {
        "id": "g-grace",
        "name": "Grace",
        "accent": "#80c9c1",
        "portraitKey": "case-08-g-grace",
        "clues": [
            "She was sitting in a chair. She was exactly one row north of France."
        ]
    },
    {
        "id": "h-hawa",
        "name": "Hawa",
        "accent": "#d7939d",
        "portraitKey": "case-08-h-hawa",
        "clues": [
            "She was not beside a table."
        ]
    },
    {
        "id": "i-valentino",
        "name": "Valentino",
        "accent": "#9db7dc",
        "portraitKey": "case-08-i-valentino",
        "clues": [
            "The Victim. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-abigail",
        "cellId": "2-1"
    },
    {
        "suspectId": "b-ben",
        "cellId": "3-5"
    },
    {
        "suspectId": "c-carl",
        "cellId": "0-3"
    },
    {
        "suspectId": "d-david",
        "cellId": "1-6"
    },
    {
        "suspectId": "e-edgar",
        "cellId": "8-8"
    },
    {
        "suspectId": "f-france",
        "cellId": "7-2"
    },
    {
        "suspectId": "g-grace",
        "cellId": "6-0"
    },
    {
        "suspectId": "h-hawa",
        "cellId": "5-7"
    },
    {
        "suspectId": "i-valentino",
        "cellId": "4-4"
    }
]
};
