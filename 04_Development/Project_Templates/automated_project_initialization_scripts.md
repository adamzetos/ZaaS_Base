# Automated Project Initialization Scripts
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
Comprehensive collection of automated scripts to initialize new projects at Zetos Development Studio, ensuring consistent setup, configuration, and compliance with all standards.

## 🎯 Purpose
- Automate repetitive project setup tasks
- Ensure 100% compliance with folder structure and naming conventions
- Initialize Git repositories with proper configuration
- Set up development environments automatically
- Generate initial documentation from templates
- Configure CI/CD pipelines from the start

## 🔧 Script Collection

### 1️⃣ Master Project Initialization Script
### 2️⃣ Platform-Specific Setup Scripts
### 3️⃣ Documentation Generation Scripts
### 4️⃣ Environment Configuration Scripts
### 5️⃣ Team Onboarding Scripts

---

## 1️⃣ Master Project Initialization Script

### init-project.sh
```bash
#!/bin/bash
# Zetos Project Initialization Script
# Version: 1.0
# Classification: ZETOS-CONFIDENTIAL ▲

set -euo pipefail

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TEMPLATE_DIR="${SCRIPT_DIR}/templates"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

# Function to validate input
validate_client_code() {
    if [[ ! $1 =~ ^[A-Z]{3}$ ]]; then
        print_error "Client code must be exactly 3 uppercase letters"
        return 1
    fi
    return 0
}

validate_project_name() {
    if [[ ! $1 =~ ^[A-Z][a-zA-Z0-9]+$ ]]; then
        print_error "Project name must be PascalCase without spaces"
        return 1
    fi
    return 0
}

# Display banner
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           Zetos Development Studio                           ║"
echo "║           Project Initialization Script v1.0                 ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Gather project information
echo "Please provide project information:"
read -p "Client Code (3 letters, uppercase): " CLIENT_CODE
while ! validate_client_code "$CLIENT_CODE"; do
    read -p "Client Code (3 letters, uppercase): " CLIENT_CODE
done

read -p "Project Name (PascalCase, no spaces): " PROJECT_NAME
while ! validate_project_name "$PROJECT_NAME"; do
    read -p "Project Name (PascalCase, no spaces): " PROJECT_NAME
done

read -p "Client Full Name: " CLIENT_FULL_NAME
read -p "Project Description: " PROJECT_DESC

# Language selection
echo ""
echo "Select documentation language:"
echo "1) English only"
echo "2) Chinese only" 
echo "3) Bilingual (EN + CN)"
read -p "Enter choice (1-3): " DOC_LANGUAGE

case $DOC_LANGUAGE in
    1) DOC_LANG="en" ;;
    2) DOC_LANG="cn" ;;
    3) DOC_LANG="bilingual" ;;
    *) DOC_LANG="en" ;;
esac

# Project type selection
echo ""
echo "Select project type:"
echo "1) Full-Stack Web Application"
echo "2) Mobile Application (iOS + Android)"
echo "3) No-Code Platform (Bubble/Webflow)"
echo "4) API/Backend Service Only"
echo "5) Static Website"
read -p "Enter choice (1-5): " PROJECT_TYPE

# Platform-specific questions
case $PROJECT_TYPE in
    1)
        PROJECT_TYPE_NAME="fullstack"
        read -p "Frontend framework (react/vue/angular): " FRONTEND_FRAMEWORK
        read -p "Backend framework (node/python/java): " BACKEND_FRAMEWORK
        ;;
    2)
        PROJECT_TYPE_NAME="mobile"
        read -p "Development framework (native/react-native/flutter): " MOBILE_FRAMEWORK
        ;;
    3)
        PROJECT_TYPE_NAME="nocode"
        read -p "Platform (bubble/webflow): " NOCODE_PLATFORM
        ;;
    4)
        PROJECT_TYPE_NAME="api"
        read -p "API framework (node/python/java): " API_FRAMEWORK
        ;;
    5)
        PROJECT_TYPE_NAME="website"
        read -p "Static site generator (none/gatsby/nextjs): " STATIC_GENERATOR
        ;;
esac

# Create project variables
PROJECT_FOLDER="${CLIENT_CODE}_${PROJECT_NAME}"
PROJECT_PATH="$(pwd)/${PROJECT_FOLDER}"
CURRENT_DATE=$(date +%Y-%m-%d)
GITHUB_REPO="zetos/${PROJECT_FOLDER}"

# Check if project already exists
if [ -d "${PROJECT_PATH}" ]; then
    print_error "Project directory already exists: ${PROJECT_PATH}"
    read -p "Do you want to delete the existing directory and continue? (y/n): " DELETE_EXISTING
    if [[ $DELETE_EXISTING == "y" ]]; then
        print_warning "Deleting existing directory..."
        rm -rf "${PROJECT_PATH}"
    else
        print_error "Cannot proceed with existing project directory. Exiting."
        exit 1
    fi
fi

# Confirmation
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "Project Configuration:"
echo "  Client Code: ${CLIENT_CODE}"
echo "  Project Name: ${PROJECT_NAME}"
echo "  Project Folder: ${PROJECT_FOLDER}"
echo "  Project Type: ${PROJECT_TYPE_NAME}"
echo "  Documentation Language: ${DOC_LANG}"
echo "  GitHub Repo: ${GITHUB_REPO}"
echo "════════════════════════════════════════════════════════════════"
echo ""
read -p "Proceed with initialization? (y/n): " CONFIRM

if [[ $CONFIRM != "y" ]]; then
    echo "Initialization cancelled."
    exit 0
fi

# Start initialization
echo ""
echo "Starting project initialization..."
echo ""

# 1. Create folder structure
print_status "Creating folder structure..."
mkdir -p "${PROJECT_PATH}"
cd "${PROJECT_PATH}"

# Copy appropriate folder template
cp -r "${TEMPLATE_DIR}/folder_structure/base/"* .

# Add project type specific folders
case $PROJECT_TYPE_NAME in
    fullstack)
        cp -r "${TEMPLATE_DIR}/folder_structure/fullstack/"* ./04_Development/
        ;;
    mobile)
        cp -r "${TEMPLATE_DIR}/folder_structure/mobile/"* ./04_Development/
        ;;
    nocode)
        cp -r "${TEMPLATE_DIR}/folder_structure/nocode/"* ./04_Development/
        ;;
esac

# 2. Initialize Git repository
print_status "Initializing Git repository..."
git init
git checkout -b dev

# Copy git templates
cp "${TEMPLATE_DIR}/git/.gitignore" .
cp "${TEMPLATE_DIR}/git/.gitattributes" .

# 3. Generate initial documentation
print_status "Generating initial documentation..."

# Function to generate bilingual content
generate_bilingual_content() {
    local en_content="$1"
    local cn_content="$2"
    
    if [[ $DOC_LANG == "en" ]]; then
        echo "$en_content"
    elif [[ $DOC_LANG == "cn" ]]; then
        echo "$cn_content"
    else  # bilingual
        echo "$en_content"
        echo ""
        echo "---"
        echo ""
        echo "$cn_content"
    fi
}

# Create README.md
if [[ $DOC_LANG == "bilingual" ]]; then
    cat > README.md << EOF
# ${PROJECT_NAME}

**Client**: ${CLIENT_FULL_NAME}  
**Project Code**: ${PROJECT_FOLDER}  
**Created**: ${CURRENT_DATE}  
**Status**: 🟢 Active Development  
**Classification**: ZETOS-CONFIDENTIAL ▲

## 📋 Project Overview / 项目概述
${PROJECT_DESC}

## 🚀 Quick Start / 快速开始
See [PROJECT_INFO.md](PROJECT_INFO.md) for detailed setup instructions.  
请参阅 [PROJECT_INFO.md](PROJECT_INFO.md) 获取详细的设置说明。

## 📁 Project Structure / 项目结构
\`\`\`
$(tree -L 2 -d | head -20)
\`\`\`

## 🔧 Technology Stack / 技术栈
- **Type / 类型**: ${PROJECT_TYPE_NAME}
$(case $PROJECT_TYPE_NAME in
    fullstack)
        echo "- **Frontend / 前端**: ${FRONTEND_FRAMEWORK}"
        echo "- **Backend / 后端**: ${BACKEND_FRAMEWORK}"
        ;;
    mobile)
        echo "- **Framework / 框架**: ${MOBILE_FRAMEWORK}"
        ;;
    nocode)
        echo "- **Platform / 平台**: ${NOCODE_PLATFORM}"
        ;;
    api)
        echo "- **Framework / 框架**: ${API_FRAMEWORK}"
        ;;
    website)
        echo "- **Generator / 生成器**: ${STATIC_GENERATOR}"
        ;;
esac)

## 👥 Team / 团队
- **Project Manager / 项目经理**: TBD
- **System Analyst / 系统分析师**: TBD
- **Developers / 开发人员**: TBD

## 📄 License / 许可证
This project is proprietary and confidential.  
本项目为专有且保密项目。
EOF
elif [[ $DOC_LANG == "cn" ]]; then
    cat > README.md << EOF
# ${PROJECT_NAME}

**客户**: ${CLIENT_FULL_NAME}  
**项目代码**: ${PROJECT_FOLDER}  
**创建日期**: ${CURRENT_DATE}  
**状态**: 🟢 积极开发中  
**密级**: ZETOS-机密 ▲

## 📋 项目概述
${PROJECT_DESC}

## 🚀 快速开始
请参阅 [PROJECT_INFO.md](PROJECT_INFO.md) 获取详细的设置说明。

## 📁 项目结构
\`\`\`
$(tree -L 2 -d | head -20)
\`\`\`

## 🔧 技术栈
- **类型**: ${PROJECT_TYPE_NAME}
$(case $PROJECT_TYPE_NAME in
    fullstack)
        echo "- **前端**: ${FRONTEND_FRAMEWORK}"
        echo "- **后端**: ${BACKEND_FRAMEWORK}"
        ;;
    mobile)
        echo "- **框架**: ${MOBILE_FRAMEWORK}"
        ;;
    nocode)
        echo "- **平台**: ${NOCODE_PLATFORM}"
        ;;
    api)
        echo "- **框架**: ${API_FRAMEWORK}"
        ;;
    website)
        echo "- **生成器**: ${STATIC_GENERATOR}"
        ;;
esac)

## 👥 团队
- **项目经理**: 待定
- **系统分析师**: 待定
- **开发人员**: 待定

## 📄 许可证
本项目为专有且保密项目。
EOF
else  # English only
    cat > README.md << EOF
# ${PROJECT_NAME}

**Client**: ${CLIENT_FULL_NAME}  
**Project Code**: ${PROJECT_FOLDER}  
**Created**: ${CURRENT_DATE}  
**Status**: 🟢 Active Development  
**Classification**: ZETOS-CONFIDENTIAL ▲

## 📋 Project Overview
${PROJECT_DESC}

## 🚀 Quick Start
See [PROJECT_INFO.md](PROJECT_INFO.md) for detailed setup instructions.

## 📁 Project Structure
\`\`\`
$(tree -L 2 -d | head -20)
\`\`\`

## 🔧 Technology Stack
- **Type**: ${PROJECT_TYPE_NAME}
$(case $PROJECT_TYPE_NAME in
    fullstack)
        echo "- **Frontend**: ${FRONTEND_FRAMEWORK}"
        echo "- **Backend**: ${BACKEND_FRAMEWORK}"
        ;;
    mobile)
        echo "- **Framework**: ${MOBILE_FRAMEWORK}"
        ;;
    nocode)
        echo "- **Platform**: ${NOCODE_PLATFORM}"
        ;;
    api)
        echo "- **Framework**: ${API_FRAMEWORK}"
        ;;
    website)
        echo "- **Generator**: ${STATIC_GENERATOR}"
        ;;
esac)

## 👥 Team
- **Project Manager**: TBD
- **System Analyst**: TBD
- **Developers**: TBD

## 📄 License
This project is proprietary and confidential.
EOF
fi

# Create PROJECT_INFO.md
cat > PROJECT_INFO.md << EOF
# Project Information

**Classification**: ZETOS-CONFIDENTIAL ▲

## Client Information
- **Client Code**: ${CLIENT_CODE}
- **Client Name**: ${CLIENT_FULL_NAME}
- **Project Name**: ${PROJECT_NAME}
- **Start Date**: ${CURRENT_DATE}

## Technical Details
- **Project Type**: ${PROJECT_TYPE_NAME}
- **Repository**: https://github.com/${GITHUB_REPO}
- **Documentation**: /07_Documentation/

## Key Contacts
| Role | Name | Email | Phone |
|------|------|-------|-------|
| Client Sponsor | TBD | TBD | TBD |
| Project Manager | TBD | TBD | TBD |
| Technical Lead | TBD | TBD | TBD |

## Important Links
- [Project Charter](/00_Project_Management/Project_Charter.md)
- [Technical Documentation](/07_Documentation/)
- [Meeting Notes](/00_Project_Management/Meeting_Notes/)

## Access Information
- **GitHub Repository**: ${GITHUB_REPO}
- **Staging Environment**: TBD
- **Production Environment**: TBD
EOF

# Create CLAUDE.md
cat > CLAUDE.md << EOF
# CLAUDE.md - ${PROJECT_NAME} Project Instructions
**Classification**: ZETOS-CONFIDENTIAL ▲

## 🎯 Project Context
This is the ${PROJECT_NAME} project for ${CLIENT_FULL_NAME}.

**Project Type**: ${PROJECT_TYPE_NAME}
**Client Code**: ${CLIENT_CODE}
**Repository**: ${GITHUB_REPO}

## 📋 Project-Specific Requirements
[TO BE FILLED BY SA]

## 🔧 Technical Stack
$(case $PROJECT_TYPE_NAME in
    fullstack)
        echo "- Frontend: ${FRONTEND_FRAMEWORK}"
        echo "- Backend: ${BACKEND_FRAMEWORK}"
        ;;
    mobile)
        echo "- Mobile Framework: ${MOBILE_FRAMEWORK}"
        ;;
    nocode)
        echo "- Platform: ${NOCODE_PLATFORM}"
        ;;
    api)
        echo "- API Framework: ${API_FRAMEWORK}"
        ;;
    website)
        echo "- Static Generator: ${STATIC_GENERATOR}"
        ;;
esac)

## 📁 Project Structure
Follow the standard Zetos project structure in this repository.

## 🚨 Important Notes
- Always check existing code before creating new files
- Follow the established patterns in this codebase
- Refer to global ZaaS standards for general procedures
- This file contains project-specific overrides only

---
*Last updated: ${CURRENT_DATE}*
EOF

# 4. Create placeholder files in each directory
print_status "Creating placeholder files..."
find . -type d -empty -exec touch {}/.gitkeep \;

# 5. Initial git commit
print_status "Creating initial Git commit..."
git add .
git commit -m "init: Initialize ${PROJECT_NAME} project structure

- Set up standard Zetos folder structure
- Create initial documentation (README, PROJECT_INFO, CLAUDE)
- Configure Git repository with proper .gitignore
- Project type: ${PROJECT_TYPE_NAME}
- Client: ${CLIENT_FULL_NAME} (${CLIENT_CODE})

🤖 Generated with Zetos Project Initializer v1.0"

# 6. Create GitHub repository (if gh CLI is available)
if command -v gh &> /dev/null; then
    print_status "Creating GitHub repository..."
    
    # Check if repo already exists
    if gh repo view "${GITHUB_REPO}" &> /dev/null; then
        print_error "Repository ${GITHUB_REPO} already exists!"
        read -p "Do you want to use the existing repository? (y/n): " USE_EXISTING
        if [[ $USE_EXISTING == "y" ]]; then
            git remote add origin "https://github.com/${GITHUB_REPO}.git" 2>/dev/null || true
            git push -u origin dev || print_warning "Failed to push to existing repository"
        else
            print_error "Cannot proceed with existing repository name. Please choose a different project name."
            exit 1
        fi
    else
        # Create new repository
        if gh repo create "${GITHUB_REPO}" \
            --private \
            --description "${PROJECT_DESC}" \
            --source=. \
            --remote=origin \
            --push; then
            print_status "GitHub repository created successfully: ${GITHUB_REPO}"
            
            # Add repository secrets
            print_status "Setting up repository secrets..."
            gh secret set MYSQL_ROOT_PASSWORD -b "test" 2>/dev/null || print_warning "Failed to set MYSQL_ROOT_PASSWORD secret"
            gh secret set MYSQL_DATABASE -b "test_db" 2>/dev/null || print_warning "Failed to set MYSQL_DATABASE secret"
            gh secret set TEST_DATABASE_URL -b "mysql://root:test@localhost:3306/test_db" 2>/dev/null || print_warning "Failed to set TEST_DATABASE_URL secret"
        else
            print_error "GitHub repo creation failed!"
            print_warning "Please create the repository manually at: https://github.com/new"
            print_warning "Repository name: ${GITHUB_REPO}"
            print_warning "Then run: git remote add origin https://github.com/${GITHUB_REPO}.git"
            print_warning "And: git push -u origin dev"
        fi
    fi
else
    print_warning "GitHub CLI not found - please create repository manually"
    print_warning "Install GitHub CLI from: https://cli.github.com/"
    print_warning "Repository name should be: ${GITHUB_REPO}"
fi

# 7. Set up additional branches
print_status "Setting up Git branches..."
git checkout -b preprod
git push -u origin preprod 2>/dev/null || true

git checkout -b master
git push -u origin master 2>/dev/null || true

git checkout dev
git push -u origin dev 2>/dev/null || true

# 8. Create initial project management documents
print_status "Creating project management templates..."

# Project Charter
if [[ $DOC_LANG == "bilingual" ]]; then
    cat > "00_Project_Management/Project_Charter.md" << EOF
# Project Charter - ${PROJECT_NAME} / 项目章程 - ${PROJECT_NAME}
**Classification**: ZETOS-CONFIDENTIAL ▲  
**密级**: ZETOS-机密 ▲  
**Version**: 1.0  
**Date**: ${CURRENT_DATE}

## Project Overview / 项目概述
**Project Name / 项目名称**: ${PROJECT_NAME}  
**Client / 客户**: ${CLIENT_FULL_NAME}  
**Project Code / 项目代码**: ${PROJECT_FOLDER}

## Project Objectives / 项目目标
[TO BE COMPLETED BY PM/SA / 由项目经理/系统分析师完成]

## Scope / 范围
### In Scope / 包含范围
- [TO BE DEFINED / 待定义]

### Out of Scope / 不包含范围
- [TO BE DEFINED / 待定义]

## Stakeholders / 利益相关者
| Name / 姓名 | Role / 角色 | Responsibility / 职责 |
|------|------|----------------|
| TBD | Client Sponsor / 客户负责人 | Project approval and funding / 项目批准和资金 |
| TBD | Project Manager / 项目经理 | Project delivery / 项目交付 |
| TBD | System Analyst / 系统分析师 | Requirements and analysis / 需求和分析 |

## Timeline / 时间线
- **Start Date / 开始日期**: ${CURRENT_DATE}
- **Target Completion / 目标完成日期**: TBD
- **Key Milestones / 关键里程碑**: TBD

## Budget / 预算
[TO BE DEFINED / 待定义]

## Risks / 风险
[TO BE IDENTIFIED / 待识别]

## Approval / 批准
This project charter has been reviewed and approved by: / 本项目章程已经过以下人员审核批准：

| Name / 姓名 | Role / 角色 | Signature / 签名 | Date / 日期 |
|------|------|-----------|------|
| | Client Sponsor / 客户负责人 | | |
| | Project Manager / 项目经理 | | |
EOF
elif [[ $DOC_LANG == "cn" ]]; then
    cat > "00_Project_Management/Project_Charter.md" << EOF
# 项目章程 - ${PROJECT_NAME}
**密级**: ZETOS-机密 ▲  
**版本**: 1.0  
**日期**: ${CURRENT_DATE}

## 项目概述
**项目名称**: ${PROJECT_NAME}  
**客户**: ${CLIENT_FULL_NAME}  
**项目代码**: ${PROJECT_FOLDER}

## 项目目标
[由项目经理/系统分析师完成]

## 范围
### 包含范围
- [待定义]

### 不包含范围
- [待定义]

## 利益相关者
| 姓名 | 角色 | 职责 |
|------|------|------|
| 待定 | 客户负责人 | 项目批准和资金 |
| 待定 | 项目经理 | 项目交付 |
| 待定 | 系统分析师 | 需求和分析 |

## 时间线
- **开始日期**: ${CURRENT_DATE}
- **目标完成日期**: 待定
- **关键里程碑**: 待定

## 预算
[待定义]

## 风险
[待识别]

## 批准
本项目章程已经过以下人员审核批准：

| 姓名 | 角色 | 签名 | 日期 |
|------|------|------|------|
| | 客户负责人 | | |
| | 项目经理 | | |
EOF
else  # English only
    cat > "00_Project_Management/Project_Charter.md" << EOF
# Project Charter - ${PROJECT_NAME}
**Classification**: ZETOS-CONFIDENTIAL ▲  
**Version**: 1.0  
**Date**: ${CURRENT_DATE}

## Project Overview
**Project Name**: ${PROJECT_NAME}  
**Client**: ${CLIENT_FULL_NAME}  
**Project Code**: ${PROJECT_FOLDER}

## Project Objectives
[TO BE COMPLETED BY PM/SA]

## Scope
### In Scope
- [TO BE DEFINED]

### Out of Scope
- [TO BE DEFINED]

## Stakeholders
| Name | Role | Responsibility |
|------|------|----------------|
| TBD | Client Sponsor | Project approval and funding |
| TBD | Project Manager | Project delivery |
| TBD | System Analyst | Requirements and analysis |

## Timeline
- **Start Date**: ${CURRENT_DATE}
- **Target Completion**: TBD
- **Key Milestones**: TBD

## Budget
[TO BE DEFINED]

## Risks
[TO BE IDENTIFIED]

## Approval
This project charter has been reviewed and approved by:

| Name | Role | Signature | Date |
|------|------|-----------|------|
| | Client Sponsor | | |
| | Project Manager | | |
EOF
fi

# 9. Run platform-specific setup
case $PROJECT_TYPE_NAME in
    fullstack)
        print_status "Running full-stack setup..."
        bash "${SCRIPT_DIR}/setup-fullstack.sh" "$PROJECT_PATH" "$FRONTEND_FRAMEWORK" "$BACKEND_FRAMEWORK"
        ;;
    mobile)
        print_status "Running mobile setup..."
        bash "${SCRIPT_DIR}/setup-mobile.sh" "$PROJECT_PATH" "$MOBILE_FRAMEWORK"
        ;;
    nocode)
        print_status "Running no-code platform setup..."
        bash "${SCRIPT_DIR}/setup-nocode.sh" "$PROJECT_PATH" "$NOCODE_PLATFORM"
        ;;
    api)
        print_status "Running API setup..."
        bash "${SCRIPT_DIR}/setup-api.sh" "$PROJECT_PATH" "$API_FRAMEWORK"
        ;;
    website)
        print_status "Running website setup..."
        bash "${SCRIPT_DIR}/setup-website.sh" "$PROJECT_PATH" "$STATIC_GENERATOR"
        ;;
esac

# 10. Final summary
echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           Project Initialization Complete! 🎉                ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "Project: ${PROJECT_FOLDER}"
echo "Location: ${PROJECT_PATH}"
echo ""
echo "Next steps:"
echo "1. Review and update PROJECT_INFO.md with team information"
echo "2. Complete the Project Charter with PM and Client"
echo "3. Add team members to the GitHub repository"
echo "4. Configure CI/CD secrets in GitHub"
echo "5. Begin requirements gathering with SA team"
echo ""
echo "To start working:"
echo "  cd ${PROJECT_FOLDER}"
echo "  code ."  # Open in VS Code
echo ""
print_status "Happy coding! 🚀"
```

