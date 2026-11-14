"use strict";
/**
 * A sample TypeScript CLI project.
 *
 * @module typescriptcli
 */
import bag from "bagofcli";
import YAML from "yaml";

import Message from "./models/message.js";

/** Message text transformation types. */
export type Transformation = "lower" | "upper";

/** Configuration values loaded from the configuration file. */
export interface Config {
  text: string;
}

/**
 * A class for managing the display of text from configuration file.
 */
class Display {
  private readonly conf: Config;

  /**
   * Initialise Display.
   *
   * @param {String} confFile - path to configuration file
   */
  constructor(confFile: string) {
    bag.logStepItemSuccess(`Loading configuration file ${confFile}`);
    const content = bag.lookupFile(confFile).toString();
    this.conf = YAML.parse(content) as Config;
  }

  /**
   * Format text from configuration file with transformations.
   *
   * @param {Boolean} reverse - whether to reverse the text
   * @param {String} [transformation] - transformation to apply (lower or upper)
   * @return {String} the formatted text
   */
  format(reverse: boolean, transformation?: Transformation): string {
    const message = new Message(this.conf.text);

    if (reverse) {
      message.reverse();
    }

    if (transformation === "lower") {
      message.lower();
    } else if (transformation === "upper") {
      message.upper();
    }

    return message.getText();
  }
}

export default Display;
