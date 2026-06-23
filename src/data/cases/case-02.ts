import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Pastor's House"
  },
  "0-1": {
    "room": "Pastor's House",
    "object": "Table"
  },
  "0-2": {
    "room": "Pastor's House",
    "object": "Shelf"
  },
  "0-3": {
    "room": "Outside"
  },
  "0-4": {
    "room": "Chapel"
  },
  "0-5": {
    "room": "Chapel"
  },
  "0-6": {
    "room": "Chapel"
  },
  "0-7": {
    "room": "Chapel"
  },
  "0-8": {
    "room": "Outside",
    "object": "Cactus"
  },
  "0-9": {
    "room": "Outside",
    "object": "Horse"
  },
  "1-0": {
    "room": "Pastor's House",
    "object": "Chair"
  },
  "1-1": {
    "room": "Pastor's House",
    "object": "Bed"
  },
  "1-2": {
    "room": "Pastor's House"
  },
  "1-3": {
    "room": "Outside",
    "object": "Horse"
  },
  "1-4": {
    "room": "Chapel"
  },
  "1-5": {
    "room": "Chapel",
    "object": "Table"
  },
  "1-6": {
    "room": "Chapel",
    "object": "Table"
  },
  "1-7": {
    "room": "Chapel"
  },
  "1-8": {
    "room": "Outside"
  },
  "1-9": {
    "room": "Outside"
  },
  "2-0": {
    "room": "Pastor's House"
  },
  "2-1": {
    "room": "Pastor's House",
    "object": "Shelf"
  },
  "2-2": {
    "room": "Outside",
    "object": "Sack"
  },
  "2-3": {
    "room": "Outside"
  },
  "2-4": {
    "room": "Chapel",
    "object": "Sack"
  },
  "2-5": {
    "room": "Chapel"
  },
  "2-6": {
    "room": "Chapel"
  },
  "2-7": {
    "room": "Chapel",
    "object": "Chair"
  },
  "2-8": {
    "room": "Outside"
  },
  "2-9": {
    "room": "Outside",
    "object": "Cactus"
  },
  "3-0": {
    "room": "Outside"
  },
  "3-1": {
    "room": "Outside"
  },
  "3-2": {
    "room": "Outside",
    "object": "Chair"
  },
  "3-3": {
    "room": "Outside"
  },
  "3-4": {
    "room": "Chapel",
    "object": "Chair"
  },
  "3-5": {
    "room": "Chapel"
  },
  "3-6": {
    "room": "Chapel"
  },
  "3-7": {
    "room": "Chapel",
    "object": "Chair"
  },
  "3-8": {
    "room": "Outside",
    "object": "Horse"
  },
  "3-9": {
    "room": "Outside"
  },
  "4-0": {
    "room": "Outside",
    "object": "Cactus"
  },
  "4-1": {
    "room": "Outside"
  },
  "4-2": {
    "room": "Outside"
  },
  "4-3": {
    "room": "Outside"
  },
  "4-4": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-5": {
    "room": "Chapel"
  },
  "4-6": {
    "room": "Chapel"
  },
  "4-7": {
    "room": "Chapel",
    "object": "Chair"
  },
  "4-8": {
    "room": "Outside"
  },
  "4-9": {
    "room": "Outside"
  },
  "5-0": {
    "room": "General Store"
  },
  "5-1": {
    "room": "General Store"
  },
  "5-2": {
    "room": "General Store"
  },
  "5-3": {
    "room": "Outside"
  },
  "5-4": {
    "room": "Outside"
  },
  "5-5": {
    "room": "Outside"
  },
  "5-6": {
    "room": "Outside"
  },
  "5-7": {
    "room": "Outside"
  },
  "5-8": {
    "room": "Outside"
  },
  "5-9": {
    "room": "Outside"
  },
  "6-0": {
    "room": "General Store",
    "object": "Shelf"
  },
  "6-1": {
    "room": "General Store"
  },
  "6-2": {
    "room": "General Store"
  },
  "6-3": {
    "room": "Outside"
  },
  "6-4": {
    "room": "Outside",
    "object": "Cactus"
  },
  "6-5": {
    "room": "Outside"
  },
  "6-6": {
    "room": "Porch"
  },
  "6-7": {
    "room": "Bank"
  },
  "6-8": {
    "room": "Bank",
    "object": "Shelf"
  },
  "6-9": {
    "room": "Bank",
    "object": "Chair"
  },
  "7-0": {
    "room": "General Store",
    "object": "Sack"
  },
  "7-1": {
    "room": "General Store"
  },
  "7-2": {
    "room": "General Store",
    "object": "Shelf"
  },
  "7-3": {
    "room": "General Store",
    "object": "Register"
  },
  "7-4": {
    "room": "Porch",
    "object": "Horse"
  },
  "7-5": {
    "room": "Porch",
    "object": "Sack"
  },
  "7-6": {
    "room": "Porch"
  },
  "7-7": {
    "room": "Bank",
    "object": "Table"
  },
  "7-8": {
    "room": "Bank"
  },
  "7-9": {
    "room": "Bank",
    "object": "Table"
  },
  "8-0": {
    "room": "General Store"
  },
  "8-1": {
    "room": "General Store",
    "object": "Chair"
  },
  "8-2": {
    "room": "General Store"
  },
  "8-3": {
    "room": "General Store"
  },
  "8-4": {
    "room": "Porch"
  },
  "8-5": {
    "room": "Porch"
  },
  "8-6": {
    "room": "Bank",
    "object": "Table"
  },
  "8-7": {
    "room": "Bank",
    "object": "Table"
  },
  "8-8": {
    "room": "Bank"
  },
  "8-9": {
    "room": "Bank"
  },
  "9-0": {
    "room": "General Store",
    "object": "Shelf"
  },
  "9-1": {
    "room": "General Store"
  },
  "9-2": {
    "room": "General Store",
    "object": "Shelf"
  },
  "9-3": {
    "room": "General Store",
    "object": "Table"
  },
  "9-4": {
    "room": "Porch"
  },
  "9-5": {
    "room": "Porch",
    "object": "Chair"
  },
  "9-6": {
    "room": "Bank",
    "object": "Safe"
  },
  "9-7": {
    "room": "Bank"
  },
  "9-8": {
    "room": "Bank"
  },
  "9-9": {
    "room": "Bank",
    "object": "Register"
  }
};

