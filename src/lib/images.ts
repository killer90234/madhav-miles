/**
 * Single source of truth for imagery URLs.
 *
 * Curated Unsplash imagery appropriate to each destination / place.
 * All URLs use images.unsplash.com directly (no deprecated source.unsplash.com)
 * so builds are deterministic and CDN-cached.
 * When licensed Mahadev Miles photography is available, only this file changes.
 */

export type ImagePreset = 'hero' | 'wide' | 'card' | 'portrait' | 'square' | 'thumb';

const PRESETS: Record<ImagePreset, [number, number]> = {
  hero: [1920, 1080],
  wide: [1600, 900],
  card: [900, 675],
  portrait: [800, 1100],
  square: [800, 800],
  thumb: [320, 240],
};

function buildUnsplash(photoId: string, w: number, h: number): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

function hashSeed(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

/* ─────────────────── Exact curated mapping ─────────────────── */
const EXACT_MAP: Record<string, string> = {
  // Goa
  'goa-hero': 'photo-1512343879784-a960bf40e7f2',
  'goa-card': 'photo-1507525428034-b723cf961d3e',
  'goa-north': 'photo-1519046904884-53103b34b206',
  'goa-south': 'photo-1507525428034-b723cf961d3e',
  'goa-cruise': 'photo-1544550581-5f7ceaf7f992',
  'goa-heritage': 'photo-1530789253388-582c481c54b0',
  // Kashmir
  'kashmir-hero': 'photo-1506905925346-21bda4d32df4',
  'kashmir-card': 'photo-1464822759023-fed622ff2c3b',
  'kashmir-dal': 'photo-1595814433015-e6f633bea34b',
  'kashmir-gulmarg': 'photo-1491555103944-7c647fd857e6',
  'kashmir-pahalgam': 'photo-1464822759844-d150baec0494',
  'kashmir-sonmarg': 'photo-1441974231531-c6227db76b6e',
  // Kerala
  'kerala-hero': 'photo-1602216056096-3b40cc0c9944',
  'kerala-card': 'photo-1602216056096-3b40cc0c9944',
  'kerala-alleppey': 'photo-1593693397690-362cb9666fc2',
  'kerala-munnar': 'photo-1501854140801-50d01698950b',
  'kerala-thekkady': 'photo-1441974231531-c6227db76b6e',
  'kerala-kochi': 'photo-1582653291997-079a1c04e5a6',
  // Rajasthan
  'rajasthan-hero': 'photo-1599661046289-e31897846e41',
  'rajasthan-card': 'photo-1590523277543-a94d2e4eb00b',
  'rajasthan-amber': 'photo-1564501049412-61c2a3083791',
  'rajasthan-jodhpur': 'photo-1477587458883-47145ed94245',
  'rajasthan-udaipur': 'photo-1581793745862-99fdc3c2db3b',
  'rajasthan-jaisalmer': 'photo-1566073771259-6a8506099945',
  // Himachal
  'himachal-hero': 'photo-1469854523086-cc02fe5d8800',
  'himachal-card': 'photo-1506905925346-21bda4d32df4',
  'himachal-shimla': 'photo-1464822759023-fed622ff2c3b',
  'himachal-solang': 'photo-1491555103944-7c647fd857e6',
  'himachal-manali': 'photo-1506905925346-21bda4d32df4',
  'himachal-mcleod': 'photo-1441974231531-c6227db76b6e',
  // Andaman
  'andaman-hero': 'photo-1559128010-7c1ad6e1b6a5',
  'andaman-card': 'photo-1530789253388-582c481c54b0',
  'andaman-havelock': 'photo-1507525428034-b723cf961d3e',
  'andaman-neil': 'photo-1519046904884-53103b34b206',
  'andaman-jail': 'photo-1524492412937-b28074a5d7da',
  'andaman-northbay': 'photo-1544550581-5f7ceaf7f992',
  // Dubai
  'dubai-hero': 'photo-1512453979798-5ea266f8880c',
  'dubai-card': 'photo-1512453979798-5ea266f8880c',
  'dubai-burj': 'photo-1512453979798-5ea266f8880c',
  'dubai-desert': 'photo-1509316975850-ff9c5deb0cd9',
  'dubai-marina': 'photo-1518684079-3c830dcef090',
  'dubai-old': 'photo-1580674684081-7617fbf3d745',
  // Bali
  'bali-hero': 'photo-1533105079780-92b9be482077',
  'bali-card': 'photo-1527631746610-bca00a040d60',
  'bali-ubud': 'photo-1527631746610-bca00a040d60',
  'bali-uluwatu': 'photo-1533105079780-92b9be482077',
  'bali-penida': 'photo-1559128010-7c1ad6e1b6a5',
  'bali-seminyak': 'photo-1537996194471-e657df975ab4',
  // Thailand
  'thailand-hero': 'photo-1552465011-b4e595a46ad8',
  'thailand-card': 'photo-1552465011-b4e595a46ad8',
  'thailand-bangkok': 'photo-1508009603885-50cf7c579365',
  'thailand-phiphi': 'photo-1552465011-b4e595a46ad8',
  'thailand-krabi': 'photo-1520250497591-112f2f40a3f4',
  'thailand-market': 'photo-1528181304800-259b08848526',
  // Maldives
  'maldives-hero': 'photo-1514282401047-d79a71a590e8',
  'maldives-card': 'photo-1514282401047-d79a71a590e8',
  'maldives-villa': 'photo-1514282401047-d79a71a590e8',
  'maldives-reef': 'photo-1544551763-46a013bb70d5',
  'maldives-sandbank': 'photo-1507525428034-b723cf961d3e',
  'maldives-dolphin': 'photo-1544551763-46a013bb70d5',
  // Singapore
  'singapore-hero': 'photo-1525625293386-3f8f993a32c5',
  'singapore-card': 'photo-1525625293386-3f8f993a32c5',
  'singapore-gardens': 'photo-1525625293386-3f8f993a32c5',
  'singapore-sentosa': 'photo-1525625293386-3f8f993a32c5',
  'singapore-marina': 'photo-1525625293386-3f8f993a32c5',
  'singapore-safari': 'photo-1441974231531-c6227db76b6e',
  // Vietnam
  'vietnam-hero': 'photo-1528127269322-539801943592',
  'vietnam-card': 'photo-1528127269322-539801943592',
  'vietnam-halong': 'photo-1528127269322-539801943592',
  'vietnam-hoian': 'photo-1552465011-b4e595a46ad8',
  'vietnam-banahills': 'photo-1527631746610-bca00a040d60',
  'vietnam-mekong': 'photo-1602216056096-3b40cc0c9944',
  // Europe
  'europe-hero': 'photo-1476514525535-07fb3b4ae5f1',
  'europe-card': 'photo-1476514525535-07fb3b4ae5f1',
  'europe-swiss': 'photo-1491555103944-7c647fd857e6',
  'europe-paris': 'photo-1499856871958-5b9627545d1a',
  'europe-italy': 'photo-1523906834658-6e24ef238ea9',
  'europe-amsterdam': 'photo-1534351590666-13e8e96b5017',
  // Categories / regions
  'cat-honeymoon': 'photo-1514282401047-d79a71a590e8',
  'cat-family': 'photo-1520250497591-112f2f40a3f4',
  'cat-luxury': 'photo-1566073771259-6a8506099945',
  'cat-adventure': 'photo-1506905925346-21bda4d32df4',
  'cat-weekend': 'photo-1519046904884-53103b34b206',
  'cat-group': 'photo-1523906834658-6e24ef238ea9',
  'region-domestic': 'photo-1524492412937-b28074a5d7da',
  'region-international': 'photo-1476514525535-07fb3b4ae5f1',
  // Blog
  'blog-kashmir-seasons': 'photo-1506905925346-21bda4d32df4',
  'blog-dubai-visa': 'photo-1512453979798-5ea266f8880c',
  'blog-first-trip': 'photo-1476514525535-07fb3b4ae5f1',
  'blog-bali-itinerary': 'photo-1533105079780-92b9be482077',
  'blog-honeymoon': 'photo-1514282401047-d79a71a590e8',
  'blog-rajasthan-route': 'photo-1599661046289-e31897846e41',
};

/* ───────────────── Galleries — 5 distinct per destination ───────────────── */
const GALLERY_MAP: Record<string, string[]> = {
  goa: [
    'photo-1512343879784-a960bf40e7f2',
    'photo-1507525428034-b723cf961d3e',
    'photo-1519046904884-53103b34b206',
    'photo-1544550581-5f7ceaf7f992',
    'photo-1530789253388-582c481c54b0',
  ],
  kashmir: [
    'photo-1506905925346-21bda4d32df4',
    'photo-1464822759023-fed622ff2c3b',
    'photo-1595814433015-e6f633bea34b',
    'photo-1464822759844-d150baec0494',
    'photo-1441974231531-c6227db76b6e',
  ],
  kerala: [
    'photo-1602216056096-3b40cc0c9944',
    'photo-1593693397690-362cb9666fc2',
    'photo-1501854140801-50d01698950b',
    'photo-1441974231531-c6227db76b6e',
    'photo-1582653291997-079a1c04e5a6',
  ],
  rajasthan: [
    'photo-1599661046289-e31897846e41',
    'photo-1590523277543-a94d2e4eb00b',
    'photo-1564501049412-61c2a3083791',
    'photo-1477587458883-47145ed94245',
    'photo-1581793745862-99fdc3c2db3b',
  ],
  himachal: [
    'photo-1469854523086-cc02fe5d8800',
    'photo-1506905925346-21bda4d32df4',
    'photo-1464822759023-fed622ff2c3b',
    'photo-1491555103944-7c647fd857e6',
    'photo-1441974231531-c6227db76b6e',
  ],
  andaman: [
    'photo-1559128010-7c1ad6e1b6a5',
    'photo-1530789253388-582c481c54b0',
    'photo-1507525428034-b723cf961d3e',
    'photo-1519046904884-53103b34b206',
    'photo-1544550581-5f7ceaf7f992',
  ],
  dubai: [
    'photo-1512453979798-5ea266f8880c',
    'photo-1509316975850-ff9c5deb0cd9',
    'photo-1518684079-3c830dcef090',
    'photo-1580674684081-7617fbf3d745',
    'photo-1524492412937-b28074a5d7da',
  ],
  bali: [
    'photo-1533105079780-92b9be482077',
    'photo-1527631746610-bca00a040d60',
    'photo-1559128010-7c1ad6e1b6a5',
    'photo-1537996194471-e657df975ab4',
    'photo-1520250497591-112f2f40a3f4',
  ],
  thailand: [
    'photo-1552465011-b4e595a46ad8',
    'photo-1508009603885-50cf7c579365',
    'photo-1520250497591-112f2f40a3f4',
    'photo-1528181304800-259b08848526',
    'photo-1533105079780-92b9be482077',
  ],
  maldives: [
    'photo-1514282401047-d79a71a590e8',
    'photo-1507525428034-b723cf961d3e',
    'photo-1544551763-46a013bb70d5',
    'photo-1519046904884-53103b34b206',
    'photo-1441974231531-c6227db76b6e',
  ],
  singapore: [
    'photo-1525625293386-3f8f993a32c5',
    'photo-1533105079780-92b9be482077',
    'photo-1525625293386-3f8f993a32c5',
    'photo-1441974231531-c6227db76b6e',
    'photo-1525625293386-3f8f993a32c5',
  ],
  vietnam: [
    'photo-1528127269322-539801943592',
    'photo-1552465011-b4e595a46ad8',
    'photo-1527631746610-bca00a040d60',
    'photo-1602216056096-3b40cc0c9944',
    'photo-1476514525535-07fb3b4ae5f1',
  ],
  europe: [
    'photo-1476514525535-07fb3b4ae5f1',
    'photo-1491555103944-7c647fd857e6',
    'photo-1499856871958-5b9627545d1a',
    'photo-1523906834658-6e24ef238ea9',
    'photo-1534351590666-13e8e96b5017',
  ],
};

/* ── Keyword pools for dynamic seeds (packages, hotels, experiences) ── */
const KEYWORD_POOLS: Array<[string, string[]]> = [
  ['goa', GALLERY_MAP.goa],
  ['kashmir', GALLERY_MAP.kashmir],
  ['kerala', GALLERY_MAP.kerala],
  ['rajasthan', GALLERY_MAP.rajasthan],
  ['himachal', GALLERY_MAP.himachal],
  ['andaman', GALLERY_MAP.andaman],
  ['dubai', GALLERY_MAP.dubai],
  ['bali', GALLERY_MAP.bali],
  ['thailand', GALLERY_MAP.thailand],
  ['maldives', GALLERY_MAP.maldives],
  ['singapore', GALLERY_MAP.singapore],
  ['vietnam', GALLERY_MAP.vietnam],
  ['europe', GALLERY_MAP.europe],
  ['honeymoon', ['photo-1514282401047-d79a71a590e8', 'photo-1520250497591-112f2f40a3f4', 'photo-1533105079780-92b9be482077']],
  ['family', ['photo-1520250497591-112f2f40a3f4', 'photo-1507525428034-b723cf961d3e', 'photo-1602216056096-3b40cc0c9944']],
  ['luxury', ['photo-1566073771259-6a8506099945', 'photo-1514282401047-d79a71a590e8', 'photo-1525625293386-3f8f993a32c5']],
  ['adventure', ['photo-1506905925346-21bda4d32df4', 'photo-1464822759023-fed622ff2c3b', 'photo-1441974231531-c6227db76b6e']],
  ['hotel', ['photo-1566073771259-6a8506099945', 'photo-1520250497591-112f2f40a3f4', 'photo-1525625293386-3f8f993a32c5']],
  ['offer', ['photo-1512343879784-a960bf40e7f2', 'photo-1512453979798-5ea266f8880c', 'photo-1552465011-b4e595a46ad8']],
  ['exp-', ['photo-1506905925346-21bda4d32df4', 'photo-1544550581-5f7ceaf7f992', 'photo-1520250497591-112f2f40a3f4']],
  ['fd-', ['photo-1476514525535-07fb3b4ae5f1', 'photo-1491555103944-7c647fd857e6', 'photo-1559128010-7c1ad6e1b6a5']],
];

const FALLBACK_POOL = [
  'photo-1476514525535-07fb3b4ae5f1',
  'photo-1507525428034-b723cf961d3e',
  'photo-1506905925346-21bda4d32df4',
  'photo-1514282401047-d79a71a590e8',
  'photo-1520250497591-112f2f40a3f4',
];

function poolForSeed(seed: string): string[] {
  const lower = seed.toLowerCase();
  for (const [kw, pool] of KEYWORD_POOLS) {
    if (lower.includes(kw)) return pool;
  }
  return FALLBACK_POOL;
}

export function img(seed: string, preset: ImagePreset = 'card'): string {
  const [w, h] = PRESETS[preset];
  const exact = EXACT_MAP[seed];
  if (exact) return buildUnsplash(exact, w, h);
  const base = seed.replace(/-\d+$/, '');
  if (base !== seed && EXACT_MAP[base]) return buildUnsplash(EXACT_MAP[base], w, h);
  // deterministic pick from keyword-appropriate pool
  const pool = poolForSeed(seed);
  const idx = hashSeed(seed) % pool.length;
  return buildUnsplash(pool[idx], w, h);
}

/** Builds a small gallery of related images from one seed. */
export function gallery(seed: string, count = 5, preset: ImagePreset = 'wide'): string[] {
  const [w, h] = PRESETS[preset];
  const curated = GALLERY_MAP[seed];
  if (curated) return curated.slice(0, count).map((id) => buildUnsplash(id, w, h));
  const lower = seed.toLowerCase();
  for (const [dest, ids] of Object.entries(GALLERY_MAP)) {
    if (lower.includes(dest)) return ids.slice(0, count).map((id) => buildUnsplash(id, w, h));
  }
  // fallback: deterministic distinct picks from pool
  const pool = poolForSeed(seed);
  const baseHash = hashSeed(seed);
  return Array.from({ length: count }, (_, i) => {
    const id = pool[(baseHash + i) % pool.length];
    return buildUnsplash(id, w, h);
  });
}
