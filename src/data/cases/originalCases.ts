import type { CaseDefinition } from '../../game/types';
import { case01 as originalCase01 } from './case-01';
import { case02 as originalCase02 } from './case-02';
import { case03 as originalCase03 } from './case-03';
import { case04 as originalCase04 } from './case-04';
import { case05 as originalCase05 } from './case-05';
import { case06 as originalCase06 } from './case-06';
import { case07 as originalCase07 } from './case-07';
import { case08 as originalCase08 } from './case-08';
import { case09 as originalCase09 } from './case-09';
import { case10 as originalCase10 } from './case-10';
import { case16 } from './case-16';
import { case17 } from './case-17';
import { case18 } from './case-18';
import { case19 } from './case-19';
import { case20 } from './case-20';

const originalSourceCases = [
  originalCase01,
  originalCase02,
  originalCase03,
  originalCase04,
  originalCase05,
  originalCase06,
  originalCase07,
  originalCase08,
  originalCase09,
  originalCase10,
  case16,
  case17,
  case18,
  case19,
  case20,
];

export const originalCases: CaseDefinition[] = originalSourceCases.map((caseDef, index) => ({
  ...caseDef,
  id: `case-${String(index + 6).padStart(2, '0')}`
}));
