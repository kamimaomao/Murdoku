# Observed Cases

Source: https://murdoku.com/play/ public JSON endpoints observed on 2026-06-24 Asia/Shanghai.

The implementation uses local TypeScript case data converted from the public case JSON: titles, difficulty, grid size, suspect names, clue text, room/object metadata, victim marker, murderer index, and solution coordinates. It does not import reference runtime code or image assets.

## Case 1: A Horse With No Name

- Local id: case-01
- Reference id: puzzle-horse-with-no-name-easy
- Difficulty: easy
- Grid size: 6x6
- Intro/case note: There's exactly one outlaw hiding amongst the suspects. The outlaw may or may not be the murderer. The outlaw was on the horse.
- Victim: Vin
- Murderer: Dahlia

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-aldous | Aldous | He was beside a cactus. | 4-5 |
| b-blanche | Blanche | She was not in the Desert. She was in the same diagonal as Aldous. | 1-2 |
| c-cornelius | Cornelius | He was north of Aldous. | 2-4 |
| d-dahlia | Dahlia | She was beside the table. | 5-1 |
| e-emeric | Emeric | He was beside a boulder. | 0-3 |
| f-vin | Vin | The Victim. Not the outlaw. He was alone with the murderer. | 3-0 |

### Rooms And Objects

- Rooms: Desert, Canyon, Shack
- Objects: Boulder, Cactus, Horse, Chair, Table

## Case 2: Frontier Town

- Local id: case-02
- Reference id: puzzle-frontier-town-hard
- Difficulty: hard
- Grid size: 10x10
- Intro/case note: There's exactly one outlaw hiding amongst the suspects. The outlaw may or may not be the murderer. The outlaw was beside a table.
- Victim: Virgil
- Murderer: Duke

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-abigail | Abigail | She was beside a cash register. | 8-3 |
| b-bessie | Bessie | She was in a corner of her area. | 5-2 |
| c-curtis | Curtis | He was sitting in a chair. | 1-0 |
| d-duke | Duke | Not the outlaw. He was beside a chair. | 2-6 |
| e-etta | Etta | She was in the Bank. | 9-7 |
| f-frank | Frank | He was sitting on a horse. | 3-8 |
| g-garrett | Garrett | He was beside a cactus. | 4-1 |
| h-hazel | Hazel | She was sitting in a chair. She was with the outlaw. | 6-9 |
| i-ivy | Ivy | She was south of Hazel, in a different area. | 7-4 |
| j-virgil | Virgil | The Victim. Not the outlaw. He was alone with the murderer. | 0-5 |

### Rooms And Objects

- Rooms: Pastor's House, Outside, Chapel, General Store, Porch, Bank
- Objects: Table, Shelf, Cactus, Horse, Chair, Bed, Sack, Register, Safe

## Case 3: A Remote Village

- Local id: case-03
- Reference id: puzzle-remote-village-hard
- Difficulty: hard
- Grid size: 9x9
- Intro/case note: There was exactly one person sitting in a chair.
- Victim: Vaughn
- Murderer: Graham

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-arnold | Arnold | There was a woman inside a car exactly one row south of him. | 4-3 |
| b-bruce | Bruce | He was beside a tree. | 6-6 |
| c-connor | Connor | He was north of Ethan. | 0-2 |
| d-delilah | Delilah | There was no man in her area. | 2-1 |
| e-ethan | Ethan | There was at least one woman in his area. | 1-8 |
| f-fern | Fern | She was on a carpet. | 3-7 |
| g-graham | Graham | He was in the fifth column. | 8-4 |
| h-hedda | Hedda | She was beside a shrub. | 5-5 |
| i-vaughn | Vaughn | The Victim. He was alone with the murderer. | 7-0 |

### Rooms And Objects

- Rooms: Woods, Tavern, Storage, General Store, Path
- Objects: Flowers, Bush, Tree, Shelf, Chair, Table, Box, Carpet, Car

## Case 4: Minigolf

