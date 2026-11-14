"use strict";
/**
 * TypeScriptCLI command-line interface.
 *
 * @module cli
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

import bag, { type CommandArg } from "bagofcli";

import Display, { type Transformation } from "./typescriptcli.js";

const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_CONFIG_FILE = "typescriptcli.yaml";
const DEFAULT_TRANSFORMATION: Transformation = "lower";

/**
 * `display` action. bagofcli has already validated the flags against
 * conf/commands.json, including the allowed transformation choices.
 *
 * @private
 * @param {CommandArg} args - parsed command options
 */
function _display(args: CommandArg): void {
  const configFile =
    (args.configFile as string | undefined) ?? DEFAULT_CONFIG_FILE;
  const reverse = Boolean(args.reverse);
  const transformation =
    (args.transform as Transformation | undefined) ?? DEFAULT_TRANSFORMATION;

  bag.logStepHeading("Displaying message");
  const display = new Display(configFile);
  const text = display.format(reverse, transformation);
  console.log(`Message: ${text}`);
}

/**
 * Execute TypeScriptCLI CLI.
 */
function exec(): void {
  const actions = {
    commands: {
      display: { action: _display },
    },
  };

  bag.command(DIRNAME, actions);
}

export default { exec };
