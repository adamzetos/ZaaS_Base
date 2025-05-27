# AI Test Automation Script Generation Prompt
**Classification: ZETOS-CONFIDENTIAL ▲**
**Created: 2025-05-25**
**Version: 1.0**

## 📋 Purpose
This prompt guides AI assistants in generating test automation scripts for various testing frameworks based on manual test cases.

## 🤖 AI Prompt Template

```
You are a test automation engineer converting manual test cases into automated test scripts for [PROJECT_NAME]. Generate test automation code following industry best practices and ZETOS standards.

### Context:
- Project: [PROJECT_NAME]
- Test Framework: [Selenium/Cypress/Jest/Playwright/Other]
- Programming Language: [JavaScript/Python/Java/TypeScript]
- Application Type: [Web/Mobile/API]
- Base URL: [APPLICATION_URL]

### Manual Test Case to Automate:
[PASTE MANUAL TEST CASE HERE]

### Generate an automated test script that includes:

1. **Test Setup**
   - Import necessary libraries
   - Configure test environment
   - Set up test data
   - Initialize page objects/elements

2. **Test Implementation**
   - Clear test structure
   - Proper element selectors
   - Appropriate waits and synchronization
   - Error handling
   - Assertions for all validations

3. **Best Practices**
   - Page Object Model implementation
   - Reusable functions
   - Clear naming conventions
   - Proper documentation/comments
   - Test data parameterization

4. **Test Teardown**
   - Clean up test data
   - Close connections
   - Reset application state

### Code Style Requirements:
- Use descriptive variable/function names
- Include inline comments for complex logic
- Follow [LANGUAGE] naming conventions
- Implement proper error messages
- Use appropriate assertion methods

### Output the code with:
- Complete, runnable test script
- Configuration requirements
- Dependencies list
- Execution instructions

Please ensure the script is production-ready and follows the DRY principle.
```

## 📊 Framework-Specific Templates

### Cypress (JavaScript/TypeScript)
```javascript
describe('[Test Suite Name]', () => {
  beforeEach(() => {
    // Setup code
    cy.visit('/');
  });

  it('[Test Case Name]', () => {
    // Test implementation
  });

  afterEach(() => {
    // Cleanup code
  });
});
```

### Selenium (Python)
```python
import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class TestCaseName(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        
    def test_case_name(self):
        # Test implementation
        
    def tearDown(self):
        self.driver.quit()
```

### Jest (JavaScript)
```javascript
describe('Test Suite Name', () => {
  let testData;
  
  beforeAll(() => {
    // One-time setup
  });
  
  beforeEach(() => {
    // Setup before each test
  });
  
  test('Test Case Name', async () => {
    // Test implementation
  });
  
  afterEach(() => {
    // Cleanup after each test
  });
});
```

## 🎯 Usage Instructions

1. **Select Framework**
   - Choose appropriate testing framework
   - Verify language compatibility
   - Check project requirements

2. **Prepare Test Case**
   - Ensure manual test case is complete
   - Identify all elements to interact with
   - Note all validations needed

3. **Customize Prompt**
   - Fill in all context variables
   - Add specific framework requirements
   - Include project conventions

4. **Review Generated Code**
   - Verify selector strategies
   - Check wait conditions
   - Ensure assertions are complete
   - Test error handling

## 🔍 Quality Checklist

- [ ] All test steps automated
- [ ] Proper waits implemented
- [ ] Error handling included
- [ ] Assertions verify all expected results
- [ ] Code follows project standards
- [ ] Reusable components created
- [ ] Test data externalized
- [ ] Comments explain complex logic

---
**Classification: ZETOS-CONFIDENTIAL ▲**
**Storage: Encrypted Google Drive with restricted access**