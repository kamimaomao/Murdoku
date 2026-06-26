import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Guest Bedroom",
    "object": "Shelf"
  },
  "0-1": {
    "room": "Guest Bedroom",
    "object": "Plant"
  },
  "0-2": {
    "room": "Guest Bedroom",
    "object": "Shelf"
  },
  "0-3": {
    "room": "Guest Bedroom"
  },
  "0-4": {
    "room": "Main Bedroom",
    "object": "Table"
  },
  "0-5": {
    "room": "Main Bedroom"
  },
  "0-6": {
    "room": "Main Bedroom",
    "object": "Plant"
  },
  "0-7": {
    "room": "Main Bedroom",
    "object": "Bed"
  },
  "0-8": {
    "room": "Main Bedroom"
  },
  "1-0": {
    "room": "Guest Bedroom",
    "object": "Bed"
  },
  "1-1": {
    "room": "Guest Bedroom",
    "carpet": "7"
  },
  "1-2": {
    "room": "Guest Bedroom"
  },
  "1-3": {
    "room": "Guest Bedroom"
  },
  "1-4": {
    "room": "Main Bedroom"
  },
  "1-5": {
    "room": "Main Bedroom"
  },
  "1-6": {
    "room": "Main Bedroom",
    "carpet": "7"
  },
  "1-7": {
    "room": "Main Bedroom"
  },
  "1-8": {
    "room": "Main Bedroom"
  },
  "2-0": {
    "room": "Guest Bedroom"
  },
  "2-1": {
    "room": "Guest Bedroom",
    "carpet": "41"
  },
  "2-2": {
    "room": "Guest Bedroom",
    "object": "Shelf"
  },
  "2-3": {
    "room": "Living Room"
  },
  "2-4": {
    "room": "Living Room",
    "object": "Television"
  },
  "2-5": {
    "room": "Living Room"
  },
  "2-6": {
    "room": "Main Bedroom",
    "carpet": "35"
  },
  "2-7": {
    "room": "Main Bedroom",
    "carpet": "13"
  },
  "2-8": {
    "room": "Main Bedroom",
    "object": "Chair"
  },
  "3-0": {
    "room": "Guest Bedroom",
    "carpet": "1"
  },
  "3-1": {
    "room": "Guest Bedroom",
    "carpet": "48"
  },
  "3-2": {
    "room": "Living Room",
    "object": "Shelf"
  },
  "3-3": {
    "room": "Living Room",
    "carpet": "24"
  },
  "3-4": {
    "room": "Living Room",
    "carpet": "3"
  },
  "3-5": {
    "room": "Living Room",
    "carpet": "20"
  },
  "3-6": {
    "room": "Living Room",
    "object": "Chair"
  },
  "3-7": {
    "room": "Main Bedroom"
  },
  "3-8": {
    "room": "Main Bedroom",
    "object": "Shelf"
  },
  "4-0": {
    "room": "Guest Bedroom"
  },
  "4-1": {
    "room": "Guest Bedroom",
    "object": "Plant"
  },
  "4-2": {
    "room": "Living Room",
    "object": "Chair"
  },
  "4-3": {
    "room": "Living Room",
    "carpet": "44"
  },
  "4-4": {
    "room": "Living Room",
    "carpet": "29"
  },
  "4-5": {
    "room": "Living Room",
    "carpet": "40"
  },
  "4-6": {
    "room": "Living Room",
    "object": "Chair"
  },
  "4-7": {
    "room": "Kitchen",
    "object": "Chair"
  },
  "4-8": {
    "room": "Kitchen"
  },
  "5-0": {
    "room": "Bathroom",
    "object": "Table"
  },
  "5-1": {
    "room": "Bathroom"
  },
  "5-2": {
    "room": "Living Room"
  },
  "5-3": {
    "room": "Living Room"
  },
  "5-4": {
    "room": "Living Room"
  },
  "5-5": {
    "room": "Living Room",
    "object": "Chair"
  },
  "5-6": {
    "room": "Living Room",
    "object": "Plant"
  },
  "5-7": {
    "room": "Kitchen",
    "object": "Shelf"
  },
  "5-8": {
    "room": "Kitchen",
    "carpet": "7"
  },
  "6-0": {
    "room": "Bathroom",
    "object": "Chair"
  },
  "6-1": {
    "room": "Bathroom"
  },
  "6-2": {
    "room": "Bathroom"
  },
  "6-3": {
    "room": "Bathroom"
  },
  "6-4": {
    "room": "Bathroom"
  },
  "6-5": {
    "room": "Dining Room",
    "object": "Plant"
  },
  "6-6": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "6-7": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "6-8": {
    "room": "Kitchen",
    "carpet": "41"
  },
  "7-0": {
    "room": "Bathroom"
  },
  "7-1": {
    "room": "Bathroom",
    "object": "Table"
  },
  "7-2": {
    "room": "Bathroom"
  },
  "7-3": {
    "room": "Bathroom"
  },
  "7-4": {
    "room": "Dining Room"
  },
  "7-5": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "7-6": {
    "room": "Dining Room",
    "object": "Table"
  },
  "7-7": {
    "room": "Dining Room",
    "object": "Table"
  },
  "7-8": {
    "room": "Kitchen",
    "carpet": "43"
  },
  "8-0": {
    "room": "Bathroom"
  },
  "8-1": {
    "room": "Bathroom",
    "object": "Table"
  },
  "8-2": {
    "room": "Bathroom",
    "object": "Shelf"
  },
  "8-3": {
    "room": "Dining Room"
  },
  "8-4": {
    "room": "Dining Room"
  },
  "8-5": {
    "room": "Dining Room"
  },
  "8-6": {
    "room": "Dining Room"
  },
  "8-7": {
    "room": "Dining Room",
    "object": "Chair"
  },
  "8-8": {
    "room": "Kitchen"
  }
};

