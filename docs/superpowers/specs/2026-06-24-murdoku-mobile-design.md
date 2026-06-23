# Murdoku Mobile Portrait Design

## Decision

Build a mobile-first portrait web/PWA version of Murdoku in this repository.
The user confirmed authorization to make a high-fidelity version and chose to
reference the live online game at `https://murdoku.com/play/` by manual
observation. The first release scope is 10 playable cases, not a full catalog.

## Assumptions

- The authorized reference is the public online game as visible on
  2026-06-24 in the user's environment.
- Source assets are not provided as files. Any local assets will be recreated
  from manual observation, not copied by importing the original site's bundles.
- The first 10 cases will be selected from the accessible online game in list
  order, unless the user later provides a specific case list.
- The target experience is mobile portrait first. Desktop can work, but it is
  secondary.

## Non-Goals

- No account system, payment, shop, leaderboards, analytics, or online sync.
- No full catalog in the first release.
- No exact source-code reuse from the reference site.
- No Phaser or real-time game engine unless later gameplay requirements change.

## Recommended Approach

Use React + Vite + TypeScript as a small PWA-style app.

This is a DOM-heavy deduction puzzle: grids, cards, text, dialogs, touch states,
save data, and validation. React is simpler and more reliable here than Phaser.
Canvas would make text, accessibility, and mobile sheet behavior harder without
meaningfully improving the puzzle experience.

## Player Experience

The player opens a case, reads suspect clues, places suspects on a crime-scene
grid, marks impossible cells, and submits a final solution. The app checks row
and column uniqueness plus case-specific solution constraints. Wrong submissions
explain the conflict type without revealing the answer.

## Layout

Use the confirmed A layout: board first, bottom controls.

- Top bar: case title, difficulty, settings, submit.
- Main area: crime-scene grid with readable room/object art and placed suspects.
- Context hint strip: selected suspect, current tool, and lightweight mobile
  guidance.
- Suspect rail: horizontal scroll list of portrait cards.
- Bottom toolbar: place mode, X mark, erase, undo, hint/clues.
- Bottom sheet: clues, case notes, settings, and submission feedback.

The grid must fit 390 x 844 without horizontal overflow. Touch targets should be
at least 44 px where possible. Selected and conflicting states need strong
visual feedback.

## Core Interactions

- Tap suspect card: select suspect for placement.
- Tap cell: place selected suspect or apply active tool.
- Long press cell: quick X mark.
- Tap placed suspect: select that suspect and show related clue context.
- Erase tool: remove suspect or X mark from a cell.
- Undo: revert the last meaningful board action.
- Clues button: open a bottom sheet with suspect clues and case rules.
- Submit: validate completion and show success or conflict feedback.
- Settings: reset case, toggle sound if implemented, and return to case list.

## Case Data

Each case should be stored as structured local data:

- id, title, difficulty, grid size, intro text.
- grid cells with wall/room/object metadata.
- suspects with name, portrait asset key, color/accent, clue text.
- victim metadata if separate from suspects.
- solution placements.
- validation rules, including row/column uniqueness and case-specific murder
  logic.

Case data should be separate from UI code so that adding more cases is mostly
data entry plus asset work.

## Visual Direction

High-fidelity mobile adaptation of the reference:

- Dark mystery UI shell.
- Cream paper clue cards.
- Bright suspect portrait cards.
- Thick readable grid outlines and room dividers.
- Handwritten or playful accent type where useful, with normal UI text kept
  crisp and readable.
- Mobile polish: pressed states, selected glow, conflict pulse, solved feedback.

Because no local source art exists yet, the first implementation can use
recreated vector/CSS art and local image assets generated or redrawn during
production. Any rough placeholder must be replaced before calling the first
release done.

## State And Persistence

Persist locally in `localStorage`:

- Current case id.
- Per-case board placements and marks.
- Completed cases.
- Last selected tool and suspect.

Do not persist renderer-only state. Data must be serializable.

## Architecture

- `src/data/cases/`: case definitions.
- `src/game/`: validation, board state reducer, undo stack, persistence helpers.
- `src/components/`: reusable UI pieces such as board, cell, suspect rail,
  toolbar, clue sheet, case list, and submit dialog.
- `src/assets/`: recreated local images and UI art.
- `src/styles/`: tokens, layout, and responsive rules.

Gameplay rules stay outside React components. Components render state and
dispatch actions.

## Testing And Verification

Functional checks:

- Unit tests for row/column uniqueness, placement state, undo, persistence, and
  solution validation.
- Data checks that every one of the 10 cases has a unique complete solution and
  no missing suspect/cell references.
- Browser smoke test at 390 x 844:
  - open case list,
  - start a case,
  - place a suspect,
  - add an X mark,
  - undo,
  - open clues,
  - submit an incomplete board,
  - complete at least one case successfully.

Visual checks:

- No horizontal overflow on 390 x 844.
- Bottom toolbar remains reachable.
- Text does not clip inside suspect cards, clue sheets, or buttons.
- Board remains legible after suspect placement.

## Success Criteria

- 10 cases are playable end to end.
- Mobile portrait layout follows the chosen A structure.
- The app can be started locally with a single documented command.
- Refreshing the page preserves current progress.
- The first case teaches the touch model without a separate manual.
- No temporary companion files or build artifacts are committed.

## Open Points

- Exact first 10 reference cases will be selected during implementation by
  manual observation of the online case list.
- Final art fidelity depends on the time spent recreating the observed art
  locally; implementation should prioritize playable fidelity first, then visual
  tightening before handoff.
