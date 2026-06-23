import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../src/App';
import { cases } from '../src/data/cases';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('places, marks, and erases cells with the mobile controls', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('heading', { name: /无名之马/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /第 5 行第 6 列/i }));

    expect(screen.getByRole('button', { name: /第 5 行第 6 列.*Aldous/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /标记不可用/i }));
    await user.click(screen.getByRole('button', { name: /第 5 行第 6 列/i }));

    expect(screen.getByRole('button', { name: /第 5 行第 6 列.*已标记/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /擦除/i }));
    await user.click(screen.getByRole('button', { name: /第 5 行第 6 列/i }));

    expect(screen.getByRole('button', { name: /^第 5 行第 6 列$/i })).toBeInTheDocument();
  });

  it('renders licensed reference assets when available', () => {
    render(<App />);

    expect(screen.getByAltText('Murdoku')).toHaveAttribute('src', '/murdoku-assets/murdoku_logo_white.png');
    expect(screen.getByAltText('马')).toHaveAttribute('src', '/murdoku-assets/obj_horse.svg');
  });

  it('closes the case when all suspects match the solution', async () => {
    const user = userEvent.setup();
    const firstCase = cases[0];
    render(<App />);

    for (const placement of firstCase.solution) {
      const suspect = firstCase.suspects.find((candidate) => candidate.id === placement.suspectId);
      expect(suspect).toBeDefined();

      const [row, column] = placement.cellId.split('-').map(Number);
      await user.click(screen.getByRole('button', { name: new RegExp(suspect!.name, 'i') }));
      await user.click(screen.getByRole('button', { name: new RegExp(`第 ${row + 1} 行第 ${column + 1} 列`, 'i') }));
    }

    await user.click(screen.getByRole('button', { name: /结案/i }));

    const result = screen.getByRole('status');
    expect(result).toHaveTextContent(/案件已结/i);
    expect(within(result).getByText(/Dahlia/i)).toBeInTheDocument();
  });

  it('keeps a closed case closed after non-board actions and reload', async () => {
    const user = userEvent.setup();
    const firstCase = cases[0];
    const { unmount } = render(<App />);

    for (const placement of firstCase.solution) {
      const suspect = firstCase.suspects.find((candidate) => candidate.id === placement.suspectId);
      expect(suspect).toBeDefined();

      const [row, column] = placement.cellId.split('-').map(Number);
      await user.click(screen.getByRole('button', { name: new RegExp(suspect!.name, 'i') }));
      await user.click(screen.getByRole('button', { name: new RegExp(`第 ${row + 1} 行第 ${column + 1} 列`, 'i') }));
    }

    await user.click(screen.getByRole('button', { name: /结案/i }));
    await user.click(within(screen.getByRole('region', { name: '嫌疑人' })).getByRole('button', { name: /Aldous/i }));
    unmount();

    render(<App />);

    expect(screen.getByRole('status')).toHaveTextContent(/案件已结/i);
  });
});
