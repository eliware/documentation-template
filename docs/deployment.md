# Knit Deployment Guide

This guide describes the maintained Knit entry in `.knit/deploy.yaml`.

Knit runs the configured commands after a push. This template sends the commands to the `dev` target.

## Workflow settings

| Field             | Value                             |
| ----------------- | --------------------------------- |
| Trigger           | Push                              |
| Target            | `dev`                             |
| Working directory | `/eliware/documentation-template` |
| Timeout           | 300000 milliseconds               |

## Command sequence

Knit runs these commands in order from the configured working directory:

1. `git pull` updates the checkout.
2. `npm ci` installs the locked dependencies.
3. `npm test` validates the repository.

Knit reports success when each command exits successfully. The workflow does not publish the package or deploy application code.

## Configure a derived repository

After you create a repository from this template, open `.knit/deploy.yaml`.

Set `cwd` to the path of the derived repository on the target host.
Replace `/eliware/documentation-template` with that path.

Use the `dev` target only if the derived repository uses that target.
If Knit deployment does not apply, remove the push deployment entry.
Keep `.knit/deploy.yaml` because the repository conventions require that file.

## Troubleshoot a failed run

If `git pull` fails, confirm that the configured path contains the derived repository checkout and that Knit can access it.

If `npm ci` or `npm test` fails, read the command output. Resolve the reported issue in the derived repository, then push a new commit.
