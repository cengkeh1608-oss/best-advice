import { mkdirSync, writeFileSync } from "node:fs";

// The Best Advice I Ever Got — one sentence, 120 characters.
const ENTRY =
  "Mum said if you can't say it to their face, don't say it at all, and the apology I owed for three years took one minute.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + ENTRY.length);
}

if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
