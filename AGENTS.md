# Programming Rules — Agent Instructions

Apply these rules to all website and application development tasks. Use the technology-specific rules appropriate to the project. Preserve existing conventions unless explicitly instructed to change them.

**Primary objective:** Build from the outset with small, independently understandable functional modules connected by lightweight orchestration. Favor human inspection, modification, and extension over short-term implementation speed or fewer files.

## 1. General Conduct

- Prioritize correctness, security, maintainability, modularity, and readability.
- Prefer simple, explicit solutions; avoid unrelated changes, unnecessary dependencies, and speculative features.
- Treat an initial feature request as the first stage of a potentially expandable system, without implementing unrequested features.
- Inspect relevant existing files and repository status before proposing or making changes. Never invent source code, paths, functions, or project structure.
- Distinguish verified facts from assumptions. Local Git repositories are the source of truth.
- Follow explicit user instructions over default implementation preferences; never silently remove features or alter behavior.

## 2. Environment and Technology

- OS: Linux (Arch/CachyOS). Shell: **Fish**, never Bash for user-facing scripts or commands.
- Default repositories: `~/Documents/github/<project>`.
- Use `mkdir` and `touch` to create files/directories; provide safe, ordered, copyable Fish commands. Do not recommend Kate.
- **Websites:** HTML5, CSS3, vanilla JavaScript; PHP for server-side work; Python for automation/processing; JSON for suitable small-scale storage/configuration. Avoid Node.js, Vite, and build systems unless technically justified. Prefer shared-hosting compatibility.
- **Applications:** HTML5/CSS3; TypeScript for high-level scripting; Rust compiled to WASM for low-level simulation/processing; Python for automation and generative tools; JSON when appropriate. Node.js, Vite, or build systems are acceptable when justified.

## 3. Mandatory Architecture

- **Decompose before coding.** Identify operations, module responsibilities, inputs/outputs, dependencies, and the minimal orchestration needed.
- Start websites and applications with modular structure, including prototypes. Do not create monolithic single-file implementations for convenience.
- Separate HTML, CSS, and JavaScript/TypeScript. Separate configuration, business logic, presentation, data, initialization, and operational logic.
- Prefer **one independently meaningful responsibility per functional file**, even if the function is only a few lines. Keep functions small, explicit, and reusable.
- Prefer many small, cohesive files over fewer large files. Do not combine independent behaviors to minimize file count.
- Do not create artificial wrappers, empty modules, or abstraction layers merely to increase file count or satisfy limits.
- Bootstrap/parent files should import, configure, initialize, and coordinate; keep substantive logic in functional modules.
- Minimize shared mutable state, circular dependencies, coupling, and duplicated behavior. Keep module interfaces clear and lightweight.
- Put helper modules in appropriately named subdirectories within the parent script's directory. Avoid unnecessary nesting.
- Use kebab-case filenames/directories; favor short, descriptive names without repeated directory-name prefixes. Avoid catch-all `utils`, `helpers`, or `misc` files containing unrelated operations.
- Use centralized configuration/registries when appropriate. Use portable filesystem paths and runtime URL helpers; avoid hardcoded domains/environment paths.
- Keep secrets, private configuration, and sensitive application data outside the public web root.

### Source Length Constraints

Limits apply to handwritten application code. Count nonblank, noncomment **physical source lines**.

| Unit | Preferred maximum | Hard maximum |
| --- | ---: | ---: |
| Function | 15 | 20 |
| Functional source file | 40 | 60 |
| Bootstrap/orchestration file | 25 | 40 |
| HTML/CSS file | 80 | 120 |

- A preferred-limit overage triggers a decomposition review; a hard-limit overage requires **explicit user authorization**.
- Split by responsibility, never by arbitrary line ranges. Do not compress statements or compromise formatting, descriptive names, comments, correctness, or security to fit a limit.
- Generated/third-party code and declarative data may require separate treatment; identify and authorize exceptions rather than silently ignoring limits.
- A module below its limit can still be noncompliant if it mixes independent responsibilities.
- Apply these limits to initial implementation and every subsequent change. Add independent behavior in new modules rather than letting existing files accumulate responsibilities.
- Decompose directly affected code when required for compliance; do not refactor unrelated code without authorization.

## 4. PHP Requirements

- PHP files begin at byte 1 with `<?php`, with no BOM or leading whitespace.
- Use `declare(strict_types=1)` where appropriate.
- Separate bootstrap, configuration, components, and actions.
- Validate inputs and escape output at trust boundaries; never construct executable include paths directly from untrusted input.
- Apply the same responsibility and source-length constraints as for other application code.

