import { describe, expect, it } from 'vitest';
import { objectAssetFor, roomVisualFor, suspectPortraitFor } from '../../src/assets/murdokuAssets';
import { cases } from '../../src/data/cases';
import type { Suspect } from '../../src/game/types';

const publicSvgAssets = import.meta.glob('/public/murdoku-assets/*.svg', { eager: true, query: '?url', import: 'default' });
const publicSvgRawAssets = import.meta.glob('/public/murdoku-assets/*.svg', { eager: true, query: '?raw', import: 'default' });
const publicTextureAssets = import.meta.glob('/public/murdoku-assets/textures/*.svg', { eager: true, query: '?url', import: 'default' });
const publicTextureRawAssets = import.meta.glob('/public/murdoku-assets/textures/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default'
});
const publicPortraitAssets = import.meta.glob('/public/murdoku-assets/portraits/*.svg', { eager: true, query: '?url', import: 'default' });
const publicPortraitRawAssets = import.meta.glob('/public/murdoku-assets/portraits/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default'
});

function publicAssetExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicSvgAssets;
}

function publicTextureExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicTextureAssets;
}

function publicPortraitExists(assetUrl: string): boolean {
  return `/public${assetUrl}` in publicPortraitAssets;
}

function vectorPrimitiveCount(assetUrl: string): number {
  const source = publicSvgRawAssets[`/public${assetUrl}`];
  return String(source ?? '').match(/<(path|ellipse|circle|rect|polygon)\b/g)?.length ?? 0;
}

function portraitDataValues(attribute: string): Set<string> {
  return new Set(
    Object.values(publicPortraitRawAssets)
      .map((source) => String(source).match(new RegExp(`data-${attribute}="([^"]+)"`))?.[1])
      .filter((value): value is string => Boolean(value))
  );
}

function portraitSources(): string[] {
  return Object.values(publicPortraitRawAssets).map((source) => String(source));
}

function primaryTextureColor(room: string): string {
  const source = String(publicTextureRawAssets[`/public${roomVisualFor(room).textureAsset}`] ?? '');
  return source.match(/<rect\b[^>]*\sfill="(#[0-9a-fA-F]{3,6})"/)?.[1].toLowerCase() ?? '';
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

  it('keeps path, walkway, and entrance textures visually separate', () => {
    const pathTexture = publicTextureRawAssets[`/public${roomVisualFor('Path').textureAsset}`];
    const walkwayTexture = publicTextureRawAssets[`/public${roomVisualFor('Walkway').textureAsset}`];
    const entranceTexture = publicTextureRawAssets[`/public${roomVisualFor('Entrance').textureAsset}`];

    expect(pathTexture).not.toBe(walkwayTexture);
    expect(pathTexture).not.toBe(entranceTexture);
    expect(walkwayTexture).not.toBe(entranceTexture);
  });

  it('keeps every named room from sharing the same primary terrain color', () => {
    const rooms = Array.from(
      new Set(
        cases.flatMap((caseDef) =>
          caseDef.cells.map((cell) => cell.room).filter((room): room is string => Boolean(room))
        )
      )
    );
    const roomsByColor = new Map<string, string[]>();

    for (const room of rooms) {
      const color = primaryTextureColor(room);
      expect(color, room).toMatch(/^#[0-9a-f]{6}$/);
      roomsByColor.set(color, [...(roomsByColor.get(color) ?? []), room]);
    }

    const duplicates = Array.from(roomsByColor.entries()).filter(([, colorRooms]) => colorRooms.length > 1);
    expect(duplicates).toEqual([]);
  });

  it('maps every suspect to an existing portrait image', () => {
    const suspects = cases.flatMap((caseDef) => caseDef.suspects) as Suspect[];

    for (const suspect of suspects) {
      const portrait = suspectPortraitFor(suspect);
      expect(portrait, suspect.name).toBeDefined();
      expect(publicPortraitExists(portrait!), suspect.name).toBe(true);
    }
  });

  it('preserves Surprise Visitors carpet scene cells from the reference puzzle', () => {
    const surpriseVisitors = cases.find((caseDef) => caseDef.id === 'case-19');
    expect(surpriseVisitors).toBeDefined();

    const carpetFrames = Object.fromEntries(
      surpriseVisitors!.cells.filter((cell) => cell.carpet).map((cell) => [cell.id, cell.carpet])
    );

    expect(carpetFrames).toEqual({
      '1-1': '7',
      '1-6': '7',
      '2-1': '41',
      '2-6': '35',
      '2-7': '13',
      '3-0': '1',
      '3-1': '48',
      '3-3': '24',
      '3-4': '3',
      '3-5': '20',
      '4-3': '44',
      '4-4': '29',
      '4-5': '40',
      '5-8': '7',
      '6-8': '41',
      '7-8': '43'
    });
  });

  it('preserves carpet scene layer counts for every original-source release case', () => {
    const expectedCarpetCounts: Record<string, number> = {
      'case-06': 0,
      'case-07': 0,
      'case-08': 7,
      'case-09': 0,
      'case-10': 9,
      'case-11': 10,
      'case-12': 5,
      'case-13': 0,
      'case-14': 0,
      'case-15': 11,
      'case-16': 6,
      'case-17': 12,
      'case-18': 0,
      'case-19': 16,
      'case-20': 0
    };

    for (const [caseId, expectedCount] of Object.entries(expectedCarpetCounts)) {
      const caseDef = cases.find((candidate) => candidate.id === caseId);
      expect(caseDef, caseId).toBeDefined();
      expect(caseDef!.cells.filter((cell) => cell.carpet).length, caseId).toBe(expectedCount);
    }
  });

  it('keeps suspect portraits differentiated by person traits', () => {
    expect(Array.from(portraitDataValues('gender'))).toEqual(expect.arrayContaining(['male', 'female']));
    expect(portraitDataValues('age').size).toBeGreaterThanOrEqual(3);
    expect(portraitDataValues('skin').size).toBeGreaterThanOrEqual(5);
    expect(portraitDataValues('body').size).toBeGreaterThanOrEqual(4);
    expect(portraitDataValues('hair').size).toBeGreaterThanOrEqual(8);
  });

  it('keeps suspect portraits in the soft original style with light accessories', () => {
    const accessories = portraitDataValues('accessory');

    expect(Array.from(accessories)).toEqual(expect.arrayContaining(['glasses', 'beard']));
    for (const source of portraitSources()) {
      expect(source).toContain('data-style="soft-original"');
      expect(source).not.toContain('stroke="#1d1714"');
      expect(source).not.toContain('stroke-linejoin="round"');
      expect(source).not.toMatch(/M45 32c3 6|M31 43c5-3|M32 48c5 5|M31 30h6|cy="39" r="1\.3"/);
    }
  });

  it('keeps hand-finished object icons close to the layered reference style', () => {
    const polishedObjects = [
      'Bed',
      'Boulder',
      'Box',
      'Carpet',
      'Chair',
      'Object 58',
      'Puddle',
      'Rubble',
      'Sack',
      'Safe',
      'Table',
      'Table / Carpet',
      'Tree'
    ];

    for (const object of polishedObjects) {
      const asset = objectAssetFor(object);
      expect(asset, object).toBeDefined();
      expect(vectorPrimitiveCount(asset!), object).toBeGreaterThanOrEqual(16);
    }
  });
});
