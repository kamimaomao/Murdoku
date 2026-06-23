import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Tool Shed",
    "object": "Shelf"
  },
  "0-1": {
    "room": "Tool Shed"
  },
  "0-2": {
    "room": "Tool Shed",
    "object": "Shelf"
  },
  "0-3": {
    "room": "Stable",
    "object": "Crate"
  },
  "0-4": {
    "room": "Stable",
    "object": "Table"
  },
  "0-5": {
    "room": "Stable",
    "object": "Horse"
  },
  "0-6": {
    "room": "Stable"
  },
  "0-7": {
    "room": "Stable"
  },
  "0-8": {
    "room": "Stable"
  },
  "1-0": {
    "room": "Tool Shed",
    "object": "Table"
  },
  "1-1": {
    "room": "Tool Shed"
  },
  "1-2": {
    "room": "Tool Shed"
  },
  "1-3": {
    "room": "Stable",
    "object": "Horse"
  },
  "1-4": {
    "room": "Stable",
    "object": "Table"
  },
  "1-5": {
    "room": "Stable",
    "object": "Table"
  },
  "1-6": {
    "room": "Stable",
    "object": "Table"
  },
  "1-7": {
    "room": "Stable",
    "object": "Horse"
  },
  "1-8": {
    "room": "Stable",
    "object": "Table"
  },
  "2-0": {
    "room": "Tool Shed",
    "object": "Crate"
  },
  "2-1": {
    "room": "Tool Shed"
  },
  "2-2": {
    "room": "Tool Shed",
    "object": "Shelf"
  },
  "2-3": {
    "room": "Stable"
  },
  "2-4": {
    "room": "Stable"
  },
  "2-5": {
    "room": "Stable"
  },
  "2-6": {
    "room": "Stable"
  },
  "2-7": {
    "room": "Stable"
  },
  "2-8": {
    "room": "Stable",
    "object": "Horse"
  },
  "3-0": {
    "room": "Tool Shed"
  },
  "3-1": {
    "room": "Tool Shed"
  },
  "3-2": {
    "room": "Training Ring"
  },
  "3-3": {
    "room": "Training Ring"
  },
  "3-4": {
    "room": "Training Ring",
    "object": "Horse"
  },
  "3-5": {
    "room": "Training Ring"
  },
  "3-6": {
    "room": "Stable"
  },
  "3-7": {
    "room": "Stable",
    "object": "Table"
  },
  "3-8": {
    "room": "Stable",
    "object": "Table"
  },
  "4-0": {
    "room": "Training Ring"
  },
  "4-1": {
    "room": "Training Ring"
  },
  "4-2": {
    "room": "Training Ring",
    "object": "Puddle"
  },
  "4-3": {
    "room": "Training Ring"
  },
  "4-4": {
    "room": "Training Ring"
  },
  "4-5": {
    "room": "Training Ring"
  },
  "4-6": {
    "room": "Training Ring"
  },
  "4-7": {
    "room": "Training Ring"
  },
  "4-8": {
    "room": "Grazing Pasture"
  },
  "5-0": {
    "room": "Training Ring"
  },
  "5-1": {
    "room": "Training Ring",
    "object": "Horse"
  },
  "5-2": {
    "room": "Training Ring"
  },
  "5-3": {
    "room": "Training Ring"
  },
  "5-4": {
    "room": "Training Ring"
  },
  "5-5": {
    "room": "Training Ring",
    "object": "Horse"
  },
  "5-6": {
    "room": "Training Ring"
  },
  "5-7": {
    "room": "Training Ring"
  },
  "5-8": {
    "room": "Grazing Pasture"
  },
  "6-0": {
    "room": "Grazing Pasture"
  },
  "6-1": {
    "room": "Training Ring",
    "object": "Puddle"
  },
  "6-2": {
    "room": "Training Ring"
  },
  "6-3": {
    "room": "Training Ring"
  },
  "6-4": {
    "room": "Training Ring"
  },
  "6-5": {
    "room": "Training Ring",
    "object": "Puddle"
  },
  "6-6": {
    "room": "Training Ring"
  },
  "6-7": {
    "room": "Training Ring"
  },
  "6-8": {
    "room": "Grazing Pasture"
  },
  "7-0": {
    "room": "Grazing Pasture",
    "object": "Bush"
  },
  "7-1": {
    "room": "Grazing Pasture"
  },
  "7-2": {
    "room": "Training Ring"
  },
  "7-3": {
    "room": "Training Ring"
  },
  "7-4": {
    "room": "Training Ring",
    "object": "Crate"
  },
  "7-5": {
    "room": "Training Ring"
  },
  "7-6": {
    "room": "Grazing Pasture"
  },
  "7-7": {
    "room": "Grazing Pasture",
    "object": "Tree"
  },
  "7-8": {
    "room": "Grazing Pasture"
  },
  "8-0": {
    "room": "Grazing Pasture"
  },
  "8-1": {
    "room": "Grazing Pasture",
    "object": "Horse"
  },
  "8-2": {
    "room": "Grazing Pasture",
    "object": "Bush"
  },
  "8-3": {
    "room": "Grazing Pasture"
  },
  "8-4": {
    "room": "Grazing Pasture"
  },
  "8-5": {
    "room": "Grazing Pasture"
  },
  "8-6": {
    "room": "Grazing Pasture"
  },
  "8-7": {
    "room": "Grazing Pasture"
  },
  "8-8": {
    "room": "Grazing Pasture",
    "object": "Bush"
  }
};