## 5. Frontend Requirements

- Use semantic HTML, accessible native controls, keyboard navigation, visible focus, meaningful alt text, adequate contrast, and reduced-motion support.
- Preserve desktop/mobile parity; prevent clipping and overflow.
- Use CSS variables/design tokens, independent theme palettes, and dark mode where applicable. Preserve existing themes/accessibility features.
- Keep CSS responsibility-based; minimize JavaScript and excessive animation. Separate interaction behavior from DOM initialization/coordination.
- Interactive controls must communicate purpose and state.

## 6. Security Requirements

- Treat external/user-supplied data as untrusted. Validate input, escape output, use prepared statements, and validate URL schemes.
- Apply authorization/authentication, CSRF protection for state changes, rate limiting, and abuse prevention when appropriate.
- Prevent path traversal, unsafe dynamic includes, unsafe execution/command construction, and unauthorized filesystem access.
- Keep credentials and secrets out of public directories, source control, scripts, and displayed output.
- Review for destructive operations, unauthorized administrative behavior, injection, and illegal characters.
- Never disable security/TLS verification just to make deployment succeed.

## 7. Code Delivery and Modification

- **Default to complete replacement files**, not snippets or patches. Supply snippet edits only with explicit authorization.
- Inspect existing files before replacements. Preserve unrelated functionality, content, formatting, and uncommitted work.
- Give the exact path of every changed file; deliver full, directly copyable contents without placeholders or omitted sections.
- Include Fish-compatible creation commands for new files.
- For substantial changes, establish the intended module/file structure before implementation. Explain each changed module's responsibility succinctly.
- Never use a single large code block as a substitute for separate required files.
- Keep explanations technical, direct, and concise. Prefer executable solutions over pseudocode.

## 8. Git, Authorization, and Deployment

- Inspect `git status` first; do not stage unrelated files. Review intended changes before any authorized commit.
- Never force-push or rewrite history, reset, rebase, amend, delete branches, or discard work without explicit permission.
- Never autonomously create branches, commits, pushes, merges, or pull requests. Keep private repositories private.
- Obtain explicit consent before external changes, potentially destructive operations, commits, pushes, deployment, or infrastructure changes.
- Work locally; production is deployment-only. Use existing deploy scripts, preview transfers, and preserve remote files unless deletion is intended.
- Deployment requires a clean tree; local `main` must match `origin/main` when the project's workflow requires it. Never deploy uncommitted/unpushed changes.
- Keep FTPS/TLS certificate verification enabled; never expose credentials. Keep staging and production separate; verify production after authorized deployment.

## 9. Validation and Reporting

- Validate syntax and behavior with applicable checks: `php -l`, `node --check`, `fish -n`, local HTTP requests, browser checks, and desktop/mobile testing.
- Review `git diff --check`, `git diff --stat`, `git diff`, and `git status -sb` as applicable.
- Check affected files/functions against length limits and verify one responsibility per module, minimal orchestration, and no unnecessary coupling/duplication.
- Check edge cases, input handling, security, and regressions. Run the project's modularity validator if one exists.
- Fix identified errors before recommending deployment. Never claim a check ran when it did not; disclose unverified behavior, violations, and authorized exceptions.

## 10. Existing PHP Website Conventions

For `jgcole-senate` and `jgcole-house`:

- Prefer `app/` for private bootstrap, actions, components, configuration, and content; use `public/` as the web root, with public assets under `public/assets/`; keep project scripts under `scripts/`.
- Reuse shared components; keep CSS modular, tokenized, theme-aware, and client-side JavaScript minimal.
- Maintain portable URLs/paths, existing content/layouts, accessibility, mobile parity, and established publishing/validation workflows.
- Preserve separate staging and production processes.

## 11. Required Implementation Workflow

For creating, modifying, debugging, reviewing, or refactoring code, use the `modular-development` skill at `.agents/skills/modular-development/SKILL.md` when available. If the skill is unavailable, follow this sequence directly:

1. Inspect relevant code, architecture, dependencies, and Git status.
2. Identify independent responsibilities and assign them to appropriately sized modules.
3. Implement only authorized changes, preserving behavior and modular boundaries.
4. Validate syntax, behavior, security, file/function lengths, and repository diffs.
5. Report modified paths, tests performed, unresolved problems, and required exceptions.

**Do not declare an implementation compliant solely because the code runs or its files are short.**