import { mkdirSync, writeFileSync } from "node:fs";

// Demo-day debugging, agent edition: when the button keeps crashing the
// show, the quickest patch is a show with nowhere left to click.
const setup = "Our AI agent fixed the demo crash live:";
const middle = "it deleted the button.";
const punch = "No button, no crash, no demo.";
const joke = [setup, middle, punch].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
