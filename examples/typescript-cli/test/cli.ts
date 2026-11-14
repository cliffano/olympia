"use strict";
import referee from "@sinonjs/referee";
import bag, { type Actions, type CommandArg } from "bagofcli";
import sinon from "sinon";

import cli from "../lib/cli.js";

const { assert } = referee;

/**
 * Run cli.exec() and return the action handlers it registers with bagofcli.
 */
function registeredActions(): Actions {
  let registered: Actions = {};
  sinon.stub(bag, "command").callsFake(function (_base, actions) {
    registered = actions ?? {};
  });
  cli.exec();
  return registered;
}

/**
 * Build the argument bagofcli passes to the display action.
 */
function displayArg(options: Record<string, unknown> = {}): CommandArg {
  return { args: [], name: () => "display", ...options };
}

describe("cli - exec", function () {
  afterEach(function () {
    sinon.restore();
  });

  it("should contain commands with actions", function () {
    const command = sinon.stub(bag, "command");
    cli.exec();
    const [base, actions] = command.firstCall.args;
    assert.isString(base);
    assert.isFunction(actions?.commands?.display.action);
  });
});

describe("cli - display", function () {
  let lookupFile: sinon.SinonStub;
  let log: sinon.SinonStub;

  beforeEach(function () {
    sinon.stub(bag, "logStepHeading");
    sinon.stub(bag, "logStepItemSuccess");
    lookupFile = sinon
      .stub(bag, "lookupFile")
      .returns(Buffer.from("text: Hello World"));
    log = sinon.stub(console, "log");
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should display lower case text from default config file when no options are specified", function () {
    registeredActions().commands?.display.action(displayArg());
    assert.isTrue(lookupFile.calledOnceWithExactly("typescriptcli.yaml"));
    assert.isTrue(log.calledOnceWithExactly("Message: hello world"));
  });

  it("should display reversed upper case text from specified config file", function () {
    registeredActions().commands?.display.action(
      displayArg({
        configFile: "custom.yaml",
        reverse: true,
        transform: "upper",
      }),
    );
    assert.isTrue(lookupFile.calledOnceWithExactly("custom.yaml"));
    assert.isTrue(log.calledOnceWithExactly("Message: DLROW OLLEH"));
  });
});
