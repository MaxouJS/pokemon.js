/**
 * Simple fuzzy match - checks if all query characters appear in order in target.
 * Case-insensitive.
 */
export function fuzzyMatch(query: string, target: string): boolean {
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  let qi = 0;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      qi++;
    }
  }

  return qi === q.length;
}

/**
 * Score a fuzzy match (higher is better, -1 for no match).
 *
 * Scoring rewards:
 * - Consecutive character matches
 * - Matches at the start of the target
 * - Matches at word boundaries (after '-' or ' ')
 */
export function fuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  if (q.length === 0) return 0;
  if (q.length > t.length) return -1;

  if (q === t) return t.length * 3;

  let score = 0;
  let qi = 0;
  let consecutive = 0;
  let prevMatchIndex = -2;

  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      if (ti === prevMatchIndex + 1) {
        consecutive++;
        score += consecutive * 2;
      } else {
        consecutive = 0;
        score += 1;
      }

      if (ti === 0) {
        score += 3;
      }

      if (ti > 0 && (t[ti - 1] === '-' || t[ti - 1] === ' ')) {
        score += 2;
      }

      prevMatchIndex = ti;
      qi++;
    }
  }

  if (qi < q.length) return -1;

  return score;
}
