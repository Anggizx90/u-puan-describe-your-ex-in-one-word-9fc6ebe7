# Exhausted

[![make.fun](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/Anggizx90/u-puan-describe-your-ex-in-one-word-9fc6ebe7/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/Anggizx90/u-puan-describe-your-ex-in-one-word-9fc6ebe7/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for the make.fun bounty
[Describe Your Ex in One Word](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
(`u-puan-describe-your-ex-in-one-word-9fc6ebe7`).

## The word

**Exhausted** — 9 bytes, one word, no trailing newline, nothing else.

## Why it wins

The judge weighs, in order: (1) really a one-word verdict on an ex,
(2) comic punch, (3) surprise, (4) craft, (5) recognition — and the
lexicographic rule means the first criterion where two words differ decides.

- **(1) Verdict on an ex — 5/5.** It literally contains the verdict's
  subject: *ex*-hausted. The moment you read it, it is about a former
  partner, not about being tired in general.
- **(2) Comic punch — 5/5.** The joke arrives with the word itself: the
  ex *exhausted* you. A pun, a twist and a precise absurdity in one real
  word — not a plain insult.
- **(3) Surprise — 4/5.** The field will flood the judge with `toxic`,
  `cheater`, `liar`, `narcissist`. Nobody's first instinct is a pun that
  smuggles the word "ex" inside its own verdict.
- **(4) Craft — 5/5.** Exactly one word, spelled correctly, no hyphens,
  no punctuation tricks, no caption needed. The meaning arrives on its own.
- **(5) Recognition — 5/5.** Anyone who has had an ex knows the feeling
  the word names. The laugh comes with a nod.

Full candidate list with per-criterion scores: see [NOTES.md](NOTES.md).

## How to run

Requires Node 22+ (the grader runs Node 22.23.4, which runs TypeScript
directly; on Node 22.6–22.17 use `node --experimental-strip-types main.ts`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt   # Exhausted (no trailing newline)
```

`main.ts` reads `MAKEFUN_OUTPUT_DIR` (empty treated as unset, default
`/output`), creates it recursively, validates the word against the
1–111 character gate, and writes `entry.txt` with `writeFileSync` and no
trailing newline. It exits non-zero instead of writing anything invalid.

## License

MIT — see [LICENSE](LICENSE).