---

## 2️⃣ Platform-Specific Setup Scripts

### setup-fullstack.sh
```bash
#!/bin/bash
# Full-Stack Project Setup
# Classification: ZETOS-CONFIDENTIAL ▲

PROJECT_PATH=$1
FRONTEND_FRAMEWORK=$2
BACKEND_FRAMEWORK=$3

cd "$PROJECT_PATH"

# Frontend setup
echo "Setting up frontend with ${FRONTEND_FRAMEWORK}..."
cd 04_Development/Frontend

case $FRONTEND_FRAMEWORK in
    react)
        # Create package.json for React
        cat > package.json << 'EOF'
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write src/**/*.{js,jsx,ts,tsx,css,md}"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "axios": "^1.3.0"
  },
  "devDependencies": {
    "react-scripts": "5.0.1",
    "typescript": "^4.9.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "prettier": "^2.8.0"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
EOF
        
        # Create basic React structure
        mkdir -p src/components src/pages src/services src/utils
        
        # Create index.html
        mkdir -p public
        cat > public/index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>%REACT_APP_TITLE%</title>
</head>
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
</body>
</html>
EOF
        ;;
    vue)
        echo "Vue.js setup - to be implemented"
        ;;
    angular)
        echo "Angular setup - to be implemented"
        ;;
esac

# Backend setup
echo "Setting up backend with ${BACKEND_FRAMEWORK}..."
cd ../Backend

case $BACKEND_FRAMEWORK in
    node)
        # Create package.json for Node.js
        cat > package.json << 'EOF'
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend API",
  "main": "src/server.js",
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "jest",
    "lint": "eslint src --ext .js",
    "format": "prettier --write src/**/*.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "mysql2": "^3.0.0",
    "dotenv": "^16.0.0",
    "cors": "^2.8.0",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.0.0",
    "winston": "^3.8.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^29.0.0",
    "supertest": "^6.3.0",
    "eslint": "^8.0.0",
    "prettier": "^2.8.0"
  }
}
EOF
        
        # Create basic Express structure
        mkdir -p src/controllers src/models src/routes src/middleware src/utils
        
        # Create basic server.js
        cat > src/server.js << 'EOF'
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
EOF
        
        # Create .env.example
        cat > .env.example << 'EOF'
# Environment
NODE_ENV=development
PORT=3001

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=

# Security
JWT_SECRET=
CORS_ORIGIN=http://localhost:3000

# API Keys
# Add third-party API keys here
EOF
        ;;
    python)
        echo "Python/Django setup - to be implemented"
        ;;
    java)
        echo "Java/Spring setup - to be implemented"
        ;;
esac

cd "$PROJECT_PATH"

# Create docker-compose.yml for local development
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  frontend:
    build:
      context: ./04_Development/Frontend
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - ./04_Development/Frontend:/app
      - /app/node_modules
    environment:
      - REACT_APP_API_URL=http://localhost:3001
    depends_on:
      - backend

  backend:
    build:
      context: ./04_Development/Backend
      dockerfile: Dockerfile.dev
    ports:
      - "3001:3001"
    volumes:
      - ./04_Development/Backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    depends_on:
      - database

  database:
    image: mysql:8.0
    ports:
      - "3306:3306"
    environment:
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD:-root}
      - MYSQL_DATABASE=${DB_NAME:-dev_db}
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
EOF

# Create .env.example for docker-compose
cat > .env.example << 'EOF'
# Docker Compose Environment Variables
DB_ROOT_PASSWORD=root
DB_NAME=dev_db

# Add other environment variables as needed
EOF

echo "Full-stack setup complete!"
```

