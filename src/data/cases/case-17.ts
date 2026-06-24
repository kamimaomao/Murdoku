import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Kitchen",
    "object": "Table"
  },
  "0-1": {
    "room": "Kitchen",
    "object": "Table"
  },
  "0-2": {
    "room": "Kitchen"
  },
  "0-3": {
    "room": "Kitchen",
    "object": "Shelf"
  },
  "0-4": {
    "room": "Kitchen",
    "object": "Table"
  },
  "0-5": {
    "room": "Restroom"
  },
  "0-6": {
    "room": "Restroom",
    "object": "Chair"
  },
  "0-7": {
    "room": "Restroom"
  },
  "1-0": {
    "room": "Kitchen",
    "object": "Table"
  },
  "1-1": {
    "room": "Kitchen"
  },
  "1-2": {
    "room": "Kitchen"
  },
  "1-3": {
    "room": "Kitchen"
  },
  "1-4": {
    "room": "Kitchen"
  },
  "1-5": {
    "room": "Kitchen",
    "object": "Shelf"
  },
  "1-6": {
    "room": "Restroom",
    "object": "Table"
  },
  "1-7": {
    "room": "Restroom"
  },
  "2-0": {
    "room": "Kitchen"
  },
  "2-1": {
    "room": "Kitchen"
  },
  "2-2": {
    "room": "Kitchen"
  },
  "2-3": {
    "room": "Kitchen"
  },
  "2-4": {
    "room": "Kitchen"
  },
  "2-5": {
    "room": "Kitchen"
  },
  "2-6": {
    "room": "Restroom",
    "object": "Plant"
  },
  "2-7": {
    "room": "Restroom"
  },
  "3-0": {
    "room": "Kitchen"
  },
  "3-1": {
    "room": "Kitchen",
    "object": "Table"
  },
  "3-2": {
    "room": "Kitchen",
    "object": "Table"
  },
  "3-3": {
    "room": "Kitchen",
    "object": "Table"
  },
  "3-4": {
    "room": "Kitchen"
  },
  "3-5": {
    "room": "Restroom"
  },
  "3-6": {
    "room": "Restroom"
  },
  "3-7": {
    "room": "Restroom",
    "object": "Chair"
  },
  "4-0": {
    "room": "Reception"
  },
  "4-1": {
    "room": "Reception",
    "object": "Shelf"
  },
  "4-2": {
    "room": "Dining Room"
  },
  "4-3": {
    "room": "Dining Room"
  },
  "4-4": {
    "room": "Dining Room",
    "object": "Plant"
  },
  "4-5": {
    "room": "Dining Room",
    "object": "Table"
  },
  "4-6": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "4-7": {
    "room": "Dining Room"
  },
  "5-0": {
    "room": "Reception",
    "object": "Table"
  },
  "5-1": {
    "room": "Reception"
  },
  "5-2": {
    "room": "Dining Room"
  },
  "5-3": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "5-4": {
    "room": "Dining Room"
  },
  "5-5": {
    "room": "Dining Room"
  },
  "5-6": {
    "room": "Dining Room",
    "object": "Table"
  },
  "5-7": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "6-0": {
    "room": "Reception",
    "object": "Table"
  },
  "6-1": {
    "room": "Reception",
    "object": "Table"
  },
  "6-2": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "6-3": {
    "room": "Dining Room",
    "object": "Table"
  },
  "6-4": {
    "room": "Dining Room"
  },
  "6-5": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "6-6": {
    "room": "Dining Room"
  },
  "6-7": {
    "room": "Dining Room"
  },
  "7-0": {
    "room": "Reception"
  },
  "7-1": {
    "room": "Reception"
  },
  "7-2": {
    "room": "Reception"
  },
  "7-3": {
    "room": "Dining Room"
  },
  "7-4": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "7-5": {
    "room": "Dining Room",
    "object": "Table"
  },
  "7-6": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "7-7": {
    "room": "Dining Room"
  }
};

export const case17: CaseDefinition = {
  id: "case-17",
  title: "Hell's Kitchen",
  difficulty: "medium",
  size: {"rows": 8, "columns": 8},
  intro: "Every man was beside a table. For every man beside a table, a woman was beside the same table.",
  victimId: "h-vala",
  murdererId: "a-amelia",
  cells: createGrid(8, 8, (cell) => decorations[cell.id] ?? {}),
  suspects: [
  {
    "id": "a-amelia",
    "name": "Amelia",
    "accent": "#ecb998",
    "portraitKey": "case-17-a-amelia",
    "clues": [
      "She was beside a plant."
    ]
  },
  {
    "id": "b-brittney",
    "name": "Brittney",
    "accent": "#8db8d8",
    "portraitKey": "case-17-b-brittney",
    "clues": [
      "She was not sitting in a chair."
    ]
  },
  {
    "id": "c-claude",
    "name": "Claude",
    "accent": "#e6ce71",
    "portraitKey": "case-17-c-claude",
    "clues": [
      "He was on a carpet."
    ]
  },
  {
    "id": "d-douglas",
    "name": "Douglas",
    "accent": "#556d57",
    "portraitKey": "case-17-d-douglas",
    "clues": [
      "He was not sitting in a chair."
    ]
  },
  {
    "id": "e-enid",
    "name": "Enid",
    "accent": "#b66b71",
    "portraitKey": "case-17-e-enid",
    "clues": [
      "She was beside a shelf."
    ]
  },
  {
    "id": "f-fiona",
    "name": "Fiona",
    "accent": "#6ba37d",
    "portraitKey": "case-17-f-fiona",
    "clues": [
      "She was in the Restroom."
    ]
  },
  {
    "id": "g-giovanni",
    "name": "Giovanni",
    "accent": "#9b7bc5",
    "portraitKey": "case-17-g-giovanni",
    "clues": [
      "He was at the Reception."
    ]
  },
  {
    "id": "h-vala",
    "name": "Vala",
    "accent": "#d08a53",
    "portraitKey": "case-17-h-vala",
    "clues": [
      "The Victim. She was alone with the murderer."
    ]
  }
],
  solution: [
  {
    "suspectId": "a-amelia",
    "cellId": "4-3"
  },
  {
    "suspectId": "b-brittney",
    "cellId": "3-4"
  },
  {
    "suspectId": "c-claude",
    "cellId": "2-2"
  },
  {
    "suspectId": "d-douglas",
    "cellId": "1-7"
  },
  {
    "suspectId": "e-enid",
    "cellId": "5-1"
  },
  {
    "suspectId": "f-fiona",
    "cellId": "0-6"
  },
  {
    "suspectId": "g-giovanni",
    "cellId": "7-0"
  },
  {
    "suspectId": "h-vala",
    "cellId": "6-5"
  }
]
};
