# GIT JOURNEY

## Introduction
This project was done to practice real-world Git and GitHub workflows.
The repository was provided with pre-built merge conflicts across multiple branches.
My task was to resolve all conflicts, use advanced Git commands, and document the process.

---

## Phase 1: Repository Setup
- Cloned the instructor repository.
- Created my own GitHub repository.
- Renamed the original remote to `instructor`.
- Added my repository as `origin`.
- Pushed the main branch to my repository.

---

## Phase 2: First Merge (main + dev)
- Merged `dev` branch into `main`.
- Faced merge conflicts in:
  - README.md
  - app-config.yaml
  - database-config.json
  - deploy.sh
  - monitor.js
  - architecture.md
- Resolved conflicts by keeping production settings as primary
  and adding development features safely.
- Verified all conflict markers were removed.
- Committed and pushed changes.

---

## Phase 3: Second Merge (main + conflict-simulator)
- Merged `conflict-simulator` branch into `main`.
- Encountered experimental and unstable features.
- Strategy used:
  - Keep stable production code
  - Ignore or isolate experimental AI features
- Resolved all conflicts carefully.
- Committed and pushed final stable version.

---

## Phase 4: Advanced Git Commands Used
- `git stash` to save temporary changes.
- `git fetch` and `git pull` to sync with instructor repository.
- `git cherry-pick` to apply a specific commit.
- `git rebase` to update a feature branch with main.
- `git reset` (soft, mixed, hard) to understand undo behavior.
- `git revert` to safely undo a commit.
- `git tag` to mark release versions.

---

## Challenges Faced
- Understanding conflict markers.
- Handling cherry-pick conflicts.
- Choosing correct code during merges.

---

## Learnings
- Learned how real teams handle merge conflicts.
- Understood difference between reset and revert.
- Gained confidence using Git in complex scenarios.

---

## Conclusion
This project helped me understand Git deeply.
I am now comfortable resolving conflicts and using advanced Git commands.
