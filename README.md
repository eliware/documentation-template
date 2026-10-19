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

This template starts documentation-only repositories. Each derived repository owns its documents and operating decisions.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Replace the template name, description, URLs, keywords, and sample content.
Run `npm ci` from the repository root.

## Usage

Read this README and the [User Guide](docs/README.md).

## Development

Read [AGENTS.md](AGENTS.md) and [the specifications index](specs/README.md) before you change files.
Keep documents and records in the repository that owns them.

## Testing

Run `npm test` before handoff. It runs the repository checks through `eliware-test`.

## Troubleshooting

## Security

Keep credentials, secrets, private data, and runtime state out of Git.
Use only approved secret stores for secret values.

## Scope

Use this template for private, documentation-only repositories.
Keep owned documents, structured records, and indexes in the derived repository. Keep application code, runtime settings, and canonical procedures in their owning repositories.

## Navigation

Use the root README as the entry point. Use `specs/README.md` to find structured records.
Index each direct YAML file in its specifications README. Keep links local or use full HTTPS links to other repositories.

## Contribution

Set the repository purpose, owner, and boundaries before adding documents.
Write with ASD-STE100 rules. Keep each procedure in one authoritative location. Link to it from other documents.

## Documentation validation

Run `npm test` to check repository conventions, document links, indexes, lint, formatting, and dependency checks.
Run `npm run format:check` to check formatting. Run `npm run format` to format files.

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
