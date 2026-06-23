const assetRoot = `${import.meta.env.BASE_URL}murdoku-assets/`;

export const murdokuLogo = `${assetRoot}murdoku_logo_white.png`;

const objectAssets: Record<string, string> = {
  barrel: 'obj_barrel.svg',
  bear: 'obj_bear.svg',
  bed: 'obj_bed.svg',
  boulder: 'obj_boulder.svg',
  box: 'obj_box.svg',
  bush: 'obj_bush.svg',
  cactus: 'obj_cactus.svg',
  car: 'obj_car.svg',
  carpet: 'obj_carpet.svg',
  chair: 'obj_chair.svg',
  crate: 'obj_crate.svg',
  flowers: 'obj_flowers.svg',
  horse: 'obj_horse.svg',
  'object-33': 'obj_empty.svg',
  'object-44': 'obj_bonsai.svg',
  'object-58': 'obj_flag.svg',
  plant: 'obj_plant.svg',
  puddle: 'obj_puddle.svg',
  register: 'obj_register.svg',
  rubble: 'obj_rubble.svg',
  sack: 'obj_sack.svg',
  safe: 'obj_safe.svg',
  shelf: 'obj_shelf.svg',
  table: 'obj_table.svg',
  'table-carpet': 'obj_table_carpet.svg',
  television: 'obj_television.svg',
  tree: 'obj_tree.svg',
  tv: 'obj_television.svg'
};

const roomVisuals: Record<string, string> = {
  altar: 'room-path',
  'back-yard': 'room-grass',
  bank: 'room-wood',
  bedroom: 'room-wood',
  canyon: 'room-desert',
  carpet: 'room-carpet',
  chapel: 'room-path',
  clearing: 'room-grass',
  desert: 'room-desert',
  'discussion-circle': 'room-path',
  'east-court': 'room-path',
  entrance: 'room-path',
  'front-yard': 'room-grass',
  'general-store': 'room-wood',
  'grazing-pasture': 'room-grass',
  kitchen: 'room-wood',
  library: 'room-wood',
  'living-room': 'room-wood',
  outside: 'room-grass',
  'pastor-s-house': 'room-wood',
  path: 'room-path',
  porch: 'room-path',
  preparation: 'room-wood',
  refreshments: 'room-wood',
  restroom: 'room-wood',
  sand: 'room-desert',
  shack: 'room-wood',
  stable: 'room-wood',
  storage: 'room-wood',
  'store-floor': 'room-wood',
  tavern: 'room-wood',
  'tent-a': 'room-canvas',
  'tent-b': 'room-canvas',
  'tent-c': 'room-canvas',
  'the-barrels': 'room-wood',
  'the-desert': 'room-desert',
  'the-island': 'room-grass',
  'tool-shed': 'room-wood',
  'training-ring': 'room-grass',
  walkway: 'room-path',
  water: 'room-water',
  'west-court': 'room-path',
  woods: 'room-grass'
};

export interface RoomVisual {
  className: string;
}

function normalizeObjectName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function objectAssetFor(objectName: string | undefined): string | undefined {
  if (!objectName) return undefined;
  const asset = objectAssets[normalizeObjectName(objectName)];
  return asset ? `${assetRoot}${asset}` : undefined;
}

export function roomVisualFor(roomName: string | undefined): RoomVisual {
  if (!roomName) return { className: 'room-default' };
  return { className: roomVisuals[normalizeObjectName(roomName)] ?? 'room-default' };
}
