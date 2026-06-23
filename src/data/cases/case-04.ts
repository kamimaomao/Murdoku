import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "The Desert"
  },
  "0-1": {
    "room": "The Desert"
  },
  "0-2": {
    "room": "The Desert"
  },
  "0-3": {
    "room": "The Desert"
  },
  "0-4": {
    "room": "The Desert",
    "object": "Cactus"
  },
  "0-5": {
    "room": "Path"
  },
  "0-6": {
    "room": "Path"
  },
  "0-7": {
    "room": "Walkway",
    "object": "Table"
  },
  "0-8": {
    "room": "Walkway",
    "object": "Table"
  },
  "0-9": {
    "room": "Walkway",
    "object": "Flowers"
  },
  "1-0": {
    "room": "The Desert"
  },
  "1-1": {
    "room": "Sand"
  },
  "1-2": {
    "room": "Sand"
  },
  "1-3": {
    "room": "The Desert"
  },
  "1-4": {
    "room": "The Desert",
    "object": "Object 58"
  },
  "1-5": {
    "room": "Path"
  },
  "1-6": {
    "room": "Path"
  },
  "1-7": {
    "room": "Path"
  },
  "1-8": {
    "room": "Walkway"
  },
  "1-9": {
    "room": "Walkway"
  },
  "2-0": {
    "room": "Sand"
  },
  "2-1": {
    "room": "Sand"
  },
  "2-2": {
    "room": "Walkway"
  },
  "2-3": {
    "room": "Walkway",
    "object": "Chair"
  },
  "2-4": {
    "room": "Walkway"
  },
  "2-5": {
    "room": "Walkway"
  },
  "2-6": {
    "room": "Path"
  },
  "2-7": {
    "room": "Path"
  },
  "2-8": {
    "room": "Walkway"
  },
  "2-9": {
    "room": "Walkway"
  },
  "3-0": {
    "room": "The Desert"
  },
  "3-1": {
    "room": "The Desert",
    "object": "Cactus"
  },
  "3-2": {
    "room": "Walkway"
  },
  "3-3": {
    "room": "Walkway"
  },
  "3-4": {
    "room": "Walkway"
  },
  "3-5": {
    "room": "The Barrels"
  },
  "3-6": {
    "room": "The Barrels"
  },
  "3-7": {
    "room": "The Barrels",
    "object": "Barrel"
  },
  "3-8": {
    "room": "The Barrels"
  },
  "3-9": {
    "room": "Walkway"
  },
  "4-0": {
    "room": "Path"
  },
  "4-1": {
    "room": "Path"
  },
  "4-2": {
    "room": "Walkway"
  },
  "4-3": {
    "room": "Walkway"
  },
  "4-4": {
    "room": "Walkway"
  },
  "4-5": {
    "room": "The Barrels"
  },
  "4-6": {
    "room": "The Barrels"
  },
  "4-7": {
    "room": "The Barrels"
  },
  "4-8": {
    "room": "The Barrels",
    "object": "Barrel"
  },
  "4-9": {
    "room": "The Barrels"
  },
  "5-0": {
    "room": "Path"
  },
  "5-1": {
    "room": "Path"
  },
  "5-2": {
    "room": "Walkway",
    "object": "Flowers"
  },
  "5-3": {
    "room": "Walkway"
  },
  "5-4": {
    "room": "Walkway"
  },
  "5-5": {
    "room": "The Barrels",
    "object": "Object 58"
  },
  "5-6": {
    "room": "Sand"
  },
  "5-7": {
    "room": "Sand"
  },
  "5-8": {
    "room": "The Barrels"
  },
  "5-9": {
    "room": "The Barrels"
  },
  "6-0": {
    "room": "Water"
  },
  "6-1": {
    "room": "Water"
  },
  "6-2": {
    "room": "Water"
  },
  "6-3": {
    "room": "Path"
  },
  "6-4": {
    "room": "Path"
  },
  "6-5": {
    "room": "Path"
  },
  "6-6": {
    "room": "Entrance"
  },
  "6-7": {
    "room": "Entrance"
  },
  "6-8": {
    "room": "Entrance"
  },
  "6-9": {
    "room": "Entrance",
    "object": "Table"
  },
  "7-0": {
    "room": "Water"
  },
  "7-1": {
    "room": "The Island"
  },
  "7-2": {
    "room": "The Island"
  },
  "7-3": {
    "room": "The Island"
  },
  "7-4": {
    "room": "Path"
  },
  "7-5": {
    "room": "Entrance"
  },
  "7-6": {
    "room": "Entrance"
  },
  "7-7": {
    "room": "Entrance",
    "object": "Table"
  },
  "7-8": {
    "room": "Entrance",
    "object": "Table"
  },
  "7-9": {
    "room": "Entrance",
    "object": "Table"
  },
  "8-0": {
    "room": "The Island",
    "object": "Object 58"
  },
  "8-1": {
    "room": "The Island"
  },
  "8-2": {
    "room": "The Island"
  },
  "8-3": {
    "room": "Water"
  },
  "8-4": {
    "room": "Walkway"
  },
  "8-5": {
    "room": "Entrance"
  },
  "8-6": {
    "room": "Entrance"
  },
  "8-7": {
    "room": "Entrance"
  },
  "8-8": {
    "room": "Entrance"
  },
  "8-9": {
    "room": "Entrance",
    "object": "Plant"
  },
  "9-0": {
    "room": "The Island"
  },
  "9-1": {
    "room": "The Island"
  },
  "9-2": {
    "room": "Water"
  },
  "9-3": {
    "room": "Water"
  },
  "9-4": {
    "room": "Walkway"
  },
  "9-5": {
    "room": "Walkway",
    "object": "Flowers"
  },
  "9-6": {
    "room": "Entrance",
    "object": "Chair"
  },
  "9-7": {
    "room": "Entrance",
    "object": "Chair"
  },
  "9-8": {
    "room": "Entrance"
  },
  "9-9": {
    "room": "Entrance"
  }
};