- Local id: case-04
- Reference id: puzzle-minigolf-hard
- Difficulty: hard
- Grid size: 10x10
- Intro/case note: There was exactly one person beside a table. There was exactly one person beside a barrel.
- Victim: Valeria
- Murderer: Elyana

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-albert | Albert | He was exactly one row south of someone on a flag. | 9-9 |
| b-burma | Burma | She was sitting in a chair. | 2-3 |
| c-craig | Craig | He was not in a corner. | 7-6 |
| d-duncan | Duncan | He was the only person on a path square. | 6-5 |
| e-elyana | Elyana | She was on a sand tile. | 5-7 |
| f-faith | Faith | She was alone. | 8-0 |
| g-ginny | Ginny | She was in the top row. | 0-1 |
| h-hugo | Hugo | He was beside some flowers. | 4-2 |
| i-idril | Idril | She was alone on The Desert with someone. | 1-4 |
| j-valeria | Valeria | The Victim. She was alone with the murderer. | 3-8 |

### Rooms And Objects

- Rooms: The Desert, Path, Walkway, Sand, The Barrels, Water, Entrance, The Island
- Objects: Cactus, Table, Flowers, Object 58, Chair, Barrel, Plant

## Case 5: Grizzly Night

- Local id: case-05
- Reference id: puzzle-grizzly-night-hard
- Difficulty: hard
- Grid size: 9x9
- Intro/case note: There was exactly one person on a carpet.
- Victim: Victor
- Murderer: Dylan

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-alicia | Alicia | She was in Tent A or Tent C. | 8-5 |
| b-brenda | Brenda | She was not on a carpet. She was in the top or in the bottom row. | 0-7 |
| c-clark | Clark | He was the only person beside a shrub. | 3-3 |
| d-dylan | Dylan | He was on a bed. | 6-1 |
| e-ezequiel | Ezequiel | He was the only person in a car. | 1-4 |
| f-florence | Florence | She was in the last column. She was south of Clark. | 7-8 |
| g-george | George | He was sitting in a chair. | 4-6 |
| h-holden | Holden | He was in the Woods. Someone else was beside the bear. | 2-2 |
| i-victor | Victor | The Victim. He was alone with the murderer. | 5-0 |

### Rooms And Objects

- Rooms: Clearing, Tent A, Woods, Tent B, Tent C
- Objects: Car, Table, Bush, Bed, Carpet, Bear, Chair, Tree

## Case 6: The Book Club

- Local id: case-06
- Reference id: puzzle-book-club-very-easy
- Difficulty: very easy
- Grid size: 6x6
- Intro/case note: Place every suspect in The Book Club using the case clues.
- Victim: Vinita
- Murderer: Cameron

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-ada | Ada | She was beside a plant. | 0-3 |
| b-brigitte | Brigitte | She was south of Cameron. | 5-1 |
| c-cameron | Cameron | She was on a carpet. | 4-4 |
| d-darlene | Darlene | She was the only person sitting in a chair. | 3-0 |
| e-edison | Edison | He was in the Library. He was not beside a shelf. | 1-2 |
| f-vinita | Vinita | The Victim. She was alone with the murderer. | 2-5 |

### Rooms And Objects

- Rooms: Library, Discussion Circle, Refreshments
- Objects: Shelf, Plant, Carpet, Chair, Table / Carpet, Table

## Case 7: The Flower Store

- Local id: case-07
- Reference id: puzzle-the-flower-store-easy
- Difficulty: easy
- Grid size: 7x7
- Intro/case note: Place every suspect in The Flower Store using the case clues.
- Victim: Vickie
- Murderer: Vickie

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-amir | Amir | He was beside the bonsai. | 5-6 |
| b-bianca | Bianca | She was in the Preparation area. | 0-2 |
| c-carly | Carly | She was on a carpet. | 2-5 |
| d-diane | Diane | She was sitting in a chair. | 1-1 |
| e-emmett | Emmett | He was in the first column. | 4-0 |
| f-felicia | Felicia | She was on the Store Floor. There was a man in her area. | 3-3 |
| g-vickie | Vickie | The Victim. She was alone with the murderer. | 6-4 |

