# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/documentation-template [![license](https://img.shields.io/github/license/eliware/documentation-template.svg)](LICENSE) [![CI](https://github.com/eliware/documentation-template/actions/workflows/ci.yml/badge.svg)](https://github.com/eliware/documentation-template/actions/workflows/ci.yml)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Scope](#scope)
- [Navigation](#navigation)
- [Contribution](#contribution)
- [Documentation validation](#documentation-validation)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

A private baseline for new Eliware documentation-only repositories. It includes
the shared repository metadata, documentation indexes, CI workflow, and Knit
deployment configuration.

Package description: Eliware documentation-only repository template. Author:
Eliware <eliware@eliware.org>. License: MIT.

## Requirements

Node.js 26 and npm are required for repository validation.

## Setup

Create a repository from this template, update its package name and repository
metadata, then run `npm ci` from the repository root.

## Usage

Use the root README as the documentation entry point. Add repository-specific
documentation and structured records, and keep their indexes current.

## Development

Read [AGENTS.md](AGENTS.md), this README, and applicable specifications before
changing files. Keep documentation in the repository that owns its content and
link to other repositories for their requirements, implementation, or procedures.

## Testing

Run `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`,
`npm run format`, or `npm run format:check` for focused stages. The scripts run
through `eliware-test`.

## Troubleshooting

Use Node.js 26 and run `npm ci` after dependency changes. Review the rule and
file path reported by `eliware-test` when validation fails.

## Security

Keep credentials, secrets, decrypted data, runtime output, and machine-specific
state outside version control. Do not add plaintext secrets to documentation or
structured records.

## Scope

This repository is a starting point for documentation-only repositories. A
derived repository owns its own documentation, structured records, and indexes.
It does not contain application implementation, tests, operational procedures,
runtime configuration, or copied policy from another repository.

## Navigation

Documentation: [specifications](specs/README.md)

- [Structured records index](specs/README.md)
- [Template directives](specs/directives.json)

## Contribution

Replace template-specific metadata and content with the derived repository's
details. Keep root and specifications indexes aligned with files on disk, then
run the validation commands before handoff.

## Documentation validation

Run `npm test` to validate repository conventions, documentation links and
indexes, lint, formatting, and dependency security. `npm run format:check` is
read-only; `npm run format` writes formatted files.

## Support

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

Use the [Eliware Discord community](https://discord.gg/M6aTR9eTwN),
[GitHub issues](https://github.com/eliware/documentation-template/issues), or
eliware@eliware.org. Include the relevant file path and a concise description of
the issue when requesting help.

## License

[license](LICENSE)

## Links

- [Specifications](specs/README.md)
- [Canonical repository conventions](https://github.com/eliware/test/tree/main/specs/conventions)
- [Home Page](https://eliware.org)
- [GitHub Repo](https://github.com/eliware/documentation-template) (`git+https://github.com/eliware/documentation-template.git`)
- [GitHub Org](https://github.com/eliware)
- [Discord](https://discord.gg/M6aTR9eTwN)
