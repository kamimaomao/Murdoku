import type { CaseDefinition } from '../../game/types';
import { originalCases } from './originalCases';
import { tutorialCases } from './tutorialCases';

export const cases: CaseDefinition[] = [...tutorialCases.slice(0, 5), ...originalCases];

export const casesById = Object.fromEntries(cases.map((caseDef) => [caseDef.id, caseDef]));
