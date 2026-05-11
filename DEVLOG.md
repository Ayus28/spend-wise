# Devlopment Log

## Day 1 - May 8, 2026
- Created the public respository for AI Spend Audit tool.
- Initialized the project documentation (README and DEVLOG).
- Defined the project scope and 7-day roadmap.
- Started research on AI tool pricing models.

## Day 2 - May 9, 2026
- **Research**:Investigated official pricing for major AI tools (ChatGPT, Claude, Cursor, GitHub Copilot, etc).
- **Data Documentation**: Created `PRICING_DATA.md` to act as a reference for the audit engine.
- **User Research**: Conducted 4 user interviews/personas to identify common "Pain Points" like overlapping subscriptions and high monthly spends.
- **Insights**: Discovered that many users are spending over ₹4,000-₹5,000 ($50+) monthly on tools with redundant features.
- **Planning**: Defined the core logic for the "Savings Calculator" based on these interviews.

## Day 3: System Stabilization & Project Cleanup
- **GPU Issue Resolved**: Fixed the pink screen/glitch issue by disabling hardware acceleration using the `--disable-gpu` flag.
- **Project Structure Fix**: Moved bikhri hui files (`package.json`, `tailwind.config.js`, etc.) into the main `ai-spend-audit` folder for better organization.
- **Environment Cleanup**: Deleted the `.next` cache and re-installed dependencies using `npm install` to fix "next is not recognized" errors.
- **Localhost Success**: Successfully started the development server and verified the project is running on `http://localhost:3000`.
- **GitHub Sync**: Committed and pushed the stable setup to the repository.
