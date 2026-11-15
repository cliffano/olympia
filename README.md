<!-- BEGIN:AVATAR -->
![Avatar](avatar.jpg)
<!-- END:AVATAR -->

<!-- BEGIN:BADGES -->
[![Build Status](https://github.com/cliffano/olympia/actions/workflows/ci-workflow.yaml/badge.svg)](https://github.com/cliffano/olympia/actions/workflows/ci-workflow.yaml)
<!-- END:BADGES -->

# Olympia

Olympia is a Makefile for building TypeScript packages.
It provides utility targets for compiling, type-checking, styling, linting, testing, packaging, and documenting TypeScript packages.

Have a look at [TypeScriptCLI](examples/typescript-cli/) as an example project which uses Olympia.

## Installation

1. Download `src/Makefile-olympia` as the `Makefile` of your project:
    `curl https://raw.githubusercontent.com/cliffano/olympia/main/src/Makefile-olympia -o Makefile`
2. Create configuration file `olympia.yml` with properties described in [Configuration](#configuration) section
3. Run the available `Makefile` targets described in [Usage](#usage) section

## Configuration

Create Olympia configuration file called `olympia.yml` with contains the following properties:

| Property | Description | Example |
|----------|-------------|---------|
| package_name | The name of the TypeScript package | `somepackage` |
| author | The author of the package | `Some Author` |
| generator.component | The generator component type from [generator-node](https://github.com/cliffano/generator-node) | `typescript-cli` |
| generator.inputs.project_id | The project ID | `somepackage` |
| generator.inputs.project_name | The project display name | `Some Package` |
| generator.inputs.project_desc | The project description | `A sample TypeScript CLI package` |
| generator.inputs.author_name | The author's name | `Some Author` |
| generator.inputs.author_email | The author's email address | `someauthor@example.com` |
| generator.inputs.author_url | The author's web site URL | `https://example.com` |
| generator.inputs.github_id | The GitHub user or organisation ID | `pakkunbot` |
| generator.inputs.github_repo | The GitHub repository name | `olympiaexample` |
| generator.inputs.github_token_prefix | Prefix of GitHub token secret used by release workflows | `STUDIO` |

## Usage

The following targets are available:

| Target | Description |
|--------|-------------|
| ci | CI target to be executed by CI/CD tool, end to end build of the TypeScript package |
| stage | Ensure stage directory exists |
| clean | Remove all temporary (staged, generated, compiled, coverage) files |
| build | Compile TypeScript sources to `dist/` using [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) |
| typecheck | Type-check source and test code without emitting files using [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) |
| deps | Retrieve package dependencies using [npm](https://www.npmjs.com/) |
| deps-upgrade | Upgrade package dependencies using [npm-check-updates](https://github.com/raineorshine/npm-check-updates) |
| deps-extra-apt | Install extra tools using `apt`: markdownlint |
| rmdeps | Remove `node_modules/` directory |
| update-to-latest | Update Makefile to the latest version tag |
| update-to-main | Update Makefile to the main branch |
| update-to-version | Update Makefile to the version defined in `UPDATE_TARGET_VERSION` parameter |
| update-dotfiles | Update the dotfiles with latest from [generator-node](https://github.com/cliffano/generator-node) |
| update-partials | Update README partial snippets with latest from [generator-node](https://github.com/cliffano/generator-node) |
| style | Run code styling against source and test code using [Prettier](https://prettier.io/) |
| lint | Run lint checks against source and test code using [ESLint](https://eslint.org/) with [typescript-eslint](https://typescript-eslint.io/), then lint Markdown files using markdownlint |
| complexity | Run complexity checks against source code using [ESLint](https://eslint.org/) complexity rule, then generate complexity report |
| test | Run unit testing using [Mocha](https://mochajs.org/) and [tsx](https://tsx.is/), then generate test report using [Mochawesome](https://github.com/adamgruber/mochawesome) |
| test-integration | Run integration testing using [Mocha](https://mochajs.org/) and [tsx](https://tsx.is/), then generate test report using [Mochawesome](https://github.com/adamgruber/mochawesome) |
| test-examples | Run example scripts under `examples/` directory |
| coverage | Run coverage checks using [c8](https://github.com/bcoe/c8), then generate coverage report |
| release-major | Create a major release using [rtk](https://github.com/cliffano/rtk) |
| release-minor | Create a minor release using [rtk](https://github.com/cliffano/rtk) |
| release-patch | Create a patch release using [rtk](https://github.com/cliffano/rtk) |
| package | Build the TypeScript package tarball using [npm](https://www.npmjs.com/) pack |
| install | Install the built package using [npm](https://www.npmjs.com/) link |
| uninstall | Uninstall the package using [npm](https://www.npmjs.com/) unlink |
| reinstall | Uninstall, rebuild, and then install the package again |
| publish | Publish package to [npm](https://www.npmjs.com/) |
| doc | Generate package documentation using [TypeDoc](https://typedoc.org/) |

## Colophon

<!-- BEGIN:DEVELOPERS_GUIDE -->
[Developer's Guide](https://cliffano.github.io/developers-guide-makefile.html)
<!-- END:DEVELOPERS_GUIDE -->

<!-- BEGIN:BUILD_REPORTS -->
Build reports:

<!-- END:BUILD_REPORTS -->

Related Projects:

* [generator-node](https://github.com/cliffano/generator-node) - node.js and TypeScript packages generator using Plop
