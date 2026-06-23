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

    expect(screen.getByRole('heading', { name: /A Horse With No Name/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /row 5 column 6/i }));

    expect(screen.getByRole('button', { name: /row 5 column 6.*Aldous/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /mark unavailable/i }));
    await user.click(screen.getByRole('button', { name: /row 5 column 6/i }));

    expect(screen.getByRole('button', { name: /row 5 column 6.*marked/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /erase/i }));
    await user.click(screen.getByRole('button', { name: /row 5 column 6/i }));

    expect(screen.getByRole('button', { name: /^row 5 column 6$/i })).toBeInTheDocument();
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
      await user.click(screen.getByRole('button', { name: new RegExp(`row ${row + 1} column ${column + 1}`, 'i') }));
    }

    await user.click(screen.getByRole('button', { name: /accuse/i }));

    const result = screen.getByRole('status');
    expect(result).toHaveTextContent(/case closed/i);
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
      await user.click(screen.getByRole('button', { name: new RegExp(`row ${row + 1} column ${column + 1}`, 'i') }));
    }

    await user.click(screen.getByRole('button', { name: /accuse/i }));
    await user.click(within(screen.getByLabelText(/suspects/i)).getByRole('button', { name: /Aldous/i }));
    unmount();

    render(<App />);

    expect(screen.getByRole('status')).toHaveTextContent(/case closed/i);
  });
});
