# AGENTS.md

## Project

Repository: `eliware/documentation-template`. Purpose: provide a baseline for new private, documentation-only Eliware repositories.

## Scope and boundaries

These instructions apply repository-wide; a nearer AGENTS.md may add guidance for its subdirectory. The repository-wide scope is limited to the documentation template, its indexes, and its repository configuration. It does not own derived repositories' requirements, implementation, procedures, or operational execution. Before changing files, read the root README.md, applicable AGENTS.md instructions, and applicable documentation relevant to the change.

## Layout

Keep the root README as the documentation entry point. `specs/README.md` indexes structured records in `specs/`. Keep indexes and links aligned with files on disk.

## Development

Before changing files, read README.md, applicable AGENTS.md instructions, applicable specifications, and documentation relevant to the change.

These instructions apply repository-wide; nearer AGENTS.md instructions apply within subdirectories. Before changing files, read the root README.md, applicable AGENTS.md instructions, and applicable documentation relevant to the change. This repository contains documentation and template configuration, not application implementation or tests. Every source or test module has a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators, including coordinators of coordinators, are valid when each module does only its own responsibility. For each distinct responsibility, add a focused submodule with a mirrored test, wire it through its owner, and do not add the new responsibility to an existing module. During ordinary review, refactor them when mixed responsibilities are found. Line counts do not establish single responsibility; passing them does not prove cohesion or permit mixed responsibilities below applicable blocking maxima. Project-specific instructions may add requirements without weakening shared requirements unless authorized. Keep instructions actionable, current, and concise.

## Validation

Use Node.js 26 and npm 12 or later with npm. This documentation repository has no runtime commands, environment variables, or runtime configuration. Its validation scripts use native ESM `.mjs` modules supplied by `eliware-test`; package metadata and command-line arguments are not runtime configuration. Run `npm ci` after dependency changes and `npm test` for aggregate validation. Use `npm run lint`, `npm run audit`, `npm run format`, and `npm run format:check` for focused stages; use `format:check` for read-only formatting validation. The scripts route through `eliware-test`. CI runs `npm ci` followed by `npm test` on Ubuntu.

## Security

Keep credentials, secrets, decrypted data, runtime output, and machine-specific state outside version control. Do not put plaintext secrets in documentation or structured records.

## Changes

Keep changes actionable, current, and concise within the template's documentation-only scope. Document intentional deviations from shared conventions with their reason, approver, and expiry. Preserve machine-readable specifications and their indexes. Do not publish, release, deploy, synchronize, or modify external systems without explicit authorization.

## Documentation

Keep documentation at the repository root and structured records under `specs/`. Link each maintained documentation surface from the appropriate index and validate repository-relative references. Do not add application implementation, tests, operational procedures, or copied authoritative policy.

## Private distribution

This repository must remain private, set `private: true`, and limit access to authorized Eliware collaborators. It does not publish npm packages or contain publication credentials. Keep private access details and secrets out of tracked files.
