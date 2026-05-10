#System Architecture - AI Spend Aduit Tool

This documnet outlines the technical Structure and logic flow of the Aduit Engine.

## 1. Tech Stack
- **Forntend**: React.js(Next.js)
- **Styling**: Tailwind CSS (for a clean, modern dashboard look)
- **State Management**: React Hooks (useState) to track selected tools.

## 2. The Audit Logic Flow
The engine works in three simple phases:

### A. Input Phase
- User Selects AI tools they currently use form a predefined list.
- User Selects their "Role" (Individual, Student, or Business).

### B. Processing Phase (The Engine)
- **Cost Calculations** Matches Selected tools against `PRICING_DATA.md`.
- **Redundancy Check** If a User selects both *ChatGPT Plus* and *Claude Pro*, the engine flags it as "Overlapping Usage".
- **Alternative Matcher**: If a user uses *Midjourney*, the engine suggests *Leonardo.ai* for cost savings.

### C. Output Phase
- **Dashboard**: Shows Total Monthly vs. Yearly Spend.
- **Smart Suggestion**: "Switch to X tool to save ₹Y per month".
- **Efficiency Score**: A score out of 100 based on their spending habits.

## 3. Component Tree
- `Header.jsx`: Title and Navigation.
- `ToolSelector.jsx`: Grid of tool cards with checkboxes.
- `AduitSummary.jsx`: Real-time calculation display.
- `Recommendations`: List of smart saving tips.
