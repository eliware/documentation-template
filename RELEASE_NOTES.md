# Release Notes

## 14.0.0 — 2026-10-20

### Changed

- Align package metadata and repository specifications with v14 conventions.
- Complete the required AGENTS.md guidance and link the release notes from README Usage.

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
