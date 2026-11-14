"use strict";
import referee from "@sinonjs/referee";
import bag from "bagofcli";
import sinon from "sinon";

import Display from "../lib/typescriptcli.js";

const { assert } = referee;

describe("typescriptcli - Display", function () {
  let lookupFile: sinon.SinonStub;

  beforeEach(function () {
    sinon.stub(bag, "logStepItemSuccess");
    lookupFile = sinon
      .stub(bag, "lookupFile")
      .returns(Buffer.from("---\ntext: Hello World\n"));
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should load the text from the configuration file", function () {
    new Display("typescriptcli.yaml");
    assert.isTrue(lookupFile.calledOnceWithExactly("typescriptcli.yaml"));
  });

  it("should format text with lower transformation and no reverse", function () {
    const display = new Display("typescriptcli.yaml");
    assert.equals(display.format(false, "lower"), "hello world");
  });

  it("should format text with upper transformation and reverse", function () {
    const display = new Display("typescriptcli.yaml");
    assert.equals(display.format(true, "upper"), "DLROW OLLEH");
  });

  it("should format text with no transformation", function () {
    const display = new Display("typescriptcli.yaml");
    assert.equals(display.format(false), "Hello World");
  });
});
