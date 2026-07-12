# Guidance for Codex agents

## Project purpose

Phase20 is a language-learning application. This repository is a public library of interactive HTML prototypes used to explore product design, user experience, accessibility, educational ideas, and feature concepts before software implementation.

The primary contributor works mainly in product design, UX, educational concepts, and feature ideation rather than software development. Explain technical decisions in plain language, make sensible product-design decisions independently, and avoid unnecessary technical questions. Lead with user and educational value, and preserve the contributor's original design intentions.

Treat prototypes as discussion and feedback tools, not promises of finished product behaviour.

## Repository and publishing context

- GitHub repository: `deshmipasanthima01/phase20-mockups`
- Default branch: `main`
- GitHub Pages catalogue: <https://deshmipasanthima01.github.io/phase20-mockups/>
- Root `index.html` is the public prototype catalogue.
- Shared styling belongs in `shared/css/`.
- Shared JavaScript belongs in `shared/js/`.
- Shared images belong in `shared/images/`.
- `shared/mockup-template.html` is the reusable starting template for new prototypes.

Preserve unrelated user work, respect `.gitignore`, and review the exact changes you make. Do not commit Codex working folders, generated downloads, or temporary files.

## Product-area folders

- `vocabulary/` — vocabulary discovery, practice, organisation, and retention
- `practice-sessions/` — guided, focused, and adaptive practice
- `teacher-tools/` — teacher planning, assignment, classroom support, and learner insights
- `student-experience/` — learner journeys, progress, motivation, and everyday use
- `onboarding/` — first-time learner and teacher experiences
- `accessibility/` — inclusive experiences across abilities, preferences, devices, and contexts
- `general-ux/` — navigation, feedback, account experiences, and shared product patterns

If a concept spans several areas, choose one primary folder and mention related areas in its metadata instead of duplicating the prototype.

## Notion context

The connected Phase20 Notion workspace contains `Design & Feature Ideas` and `Feature & Design Tracker`.

- When a request concerns an existing feature, design decision, requirement, or tracker entry, search these relevant Notion areas before making assumptions.
- Do not search the entire Notion workspace without a task-related reason.
- Reading relevant Notion entries for context is appropriate.
- Do not create, move, or substantially edit Notion content unless the user explicitly asks.
- When a matching Notion feature entry is known, include its URL or stable reference in the prototype metadata.
- When requested, add the published GitHub Pages prototype URL to the corresponding Notion entry.
- Keep the feature name, status, and short description consistent between Notion and the repository catalogue.
- Never invent Notion URLs, page IDs, decisions, or requirements.

## Workflow for a new mockup

1. Read `README.md` and this file, then inspect relevant existing mockups.
2. Consult the related Notion feature entry when the task refers to one.
3. Select the most appropriate product-area folder.
4. Use a clear lowercase, hyphenated HTML filename.
5. Use `shared/mockup-template.html` as the starting point when appropriate. After copying it into a product-area folder, use `../shared/css/styles.css` and `../shared/js/main.js` for its shared assets.
6. Preserve useful visual design and interactions from user-provided mockups.
7. Add an accessible link back to `../index.html`.
8. Add or update the corresponding card in root `index.html`.
9. Ensure every catalogue card includes a feature name, short plain-language description, status, date updated, and working prototype link.
10. Update the relevant category `README.md`.
11. Prefer shared CSS and JavaScript for reusable patterns.
12. A supplied prototype may remain self-contained when separating its code would risk altering its design or interactions.
13. Verify relative links, keyboard access, responsive behaviour, reduced-motion behaviour, and basic HTML and JavaScript integrity.
14. Report the files changed, validation performed, commit information, prototype URL, and any remaining GitHub Pages or Notion action. If nothing was committed or published, say so clearly.

## Product-design principles

- Explain the user need before implementation details.
- Focus each prototype on a clear learner or teacher journey.
- Use realistic language-learning content where practical.
- Make the primary action obvious.
- Support keyboard navigation and visible focus states.
- Use plain, encouraging interface language.
- Ensure responsive layouts work on mobile and desktop.
- Preserve accessibility when making visual or interaction changes.
- Avoid making the interface feel unnecessarily technical.

## Standard statuses

- `Planned` — placeholder or future concept
- `Early concept` — initial interactive exploration
- `In progress` — actively being developed or refined
- `Ready for feedback` — complete enough for stakeholder review
- `Archived` — retained for reference but no longer active

Use these labels consistently in prototype metadata and catalogue cards. Supporting text may describe the prototype more precisely, but should not replace the standard status.

## Git and publishing expectations

- Preserve unrelated user changes and inspect the exact diff before committing.
- Use short, descriptive commit messages.
- Do not rewrite published history or force-push.
- The project has previously used direct commits to `main`, but follow the user's current publishing instruction.
- If a requested change is structurally significant or risky and the user has not specified a publishing method, explain whether a pull request would be safer.
- Never enable, disable, or change GitHub Pages settings unless the user asks.
- After publishing, verify that the committed files exist remotely and that prototype links are correct.
- Standing project preference: for requested Phase20 changes, validate the result, commit it with a short descriptive message, push it to `main`, and verify the GitHub Pages deployment automatically.
- Before committing, briefly summarize the exact files and behaviour changed. Pause instead of publishing if unrelated user changes are present, the change is unusually risky, GitHub access is unavailable, or validation/deployment fails.
