// Use this for every network request so data is never cached and errors never crash a page.
export async function safeFetch<T>(
  url: string,
  init?: RequestInit
): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await fetch(url, { ...init, cache: "no-store" });
    if (!res.ok) {
      return { data: null, error: `Request failed (${res.status})` };
    }
    return { data: (await res.json()) as T, error: null };
  } catch (err) {
    console.error("[EGO OLE fetch] failed:", url, err);
    return { data: null, error: err instanceof Error ? err.message : "Network error" };
  }
}
