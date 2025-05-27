# Test Case Template
**Classification: ZETOS-CONFIDENTIAL ▲**
**Project:** [PROJECT_NAME]
**Module:** [MODULE_NAME]
**Created:** [YYYY-MM-DD]
**Version:** [X.X]

## Test Case: [TC-MODULE-XXX]

### Test Case Information
| Field | Value |
|-------|-------|
| **Test Case ID** | TC-[MODULE]-[XXX] |
| **Test Case Name** | [Descriptive name of what is being tested] |
| **Priority** | [High/Medium/Low] |
| **Test Type** | [Functional/Integration/Performance/Security/UAT] |
| **Requirement ID** | [REQ-XXX] |
| **User Story** | [US-XXX] |
| **Created By** | [Name] |
| **Created Date** | [YYYY-MM-DD] |
| **Last Updated** | [YYYY-MM-DD] |
| **Status** | [Draft/Reviewed/Approved] |

### Test Objective
[Clear statement of what this test case is designed to validate or verify]

### Test Scope
**In Scope:**
- [What is included in this test]
- [Specific features/functions tested]

**Out of Scope:**
- [What is NOT tested by this case]
- [Related items tested elsewhere]

### Preconditions
1. [System/environment state required before test execution]
2. [User permissions/roles required]
3. [Data setup requirements]
4. [Dependencies that must be met]

### Test Data
| Data Element | Value/Description | Source |
|--------------|-------------------|---------|
| [Element 1] | [Value or description] | [Where to get/create] |
| [Element 2] | [Value or description] | [Where to get/create] |
| [Element 3] | [Value or description] | [Where to get/create] |

### Test Environment
- **Browser(s):** [Chrome/Firefox/Safari/Edge]
- **OS:** [Windows/Mac/Linux]
- **Device:** [Desktop/Mobile/Tablet]
- **Screen Resolution:** [If specific requirement]
- **Network:** [Any specific network conditions]

### Test Steps
| Step # | Action | Test Data | Expected Result | Actual Result | Pass/Fail |
|--------|--------|-----------|-----------------|---------------|-----------|
| 1 | [Detailed action description] | [Data used] | [Specific expected outcome] | [To be filled during execution] | [P/F] |
| 2 | [Detailed action description] | [Data used] | [Specific expected outcome] | [To be filled during execution] | [P/F] |
| 3 | [Detailed action description] | [Data used] | [Specific expected outcome] | [To be filled during execution] | [P/F] |

### Alternative Flows
**Alternative Flow 1: [Name]**
- Condition: [When this flow applies]
- Steps: [Modified steps]
- Expected Result: [Different outcome]

### Negative Test Scenarios
1. **Invalid Input**: [Description and expected error handling]
2. **Boundary Conditions**: [Edge cases to test]
3. **Error Conditions**: [System behavior under errors]

### Post-conditions
1. [System state after successful test execution]
2. [Data changes that should persist]
3. [Any cleanup required]

### Test Execution History
| Execution Date | Tester | Build/Version | Result | Defect ID | Notes |
|----------------|---------|---------------|---------|-----------|-------|
| [YYYY-MM-DD] | [Name] | [Version] | [Pass/Fail] | [DEF-XXX] | [Any notes] |

### Defects
| Defect ID | Summary | Status | Priority |
|-----------|---------|---------|----------|
| [DEF-XXX] | [Brief description] | [Open/Fixed/Closed] | [High/Med/Low] |

### Automation Status
- **Suitable for Automation:** [Yes/No]
- **Automation Priority:** [High/Medium/Low]
- **Automation Script:** [Link to script if automated]
- **Framework:** [Selenium/Cypress/etc.]

### Dependencies
- **Dependent Test Cases:** [TC-XXX, TC-YYY]
- **System Dependencies:** [External systems/APIs]
- **Data Dependencies:** [Specific data requirements]

### Risk Assessment
| Risk | Impact | Mitigation |
|------|---------|------------|
| [Risk description] | [High/Med/Low] | [How to handle] |

### Notes and Comments
- [Any special considerations]
- [Known issues or limitations]
- [Tips for test execution]

### Attachments
- [ ] Screenshots of expected behavior
- [ ] Test data files
- [ ] Related documentation
- [ ] Error message examples

### Review and Approval
| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author | [Name] | __________ | [Date] |
| Reviewer | [Name] | __________ | [Date] |
| Approver | [Name] | __________ | [Date] |

---
**Classification: ZETOS-CONFIDENTIAL ▲**
**Storage: Test Management System / Encrypted Repository**
**Retention: Maintain for project lifecycle + 2 years**