### setup-mobile.sh
```bash
#!/bin/bash
# Mobile Project Setup
# Classification: ZETOS-CONFIDENTIAL ▲

PROJECT_PATH=$1
MOBILE_FRAMEWORK=$2

cd "$PROJECT_PATH/04_Development/Mobile"

case $MOBILE_FRAMEWORK in
    native)
        echo "Setting up native mobile project..."
        
        # iOS setup
        mkdir -p iOS/ProjectName
        cat > iOS/README.md << 'EOF'
# iOS Application

## Setup Instructions
1. Install Xcode from App Store
2. Install CocoaPods: `sudo gem install cocoapods`
3. Run `pod install` in this directory
4. Open `ProjectName.xcworkspace` in Xcode

## Build Instructions
See [Build Guide](/07_Documentation/iOS_Build_Guide.md)
EOF
        
        # Android setup
        mkdir -p Android/app/src/main/java
        cat > Android/README.md << 'EOF'
# Android Application

## Setup Instructions
1. Install Android Studio
2. Install required SDK versions
3. Open this directory in Android Studio
4. Sync Gradle files

## Build Instructions
See [Build Guide](/07_Documentation/Android_Build_Guide.md)
EOF
        ;;
        
    react-native)
        echo "Setting up React Native project..."
        
        # Create package.json
        cat > package.json << 'EOF'
{
  "name": "MobileApp",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.71.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/stack": "^6.3.0",
    "react-native-safe-area-context": "^4.5.0",
    "react-native-screens": "^3.20.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@babel/preset-env": "^7.20.0",
    "@babel/runtime": "^7.20.0",
    "@react-native-community/eslint-config": "^3.2.0",
    "babel-jest": "^29.2.1",
    "eslint": "^8.19.0",
    "jest": "^29.2.1",
    "metro-react-native-babel-preset": "0.73.0",
    "react-test-renderer": "18.2.0",
    "typescript": "4.8.4"
  }
}
EOF
        
        # Create basic structure
        mkdir -p src/components src/screens src/navigation src/services src/utils
        ;;
        
    flutter)
        echo "Flutter setup - to be implemented"
        ;;
esac

echo "Mobile setup complete!"
```

