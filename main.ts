import { join } from "node:path";
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The moon looks like an empty diary gap, so the twist lands on the closing phrase.
const excuseSentence = "I moved your meeting to 3 a.m. because my calendar tool mistook the moon for an open slot.";
const destinationFolder = process.env.MAKEFUN_OUTPUT_DIR ? process.env.MAKEFUN_OUTPUT_DIR : "/output";
mkdirSync(destinationFolder, { recursive: true });
const targetPath = join(destinationFolder, "entry.txt");
const fileBody = excuseSentence + "\n";
writeFileSync(targetPath, fileBody, "utf8");
chmodSync(targetPath, 0o644);
