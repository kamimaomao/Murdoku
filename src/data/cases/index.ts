import type { CaseDefinition } from '../../game/types';
import { tutorialCases } from './tutorialCases';

export const cases: CaseDefinition[] = tutorialCases;

export const casesById = Object.fromEntries(cases.map((caseDef) => [caseDef.id, caseDef]));
