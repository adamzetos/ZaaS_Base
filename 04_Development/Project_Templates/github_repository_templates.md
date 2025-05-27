# GitHub Repository Templates
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
Standardized GitHub repository templates for different project types at Zetos Development Studio, ensuring consistent version control, collaboration, and deployment practices.

## 🎯 Purpose
- Provide ready-to-use repository templates for different project types
- Ensure consistent GitHub configuration across all projects
- Enable automated CI/CD pipelines from project start
- Facilitate team collaboration with proper branch protection
- Maintain security and compliance standards

## 📚 Repository Template Types

### 1️⃣ Full-Stack Web Application Template
### 2️⃣ Mobile Application Template  
### 3️⃣ No-Code Platform Template (Bubble/Webflow)
### 4️⃣ API/Backend Service Template
### 5️⃣ Static Website Template

---

## 1️⃣ Full-Stack Web Application Template

### Repository Structure
```
📁 [CLIENT_CODE]_[PROJECT_NAME]/
├── 📁 .github/
│   ├── 📁 workflows/
│   │   ├── ci.yml
│   │   ├── deploy-staging.yml
│   │   └── deploy-production.yml
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── task.md
│   ├── 📁 PULL_REQUEST_TEMPLATE/
│   │   └── pull_request_template.md
│   └── CODEOWNERS
│
├── 📁 frontend/
│   ├── 📁 src/
│   ├── 📁 public/
│   ├── 📁 tests/
│   ├── package.json
│   ├── README.md
│   └── .env.example
│
├── 📁 backend/
│   ├── 📁 src/
│   ├── 📁 tests/
│   ├── 📁 config/
│   ├── package.json
│   ├── README.md
│   └── .env.example
│
├── 📁 database/
│   ├── 📁 migrations/
│   ├── 📁 seeds/
│   └── schema.sql
│
├── 📁 docs/
│   ├── API.md
│   ├── SETUP.md
│   ├── DEPLOYMENT.md
│   └── ARCHITECTURE.md
│
├── 📁 scripts/
│   ├── setup.sh
│   ├── deploy.sh
│   └── backup.sh
│
├── .gitignore
├── .gitattributes
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── SECURITY.md
└── docker-compose.yml
```

### Key Configuration Files

#### .github/workflows/ci.yml
```yaml
name: Continuous Integration

on:
  push:
    branches: [ dev, preprod ]
  pull_request:
    branches: [ dev, preprod, master ]

jobs:
  frontend-tests:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./frontend
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: ./frontend/package-lock.json
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build

  backend-tests:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./backend
    
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ROOT_PASSWORD: ${{ secrets.MYSQL_ROOT_PASSWORD }}
          MYSQL_DATABASE: ${{ secrets.MYSQL_DATABASE }}
        options: >-
          --health-cmd="mysqladmin ping"
          --health-interval=10s
          --health-timeout=5s
          --health-retries=5
        ports:
          - 3306:3306
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        cache-dependency-path: ./backend/package-lock.json
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run tests
      run: npm test
      env:
        DATABASE_URL: ${{ secrets.TEST_DATABASE_URL }}
    
    - name: Run security audit
      run: npm audit --audit-level=high

  code-quality:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: SonarCloud Scan
      uses: SonarSource/sonarcloud-github-action@master
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

#### .github/CODEOWNERS
```
# Global owners
* @adamzetos

# Frontend code owners
/frontend/ @frontend-team

# Backend code owners
/backend/ @backend-team

# Database changes require DBA review
/database/ @backend-team @adamzetos

# Documentation
/docs/ @adamzetos @project-manager

# CI/CD configuration
/.github/ @adamzetos @devops-team
```

#### README.md Template
```markdown
# [Project Name]

**Client**: [Client Name]  
**Project Code**: [CLIENT_CODE]_[PROJECT_NAME]  
**Status**: 🟢 Active Development  
**Classification**: ZETOS-CONFIDENTIAL ▲