export const case19: CaseDefinition = {
  id: "case-19",
  title: "Surprise Visitors",
  difficulty: "medium",
  size: {"rows": 9, "columns": 9},
  intro: "There was exactly one person on a carpet.",
  victimId: "i-virginia",
  murdererId: "e-elliot",
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
  {
    "id": "a-angelo",
    "name": "Angelo",
    "accent": "#ecb998",
    "portraitKey": "case-19-a-angelo",
    "clues": [
      "He was beside the TV."
    ]
  },
  {
    "id": "b-brigitte",
    "name": "Brigitte",
    "accent": "#8db8d8",
    "portraitKey": "case-19-b-brigitte",
    "clues": [
      "She was on a bed."
    ]
  },
  {
    "id": "c-catherine",
    "name": "Catherine",
    "accent": "#e6ce71",
    "portraitKey": "case-19-c-catherine",
    "clues": [
      "She was in the last column."
    ]
  },
  {
    "id": "d-dalton",
    "name": "Dalton",
    "accent": "#556d57",
    "portraitKey": "case-19-d-dalton",
    "clues": [
      "He was beside a table."
    ]
  },
  {
    "id": "e-elliot",
    "name": "Elliot",
    "accent": "#b66b71",
    "portraitKey": "case-19-e-elliot",
    "clues": [
      "He was the only person beside a plant."
    ]
  },
  {
    "id": "f-fabrice",
    "name": "Fabrice",
    "accent": "#6ba37d",
    "portraitKey": "case-19-f-fabrice",
    "clues": [
      "He was beside a shelf."
    ]
  },
  {
    "id": "g-genevieve",
    "name": "Genevieve",
    "accent": "#9b7bc5",
    "portraitKey": "case-19-g-genevieve",
    "clues": [
      "She was beside a bed."
    ]
  },
  {
    "id": "h-hayden",
    "name": "Hayden",
    "accent": "#d08a53",
    "portraitKey": "case-19-h-hayden",
    "clues": [
      "He was sitting in a chair."
    ]
  },
  {
    "id": "i-virginia",
    "name": "Virginia",
    "accent": "#5f8c9c",
    "portraitKey": "case-19-i-virginia",
    "clues": [
      "The Victim. She was alone with the murderer."
    ]
  }
],
  solution: [
  {
    "suspectId": "a-angelo",
    "cellId": "2-5"
  },
  {
    "suspectId": "b-brigitte",
    "cellId": "1-7"
  },
  {
    "suspectId": "c-catherine",
    "cellId": "8-8"
  },
  {
    "suspectId": "d-dalton",
    "cellId": "5-1"
  },
  {
    "suspectId": "e-elliot",
    "cellId": "6-6"
  },
  {
    "suspectId": "f-fabrice",
    "cellId": "0-3"
  },
  {
    "suspectId": "g-genevieve",
    "cellId": "3-0"
  },
  {
    "suspectId": "h-hayden",
    "cellId": "4-2"
  },
  {
    "suspectId": "i-virginia",
    "cellId": "7-4"
  }
]
};
