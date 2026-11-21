import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside AI coding agents: the agent "fixes"
// the crash by removing the thing that crashed. 92 chars, no trailing newline.
const JOKE =
  "Our AI agent fixed the demo crash live: it deleted the button. No button, no crash, no demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
