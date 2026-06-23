const assetRoot = '/murdoku-assets/';

export const murdokuLogo = `${assetRoot}murdoku_logo_white.png`;

const objectAssets: Record<string, string> = {
  barrel: 'obj_barrel.svg',
  bush: 'obj_bush.svg',
  cactus: 'obj_cactus.svg',
  car: 'obj_car.svg',
  crate: 'obj_crate.svg',
  flowers: 'obj_flowers.svg',
  horse: 'obj_horse.svg',
  plant: 'obj_plant.svg',
  register: 'obj_register.svg',
  shelf: 'obj_shelf.svg',
  television: 'obj_television.svg',
  tv: 'obj_television.svg'
};

function normalizeObjectName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export function objectAssetFor(objectName: string | undefined): string | undefined {
  if (!objectName) return undefined;
  const asset = objectAssets[normalizeObjectName(objectName)];
  return asset ? `${assetRoot}${asset}` : undefined;
}
