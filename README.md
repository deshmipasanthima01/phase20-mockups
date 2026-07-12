# Phase20 Design Mockups

This public repository is the shared home for interactive HTML prototypes for **Phase20**, a language-learning application. It helps product, education, design, and development collaborators see an idea, try its key interactions, and discuss it before it becomes a finished feature.

The repository is intentionally friendly to non-developers. Each prototype can be opened in a web browser and can later be linked from the matching entry in the Phase20 Notion **Feature & Design Tracker** under **Design & Feature Ideas**.

## Repository structure

```text
phase20-mockups/
├── index.html                 # Public prototype catalogue
├── README.md                  # This guide
├── vocabulary/               # Vocabulary discovery and learning
├── practice-sessions/         # Guided and adaptive practice
├── teacher-tools/             # Teacher planning and insight tools
├── student-experience/        # Learner journeys and motivation
├── onboarding/                # First-time experiences
├── accessibility/             # Inclusive design concepts
├── general-ux/                # Shared product experience patterns
└── shared/
    ├── css/styles.css         # Shared visual design
    ├── js/main.js             # Shared interactions
    ├── images/README.md       # Image storage guidance
    └── mockup-template.html   # Copy-ready prototype template
```

Each category contains a short README so the folder remains visible before its first prototype is added.

## Adding a new mockup

1. Choose the category that best matches the feature.
2. Make a copy of `shared/mockup-template.html` inside that folder and give it a clear lowercase name, for example `vocabulary/smart-review.html`.
3. In the copied file, change the shared asset paths to `../shared/css/styles.css` and `../shared/js/main.js`.
4. Replace the feature name, description, status, updated date, and Notion reference.
5. Build the prototype inside the **Prototype canvas** section. Shared images belong in `shared/images/`.
6. Add or replace a card in the root `index.html`. Set its link to the new file, for example `vocabulary/smart-review.html`.
7. Open the landing page and test the prototype at both desktop and mobile widths.
8. Commit the changes, then paste the GitHub Pages prototype URL into the corresponding Notion feature entry.

Suggested status labels are **Early concept**, **In progress**, **Ready for feedback**, and **Archived**.

## Previewing locally

For a quick preview, download or clone the repository and double-click `index.html`. It will open in your default web browser.

For the most accurate preview, use a simple local web server. If Python is installed, open a terminal in the repository folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000` in a browser. Stop the preview by pressing `Ctrl+C` in the terminal.

## Publishing with GitHub Pages

1. Open the repository on GitHub.
2. Select **Settings**, then **Pages** in the left menu.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Select **Save** and wait a few minutes for the first deployment.

The public site will be available at:

**https://deshmipasanthima01.github.io/phase20-mockups/**

GitHub Pages republishes automatically after future changes are committed to `main`.

## Prototype principles

- Explain the idea in plain language before showing the interface.
- Focus each prototype on one user need or decision.
- Make the main interaction obvious and keyboard accessible.
- Use realistic learning content where possible.
- Include a status, updated date, and Notion reference.
- Treat prototypes as discussion tools, not finished product promises.