## 📋 Project Overview
[Brief description of the project, its purpose, and key features]

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- MySQL 8.0 or higher
- Docker (optional)

### Installation
```bash
# Clone the repository
git clone https://github.com/zetos/[CLIENT_CODE]_[PROJECT_NAME].git

# Run setup script
./scripts/setup.sh

# Or manual setup
cd frontend && npm install
cd ../backend && npm install
```

### Development
```bash
# Start all services
docker-compose up

# Or run separately
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

## 📁 Project Structure
```
├── frontend/          # React frontend application
├── backend/           # Node.js Express API
├── database/          # Database schemas and migrations
├── docs/              # Project documentation
└── scripts/           # Utility scripts
```

## 🔧 Technology Stack
- **Frontend**: React 18, TypeScript, Material-UI
- **Backend**: Node.js, Express, TypeScript
- **Database**: MySQL 8.0
- **Testing**: Jest, React Testing Library
- **CI/CD**: GitHub Actions
- **Deployment**: AWS EC2 + RDS

## 📖 Documentation
- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Architecture Overview](./docs/ARCHITECTURE.md)

## 🤝 Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for our code of conduct and submission process.

## 🔒 Security
For security concerns, please read [SECURITY.md](SECURITY.md) and report issues to security@zetos.com

### Security Notes
- Never commit sensitive data (passwords, API keys, etc.) to the repository
- All secrets should be stored in GitHub Secrets or environment variables
- Database credentials for CI/CD are managed through GitHub Secrets

## 👥 Team
- **Project Manager**: [Name]
- **Tech Lead**: [Name]
- **Frontend Team**: [Names]
- **Backend Team**: [Names]
- **QA Team**: [Names]

## 📄 License
This project is proprietary and confidential. See [LICENSE](LICENSE) for details.
```

---

## 2️⃣ Mobile Application Template

### Repository Structure
```
📁 [CLIENT_CODE]_[PROJECT_NAME]_Mobile/
├── 📁 .github/
│   └── [Similar to web template]
│
├── 📁 ios/
│   ├── 📁 [ProjectName]/
│   ├── 📁 [ProjectName]Tests/
│   ├── Podfile
│   └── README.md
│
├── 📁 android/
│   ├── 📁 app/
│   ├── 📁 gradle/
│   ├── build.gradle
│   └── README.md
│
├── 📁 shared/
│   ├── 📁 api/
│   ├── 📁 models/
│   ├── 📁 utils/
│   └── 📁 constants/
│
├── 📁 assets/
│   ├── 📁 images/
│   ├── 📁 fonts/
│   └── 📁 icons/
│
├── 📁 docs/
│   ├── SETUP_IOS.md
│   ├── SETUP_ANDROID.md
│   ├── BUILD_GUIDE.md
│   └── RELEASE_PROCESS.md
│
├── .gitignore
├── README.md
└── fastlane/
    ├── Fastfile
    ├── Appfile
    └── Matchfile
```

### Mobile-Specific GitHub Actions
```yaml
name: Mobile CI

on:
  push:
    branches: [ dev, preprod ]
  pull_request:
    branches: [ dev, preprod, master ]

jobs:
  ios-build:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Ruby
      uses: ruby/setup-ruby@v1
      with:
        ruby-version: '3.0'
        bundler-cache: true
    
    - name: Install CocoaPods
      run: |
        cd ios
        pod install
    
    - name: Build iOS
      run: |
        cd ios
        xcodebuild -workspace [ProjectName].xcworkspace \
          -scheme [ProjectName] \
          -sdk iphonesimulator \
          -configuration Debug \
          build

  android-build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup JDK
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'adopt'
    
    - name: Build Android
      run: |
        cd android
        ./gradlew assembleDebug
    
    - name: Run Android Tests
      run: |
        cd android
        ./gradlew test
```

---

