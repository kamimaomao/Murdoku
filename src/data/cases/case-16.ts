import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Lifeguard's Tower"
  },
  "0-1": {
    "room": "Lifeguard's Tower",
    "object": "Table"
  },
  "0-2": {
    "room": "Beach"
  },
  "0-3": {
    "room": "Beach"
  },
  "0-4": {
    "room": "Changing Room",
    "object": "Table"
  },
  "0-5": {
    "room": "Changing Room",
    "object": "Table"
  },
  "0-6": {
    "room": "Changing Room"
  },
  "1-0": {
    "room": "Lifeguard's Tower",
    "object": "Chair"
  },
  "1-1": {
    "room": "Lifeguard's Tower"
  },
  "1-2": {
    "room": "Beach"
  },
  "1-3": {
    "room": "Beach"
  },
  "1-4": {
    "room": "Changing Room"
  },
  "1-5": {
    "room": "Changing Room"
  },
  "1-6": {
    "room": "Changing Room",
    "object": "Chair"
  },
  "2-0": {
    "room": "Sea"
  },
  "2-1": {
    "room": "Beach"
  },
  "2-2": {
    "room": "Beach"
  },
  "2-3": {
    "room": "Beach"
  },
  "2-4": {
    "room": "Changing Room"
  },
  "2-5": {
    "room": "Beach"
  },
  "2-6": {
    "room": "Beach"
  },
  "3-0": {
    "room": "Sea"
  },
  "3-1": {
    "room": "Beach"
  },
  "3-2": {
    "room": "Beach"
  },
  "3-3": {
    "room": "Beach"
  },
  "3-4": {
    "room": "Beach"
  },
  "3-5": {
    "room": "Beach"
  },
  "3-6": {
    "room": "Beach"
  },
  "4-0": {
    "room": "Sea"
  },
  "4-1": {
    "room": "Sea"
  },
  "4-2": {
    "room": "Beach",
    "object": "Chair"
  },
  "4-3": {
    "room": "Beach"
  },
  "4-4": {
    "room": "Beach"
  },
  "4-5": {
    "room": "Beach"
  },
  "4-6": {
    "room": "Beach"
  },
  "5-0": {
    "room": "Sea",
    "object": "Boulder"
  },
  "5-1": {
    "room": "Sea"
  },
  "5-2": {
    "room": "Sea"
  },
  "5-3": {
    "room": "Beach"
  },
  "5-4": {
    "room": "Beach"
  },
  "5-5": {
    "room": "Beach"
  },
  "5-6": {
    "room": "Beach"
  },
  "6-0": {
    "room": "Sea"
  },
  "6-1": {
    "room": "Sea"
  },
  "6-2": {
    "room": "Sea"
  },
  "6-3": {
    "room": "Sea"
  },
  "6-4": {
    "room": "Sea"
  },
  "6-5": {
    "room": "Sea"
  },
  "6-6": {
    "room": "Sea"
  }
};

export const case16: CaseDefinition = {
  id: "case-16",
  title: "The Beach",
  difficulty: "easy",
  size: {"rows": 7, "columns": 7},
  intro: "Place every suspect in The Beach using the case clues.",
  victimId: "g-valentino",
  murdererId: "a-ashton",
  cells: createGrid(7, 7, (cell) => decorations[cell.id] ?? {}),
  suspects: [
  {
    "id": "a-ashton",
    "name": "Ashton",
    "accent": "#ecb998",
    "portraitKey": "case-16-a-ashton",
    "clues": [
      "He was beside the boulder."
    ]
  },
  {
    "id": "b-brenda",
    "name": "Brenda",
    "accent": "#8db8d8",
    "portraitKey": "case-16-b-brenda",
    "clues": [
      "She was on a carpet."
    ]
  },
  {
    "id": "c-carla",
    "name": "Carla",
    "accent": "#84d2cc",
    "portraitKey": "case-16-c-carla",
    "clues": [
      "She was sitting in a chair. She was not on the Beach."
    ]
  },
  {
    "id": "d-daryl",
    "name": "Daryl",
    "accent": "#556d57",
    "portraitKey": "case-16-d-daryl",
    "clues": [
      "She was on the Beach."
    ]
  },
  {
    "id": "e-earl",
    "name": "Earl",
    "accent": "#7c9970",
    "portraitKey": "case-16-e-earl",
    "clues": [
      "He was beside a chair."
    ]
  },
  {
    "id": "f-fabian",
    "name": "Fabian",
    "accent": "#6ba37d",
    "portraitKey": "case-16-f-fabian",
    "clues": [
      "He was alone in the Lifeguard's Tower."
    ]
  },
  {
    "id": "g-valentino",
    "name": "Valentino",
    "accent": "#9b7bc5",
    "portraitKey": "case-16-g-valentino",
    "clues": [
      "The Victim. He was alone with the murderer."
    ]
  }
],
  solution: [
  {
    "suspectId": "a-ashton",
    "cellId": "5-1"
  },
  {
    "suspectId": "b-brenda",
    "cellId": "4-5"
  },
  {
    "suspectId": "c-carla",
    "cellId": "1-6"
  },
  {
    "suspectId": "d-daryl",
    "cellId": "2-3"
  },
  {
    "suspectId": "e-earl",
    "cellId": "3-2"
  },
  {
    "suspectId": "f-fabian",
    "cellId": "0-0"
  },
  {
    "suspectId": "g-valentino",
    "cellId": "6-4"
  }
]
};
