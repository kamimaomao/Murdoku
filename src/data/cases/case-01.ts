import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Desert"
  },
  "0-1": {
    "room": "Canyon"
  },
  "0-2": {
    "room": "Canyon"
  },
  "0-3": {
    "room": "Canyon"
  },
  "0-4": {
    "room": "Canyon",
    "object": "Boulder"
  },
  "0-5": {
    "room": "Desert"
  },
  "1-0": {
    "room": "Desert"
  },
  "1-1": {
    "room": "Desert",
    "object": "Cactus"
  },
  "1-2": {
    "room": "Canyon"
  },
  "1-3": {
    "room": "Canyon"
  },
  "1-4": {
    "room": "Canyon"
  },
  "1-5": {
    "room": "Canyon",
    "object": "Boulder"
  },
  "2-0": {
    "room": "Desert"
  },
  "2-1": {
    "room": "Desert"
  },
  "2-2": {
    "room": "Desert"
  },
  "2-3": {
    "room": "Desert"
  },
  "2-4": {
    "room": "Desert",
    "object": "Horse"
  },
  "2-5": {
    "room": "Desert"
  },
  "3-0": {
    "room": "Shack"
  },
  "3-1": {
    "room": "Shack"
  },
  "3-2": {
    "room": "Desert"
  },
  "3-3": {
    "room": "Desert"
  },
  "3-4": {
    "room": "Desert"
  },
  "3-5": {
    "room": "Desert",
    "object": "Cactus"
  },
  "4-0": {
    "room": "Shack",
    "object": "Chair"
  },
  "4-1": {
    "room": "Shack"
  },
  "4-2": {
    "room": "Desert",
    "object": "Boulder"
  },
  "4-3": {
    "room": "Desert"
  },
  "4-4": {
    "room": "Desert"
  },
  "4-5": {
    "room": "Desert"
  },
  "5-0": {
    "room": "Shack",
    "object": "Table"
  },
  "5-1": {
    "room": "Shack"
  },
  "5-2": {
    "room": "Desert"
  },
  "5-3": {
    "room": "Desert"
  },
  "5-4": {
    "room": "Desert"
  },
  "5-5": {
    "room": "Desert"
  }
};

export const case01: CaseDefinition = {
  id: 'case-01',
  title: 'A Horse With No Name',
  difficulty: 'easy',
  size: { rows: 6, columns: 6 },
  intro: 'There\'s exactly one outlaw hiding amongst the suspects. The outlaw may or may not be the murderer. The outlaw was on the horse.',
  victimId: 'f-vin',
  murdererId: 'd-dahlia',
  cells: createGrid(6, 6, (cell) => decorations[cell.id] ?? {}),
  suspects: [
    {
        "id": "a-aldous",
        "name": "Aldous",
        "accent": "#ecb998",
        "portraitKey": "case-01-a-aldous",
        "clues": [
            "He was beside a cactus."
        ]
    },
    {
        "id": "b-blanche",
        "name": "Blanche",
        "accent": "#e3e5d7",
        "portraitKey": "case-01-b-blanche",
        "clues": [
            "She was not in the Desert. She was in the same diagonal as Aldous."
        ]
    },
    {
        "id": "c-cornelius",
        "name": "Cornelius",
        "accent": "#e4d695",
        "portraitKey": "case-01-c-cornelius",
        "clues": [
            "He was north of Aldous."
        ]
    },
    {
        "id": "d-dahlia",
        "name": "Dahlia",
        "accent": "#556D57",
        "portraitKey": "case-01-d-dahlia",
        "clues": [
            "She was beside the table."
        ]
    },
    {
        "id": "e-emeric",
        "name": "Emeric",
        "accent": "#825E59",
        "portraitKey": "case-01-e-emeric",
        "clues": [
            "He was beside a boulder."
        ]
    },
    {
        "id": "f-vin",
        "name": "Vin",
        "accent": "#a86767",
        "portraitKey": "case-01-f-vin",
        "clues": [
            "The Victim. Not the outlaw. He was alone with the murderer."
        ]
    }
],
  solution: [
    {
        "suspectId": "a-aldous",
        "cellId": "4-5"
    },
    {
        "suspectId": "b-blanche",
        "cellId": "1-2"
    },
    {
        "suspectId": "c-cornelius",
        "cellId": "2-4"
    },
    {
        "suspectId": "d-dahlia",
        "cellId": "5-1"
    },
    {
        "suspectId": "e-emeric",
        "cellId": "0-3"
    },
    {
        "suspectId": "f-vin",
        "cellId": "3-0"
    }
]
};