export const case02: CaseDefinition = {
  id: 'case-02',
  title: 'Frontier Town',
  difficulty: 'hard',
  size: { rows: 10, columns: 10 },
  intro: 'There\'s exactly one outlaw hiding amongst the suspects. The outlaw may or may not be the murderer. The outlaw was beside a table.',
  victimId: 'j-virgil',
  murdererId: 'd-duke',
  cells: createGrid(10, 10, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-abigail",
        "name": "Abigail",
        "accent": "#ebecd0",
        "portraitKey": "case-02-a-abigail",
        "clues": [
            "She was beside a cash register."
        ]
    },
    {
        "id": "b-bessie",
        "name": "Bessie",
        "accent": "#817355",
        "portraitKey": "case-02-b-bessie",
        "clues": [
            "She was in a corner of her area."
        ]
    },
    {
        "id": "c-curtis",
        "name": "Curtis",
        "accent": "#938153",
        "portraitKey": "case-02-c-curtis",
        "clues": [
            "He was sitting in a chair."
        ]
    },
    {
        "id": "d-duke",
        "name": "Duke",
        "accent": "#92b1bf",
        "portraitKey": "case-02-d-duke",
        "clues": [
            "Not the outlaw. He was beside a chair."
        ]
    },
    {
        "id": "e-etta",
        "name": "Etta",
        "accent": "#826D54",
        "portraitKey": "case-02-e-etta",
        "clues": [
            "She was in the Bank."
        ]
    },
    {
        "id": "f-frank",
        "name": "Frank",
        "accent": "#945262",
        "portraitKey": "case-02-f-frank",
        "clues": [
            "He was sitting on a horse."
        ]
    },
    {
        "id": "g-garrett",
        "name": "Garrett",
        "accent": "#6D6050",
        "portraitKey": "case-02-g-garrett",
        "clues": [
            "He was beside a cactus."
        ]
    },
    {
        "id": "h-hazel",
        "name": "Hazel",
        "accent": "#92af83",
        "portraitKey": "case-02-h-hazel",
        "clues": [
            "She was sitting in a chair. She was with the outlaw."
        ]
    },
    {
        "id": "i-ivy",
        "name": "Ivy",
        "accent": "#958651",
        "portraitKey": "case-02-i-ivy",
        "clues": [
            "She was south of Hazel, in a different area."
        ]
    },
    {
        "id": "j-virgil",
        "name": "Virgil",
        "accent": "#b08582",
        "portraitKey": "case-02-j-virgil",
        "clues": [
            "The Victim. Not the outlaw. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-abigail",
        "cellId": "8-3"
    },
    {
        "suspectId": "b-bessie",
        "cellId": "5-2"
    },
    {
        "suspectId": "c-curtis",
        "cellId": "1-0"
    },
    {
        "suspectId": "d-duke",
        "cellId": "2-6"
    },
    {
        "suspectId": "e-etta",
        "cellId": "9-7"
    },
    {
        "suspectId": "f-frank",
        "cellId": "3-8"
    },
    {
        "suspectId": "g-garrett",
        "cellId": "4-1"
    },
    {
        "suspectId": "h-hazel",
        "cellId": "6-9"
    },
    {
        "suspectId": "i-ivy",
        "cellId": "7-4"
    },
    {
        "suspectId": "j-virgil",
        "cellId": "0-5"
    }
]
};
