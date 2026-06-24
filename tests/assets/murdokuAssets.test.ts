import { describe, expect, it } from 'vitest';
import { objectAssetFor, roomVisualFor, suspectPortraitFor } from '../../src/assets/murdokuAssets';
import { cases } from '../../src/data/cases';
import type { Suspect } from '../../src/game/types';

const publicSvgAssets = import.meta.glob('/public/murdoku-assets/*.svg', { eager: true, query: '?url', import: 'default' });
const publicTextureAssets = import.meta.glob('/public/murdoku-assets/textures/*.svg', { eager: true, query: '?url', import: 'default' });
const publicPortraitAssets = import.meta.glob('/public/murdoku-assets/portraits/*.svg', { eager: true, query: '?url', import: 'default' });

function publicAssetExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicSvgAssets;
}

function publicTextureExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicTextureAssets;
}

function publicPortraitExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicPortraitAssets;
}

describe('murdoku reference art assets', () => {
  it('maps every case object to an existing cell icon', () => {
    const objects = new Set(cases.flatMap((caseDef) => caseDef.cells.map((cell) => cell.object).filter(Boolean)));

    for (const object of objects) {
      const asset = objectAssetFor(object);
      expect(asset, object).toBeDefined();
      expect(publicAssetExists(asset!), object).toBe(true);
    }
  });

  it('maps representative rooms to distinct visual floor groups', () => {
    expect(roomVisualFor('Desert').className).toBe('room-desert');
    expect(roomVisualFor('Canyon').className).toBe('room-canyon');
    expect(roomVisualFor('Desert').textureAsset).not.toBe(roomVisualFor('Canyon').textureAsset);
    expect(roomVisualFor('Water').className).toBe('room-water');
    expect(roomVisualFor('Carpet').className).toBe('room-carpet');
  });

  it('maps every case room to its own existing terrain texture', () => {
    const rooms = new Set(cases.flatMap((caseDef) => caseDef.cells.map((cell) => cell.room).filter(Boolean)));
    const textureAssets = new Set<string>();

    for (const room of rooms) {
      const visual = roomVisualFor(room);
      expect(visual.textureAsset, room).toBeDefined();
      expect(publicTextureExists(visual.textureAsset), room).toBe(true);
      textureAssets.add(visual.textureAsset);
    }

    expect(textureAssets.size).toBe(rooms.size);
  });

  it('maps every suspect to an existing portrait image', () => {
    const suspects = cases.flatMap((caseDef) => caseDef.suspects) as Suspect[];

    for (const suspect of suspects) {
      const portrait = suspectPortraitFor(suspect);
      expect(portrait, suspect.name).toBeDefined();
      expect(publicPortraitExists(portrait!), suspect.name).toBe(true);
    }
  });
});
