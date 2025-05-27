# AI Bug Report Generation Prompt
**Classification: ZETOS-CONFIDENTIAL ▲**
**Created: 2025-05-25**
**Version: 1.0**

## 📋 Purpose
This prompt helps AI assistants generate comprehensive bug reports that provide developers with all necessary information to reproduce and fix issues efficiently.

## 🤖 AI Prompt Template

```
You are a QA engineer documenting a bug found during testing of [PROJECT_NAME]. Create a detailed bug report that enables developers to quickly understand, reproduce, and fix the issue.

### Context:
- Project: [PROJECT_NAME]
- Module/Feature: [MODULE_NAME]
- Build/Version: [BUILD_NUMBER]
- Environment: [TEST/STAGING/PROD]
- Test Case Reference: [TC-XXX]

### Issue Description:
[Provide a brief description of the issue encountered]

### Generate a comprehensive bug report including:

1. **Bug Summary**
   - One-line description that clearly states the problem
   - Include WHERE it happens and WHAT goes wrong

2. **Bug Details**
   - Severity: Critical/High/Medium/Low
   - Priority: P1/P2/P3/P4
   - Bug Type: Functional/UI/Performance/Security/Usability
   - Affected Component
   - Affected Users/Roles

3. **Steps to Reproduce**
   - Numbered, detailed steps
   - Include all data entered
   - Specify all clicks/actions
   - Note any timing considerations

4. **Expected vs Actual Results**
   - Clear description of expected behavior
   - Precise description of actual behavior
   - Highlight the specific deviation

5. **Environmental Information**
   - Browser/Device details
   - User credentials used
   - Test data specifics
   - Network conditions (if relevant)

6. **Supporting Evidence**
   - Error messages (exact text)
   - Console logs
   - Network logs
   - Screenshots/recordings references

7. **Impact Analysis**
   - Business impact
   - User impact
   - Workaround availability
   - Related features affected

### Bug Report Format:

```markdown
# BUG-[XXX]: [Clear, descriptive title]

## Summary
**Brief Description:** [One paragraph explaining the issue]
**Severity:** [Critical/High/Medium/Low]
**Priority:** [P1/P2/P3/P4]
**Type:** [Functional/UI/Performance/Security/Usability]
**Status:** New
**Reported By:** [Name]
**Reported Date:** [YYYY-MM-DD]
**Module:** [Affected module]
**Build/Version:** [Version number]

## Environment
- **OS:** [Windows 10/macOS/Linux]
- **Browser:** [Chrome 120.0/Firefox 121.0/Safari 17.0]
- **Device:** [Desktop/Mobile/Tablet]
- **Screen Resolution:** [1920x1080]
- **Test Environment:** [URL/Server]
- **User Role:** [Admin/User/Guest]
- **Test Account:** [username]

## Steps to Reproduce
1. Navigate to [URL/Page]
2. Login with credentials: [username/role]
3. Click on [Element name]
4. Enter data: [Specific data entered]
5. Click [Button/Link]
6. Observe [What to look for]

## Expected Result
[Describe what should happen according to requirements]
- [Specific expected behavior 1]
- [Specific expected behavior 2]

## Actual Result
[Describe what actually happens]
- [Specific actual behavior 1]
- [Specific actual behavior 2]

## Error Details
```
[Paste exact error message]
[Include stack trace if available]
```

## Console Logs
```javascript
[Paste relevant console errors/warnings]
```

## Business Impact
- **User Impact:** [How many users affected]
- **Feature Impact:** [Which features are blocked]
- **Business Process Impact:** [Which processes cannot be completed]
- **Financial Impact:** [If applicable]

## Workaround
[Describe any temporary workaround if available]
1. [Workaround step 1]
2. [Workaround step 2]

## Root Cause Analysis (if known)
[Any insights into why this might be happening]

## Suggested Fix (if applicable)
[Any suggestions for fixing the issue]

## Attachments
- [ ] Screenshot showing the issue
- [ ] Video recording of reproduction steps
- [ ] Log files
- [ ] Test data file

## Additional Notes
[Any other relevant information]

## Related Issues
- Related to: [BUG-YYY]
- Blocks: [TC-XXX]
- Regression from: [Previous version if applicable]
```

Generate a complete bug report based on the issue description provided.
```

## 📊 Severity Guidelines

### Critical (Severity 1)
- System crash or hang
- Data loss or corruption
- Security breach
- Complete feature failure
- No workaround available

### High (Severity 2)
- Major feature not working
- Significant performance degradation
- Incorrect calculations/results
- Workaround exists but difficult

### Medium (Severity 3)
- Minor feature not working
- UI/UX issues affecting usability
- Inconsistent behavior
- Easy workaround available

### Low (Severity 4)
- Cosmetic issues
- Spelling/grammar errors
- Minor UI inconsistencies
- Enhancement requests

## 🎯 Best Practices

1. **Be Specific**: Avoid vague descriptions like "doesn't work"
2. **Be Concise**: Include all necessary info without unnecessary details
3. **Be Objective**: Report facts, not opinions
4. **Be Complete**: Include all information needed to reproduce
5. **Be Professional**: Use clear, professional language

## 🔍 Quality Checklist

Before submitting the bug report, ensure:
- [ ] Title clearly describes the issue
- [ ] Steps to reproduce are complete and accurate
- [ ] Expected vs actual results are clearly differentiated
- [ ] All environment details are included
- [ ] Screenshots/logs are attached where relevant
- [ ] Severity and priority are appropriately assigned
- [ ] Business impact is clearly stated
- [ ] The report is free of duplicate information

---
**Classification: ZETOS-CONFIDENTIAL ▲**
**Storage: Bug Tracking System / JIRA**