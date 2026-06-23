import { describe, expect, it } from 'vitest';
import { objectAssetFor, roomVisualFor } from '../../src/assets/murdokuAssets';
import { cases } from '../../src/data/cases';

const publicSvgAssets = import.meta.glob('/public/murdoku-assets/*.svg', { eager: true, query: '?url', import: 'default' });

function publicAssetExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicSvgAssets;
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

  it('maps representative rooms to visual floor groups', () => {
    expect(roomVisualFor('Desert').className).toBe('room-desert');
    expect(roomVisualFor('Shack').className).toBe('room-wood');
    expect(roomVisualFor('Woods').className).toBe('room-grass');
    expect(roomVisualFor('Water').className).toBe('room-water');
    expect(roomVisualFor('Carpet').className).toBe('room-carpet');
  });
});