## 3️⃣ No-Code Platform Template (Bubble/Webflow)

### Repository Structure
```
📁 [CLIENT_CODE]_[PROJECT_NAME]_NoCode/
├── 📁 .github/
│   ├── 📁 workflows/
│   │   └── documentation.yml
│   └── 📁 ISSUE_TEMPLATE/
│
├── 📁 bubble/
│   ├── 📁 plugins/
│   ├── 📁 custom_code/
│   ├── 📁 api_workflows/
│   ├── bubble_config.json
│   └── README.md
│
├── 📁 webflow/
│   ├── 📁 custom_code/
│   ├── 📁 cms_structure/
│   ├── webflow_config.json
│   └── README.md
│
├── 📁 integrations/
│   ├── 📁 zapier/
│   ├── 📁 webhooks/
│   └── 📁 third_party/
│
├── 📁 assets/
│   └── [Images, fonts, etc.]
│
├── 📁 docs/
│   ├── PLATFORM_SETUP.md
│   ├── CUSTOM_CODE_GUIDE.md
│   └── DEPLOYMENT.md
│
├── .gitignore
└── README.md
```

---

## 4️⃣ API/Backend Service Template

### Repository Structure
```
📁 [CLIENT_CODE]_[PROJECT_NAME]_API/
├── 📁 .github/
│   └── [CI/CD configurations]
│
├── 📁 src/
│   ├── 📁 controllers/
│   ├── 📁 services/
│   ├── 📁 models/
│   ├── 📁 middleware/
│   ├── 📁 routes/
│   ├── 📁 utils/
│   └── app.js
│
├── 📁 tests/
│   ├── 📁 unit/
│   ├── 📁 integration/
│   └── 📁 e2e/
│
├── 📁 config/
│   ├── default.json
│   ├── production.json
│   └── test.json
│
├── 📁 database/
│   ├── 📁 migrations/
│   └── 📁 seeds/
│
├── 📁 docs/
│   ├── 📁 swagger/
│   └── API_REFERENCE.md
│
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 5️⃣ Static Website Template

### Repository Structure
```
📁 [CLIENT_CODE]_[PROJECT_NAME]_Website/
├── 📁 .github/
│   ├── 📁 workflows/
│   │   └── deploy-static.yml
│   └── dependabot.yml
│
├── 📁 src/
│   ├── 📁 pages/
│   ├── 📁 components/
│   ├── 📁 styles/
│   ├── 📁 scripts/
│   └── 📁 assets/
│
├── 📁 public/
│   └── [Static assets]
│
├── 📁 tests/
│   ├── accessibility.test.js
│   └── performance.test.js
│
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

---

## 🔧 Common Configuration Files

### .gitignore (Master Template)
```gitignore
# Dependencies
node_modules/
vendor/
bower_components/

# Build outputs
dist/
build/
out/
.next/
.nuxt/
.cache/

# Environment files
.env
.env.local
.env.*.local
*.env

# IDE files
.vscode/
.idea/
*.swp
*.swo
.DS_Store

# Logs
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Testing
coverage/
.nyc_output/
test-results/

# Temporary files
tmp/
temp/
*.tmp

# Platform specific
# iOS
ios/build/
ios/Pods/
*.xcworkspace/xcuserdata/

# Android
android/build/
android/.gradle/
android/local.properties

# Secrets (never commit)
*.pem
*.key
*.cert
secrets/
credentials/
```

### Branch Protection Rules
```json
{
  "master": {
    "protection_rules": {
      "required_reviews": 2,
      "dismiss_stale_reviews": true,
      "require_code_owner_reviews": true,
      "required_status_checks": [
        "continuous-integration",
        "code-quality",
        "security-scan"
      ],
      "enforce_admins": false,
      "restrictions": {
        "users": ["adamzetos"],
        "teams": ["senior-developers"]
      }
    }
  },
  "preprod": {
    "protection_rules": {
      "required_reviews": 1,
      "required_status_checks": [
        "continuous-integration",
        "code-quality"
      ]
    }
  },
  "dev": {
    "protection_rules": {
      "required_reviews": 1,
      "required_status_checks": [
        "continuous-integration"
      ]
    }
  }
}
```

