import type { CaseDefinition, CellDefinition } from '../../game/types';
import { createGrid } from './grid';

const decorations: Record<string, Partial<CellDefinition>> = {
  "0-0": {
    "room": "Exposition"
  },
  "0-1": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "0-2": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "0-3": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "0-4": {
    "room": "Exposition",
    "object": "Table"
  },
  "0-5": {
    "room": "Main Gallery",
    "object": "Statue"
  },
  "0-6": {
    "room": "Main Gallery",
    "object": "Rubble"
  },
  "0-7": {
    "room": "Main Gallery"
  },
  "0-8": {
    "room": "Main Gallery",
    "object": "Statue"
  },
  "1-0": {
    "room": "Exposition"
  },
  "1-1": {
    "room": "Exposition"
  },
  "1-2": {
    "room": "Exposition"
  },
  "1-3": {
    "room": "Exposition"
  },
  "1-4": {
    "room": "Exposition"
  },
  "1-5": {
    "room": "Main Gallery"
  },
  "1-6": {
    "room": "Main Gallery"
  },
  "1-7": {
    "room": "Main Gallery"
  },
  "1-8": {
    "room": "Main Gallery"
  },
  "2-0": {
    "room": "Restroom"
  },
  "2-1": {
    "room": "Restroom",
    "object": "Table"
  },
  "2-2": {
    "room": "Exposition"
  },
  "2-3": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "2-4": {
    "room": "Exposition"
  },
  "2-5": {
    "room": "Main Gallery"
  },
  "2-6": {
    "room": "Main Gallery"
  },
  "2-7": {
    "room": "Main Gallery"
  },
  "2-8": {
    "room": "Main Gallery",
    "object": "Table"
  },
  "3-0": {
    "room": "Restroom",
    "object": "Rubble"
  },
  "3-1": {
    "room": "Restroom",
    "object": "Chair"
  },
  "3-2": {
    "room": "Exposition"
  },
  "3-3": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "3-4": {
    "room": "Exposition",
    "object": "Rubble"
  },
  "3-5": {
    "room": "Main Gallery",
    "object": "Statue"
  },
  "3-6": {
    "room": "Main Gallery",
    "object": "Statue"
  },
  "3-7": {
    "room": "Main Gallery"
  },
  "3-8": {
    "room": "Main Gallery"
  },
  "4-0": {
    "room": "Restroom"
  },
  "4-1": {
    "room": "Restroom"
  },
  "4-2": {
    "room": "Lobby"
  },
  "4-3": {
    "room": "Lobby"
  },
  "4-4": {
    "room": "Lobby"
  },
  "4-5": {
    "room": "Cafe"
  },
  "4-6": {
    "room": "Cafe"
  },
  "4-7": {
    "room": "Cafe",
    "object": "Chair"
  },
  "4-8": {
    "room": "Cafe",
    "object": "Table"
  },
  "5-0": {
    "room": "Vault"
  },
  "5-1": {
    "room": "Vault",
    "object": "Shelf"
  },
  "5-2": {
    "room": "Lobby",
    "object": "Statue"
  },
  "5-3": {
    "room": "Lobby"
  },
  "5-4": {
    "room": "Lobby"
  },
  "5-5": {
    "room": "Cafe"
  },
  "5-6": {
    "room": "Cafe"
  },
  "5-7": {
    "room": "Cafe"
  },
  "5-8": {
    "room": "Cafe",
    "object": "Shelf"
  },
  "6-0": {
    "room": "Vault"
  },
  "6-1": {
    "room": "Vault"
  },
  "6-2": {
    "room": "Lobby",
    "object": "Chair"
  },
  "6-3": {
    "room": "Lobby"
  },
  "6-4": {
    "room": "Lobby",
    "object": "Statue"
  },
  "6-5": {
    "room": "Cafe",
    "object": "Chair"
  },
  "6-6": {
    "room": "Cafe",
    "object": "Table"
  },
  "6-7": {
    "room": "Cafe",
    "object": "Chair"
  },
  "6-8": {
    "room": "Cafe"
  },
  "7-0": {
    "room": "Vault",
    "object": "Shelf"
  },
  "7-1": {
    "room": "Vault",
    "object": "Statue"
  },
  "7-2": {
    "room": "Lobby",
    "object": "Chair"
  },
  "7-3": {
    "room": "Lobby"
  },
  "7-4": {
    "room": "Lobby",
    "object": "Rubble"
  },
  "7-5": {
    "room": "Security"
  },
  "7-6": {
    "room": "Security"
  },
  "7-7": {
    "room": "Security",
    "object": "Television"
  },
  "7-8": {
    "room": "Security",
    "object": "Television"
  },
  "8-0": {
    "room": "Vault"
  },
  "8-1": {
    "room": "Vault"
  },
  "8-2": {
    "room": "Lobby"
  },
  "8-3": {
    "room": "Lobby"
  },
  "8-4": {
    "room": "Lobby",
    "object": "Rubble"
  },
  "8-5": {
    "room": "Security",
    "object": "Table"
  },
  "8-6": {
    "room": "Security"
  },
  "8-7": {
    "room": "Security",
    "object": "Chair"
  },
  "8-8": {
    "room": "Security",
    "object": "Table"
  }
};

