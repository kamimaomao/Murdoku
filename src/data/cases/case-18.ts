import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Forest (West)"
  },
  "0-1": {
    "room": "Forest (West)"
  },
  "0-2": {
    "room": "Forest (West)"
  },
  "0-3": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "0-4": {
    "room": "Forest (West)"
  },
  "0-5": {
    "room": "Forest (East)"
  },
  "0-6": {
    "room": "Forest (East)",
    "object": "Tree"
  },
  "0-7": {
    "room": "Forest (East)",
    "object": "Tree"
  },
  "0-8": {
    "room": "Forest (East)"
  },
  "1-0": {
    "room": "Forest (West)"
  },
  "1-1": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "1-2": {
    "room": "Forest (West)"
  },
  "1-3": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "1-4": {
    "room": "Forest (West)"
  },
  "1-5": {
    "room": "Forest (East)"
  },
  "1-6": {
    "room": "Forest (East)"
  },
  "1-7": {
    "room": "Forest (East)",
    "object": "Crate"
  },
  "1-8": {
    "room": "Forest (East)"
  },
  "2-0": {
    "room": "Forest (West)"
  },
  "2-1": {
    "room": "Forest (West)"
  },
  "2-2": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "2-3": {
    "room": "Forest (West)",
    "object": "Chair"
  },
  "2-4": {
    "room": "Lake"
  },
  "2-5": {
    "room": "Lake"
  },
  "2-6": {
    "room": "Forest (East)"
  },
  "2-7": {
    "room": "Forest (East)"
  },
  "2-8": {
    "room": "Forest (East)",
    "object": "Tree"
  },
  "3-0": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "3-1": {
    "room": "Forest (West)"
  },
  "3-2": {
    "room": "Forest (West)"
  },
  "3-3": {
    "room": "Lake"
  },
  "3-4": {
    "room": "Lake"
  },
  "3-5": {
    "room": "Lake"
  },
  "3-6": {
    "room": "Lake"
  },
  "3-7": {
    "room": "Forest (East)"
  },
  "3-8": {
    "room": "Forest (East)",
    "object": "Tree"
  },
  "4-0": {
    "room": "Forest (West)"
  },
  "4-1": {
    "room": "Forest (West)"
  },
  "4-2": {
    "room": "Lake"
  },
  "4-3": {
    "room": "Lake"
  },
  "4-4": {
    "room": "Lake"
  },
  "4-5": {
    "room": "Lake"
  },
  "4-6": {
    "room": "Lake"
  },
  "4-7": {
    "room": "Forest (East)",
    "object": "Chair"
  },
  "4-8": {
    "room": "Forest (East)"
  },
  "5-0": {
    "room": "Forest (West)"
  },
  "5-1": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "5-2": {
    "room": "Lake"
  },
  "5-3": {
    "room": "Lake"
  },
  "5-4": {
    "room": "Lake"
  },
  "5-5": {
    "room": "Lake"
  },
  "5-6": {
    "room": "Lake"
  },
  "5-7": {
    "room": "Lake"
  },
  "5-8": {
    "room": "Forest (East)",
    "object": "Tree"
  },
  "6-0": {
    "room": "Forest (West)"
  },
  "6-1": {
    "room": "Forest (West)"
  },
  "6-2": {
    "room": "Forest (West)"
  },
  "6-3": {
    "room": "Lake"
  },
  "6-4": {
    "room": "Lake"
  },
  "6-5": {
    "room": "Cabin"
  },
  "6-6": {
    "room": "Cabin",
    "object": "Chair"
  },
  "6-7": {
    "room": "Cabin"
  },
  "6-8": {
    "room": "Cabin"
  },
  "7-0": {
    "room": "Forest (West)",
    "object": "Crate"
  },
  "7-1": {
    "room": "Forest (West)"
  },
  "7-2": {
    "room": "Forest (West)",
    "object": "Tree"
  },
  "7-3": {
    "room": "Forest (West)"
  },
  "7-4": {
    "room": "Forest (West)"
  },
  "7-5": {
    "room": "Cabin"
  },
  "7-6": {
    "room": "Cabin"
  },
  "7-7": {
    "room": "Cabin",
    "object": "Table"
  },
  "7-8": {
    "room": "Cabin"
  },
  "8-0": {
    "room": "Shed"
  },
  "8-1": {
    "room": "Shed"
  },
  "8-2": {
    "room": "Forest (West)",
    "object": "Crate"
  },
  "8-3": {
    "room": "Forest (West)"
  },
  "8-4": {
    "room": "Forest (West)"
  },
  "8-5": {
    "room": "Cabin"
  },
  "8-6": {
    "room": "Cabin"
  },
  "8-7": {
    "room": "Cabin"
  },
  "8-8": {
    "room": "Cabin",
    "object": "Crate"
  }
};

