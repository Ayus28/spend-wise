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

## Day 4: Dashboard Construction & Technical Debugging 🛠️

### Progress Update:
- **UI Development**: Created a fully functional dashboard using Next.js and Tailwind CSS.
- **State Management**: Implemented `useState` to handle dynamic AI tool audits.
- **Calculations**: Added logic to automatically calculate Total Monthly Spend and Estimated Savings.
- **Clean UI**: Removed system debug messages ("SYSTEM READY") for a professional user experience.

### Challenges & Fixes:
1. **Next.js Config Error**: Fixed `next.config.ts` compatibility issue by renaming it to `next.config.mjs`.
2. **Tailwind v4 Setup**: Resolved PostCSS plugin error by installing `@tailwindcss/postcss` and updating `postcss.config.js`.
3. **Cache Issue**: Learned to use Hard Refresh (`Ctrl+Shift+R`) and delete `.next` folder to force-update browser changes.

### Key Learnings:
- Importance of saving files (`Ctrl+S`) before checking browser updates.
- How `layout.tsx` and `page.tsx` work together in Next.js.
- Debugging terminal errors step-by-step.

### Status: 
- **Total AI Tools Tracked**: 2 (Initial) + Dynamic Adding capability.
- **System**: Operational and Clean.

