# AI Test Case Generation Prompt
**Classification: ZETOS-CONFIDENTIAL ▲**
**Created: 2025-05-25**
**Version: 1.0**

## 📋 Purpose
This prompt helps AI assistants generate comprehensive test cases based on requirements documentation and system specifications.

## 🤖 AI Prompt Template

```
You are a QA engineer tasked with creating comprehensive test cases for [PROJECT_NAME]. Based on the provided requirements and specifications, generate detailed test cases following the ZETOS testing standards.

### Context:
- Project: [PROJECT_NAME]
- Module/Feature: [MODULE_NAME]
- Requirements Document: [REQ_DOC_REFERENCE]
- Test Type: [Unit/Integration/UI/Performance/Security/UAT]

### Requirements to Test:
[PASTE REQUIREMENTS HERE]

### Generate test cases that include:

1. **Test Case Header**
   - Test Case ID (format: TC-[MODULE]-[NUMBER])
   - Test Case Name (descriptive)
   - Priority (High/Medium/Low)
   - Test Type
   - Associated Requirement ID

2. **Test Details**
   - Objective: What the test validates
   - Preconditions: Setup required before test
   - Test Data: Specific data needed
   - Test Steps: Numbered, clear actions
   - Expected Results: Specific, measurable outcomes
   - Post-conditions: State after test completion

3. **Coverage Areas**
   - Positive scenarios (happy path)
   - Negative scenarios (error handling)
   - Boundary conditions
   - Edge cases
   - Performance considerations
   - Security validations

4. **Test Variations**
   - Different user roles
   - Various data combinations
   - Multiple browser/device types
   - Different locales/languages

### Output Format:
Provide test cases in the following structure:

```markdown
## Test Case: [TC-ID]
**Name:** [Test Case Name]
**Priority:** [High/Medium/Low]
**Type:** [Test Type]
**Requirement:** [REQ-ID]

### Objective
[Clear statement of what this test validates]

### Preconditions
1. [Precondition 1]
2. [Precondition 2]

### Test Data
- [Data element 1]: [Value/Description]
- [Data element 2]: [Value/Description]

### Test Steps
1. [Action 1]
   - Expected: [Expected result 1]
2. [Action 2]
   - Expected: [Expected result 2]

### Post-conditions
[System state after test]

### Notes
[Any additional considerations]
```

Generate at least 10 comprehensive test cases covering all aspects of the requirements.
```

## 📊 Usage Instructions

1. **Prepare Input**
   - Copy the requirements to be tested
   - Identify the module/feature name
   - Determine test types needed

2. **Customize Prompt**
   - Replace all placeholder values
   - Add specific context about the system
   - Include any special testing considerations

3. **Review Output**
   - Ensure all requirements are covered
   - Verify test cases are complete
   - Check for missing scenarios

4. **Enhance Results**
   - Add system-specific validations
   - Include integration points
   - Consider non-functional requirements

## 🎯 Best Practices

- **Requirement Traceability**: Every test case must link to specific requirements
- **Clear Actions**: Test steps should be unambiguous and executable
- **Measurable Results**: Expected outcomes must be specific and verifiable
- **Complete Coverage**: Include positive, negative, and edge cases
- **Maintainability**: Write test cases that are easy to update

## 🔍 Quality Checklist

Before finalizing test cases, ensure:
- [ ] All requirements have associated test cases
- [ ] Test cases are independent and reusable
- [ ] Data requirements are clearly specified
- [ ] Expected results are measurable
- [ ] Edge cases and error scenarios included
- [ ] Performance criteria defined where applicable
- [ ] Security validations included where relevant

---
**Classification: ZETOS-CONFIDENTIAL ▲**
**Storage: Encrypted Google Drive with restricted access**