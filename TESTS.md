# Test Cases - AI Spend Auditor

I have performed the following manual tests to ensure the application works as expected:

### 1. Dynamic Tool Management
- **Test:** Adding a new tool via the form.
- **Result:** Success. The tool appears in the history table and the "Total Spend" updates immediately.
- **Test:** Deleting a tool using the delete button.
- **Result:** Success. The tool is removed and the "Total Spend" decreases.

### 2. AI Budget Alert Logic
- **Test:** Adding tools until the total cost exceeds $60.
- **Result:** Success. The UI theme changes to red, a "Budget Alert" badge appears, and the Optimization Score drops to 60%.
- **Test:** Deleting tools to bring the total cost below $60.
- **Result:** Success. The UI returns to the normal green theme.

### 3. Responsive Design
- **Test:** Opening the deployed Vercel link on a mobile device.
- **Result:** Success. The layout adjusts correctly for smaller screens.

### 4. Deployment Check
- **Test:** Accessing the URL in an Incognito window.
- **Result:** Success. The app is reachable and fully functional.
