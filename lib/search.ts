import { type Item, getMarketById, getVendorById } from './mockData';

// Each group lists words that mean the same thing. Searching any word finds all of them.
const SYNONYM_GROUPS: string[][] = [
  ["okro", "okra", "okwuru", "ladyfinger", "lady finger", "gumbo"],
  ["ifite", "ogwari", "ifite ogwari"],
  ["tender", "small", "fresh", "soft"],
  ["rice", "osikapa"],
  ["yam", "ji"],
  ["beans", "agwa"],
  ["palm oil", "mmanu", "red oil"],
  ["fish", "azu", "mangala", "stockfish"],
  ["shoe", "sneakers", "footwear"],
  ["bag", "handbag", "purse"],
  ["wig", "hair", "weave"],
  ["clothes", "cloth", "fabric", "lace", "ankara", "outfit"],
  ["foodstuff", "food", "provisions"],
];

export function normalize(value: string | undefined | null): string {
  return (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const NORMALIZED_GROUPS = SYNONYM_GROUPS.map((group) => group.map(normalize));

function expandToken(token: string): string[] {
  const variants = new Set<string>([token]);
  if (token.length > 3 && token.endsWith("s")) variants.add(token.slice(0, -1));
  for (const group of NORMALIZED_GROUPS) {
    const hit = group.some((word) => Array.from(variants).some((v) => word === v || word.split(" ").includes(v)));
    if (hit) group.forEach((word) => variants.add(word));
  }
  return Array.from(variants);
}

/**
 * Case-insensitive, trimmed, synonym-aware match.
 * Every word typed must match (directly or via a synonym) somewhere in the fields.
 * An empty search matches everything.
 */
export function matchesSearch(search: string, fields: Array<string | undefined | null>): boolean {
  const term = normalize(search);
  if (!term) return true;

  const haystack = normalize(fields.filter(Boolean).join(" "));
  if (haystack.includes(term)) return true;

  return term
    .split(" ")
    .every((token) => expandToken(token).some((variant) => haystack.includes(variant)));
}

export function searchItems<T extends Item>(list: T[], search: string): T[] {
  return list.filter((item) => {
    const market = getMarketById(item.marketId);
    const vendor = item.vendorId ? getVendorById(item.vendorId) : undefined;
    return matchesSearch(search, [
      item.name,
      item.category,
      item.unit,
      ...(item.tags ?? []),
      market?.name,
      market?.state,
      vendor?.name,
      vendor?.specialty,
      vendor?.location,
    ]);
  });
}

export function logSearch(scope: string, search: string, resultCount: number) {
  console.log(`[EGO OLE search:${scope}]`, { search: search.trim(), resultCount });
}
