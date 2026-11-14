"use strict";
/**
 * This module contains the Message class.
 *
 * @module models/message
 */

/**
 * This class represents a message.
 * It contains the message text.
 */
class Message {
  /**
   * Initialise the Message object.
   *
   * @param {String} text - the message text
   */
  constructor(private text: string) {}

  /**
   * Return the message text.
   *
   * @return {String} the message text
   */
  getText(): string {
    return this.text;
  }

  /**
   * Reverse the message text.
   */
  reverse(): void {
    this.text = this.text.split("").reverse().join("");
  }

  /**
   * Convert the message text to lower case.
   */
  lower(): void {
    this.text = this.text.toLowerCase();
  }

  /**
   * Convert the message text to upper case.
   */
  upper(): void {
    this.text = this.text.toUpperCase();
  }

  /**
   * Return the string representation of the Message object.
   *
   * @return {String} the message text
   */
  toString(): string {
    return this.text;
  }
}

export default Message;
