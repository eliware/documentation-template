# User Guide

Use this guide to create and maintain a documentation-only repository from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Template scope

This template provides a private repository structure for documents, structured records, and indexes. It does not provide application code or runtime procedures.

The package sets `private` to `true`, so npm does not publish it.

Keep each document in the repository that owns its content. Link to other repositories for their requirements and procedures.

## Create a repository

1. Create a repository from this template.
2. Name the repository and set its description.
3. Set the repository owner, purpose, scope, and boundaries in the root `README.md`.
4. Replace template names, descriptions, URLs, keywords, and sample content.
5. Set the repository directive ID in `package.json` and `specs/directives.yaml`.
6. Replace this guide with end-user documentation for your repository.
7. Remove template-specific guidance that does not apply to your repository.

Use the same repository name and description in `package.json`, `README.md`, and repository settings.

## Install and validate

Use Node.js 26 or later and npm 12 or later.

1. Open a terminal at the repository root.
2. Run `npm ci` to install the locked dependencies.
3. Run `npm test` to check the repository before you share changes.

The `npm test` command runs `eliware-test`. The check validates repository conventions, document links and indexes, lint, formatting, dependencies, and package contents.

Use these commands for individual checks:

| Command                | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| `npm run lint`         | Check source files and configuration for lint errors. |
| `npm run audit`        | Check dependencies for reported vulnerabilities.      |
| `npm run format:check` | Check file formatting without changing files.         |
| `npm run format`       | Format supported files.                               |

Run `npm test` after you change files. Fix each reported issue. Run `npm test` again.

## Repository layout

| Path                        | Purpose                                                  |
| --------------------------- | -------------------------------------------------------- |
| `README.md`                 | Introduce the repository and link to maintained content. |
| `docs/`                     | Store end-user documentation owned by this repository.   |
| `.knit/deploy.yaml`         | Define the Knit deployment for the `dev` target.         |
| `specs/`                    | Store structured requirements and repository directives. |
| `specs/README.md`           | Index the structured records in `specs/`.                |
| `AGENTS.md`                 | Give contributors repository-specific instructions.      |
| `.github/workflows/ci.yaml` | Run validation for pushes and pull requests to `main`.   |

Keep each requirement in its authoritative specification. Link to that specification. Do not copy its content into other files.

## Organize documents

Use the root `README.md` as the entry point. Add links to documents that readers use frequently.

Use an index in each documentation or specifications directory. Add every maintained direct child document to its nearest index.

Index each direct YAML file in the matching specifications README. Keep index links relative to the index file.

Use relative links for documents inside the repository. Use full HTTPS links for documents in other repositories.

## Write for readers

Use ASD-STE100 rules for human-readable text. Write short sentences in active voice. Use one instruction in each sentence.

Define a technical term when readers may not know it. Use each term consistently.

For each procedure, identify the reader, purpose, prerequisites, steps, result, and error path. Keep each procedure in one authoritative location. Link to it from other documents.

Separate descriptive information from procedural steps. Use a vertical list for procedures with multiple steps.

## Private information

Keep credentials, secret values, private data, and runtime state out of Git. Do not put real secret values in examples.

Use an approved secret store for secret values. Share private documents only with approved readers.

## Continuous integration

The GitHub Actions workflow runs for pushes and pull requests that target `main`. It checks out the full Git history, sets up Node.js 26, installs the latest npm, installs locked dependencies, and runs `npm test`.

Resolve local validation failures before you open a pull request. Check the workflow result before you merge changes.

## Knit deployment

The Documentation index links to a guide that explains how to update or disable the push entry in `.knit/deploy.yaml`.

## Documentation index

- [Knit deployment guide](deployment.md)

## Troubleshoot validation

If `npm ci` fails, confirm that Node.js 26 or later and npm 12 or later are installed. Check that npm can access the configured package registry.

If `npm test` reports a convention issue, read the rule ID and file path in the output. Update the file to follow the rule, then run `npm test` again.

If a document link fails, check the path and letter case. Confirm that the target file exists and that the link is relative to the current document.

If formatting checks fail, run `npm run format`. Check the changes, then run `npm test`.

## Maintain this guide

After you create a repository from this template, replace this guide with accurate end-user documentation for that repository.

Update the root `README.md` and the nearest index when you add or rename a document. Remove instructions that do not apply to the derived repository.