export const case04: CaseDefinition = {
  id: 'case-04',
  title: 'Minigolf',
  difficulty: 'hard',
  size: { rows: 10, columns: 10 },
  intro: 'There was exactly one person beside a table. There was exactly one person beside a barrel.',
  victimId: 'j-valeria',
  murdererId: 'e-elyana',
  cells: createGrid(10, 10, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-albert",
        "name": "Albert",
        "accent": "#f4c76d",
        "portraitKey": "case-04-a-albert",
        "clues": [
            "He was exactly one row south of someone on a flag."
        ]
    },
    {
        "id": "b-burma",
        "name": "Burma",
        "accent": "#80c9c1",
        "portraitKey": "case-04-b-burma",
        "clues": [
            "She was sitting in a chair."
        ]
    },
    {
        "id": "c-craig",
        "name": "Craig",
        "accent": "#d7939d",
        "portraitKey": "case-04-c-craig",
        "clues": [
            "He was not in a corner."
        ]
    },
    {
        "id": "d-duncan",
        "name": "Duncan",
        "accent": "#9db7dc",
        "portraitKey": "case-04-d-duncan",
        "clues": [
            "He was the only person on a path square."
        ]
    },
    {
        "id": "e-elyana",
        "name": "Elyana",
        "accent": "#c7d783",
        "portraitKey": "case-04-e-elyana",
        "clues": [
            "She was on a sand tile."
        ]
    },
    {
        "id": "f-faith",
        "name": "Faith",
        "accent": "#f4c76d",
        "portraitKey": "case-04-f-faith",
        "clues": [
            "She was alone."
        ]
    },
    {
        "id": "g-ginny",
        "name": "Ginny",
        "accent": "#80c9c1",
        "portraitKey": "case-04-g-ginny",
        "clues": [
            "She was in the top row."
        ]
    },
    {
        "id": "h-hugo",
        "name": "Hugo",
        "accent": "#d7939d",
        "portraitKey": "case-04-h-hugo",
        "clues": [
            "He was beside some flowers."
        ]
    },
    {
        "id": "i-idril",
        "name": "Idril",
        "accent": "#9db7dc",
        "portraitKey": "case-04-i-idril",
        "clues": [
            "She was alone on The Desert with someone."
        ]
    },
    {
        "id": "j-valeria",
        "name": "Valeria",
        "accent": "#c7d783",
        "portraitKey": "case-04-j-valeria",
        "clues": [
            "The Victim. She was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-albert",
        "cellId": "9-9"
    },
    {
        "suspectId": "b-burma",
        "cellId": "2-3"
    },
    {
        "suspectId": "c-craig",
        "cellId": "7-6"
    },
    {
        "suspectId": "d-duncan",
        "cellId": "6-5"
    },
    {
        "suspectId": "e-elyana",
        "cellId": "5-7"
    },
    {
        "suspectId": "f-faith",
        "cellId": "8-0"
    },
    {
        "suspectId": "g-ginny",
        "cellId": "0-1"
    },
    {
        "suspectId": "h-hugo",
        "cellId": "4-2"
    },
    {
        "suspectId": "i-idril",
        "cellId": "1-4"
    },
    {
        "suspectId": "j-valeria",
        "cellId": "3-8"
    }
]
};