export const case18: CaseDefinition = {
  id: "case-18",
  title: "Lakeside Cabin",
  difficulty: "medium",
  size: {"rows": 9, "columns": 9},
  intro: "The Lake can be occupied.",
  victimId: "i-vincenzo",
  murdererId: "c-camila",
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
  {
    "id": "a-alice",
    "name": "Alice",
    "accent": "#ecb998",
    "portraitKey": "case-18-a-alice",
    "clues": [
      "She was in the Cabin alone with\nanother woman."
    ]
  },
  {
    "id": "b-bonnie",
    "name": "Bonnie",
    "accent": "#8db8d8",
    "portraitKey": "case-18-b-bonnie",
    "clues": [
      "She was exactly one row\nabove Harper."
    ]
  },
  {
    "id": "c-camila",
    "name": "Camila",
    "accent": "#e6ce71",
    "portraitKey": "case-18-c-camila",
    "clues": [
      "She was in the fifth row."
    ]
  },
  {
    "id": "d-daniel",
    "name": "Daniel",
    "accent": "#556d57",
    "portraitKey": "case-18-d-daniel",
    "clues": [
      "He was south of Alice\nand west of Finlay."
    ]
  },
  {
    "id": "e-eliza",
    "name": "Eliza",
    "accent": "#b66b71",
    "portraitKey": "case-18-e-eliza",
    "clues": [
      "She was the only person sitting on a chair."
    ]
  },
  {
    "id": "f-finlay",
    "name": "Finlay",
    "accent": "#6ba37d",
    "portraitKey": "case-18-f-finlay",
    "clues": [
      "He was beside a tree. Someone north of him was beside the same tree."
    ]
  },
  {
    "id": "g-gilbert",
    "name": "Gilbert",
    "accent": "#9b7bc5",
    "portraitKey": "case-18-g-gilbert",
    "clues": [
      "He was not in a corner."
    ]
  },
  {
    "id": "h-harper",
    "name": "Harper",
    "accent": "#d08a53",
    "portraitKey": "case-18-h-harper",
    "clues": [
      "He was in Forest (West) or Forest (East).\nHe was not beside a tree."
    ]
  },
  {
    "id": "i-vincenzo",
    "name": "Vincenzo",
    "accent": "#5f8c9c",
    "portraitKey": "case-18-i-vincenzo",
    "clues": [
      "The Victim. He was alone with the murderer."
    ]
  }
],
  solution: [
  {
    "suspectId": "a-alice",
    "cellId": "7-8"
  },
  {
    "suspectId": "b-bonnie",
    "cellId": "0-4"
  },
  {
    "suspectId": "c-camila",
    "cellId": "4-3"
  },
  {
    "suspectId": "d-daniel",
    "cellId": "8-0"
  },
  {
    "suspectId": "e-eliza",
    "cellId": "6-6"
  },
  {
    "suspectId": "f-finlay",
    "cellId": "3-2"
  },
  {
    "suspectId": "g-gilbert",
    "cellId": "2-1"
  },
  {
    "suspectId": "h-harper",
    "cellId": "1-5"
  },
  {
    "suspectId": "i-vincenzo",
    "cellId": "5-7"
  }
]
};
