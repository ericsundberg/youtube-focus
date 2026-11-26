---
name: modular-development
description: Use when creating, modifying, debugging, reviewing, refactoring, or validating website or application code. Inspect the repository, decompose behavior into small single-responsibility modules, keep bootstrap files minimal, enforce AGENTS.md source-length limits, and validate implementation before delivery.
---

# Modular Development Workflow

Use this skill for all application and website coding tasks. **Read the applicable `AGENTS.md` before working.** It is authoritative for architecture, languages, limits, security, delivery, and authorization. If unavailable, report that limitation; do not invent its contents or claim compliance with it.

## 1. Inspect

- Inspect Git status, relevant files, imports, module relationships, and existing project conventions.
- Identify the actual entry point, bootstrap/orchestration files, operational modules, configuration, and affected tests.
- Do not infer unseen code, fabricate files, or overwrite unrelated work.
- Identify whether the request creates new functionality, changes existing behavior, or only reviews code.

## 2. Decompose Before Writing

- Translate the requested behavior into distinct functional responsibilities.
- Decide which responsibility belongs in each existing or new file.
- Identify inputs, outputs, dependencies, and coordination between modules.
- Favor one independently meaningful responsibility per functional file, including very short operations.
- Reserve entry points and parent files for importing, initializing, wiring, and coordination.
- Avoid implementing speculative features, unrelated refactors, premature abstractions, trivial wrappers, or generic catch-all modules.
- Review the file plan against `AGENTS.md` length limits **before** coding. For substantial changes, present the proposed file structure when useful.

## 3. Implement Incrementally

- Implement only the requested behavior and necessary support code.
- Separate HTML, CSS, and scripts as required by `AGENTS.md`.
- Keep independent behavior in independent files; do not accumulate operational logic inside a parent script.
- Keep module interfaces small, dependencies explicit, and state localized.
- Use short, descriptive kebab-case paths; put helper modules in appropriate subdirectories.
- Preserve existing functionality, content, accessibility, responsiveness, security, and project conventions.
- For additions, use Fish-compatible creation commands with `mkdir` and `touch`.
- Deliver complete replacement files by default, with no partial snippets or placeholders unless explicitly authorized.

## 4. Validate Mechanically

- Count nonblank, noncomment physical lines in every new or modified handwritten source file and relevant functions. Compare against the limits in `AGENTS.md`.
- Treat preferred-limit overages as decomposition-review triggers; stop and seek explicit authorization before accepting hard-limit exceptions.
- Do not shrink code through statement compression or remove needed comments, clarity, validation, or security checks.
- Run an existing repository modularity validator, when present. Do not assert that a nonexistent validator ran.
- Run applicable language syntax checks, local behavior tests, and security checks.
- Inspect applicable Git diff/status results. Preserve unrelated modifications.

## 5. Validate Architecturally

Ask of every affected module:

- Does it have one clear, independently meaningful responsibility?
- Is implementation logic outside the bootstrap/orchestrator?
- Are its dependencies explicit and appropriately narrow?
- Is shared mutable state minimized?
- Could it be inspected or modified without understanding unrelated features?
- Did the change introduce duplication, hidden coupling, oversized functions, or catch-all files?

If an affected module fails, decompose it by responsibility within authorized scope and rerun the relevant checks. Line-count compliance alone is insufficient.

## 6. Report and Handoff

- Identify each created or modified path and its responsibility.
- Briefly state behavior implemented and verification actually performed.
- Distinguish passed checks, failures, unrun checks, unresolved risks, and authorized exceptions.
- Do not claim compliance or successful tests without evidence.
- Do not commit, push, deploy, or change external systems without explicit consent.

## Completion Criteria

A coding task is complete only when the authorized functionality is implemented; affected modules satisfy the applicable architectural and size requirements or have explicitly authorized exceptions; relevant checks were performed or clearly reported as unavailable; and no unrelated changes were made.