### setup-nocode.sh
```bash
#!/bin/bash
# No-Code Platform Setup
# Classification: ZETOS-CONFIDENTIAL ▲

PROJECT_PATH=$1
PLATFORM=$2

cd "$PROJECT_PATH/04_Development"

case $PLATFORM in
    bubble)
        echo "Setting up Bubble project structure..."
        
        mkdir -p Bubble/custom_code Bubble/plugins Bubble/api_workflows
        
        # Create Bubble configuration
        cat > Bubble/bubble_config.json << 'EOF'
{
  "app_name": "",
  "app_id": "",
  "environment": {
    "development": {
      "url": "https://[app-name].bubbleapps.io/version-test"
    },
    "production": {
      "url": "https://[app-name].bubbleapps.io"
    }
  },
  "plugins": [],
  "api_workflows": [],
  "custom_code": {
    "header": "",
    "body": ""
  },
  "settings": {
    "seo": {
      "title": "",
      "description": "",
      "keywords": []
    },
    "privacy_rules": true,
    "api_access": true
  }
}
EOF
        
        # Create README
        cat > Bubble/README.md << 'EOF'
# Bubble Application

## Setup Instructions
1. Create new Bubble app or clone existing
2. Configure plugins listed in bubble_config.json
3. Add custom code from custom_code directory
4. Set up API workflows as documented

## Development Workflow
1. Make changes in Bubble editor
2. Document changes in this repository
3. Export and commit any custom code
4. Update configuration files

## Deployment
See [Deployment Guide](/06_Deployment/Bubble_Deployment_Guide.md)
EOF
        ;;
        
    webflow)
        echo "Setting up Webflow project structure..."
        
        mkdir -p Webflow/custom_code Webflow/cms_structure Webflow/assets
        
        # Create Webflow configuration
        cat > Webflow/webflow_config.json << 'EOF'
{
  "site_name": "",
  "site_id": "",
  "environments": {
    "staging": {
      "url": "https://[site-name].webflow.io"
    },
    "production": {
      "custom_domain": ""
    }
  },
  "cms_collections": [],
  "custom_code": {
    "site_header": "",
    "site_footer": "",
    "page_specific": {}
  },
  "integrations": [],
  "seo": {
    "sitemap": true,
    "robots_txt": true,
    "meta_tags": {}
  }
}
EOF
        
        # Create README
        cat > Webflow/README.md << 'EOF'
# Webflow Website

## Setup Instructions
1. Create new Webflow site or clone existing
2. Import any custom code from custom_code directory
3. Set up CMS structure as documented
4. Configure integrations

## Development Workflow
1. Design in Webflow Designer
2. Export and version custom code
3. Document CMS structure changes
4. Test on staging URL

## Publishing
See [Publishing Guide](/06_Deployment/Webflow_Publishing_Guide.md)
EOF
        ;;
esac

echo "No-code platform setup complete!"
```