export const case09: CaseDefinition = {
  id: 'case-09',
  title: 'The Riding Lesson',
  difficulty: 'easy',
  size: { rows: 9, columns: 9 },
  intro: 'Place every suspect in The Riding Lesson using the case clues.',
  victimId: 'i-vanessa',
  murdererId: 'a-ayla',
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-ayla",
        "name": "Ayla",
        "accent": "#f4c76d",
        "portraitKey": "case-09-a-ayla",
        "clues": [
            "She was beside a shrub."
        ]
    },
    {
        "id": "b-brandon",
        "name": "Brandon",
        "accent": "#80c9c1",
        "portraitKey": "case-09-b-brandon",
        "clues": [
            "He was beside a table."
        ]
    },
    {
        "id": "c-christa",
        "name": "Christa",
        "accent": "#d7939d",
        "portraitKey": "case-09-c-christa",
        "clues": [
            "She was one column west of a woman sitting on a horse."
        ]
    },
    {
        "id": "d-dolores",
        "name": "Dolores",
        "accent": "#9db7dc",
        "portraitKey": "case-09-d-dolores",
        "clues": [
            "She was in the fifth column."
        ]
    },
    {
        "id": "e-evangeline",
        "name": "Evangeline",
        "accent": "#c7d783",
        "portraitKey": "case-09-e-evangeline",
        "clues": [
            "She was in the Stable."
        ]
    },
    {
        "id": "f-finn",
        "name": "Finn",
        "accent": "#f4c76d",
        "portraitKey": "case-09-f-finn",
        "clues": [
            "He was sitting on a horse in the Training Ring."
        ]
    },
    {
        "id": "g-gabby",
        "name": "Gabby",
        "accent": "#80c9c1",
        "portraitKey": "case-09-g-gabby",
        "clues": [
            "She was in the Tool Shed with Brandon."
        ]
    },
    {
        "id": "h-heidi",
        "name": "Heidi",
        "accent": "#d7939d",
        "portraitKey": "case-09-h-heidi",
        "clues": [
            "She was on a mud puddle."
        ]
    },
    {
        "id": "i-vanessa",
        "name": "Vanessa",
        "accent": "#9db7dc",
        "portraitKey": "case-09-i-vanessa",
        "clues": [
            "The Victim. She was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-ayla",
        "cellId": "8-3"
    },
    {
        "suspectId": "b-brandon",
        "cellId": "1-1"
    },
    {
        "suspectId": "c-christa",
        "cellId": "0-7"
    },
    {
        "suspectId": "d-dolores",
        "cellId": "6-4"
    },
    {
        "suspectId": "e-evangeline",
        "cellId": "2-8"
    },
    {
        "suspectId": "f-finn",
        "cellId": "5-5"
    },
    {
        "suspectId": "g-gabby",
        "cellId": "3-0"
    },
    {
        "suspectId": "h-heidi",
        "cellId": "4-2"
    },
    {
        "suspectId": "i-vanessa",
        "cellId": "7-6"
    }
]
};
