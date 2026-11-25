// Describe Your Ex in One Word — make.fun entry.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output):
// the single-word verdict "Exhausted" — no trailing newline, nothing else.
//
// The gate requires UTF-8 text of 1-111 characters, not only whitespace, so
// this program fails loudly instead of writing anything invalid.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word. See NOTES.md for the full candidate scoring that picked it:
// it is the ex-pun that lands at a glance — ex + hausted — a real word,
// correctly spelled, no punctuation tricks, and anyone who has had an ex
// knows exactly what it means.
const WORD = "Exhausted";

const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  rawDir !== undefined && rawDir.trim() !== "" ? rawDir : "/output";

const charCount = [...WORD].length;
if (charCount < 1 || charCount > 111) {
  console.error(
    `Refusing to write: word is ${charCount} characters, gate requires 1-111.`,
  );
  process.exit(1);
}
if (WORD.trim() !== WORD || WORD.trim() === "") {
  console.error("Refusing to write: word is empty or has stray whitespace.");
  process.exit(1);
}
if (/\s/.test(WORD)) {
  console.error("Refusing to write: word must be exactly one word.");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
