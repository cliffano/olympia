"use strict";
/**
 * The CLI surface: help, commands and option validation, run as a real
 * process against the compiled CLI. Each case checks the exit code and a
 * fragment of the combined stdout and stderr.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

import referee from "@sinonjs/referee";

const { assert } = referee;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BIN = path.join(ROOT, "bin", "typescriptcli.js");
const CONFIG_FILE = path.join(ROOT, "examples", "typescriptcli.yaml");

const CASES: Array<{
  description: string;
  args: string[];
  exitcode: number;
  output: string;
}> = [
  {
    description: "should display help information",
    args: ["--help"],
    exitcode: 0,
    output: "Usage: typescriptcli",
  },
  {
    description: "should list the transform option in display help",
    args: ["display", "--help"],
    exitcode: 0,
    output: "--transform <transform>",
  },
  {
    description: "should display lower case text by default",
    args: ["--config-file", CONFIG_FILE, "display"],
    exitcode: 0,
    output: "Message: hello world",
  },
  {
    description: "should display reversed upper case text",
    args: [
      "--config-file",
      CONFIG_FILE,
      "display",
      "--reverse",
      "--transform",
      "upper",
    ],
    exitcode: 0,
    output: "Message: DLROW OLLEH",
  },
  {
    description: "should reject an unknown transformation",
    args: ["--config-file", CONFIG_FILE, "display", "--transform", "shout"],
    exitcode: 1,
    output: "Allowed choices are lower, upper",
  },
  {
    description: "should reject unknown commands",
    args: ["frobnicate"],
    exitcode: 1,
    output: "unknown command 'frobnicate'",
  },
];

describe("cli - commands", function () {
  for (const c of CASES) {
    it(c.description, function () {
      const res = spawnSync(process.execPath, [BIN, ...c.args], {
        encoding: "utf8",
      });
      const output = `${res.stdout}${res.stderr}`;
      assert.equals(res.status, c.exitcode, output);
      assert.contains(output, c.output);
    });
  }
});
