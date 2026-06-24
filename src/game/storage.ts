import type { GameState } from './types';

const STORAGE_KEY = 'murdoku-mobile-progress-v3';

export interface CaseProgress {
  state: GameState;
  completed: boolean;
}

export interface ProgressState {
  cases: Record<string, CaseProgress>;
}

const emptyProgress = (): ProgressState => ({ cases: {} });

export function loadProgress(): ProgressState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return emptyProgress();

  try {
    const parsed = JSON.parse(raw) as ProgressState;
    if (!parsed || typeof parsed !== 'object' || !parsed.cases) return emptyProgress();
    return parsed;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
