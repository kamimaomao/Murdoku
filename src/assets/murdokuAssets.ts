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
  statue: 'obj_statue.svg',
  table: 'obj_table.svg',
  'table-carpet': 'obj_table_carpet.svg',
  television: 'obj_television.svg',
  tree: 'obj_tree.svg',
  tv: 'obj_television.svg'
};

export interface RoomVisual {
  className: string;
  textureAsset: string;
}

export interface PortraitSource {
  portraitKey: string;
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
  const slug = roomName ? normalizeObjectName(roomName) : 'default';
  return {
    className: `room-${slug}`,
    textureAsset: `${assetRoot}textures/room_${slug}.svg`
  };
}

export function suspectPortraitFor(suspect: PortraitSource | undefined): string | undefined {
  return suspect ? `${assetRoot}portraits/${suspect.portraitKey}.svg` : undefined;
}
