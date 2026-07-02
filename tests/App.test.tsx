import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../src/App';
import { cases } from '../src/data/cases';

describe('App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  async function chooseCase(user: ReturnType<typeof userEvent.setup>, caseNumber: number) {
    await user.click(screen.getByRole('button', { name: /选择关卡/i }));
    await user.click(screen.getByRole('button', { name: new RegExp(`选择第 ${caseNumber} 关`, 'i') }));
  }

  it('places, marks, and erases cells with the mobile controls', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByRole('heading', { name: /小镇入口/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列/i }));

    expect(screen.getByRole('button', { name: /第 4 行第 4 列.*Aldous/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /标记不可用/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列/i }));

    expect(screen.getByRole('button', { name: /第 4 行第 4 列.*已标记/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /擦除/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列/i }));

    expect(screen.getByRole('button', { name: /^第 4 行第 4 列$/i })).toBeInTheDocument();
  });

  it('explains the one suspect per row and column rule before play', () => {
    render(<App />);

    expect(screen.getByText('规则：每一行、每一列只能放一个角色。')).toBeInTheDocument();
  });

  it('removes a placed suspect when tapping their board cell again', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列.*Aldous/i }));

    expect(screen.getByRole('button', { name: /^第 4 行第 4 列$/i })).toBeInTheDocument();
  });

  it('selects an occupied board suspect instead of moving the current selection onto them', async () => {
    const user = userEvent.setup();
    render(<App />);

    const suspectDock = screen.getByRole('region', { name: '嫌疑人' });
    await user.click(within(suspectDock).getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /^第 4 行第 4 列$/i }));
    await user.click(within(suspectDock).getByRole('button', { name: /Blanche/i }));
    await user.click(screen.getByRole('button', { name: /^第 1 行第 4 列$/i }));

    await user.click(within(suspectDock).getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /第 1 行第 4 列.*Blanche/i }));

    expect(screen.getByRole('heading', { name: 'Blanche' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /第 4 行第 4 列.*Aldous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /第 1 行第 4 列.*Blanche/i })).toBeInTheDocument();
  });

  it('uses a hint to confirm the selected suspect position', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /提示/i }));

    const placement = cases[0].solution.find((candidate) => candidate.suspectId === 'a-aldous');
    expect(placement).toBeDefined();
    const [row, column] = placement!.cellId.split('-').map(Number);
    expect(
      screen.getByRole('button', { name: new RegExp(`第 ${row + 1} 行第 ${column + 1} 列.*Aldous`, 'i') })
    ).toBeInTheDocument();
  });

  it('shows the full answer on the board', async () => {
    const user = userEvent.setup();
    const firstCase = cases[0];
    render(<App />);

    await user.click(screen.getByRole('button', { name: /答案/i }));

    for (const placement of firstCase.solution) {
      const suspect = firstCase.suspects.find((candidate) => candidate.id === placement.suspectId);
      expect(suspect).toBeDefined();

      const [row, column] = placement.cellId.split('-').map(Number);
      expect(
        screen.getByRole('button', { name: new RegExp(`第 ${row + 1} 行第 ${column + 1} 列.*${suspect!.name}`, 'i') })
      ).toBeInTheDocument();
    }

    expect(screen.getByRole('status')).toHaveTextContent(/答案已显示/i);
  });

  it('moves a placed suspect with a touch-first tap sequence', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /^第 4 行第 4 列$/i }));
    await user.click(screen.getByRole('button', { name: /Blanche/i }));

    const source = screen.getByRole('button', { name: /第 4 行第 4 列.*Aldous/i });
    const target = screen.getByRole('button', { name: /^第 1 行第 1 列$/i });

    await user.click(source);
    expect(source).toHaveClass('move-source');
    await user.click(target);

    expect(screen.getByRole('button', { name: /第 1 行第 1 列.*Aldous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^第 4 行第 4 列$/i })).toBeInTheDocument();
  });

  it('opens cases through a mobile level picker instead of a persistent case strip', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.queryByRole('dialog', { name: '选择关卡' })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /选择关卡.*关卡 1/i }));

    expect(screen.getByRole('dialog', { name: '选择关卡' })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /选择第 6 关/i }));

    expect(screen.getByRole('heading', { name: '无名之马' })).toBeInTheDocument();
    expect(screen.queryByRole('dialog', { name: '选择关卡' })).not.toBeInTheDocument();
  });

  it('renders licensed reference assets when available', () => {
    const { container } = render(<App />);

    expect(screen.getByAltText('Murdoku')).toHaveAttribute('src', '/murdoku-assets/murdoku_logo_white.png');
    expect(screen.getByAltText('马')).toHaveAttribute('src', '/murdoku-assets/obj_horse.svg');
    expect(container.querySelector('.cell-terrain-art')).toHaveAttribute('src', '/murdoku-assets/textures/room_desert.svg');
  });

  it('draws room walls only where adjacent cells belong to different rooms', () => {
    render(<App />);

    const desertCorner = screen.getByRole('button', { name: /^第 1 行第 1 列$/i });
    const desertNeighbor = screen.getByRole('button', { name: /^第 1 行第 2 列$/i });
    const canyonStart = screen.getByRole('button', { name: /^第 1 行第 3 列$/i });
    const canyonNeighbor = screen.getByRole('button', { name: /^第 1 行第 4 列$/i });

    expect(desertCorner).toHaveClass('room-edge-n');
    expect(desertCorner).toHaveClass('room-edge-w');
    expect(desertNeighbor).toHaveClass('room-edge-e');
    expect(canyonStart).toHaveClass('room-edge-w');
    expect(canyonStart).not.toHaveClass('room-edge-e');
    expect(canyonNeighbor).not.toHaveClass('room-edge-w');
  });

  it('keeps board labels hidden until a cell is tapped', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);
    const firstCell = screen.getByRole('button', { name: /^第 1 行第 1 列$/i });

    expect(container.querySelectorAll('.board-cell.labels-revealed')).toHaveLength(0);

    await user.click(firstCell);

    expect(firstCell).toHaveClass('labels-revealed');
    expect(container.querySelectorAll('.board-cell.labels-revealed')).toHaveLength(1);
  });

  it('reveals the object name before the room name when a tapped cell has both', async () => {
    const user = userEvent.setup();
    render(<App />);
    const objectCell = screen.getByRole('button', { name: /^第 1 行第 2 列$/i });

    await user.click(objectCell);

    expect(within(objectCell).getByText('马')).toHaveClass('cell-object');
    expect(within(objectCell).queryByText('沙漠')).not.toBeInTheDocument();
  });

  it('renders the Surprise Visitors reference carpet scene layer', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await chooseCase(user, 19);

    const carpetTiles = Array.from(container.querySelectorAll('.cell-carpet'));
    expect(carpetTiles).toHaveLength(16);
    expect(carpetTiles.map((tile) => tile.getAttribute('data-carpet-frame'))).toEqual(
      expect.arrayContaining(['24', '3', '20', '44', '29', '40'])
    );
  });

  it('renders large room labels for indoor scene boards', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await chooseCase(user, 19);

    const labels = Array.from(container.querySelectorAll('.scene-room-label')).map((label) => label.textContent);
    expect(labels).toEqual(expect.arrayContaining(['客房', '客厅', '主卧室', '浴室', '餐厅', '厨房']));
    expect(container.querySelectorAll('.board-cell.labels-revealed')).toHaveLength(0);
  });

  it('renders suspect portraits on the board after placement', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await user.click(screen.getByRole('button', { name: /Aldous/i }));
    await user.click(screen.getByRole('button', { name: /第 4 行第 4 列/i }));

    expect(container.querySelector('.cell-suspect-photo')).toHaveAttribute(
      'src',
      '/murdoku-assets/portraits/case-01-a-aldous.svg'
    );
  });

  it('highlights the selected suspect portrait on the board and varies portrait presentation', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await user.click(screen.getByRole('button', { name: /答案/i }));
    await user.click(within(screen.getByRole('region', { name: '嫌疑人' })).getByRole('button', { name: /Aldous/i }));

    expect(screen.getByRole('button', { name: /第 2 行第 2 列.*Aldous/i })).toHaveClass('selected-suspect');

    const portraitVariants = Array.from(container.querySelectorAll('.cell-suspect-photo')).map((photo) =>
      Array.from(photo.classList).find((className) => className.startsWith('portrait-variant-'))
    );
    expect(new Set(portraitVariants).size).toBeGreaterThan(1);
  });

  it('uses a broad portrait palette in crowded cases', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await chooseCase(user, 20);
    await user.click(screen.getByRole('button', { name: /答案/i }));

    const portraitVariants = Array.from(container.querySelectorAll('.cell-suspect-photo')).map((photo) =>
      Array.from(photo.classList).find((className) => className.startsWith('portrait-variant-'))
    );
    expect(new Set(portraitVariants).size).toBeGreaterThanOrEqual(8);
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
    const murderer = firstCase.suspects.find((suspect) => suspect.id === firstCase.murdererId);
    expect(result).toHaveTextContent(/案件已结/i);
    expect(result).toHaveTextContent('关键人物是');
    expect(result).not.toHaveTextContent('凶手是');
    expect(within(result).getByText(new RegExp(murderer!.name, 'i'))).toBeInTheDocument();
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