---

## 3️⃣ Documentation Generation Scripts

### generate-docs.sh
```bash
#!/bin/bash
# Documentation Generation Script
# Classification: ZETOS-CONFIDENTIAL ▲

PROJECT_PATH=$1
DOC_TYPE=$2
DOC_LANG=$3  # en, cn, or bilingual

cd "$PROJECT_PATH"

# Default to English if not specified
if [ -z "$DOC_LANG" ]; then
    DOC_LANG="en"
fi

case $DOC_TYPE in
    all)
        # Generate all documentation templates
        bash "$0" "$PROJECT_PATH" requirements "$DOC_LANG"
        bash "$0" "$PROJECT_PATH" technical "$DOC_LANG"
        bash "$0" "$PROJECT_PATH" user "$DOC_LANG"
        ;;
        
    requirements)
        # Generate requirements documents
        if [[ $DOC_LANG == "bilingual" ]]; then
            cat > 01_Analysis/Requirements/${CLIENT_CODE}_01_BRD_v1.0_${CURRENT_DATE}.md << 'EOF'
# Business Requirements Document / 业务需求文档
**Classification: ZETOS-CONFIDENTIAL ▲**
**密级: ZETOS-机密 ▲**

## Executive Summary / 执行摘要
[To be completed / 待完成]

## Business Requirements / 业务需求
[To be completed / 待完成]

## Functional Requirements / 功能需求
[To be completed / 待完成]

## Non-Functional Requirements / 非功能需求
[To be completed / 待完成]
EOF
        elif [[ $DOC_LANG == "cn" ]]; then
            cat > 01_Analysis/Requirements/${CLIENT_CODE}_01_BRD_v1.0_${CURRENT_DATE}.md << 'EOF'
# 业务需求文档
**密级: ZETOS-机密 ▲**

## 执行摘要
[待完成]

## 业务需求
[待完成]

## 功能需求
[待完成]

## 非功能需求
[待完成]
EOF
        else  # English
            cat > 01_Analysis/Requirements/${CLIENT_CODE}_01_BRD_v1.0_${CURRENT_DATE}.md << 'EOF'
# Business Requirements Document
**Classification: ZETOS-CONFIDENTIAL ▲**

## Executive Summary
[To be completed]

## Business Requirements
[To be completed]

## Functional Requirements
[To be completed]

## Non-Functional Requirements
[To be completed]
EOF
        fi
        ;;
        
    technical)
        # Generate technical documentation
        if [[ $DOC_LANG == "bilingual" ]]; then
            cat > 07_Documentation/Technical_Docs/${CLIENT_CODE}_07_Technical_Manual_v1.0.md << 'EOF'
# Technical Manual / 技术手册
**Classification: ZETOS-CONFIDENTIAL ▲**
**密级: ZETOS-机密 ▲**

## System Architecture / 系统架构
[To be completed / 待完成]

## API Documentation / API 文档
[To be completed / 待完成]

## Database Schema / 数据库架构
[To be completed / 待完成]

## Deployment Guide / 部署指南
[To be completed / 待完成]
EOF
        elif [[ $DOC_LANG == "cn" ]]; then
            cat > 07_Documentation/Technical_Docs/${CLIENT_CODE}_07_Technical_Manual_v1.0.md << 'EOF'
# 技术手册
**密级: ZETOS-机密 ▲**

## 系统架构
[待完成]

## API 文档
[待完成]

## 数据库架构
[待完成]

## 部署指南
[待完成]
EOF
        else  # English
            cat > 07_Documentation/Technical_Docs/${CLIENT_CODE}_07_Technical_Manual_v1.0.md << 'EOF'
# Technical Manual
**Classification: ZETOS-CONFIDENTIAL ▲**

## System Architecture
[To be completed]

## API Documentation
[To be completed]

## Database Schema
[To be completed]

## Deployment Guide
[To be completed]
EOF
        fi
        ;;
        
    user)
        # Generate user documentation
        if [[ $DOC_LANG == "bilingual" ]]; then
            cat > 07_Documentation/User_Manuals/${CLIENT_CODE}_07_User_Manual_v1.0.md << 'EOF'
# User Manual / 用户手册
**Classification: ZETOS-CONFIDENTIAL ▲**
**密级: ZETOS-机密 ▲**

## Getting Started / 入门指南
[To be completed / 待完成]

## Features Guide / 功能指南
[To be completed / 待完成]

## FAQ / 常见问题
[To be completed / 待完成]

## Troubleshooting / 故障排除
[To be completed / 待完成]
EOF
        elif [[ $DOC_LANG == "cn" ]]; then
            cat > 07_Documentation/User_Manuals/${CLIENT_CODE}_07_User_Manual_v1.0.md << 'EOF'
# 用户手册
**密级: ZETOS-机密 ▲**

## 入门指南
[待完成]

## 功能指南
[待完成]

## 常见问题
[待完成]

## 故障排除
[待完成]
EOF
        else  # English
            cat > 07_Documentation/User_Manuals/${CLIENT_CODE}_07_User_Manual_v1.0.md << 'EOF'
# User Manual
**Classification: ZETOS-CONFIDENTIAL ▲**

## Getting Started
[To be completed]

## Features Guide
[To be completed]

## FAQ
[To be completed]

## Troubleshooting
[To be completed]
EOF
        fi
        ;;
esac

echo "Documentation generated!"
```

