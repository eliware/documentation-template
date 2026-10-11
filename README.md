# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/documentation-template [![License](https://img.shields.io/github/license/eliware/documentation-template)](https://github.com/eliware/documentation-template/blob/main/LICENSE) [![CI](https://github.com/eliware/documentation-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/documentation-template/actions/workflows/ci.yaml)

Eliware documentation-only repository template.

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
- [Links](#links)
- [License](#license)

## Features

This template provides a baseline for private, documentation-only Eliware repositories.
It includes shared repository metadata, documentation indexes, CI, and Knit deployment configuration.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Update its package name and repository metadata. Run `npm ci` from the repository root.

## Usage

Use the root README as the documentation entry point. Add repository-specific documentation and structured records. Keep their indexes current.

## Development

Read [AGENTS.md](AGENTS.md), this README, and applicable specifications before you change files. Keep documentation in the repository that owns its content. Link to other repositories for their requirements, implementation, or procedures.

## Testing

Run `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`, `npm run format`, or `npm run format:check` for focused stages. The scripts run through `eliware-test`.

## Troubleshooting

Use Node.js 26 or later. Run `npm ci` after dependency changes. Review the rule and file path that `eliware-test` reports when validation fails.

## Security

Keep credentials, secrets, decrypted data, runtime output, and machine-specific state outside version control. Do not add plaintext secrets to documentation or structured records.

## Scope

This repository is a starting point for documentation-only repositories. A derived repository owns its documentation, structured records, and indexes. It does not contain application implementation, tests, operational procedures, runtime configuration, or copied policy from another repository.

## Navigation

Documentation: [specifications](specs/README.md)

- [Structured records index](specs/README.md)
- [Template directives](specs/directives.yaml)

## Contribution

Replace template-specific metadata and content with the derived repository's details. Keep root and specifications indexes aligned with files on disk. Run the validation commands before handoff.

## Documentation validation

Run `npm test` to validate repository conventions, documentation links and indexes, lint, formatting, and dependency security. `npm run format:check` is read-only. `npm run format` writes formatted files.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/documentation-template)
- [Bug Reports](https://github.com/eliware/documentation-template/issues)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
