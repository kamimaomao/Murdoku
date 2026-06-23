import { case01 } from './case-01';
import { case02 } from './case-02';
import { case03 } from './case-03';
import { case04 } from './case-04';
import { case05 } from './case-05';
import { case06 } from './case-06';
import { case07 } from './case-07';
import { case08 } from './case-08';
import { case09 } from './case-09';
import { case10 } from './case-10';
import type { CaseDefinition } from '../../game/types';

export const cases: CaseDefinition[] = [
  case01,
  case02,
  case03,
  case04,
  case05,
  case06,
  case07,
  case08,
  case09,
  case10
];

export const casesById = Object.fromEntries(cases.map((caseDef) => [caseDef.id, caseDef]));