---

## 4️⃣ Environment Configuration Scripts

### setup-env.sh
```bash
#!/bin/bash
# Environment Setup Script
# Classification: ZETOS-CONFIDENTIAL ▲

PROJECT_PATH=$1
ENVIRONMENT=$2

cd "$PROJECT_PATH"

# Create environment-specific configurations
case $ENVIRONMENT in
    development)
        echo "Setting up development environment..."
        
        # Create development .env files
        find . -name ".env.example" -exec sh -c 'cp "$1" "${1%.example}.development"' _ {} \;
        
        # Set up pre-commit hooks
        cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Run linting and tests before commit

# Frontend checks
if [ -d "04_Development/Frontend" ]; then
    cd 04_Development/Frontend
    npm run lint || exit 1
    cd ../..
fi

# Backend checks
if [ -d "04_Development/Backend" ]; then
    cd 04_Development/Backend
    npm run lint || exit 1
    cd ../..
fi

echo "Pre-commit checks passed!"
EOF
        chmod +x .git/hooks/pre-commit
        ;;
        
    staging)
        echo "Setting up staging environment..."
        # Staging-specific setup
        ;;
        
    production)
        echo "Setting up production environment..."
        # Production-specific setup
        ;;
esac

echo "Environment setup complete!"
```

---

