# User Guide

Use this guide to create and maintain a documentation-only repository from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Define the repository

1. Create a repository from this template.
2. Set the package name, description, URLs, keywords, and repository directive ID.
3. State the repository purpose, owner, scope, and boundaries in the root README.
4. Keep each document in the repository that owns its content.
5. Link to other repositories for their requirements and procedures.

## Organize documents

Use the root README as the entry point. Use `specs/README.md` to index structured records. Add one index in each specifications directory.

Keep each index current. Link each document from its parent index. Do not copy policies or procedures from other repositories.

## Write for readers

Use ASD-STE100 rules. Use short sentences and active voice. Use one instruction in each sentence. Use approved words and defined technical names.

Describe the reader, purpose, required input, steps, result, and error path. Put each procedure in one authoritative location. Link to it from other documents.

## Manage information

Keep credentials, secrets, decrypted data, private data, and machine-specific state out of Git. Do not put secret values in examples.

## Validate

Run `npm test` before handoff. It checks repository conventions, document links and indexes, lint, formatting, and dependencies.