### Issue Templates

#### bug_report.md
```markdown
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: 'bug, needs-triage'
assignees: ''
---

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - Device: [e.g. iPhone 12, Desktop]
 - OS: [e.g. iOS 15, Windows 11]
 - Browser: [e.g. Chrome 95, Safari]
 - Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

#### feature_request.md
```markdown
---
name: Feature Request
about: Suggest an idea for this project
title: '[FEATURE] '
labels: 'enhancement, needs-review'
assignees: ''
---

**Is your feature request related to a problem? Please describe.**
A clear and concise description of what the problem is.

**Describe the solution you'd like**
A clear and concise description of what you want to happen.

**Describe alternatives you've considered**
A clear and concise description of any alternative solutions or features.

**Business value**
Explain the business value and impact of this feature.

**Additional context**
Add any other context, mockups, or examples about the feature request.
```

### Pull Request Template
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Related Issues
Fixes #(issue number)

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes

## Screenshots (if applicable)
Add screenshots to help explain your changes.

## Additional Notes
Any additional information that reviewers should know.
```

---

## 🚀 Repository Setup Process

### 1️⃣ Initial Repository Creation
```bash
# Using GitHub CLI
gh repo create zetos/[CLIENT_CODE]_[PROJECT_NAME] \
  --private \
  --description "[Project description]" \
  --clone

# Add topics for better organization
gh repo edit --add-topic "client-[CLIENT_CODE]"
gh repo edit --add-topic "[project-type]"
```

### 2️⃣ Branch Setup
```bash
# Create and protect branches
git checkout -b dev
git push -u origin dev

git checkout -b preprod
git push -u origin preprod

# Set default branch to dev
gh repo edit --default-branch dev
```

### 3️⃣ Apply Branch Protection
```bash
# Using GitHub CLI to set branch protection
gh api repos/zetos/[REPO_NAME]/branches/master/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["continuous-integration"]}' \
  --field enforce_admins=false \
  --field required_pull_request_reviews='{"required_approving_review_count":2}'
```

### 4️⃣ Add Collaborators
```bash
# Add team members
gh repo add-collaborator [username] --permission write
```

### 5️⃣ Configure Secrets
```bash
# Add repository secrets for CI/CD
gh secret set AWS_ACCESS_KEY_ID
gh secret set AWS_SECRET_ACCESS_KEY
gh secret set SONAR_TOKEN

# Add database secrets for testing
gh secret set MYSQL_ROOT_PASSWORD -b "test"
gh secret set MYSQL_DATABASE -b "test_db"
gh secret set TEST_DATABASE_URL -b "mysql://root:test@localhost:3306/test_db"
```

---

## 📋 Repository Standards Checklist

### Initial Setup
- [ ] Repository created with correct naming convention
- [ ] Appropriate template applied
- [ ] Branch protection rules configured
- [ ] Team access configured
- [ ] Secrets and environment variables set
- [ ] Issue and PR templates added
- [ ] CODEOWNERS file configured

### Documentation
- [ ] README.md complete and informative
- [ ] CONTRIBUTING.md with guidelines
- [ ] SECURITY.md with security policies
- [ ] API documentation (if applicable)
- [ ] Setup guides for all environments

### CI/CD Configuration
- [ ] GitHub Actions workflows configured
- [ ] All tests running on PR
- [ ] Code quality checks enabled
- [ ] Security scanning configured
- [ ] Deployment pipelines set up

### Code Quality
- [ ] Linting rules defined
- [ ] Code formatting standards set
- [ ] Pre-commit hooks configured
- [ ] Test coverage requirements defined

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Template Version: 1.0 - Master templates for all repository types**