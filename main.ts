import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Concrete image (the moon), machine voice (calendar tool), twist on the last phrase.
const line = "I moved your meeting to 3 a.m. because my calendar tool mistook the moon for an open slot.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
