# Release Notes

## 14.0.0 — 2026-10-20

### Added

- Expand `docs/README.md` with template setup, repository layout, document indexing, writing guidance, validation, CI, and troubleshooting.
- Document the Knit deployment trigger, target, commands, expected result, and derived-repository setup.
- Document private repository limits and tell users to replace the guide with documentation for their derived repository.

### Changed

- Set package metadata and repository specifications to v14 conventions.
- Update `@eliware/test` to version 14 and refresh the dependency lockfile.
- Remove content from `AGENTS.md` and `README.md` that repository conventions do not require.
- Link `RELEASE_NOTES.md` from the README Usage section.

## 13.0.0 — 2026-10-19

### Added

- Add a user guide for repositories created from this template.
- Tell users to replace the template guide with documentation for their repository.

### Changed

- Set the package version to 13.0.0 and upgrade `@eliware/test` to v13.
- Align the specifications, repository instructions, and README with v13 conventions.
- Clarify that the root README introduces the repository and `specs/README.md` indexes structured records.
- Update the guide to describe indexes, writing rules, private data, and validation.
- Use checkout v7 and fetch the full Git history in the CI workflow.
- Update the deployment workflow to run `git pull` before dependency installation and validation.
- Update the package lock file for the v13 dependency changes.
