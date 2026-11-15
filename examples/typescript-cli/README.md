<!-- BEGIN:AVATAR -->
![Avatar](avatar.jpg)
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
[![Build Status](https://github.com/pakkunbot/typescript-cli/workflows/CI/badge.svg)](https://github.com/pakkunbot/typescript-cli/actions?query=workflow%3ACI)
[![Dependencies Status](https://img.shields.io/librariesio/release/npm/typescriptcli)](https://libraries.io/npm/typescriptcli)
[![Code Scanning Status](https://github.com/pakkunbot/typescript-cli/workflows/CodeQL/badge.svg)](https://github.com/pakkunbot/typescript-cli/actions?query=workflow%3ACodeQL)
[![Coverage Status](https://coveralls.io/repos/github/pakkunbot/typescript-cli/badge.svg?branch=main)](https://coveralls.io/r/pakkunbot/typescript-cli?branch=main)
[![Security Status](https://snyk.io/test/github/pakkunbot/typescript-cli/badge.svg)](https://snyk.io/test/github/pakkunbot/typescript-cli)
[![Published Version](https://img.shields.io/npm/v/typescriptcli.svg)](https://www.npmjs.com/package/typescriptcli)
<!-- END:BADGES -->

# TypeScriptCLI

TypeScriptCLI is a sample TypeScript CLI project.

## Installation

```sh
npm install -g typescriptcli
```

## Usage

Create a configuration file, e.g. `typescriptcli.yaml`:

```yaml
---
text: Hello World
```

Run typescriptcli with display command:

```sh
typescriptcli display
```

Run typescriptcli with specified config file:

```sh
typescriptcli --config-file typescriptcli.yaml display
```

Run typescriptcli with specified config file and custom flags:

```sh
typescriptcli --config-file typescriptcli.yaml display --reverse --transform upper
```

Show help guide:

```sh
typescriptcli --help
```

## Configuration

These are the configuration properties that you can use with `typescriptcli` CLI.
Some example configuration files are available on [examples](examples) folder.

| Property | Type | Description | Example |
|----------|------|-------------|---------|
| `text` | String | The message text | Hello World |

## Colophon

<!-- BEGIN:DEVELOPERS_GUIDE -->
[Developer's Guide](https://pakkunbot.github.io/developers-guide-nodejs.html)
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
Build reports:

* [Code complexity report](https://pakkunbot.github.io/typescript-cli/complexity/eslint/index.html)
* [Unit tests report](https://pakkunbot.github.io/typescript-cli/test/mochawesome/index.html)
* [Test coverage report](https://pakkunbot.github.io/typescript-cli/coverage/c8/index.html)
* [Integration tests report](https://pakkunbot.github.io/typescript-cli/test-integration/mochawesome/index.html)
* [API Documentation](https://pakkunbot.github.io/typescript-cli/doc/typedoc/index.html)

<!-- END:BUILD_REPORTS -->