### Rooms And Objects

- Rooms: Preparation, Store Floor, cashier
- Objects: Table, Shelf, Flowers, Chair, Carpet, Register, Object 44

## Case 8: A Messy Situation

- Local id: case-08
- Reference id: puzzle-a-messy-situation-hard
- Difficulty: hard
- Grid size: 9x9
- Intro/case note: There was no empty area.
- Victim: Valentino
- Murderer: Grace

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-abigail | Abigail | She was alone. | 2-1 |
| b-ben | Ben | He was southeast of Abigail and northwest of Hawa | 3-5 |
| c-carl | Carl | He was on a mud puddle. | 0-3 |
| d-david | David | He was alone with Carl. | 1-6 |
| e-edgar | Edgar | He was beside a tree. | 8-8 |
| f-france | France | She was on a mud puddle. | 7-2 |
| g-grace | Grace | She was sitting in a chair. She was exactly one row north of France. | 6-0 |
| h-hawa | Hawa | She was not beside a table. | 5-7 |
| i-valentino | Valentino | The Victim. He was alone with the murderer. | 4-4 |

### Rooms And Objects

- Rooms: Back Yard, Kitchen, Living Room, Restroom, Bedroom, Porch, Front Yard
- Objects: Object 33, Puddle, Tree, Rubble, Table, Chair, Television, Bed

## Case 9: The Riding Lesson

- Local id: case-09
- Reference id: puzzle-the-riding-lesson-easy
- Difficulty: easy
- Grid size: 9x9
- Intro/case note: Place every suspect in The Riding Lesson using the case clues.
- Victim: Vanessa
- Murderer: Ayla

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-ayla | Ayla | She was beside a shrub. | 8-3 |
| b-brandon | Brandon | He was beside a table. | 1-1 |
| c-christa | Christa | She was one column west of a woman sitting on a horse. | 0-7 |
| d-dolores | Dolores | She was in the fifth column. | 6-4 |
| e-evangeline | Evangeline | She was in the Stable. | 2-8 |
| f-finn | Finn | He was sitting on a horse in the Training Ring. | 5-5 |
| g-gabby | Gabby | She was in the Tool Shed with Brandon. | 3-0 |
| h-heidi | Heidi | She was on a mud puddle. | 4-2 |
| i-vanessa | Vanessa | The Victim. She was alone with the murderer. | 7-6 |

### Rooms And Objects

- Rooms: Tool Shed, Stable, Training Ring, Grazing Pasture
- Objects: Shelf, Crate, Table, Horse, Puddle, Bush, Tree

## Case 10: White Wedding

- Local id: case-10
- Reference id: puzzle-white-wedding-medium
- Difficulty: medium
- Grid size: 9x9
- Intro/case note: There was a man and a woman on the Altar.
- Victim: Vikram
- Murderer: Giulia

### Suspects

| id | reference name | clue | solution cell |
| --- | --- | --- | --- |
| a-archer | Archer | He was beside a table. | 5-8 |
| b-brooke | Brooke | She was beside some flowers. | 7-7 |
| c-crystal | Crystal | She was in the fifth column. | 1-4 |
| d-daisy | Daisy | She was on the Porch. | 8-3 |
| e-ernie | Ernie | He was northeast of Crystal. | 0-5 |
| f-finn | Finn | He was in a corner of his area. | 6-6 |
| g-giulia | Giulia | She was with someone who was beside a tree. | 3-1 |
| h-harper | Harper | She was sitting in a chair. | 4-2 |
| i-vikram | Vikram | The Victim. He was alone with the murderer. | 2-0 |

### Rooms And Objects

- Rooms: West Court, Chapel, Altar, East Court, Porch
- Objects: Flowers, Carpet, Table / Carpet, Tree, Chair, Table