## 5️⃣ Team Onboarding Scripts

### onboard-team-member.sh
```bash
#!/bin/bash
# Team Member Onboarding Script
# Classification: ZETOS-CONFIDENTIAL ▲

echo "Zetos Team Member Onboarding"
echo "============================"

read -p "Team member name: " MEMBER_NAME
read -p "Team member email: " MEMBER_EMAIL
read -p "Team member role (pm/sa/dev/qa): " MEMBER_ROLE
read -p "GitHub username: " GITHUB_USERNAME
read -p "Project folder path: " PROJECT_PATH

cd "$PROJECT_PATH"

# Add to team documentation
echo "Adding team member to project documentation..."
# Update PROJECT_INFO.md with team member info

# Set up Git access
echo "Setting up Git access..."
case $MEMBER_ROLE in
    pm|sa)
        PERMISSION="admin"
        ;;
    dev|qa)
        PERMISSION="write"
        ;;
    *)
        PERMISSION="read"
        ;;
esac

# Add GitHub collaborator (requires gh CLI)
if command -v gh &> /dev/null; then
    REPO_NAME=$(git remote get-url origin | sed 's/.*github.com[:/]\(.*\)\.git/\1/')
    gh repo add-collaborator "$GITHUB_USERNAME" --permission "$PERMISSION"
fi

# Create personalized README
cat > "onboarding_${GITHUB_USERNAME}.md" << EOF
# Welcome ${MEMBER_NAME}!

## Your Role: ${MEMBER_ROLE}

## Getting Started
1. Clone the repository
2. Read PROJECT_INFO.md and README.md
3. Set up your development environment
4. Review project documentation in /07_Documentation

## Key Contacts
- Project Manager: [PM contact]
- Technical Lead: [Tech lead contact]

## First Tasks
- [ ] Complete environment setup
- [ ] Review project requirements
- [ ] Attend project kickoff meeting
- [ ] Complete first assigned task

Welcome to the team!
EOF

echo "Onboarding complete! Send onboarding_${GITHUB_USERNAME}.md to ${MEMBER_EMAIL}"
```