export const case20: CaseDefinition = {
  id: "case-20",
  title: "The Abandoned Museum",
  difficulty: "hard",
  size: {"rows": 9, "columns": 9},
  intro: "Place every suspect in The Abandoned Museum using the case clues.",
  victimId: "i-vicky",
  murdererId: "h-hugh",
  cells: createGrid(9, 9, (cell) => decorations[cell.id] ?? {}),
  suspects: [
  {
    "id": "a-alysson",
    "name": "Alysson",
    "accent": "#ecb998",
    "portraitKey": "case-20-a-alysson",
    "clues": [
      "She was exactly one column\nwest of George."
    ]
  },
  {
    "id": "b-brenda",
    "name": "Brenda",
    "accent": "#8db8d8",
    "portraitKey": "case-20-b-brenda",
    "clues": [
      "She was sitting on a chair. She\nwas alone with a man."
    ]
  },
  {
    "id": "c-cynthia",
    "name": "Cynthia",
    "accent": "#e6ce71",
    "portraitKey": "case-20-c-cynthia",
    "clues": [
      "She was in the first column.\nShe was south of Alysson."
    ]
  },
  {
    "id": "d-dylan",
    "name": "Dylan",
    "accent": "#556d57",
    "portraitKey": "case-20-d-dylan",
    "clues": [
      "He was beside a table."
    ]
  },
  {
    "id": "e-elsa",
    "name": "Elsa",
    "accent": "#b66b71",
    "portraitKey": "case-20-e-elsa",
    "clues": [
      "There was a man sitting on a\nchair in her area."
    ]
  },
  {
    "id": "f-freya",
    "name": "Freya",
    "accent": "#6ba37d",
    "portraitKey": "case-20-f-freya",
    "clues": [
      "She was beside a statue."
    ]
  },
  {
    "id": "g-george",
    "name": "George",
    "accent": "#9b7bc5",
    "portraitKey": "case-20-g-george",
    "clues": [
      "He was either beside a statue\nor some rubble."
    ]
  },
  {
    "id": "h-hugh",
    "name": "Hugh",
    "accent": "#d08a53",
    "portraitKey": "case-20-h-hugh",
    "clues": [
      "He was beside some rubble.\nHe was not in the Lobby."
    ]
  },
  {
    "id": "i-vicky",
    "name": "Vicky",
    "accent": "#5f8c9c",
    "portraitKey": "case-20-i-vicky",
    "clues": [
      "The Victim. She is in the\nlast remaining position."
    ]
  }
],
  solution: [
  {
    "suspectId": "a-alysson",
    "cellId": "1-3"
  },
  {
    "suspectId": "b-brenda",
    "cellId": "7-2"
  },
  {
    "suspectId": "c-cynthia",
    "cellId": "2-0"
  },
  {
    "suspectId": "d-dylan",
    "cellId": "6-5"
  },
  {
    "suspectId": "e-elsa",
    "cellId": "4-6"
  },
  {
    "suspectId": "f-freya",
    "cellId": "8-1"
  },
  {
    "suspectId": "g-george",
    "cellId": "5-4"
  },
  {
    "suspectId": "h-hugh",
    "cellId": "0-7"
  },
  {
    "suspectId": "i-vicky",
    "cellId": "3-8"
  }
]
};