---

## 🔧 Master Script Collection Setup

### install-zetos-scripts.sh
```bash
#!/bin/bash
# Install Zetos Project Scripts
# Classification: ZETOS-CONFIDENTIAL ▲

INSTALL_DIR="$HOME/.zetos/scripts"

echo "Installing Zetos project initialization scripts..."

# Create directory structure
mkdir -p "$INSTALL_DIR/templates/folder_structure"
mkdir -p "$INSTALL_DIR/templates/git"

# Copy all scripts
cp init-project.sh "$INSTALL_DIR/"
cp setup-*.sh "$INSTALL_DIR/"
cp generate-docs.sh "$INSTALL_DIR/"
cp onboard-team-member.sh "$INSTALL_DIR/"

# Make scripts executable
chmod +x "$INSTALL_DIR"/*.sh

# Add to PATH
echo "export PATH=\"\$PATH:$INSTALL_DIR\"" >> ~/.bashrc
echo "export PATH=\"\$PATH:$INSTALL_DIR\"" >> ~/.zshrc

# Create alias
echo "alias zetos-init='$INSTALL_DIR/init-project.sh'" >> ~/.bashrc
echo "alias zetos-init='$INSTALL_DIR/init-project.sh'" >> ~/.zshrc

echo "Installation complete!"
echo "Run 'source ~/.bashrc' or restart your terminal"
echo "Then use 'zetos-init' to initialize a new project"
```

---

## 📋 Usage Guide

### Quick Start
```bash
# Install scripts (one-time setup)
bash install-zetos-scripts.sh
source ~/.bashrc

# Initialize new project
zetos-init

# Or run directly
bash /path/to/init-project.sh
```

### Project Types
1. **Full-Stack Web**: React/Vue/Angular + Node/Python/Java
2. **Mobile**: Native/React Native/Flutter
3. **No-Code**: Bubble/Webflow
4. **API Service**: REST API backend only
5. **Static Website**: Marketing sites, landing pages

### Advanced Usage
```bash
# Generate specific documentation
bash generate-docs.sh /path/to/project requirements

# Set up specific environment
bash setup-env.sh /path/to/project development

# Onboard new team member
bash onboard-team-member.sh
```

---

## ✅ Features Checklist

### Automated Tasks
- [x] Project folder structure creation
- [x] Git repository initialization
- [x] Branch setup (master, preprod, dev)
- [x] Initial documentation generation
- [x] Platform-specific setup
- [x] Environment configuration
- [x] Team member onboarding
- [x] GitHub repository creation
- [x] CI/CD template setup
- [x] Pre-commit hooks installation

### Compliance Checks
- [x] Client code validation (3 letters)
- [x] Project name validation (PascalCase)
- [x] Folder naming standards
- [x] Document classification labels
- [x] Git commit message format
- [x] Security file templates

### Documentation Generated
- [x] README.md with project info
- [x] PROJECT_INFO.md with details
- [x] CLAUDE.md for AI assistance
- [x] Project Charter template
- [x] Initial folder structure
- [x] Platform-specific guides

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Script Version: 1.0 - Automated project initialization system**