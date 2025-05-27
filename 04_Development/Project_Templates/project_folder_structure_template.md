# Project Folder Structure Template
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
Standardized folder structure template for all Zetos Development Studio projects, ensuring consistency, organization, and efficient project management across all client engagements.

## 🎯 Purpose
- Provide consistent project organization across all projects
- Enable easy navigation and file location
- Support automated tooling and scripts
- Facilitate team collaboration
- Ensure compliance with document control regulations

## 📁 Master Project Folder Structure

```
📁 [CLIENT_CODE]_[PROJECT_NAME]/
│
├── 📁 00_Project_Management/
│   ├── 📁 Contracts/
│   │   ├── [CLIENT]_Contract_v[X.X]_[DATE].pdf
│   │   ├── [CLIENT]_NDA_v[X.X]_[DATE].pdf
│   │   └── [CLIENT]_SOW_v[X.X]_[DATE].pdf
│   │
│   ├── 📁 Meeting_Notes/
│   │   └── [CLIENT]_Meeting_[YYYY-MM-DD]_[TOPIC].md
│   │
│   ├── 📁 Status_Reports/
│   │   └── [CLIENT]_Status_Report_[YYYY-MM-DD].md
│   │
│   ├── 📁 Change_Requests/
│   │   └── [CLIENT]_CR_[NUMBER]_[DESC]_v[X.X].md
│   │
│   └── 📄 Project_Charter.md
│
├── 📁 01_Analysis/
│   ├── 📁 Requirements/
│   │   ├── [CLIENT]_01_BRD_v[X.X]_[DATE].md
│   │   ├── [CLIENT]_01_FRS_v[X.X]_[DATE].md
│   │   └── [CLIENT]_01_Requirements_Matrix.xlsx
│   │
│   ├── 📁 User_Journeys/
│   │   └── [CLIENT]_01_User_Journey_[PERSONA].md
│   │
│   ├── 📁 Workflows/
│   │   └── [CLIENT]_01_Workflow_[PROCESS].md
│   │
│   ├── 📁 Interview_Notes/
│   │   └── [CLIENT]_01_Interview_[STAKEHOLDER]_[DATE].md
│   │
│   └── 📁 Validation_Docs/
│       └── [CLIENT]_01_Validation_Report_v[X.X].md
│
├── 📁 02_Quotation/
│   ├── 📁 Technical_Analysis/
│   │   ├── [CLIENT]_02_Tech_Analysis_Zack_v[X.X].xlsx
│   │   └── [CLIENT]_02_Tech_Modules_Breakdown.md
│   │
│   ├── 📁 Functional_Analysis/
│   │   ├── [CLIENT]_02_Func_Analysis_Zara_v[X.X].xlsx
│   │   └── [CLIENT]_02_Business_Modules_v[X.X].md
│   │
│   └── [CLIENT]_02_Quotation_v[X.X]_[DATE].pdf
│
├── 📁 03_Design/
│   ├── 📁 Sitemap/
│   │   └── [CLIENT]_03_Sitemap_v[X.X].md
│   │
│   ├── 📁 Components/
│   │   ├── [CLIENT]_03_Component_Library.md
│   │   └── [CLIENT]_03_Style_Guide.md
│   │
│   ├── 📁 Figma_Files/
│   │   ├── 🔗 [CLIENT]_03_Design_System.fig
│   │   ├── 🔗 [CLIENT]_03_Wireframes.fig
│   │   └── 🔗 [CLIENT]_03_Final_Designs.fig
│   │
│   ├── 📁 VI_Compliance/
│   │   └── [CLIENT]_03_VI_Checklist_v[X.X].md
│   │
│   └── 📁 Design_Exports/
│       └── [Organized by pages/components]
│
├── 📁 04_Development/
│   ├── 📁 Architecture/
│   │   ├── [CLIENT]_04_System_Architecture_v[X.X].md
│   │   ├── [CLIENT]_04_Database_Design_v[X.X].md
│   │   └── [CLIENT]_04_API_Specification_v[X.X].md
│   │
│   ├── 📁 Frontend/
│   │   ├── 📁 [Platform]_Code/  # Bubble/Webflow/React
│   │   ├── 📄 README.md
│   │   └── 📄 Setup_Instructions.md
│   │
│   ├── 📁 Backend/
│   │   ├── 📁 src/
│   │   ├── 📁 config/
│   │   ├── 📁 tests/
│   │   ├── 📄 README.md
│   │   └── 📄 API_Documentation.md
│   │
│   ├── 📁 Mobile/
│   │   ├── 📁 iOS/
│   │   └── 📁 Android/
│   │
│   └── 📁 Database/
│       ├── 📁 migrations/
│       ├── 📁 seeds/
│       └── 📁 backups/
│
├── 📁 05_Testing/
│   ├── 📁 Test_Plans/
│   │   └── [CLIENT]_05_Test_Plan_v[X.X].md
│   │
│   ├── 📁 Test_Cases/
│   │   ├── [CLIENT]_05_Test_Cases_Functional.xlsx
│   │   ├── [CLIENT]_05_Test_Cases_Integration.xlsx
│   │   └── [CLIENT]_05_Test_Cases_UAT.xlsx
│   │
│   ├── 📁 Test_Scripts/
│   │   └── [Automated test scripts]
│   │
│   ├── 📁 Bug_Reports/
│   │   └── [CLIENT]_05_Bug_Report_[DATE].xlsx
│   │
│   └── 📁 Test_Results/
│       └── [CLIENT]_05_Test_Results_[VERSION]_[DATE].md
│
├── 📁 06_Deployment/
│   ├── 📁 Environments/
│   │   ├── 📄 Development.env
│   │   ├── 📄 Staging.env
│   │   └── 📄 Production.env
│   │
│   ├── 📁 CI_CD/
│   │   ├── .github/workflows/
│   │   └── deployment_scripts/
│   │
│   ├── 📁 Release_Notes/
│   │   └── [CLIENT]_06_Release_Notes_v[X.X]_[DATE].md
│   │
│   └── 📁 Deployment_Guides/
│       └── [CLIENT]_06_Deployment_Guide_v[X.X].md
│
├── 📁 07_Documentation/
│   ├── 📁 Technical_Docs/
│   │   ├── [CLIENT]_07_Technical_Manual_v[X.X].md
│   │   └── [CLIENT]_07_API_Documentation_v[X.X].md
│   │
│   ├── 📁 User_Manuals/
│   │   ├── [CLIENT]_07_User_Manual_v[X.X].md
│   │   └── [CLIENT]_07_Admin_Manual_v[X.X].md
│   │
│   ├── 📁 Training_Materials/
│   │   └── [CLIENT]_07_Training_Guide_v[X.X].md
│   │
│   └── 📁 Maintenance_Docs/
│       └── [CLIENT]_07_Maintenance_Guide_v[X.X].md
│
├── 📁 08_Resources/
│   ├── 📁 Assets/
│   │   ├── 📁 Images/
│   │   ├── 📁 Icons/
│   │   ├── 📁 Fonts/
│   │   └── 📁 Videos/
│   │
│   ├── 📁 Third_Party/
│   │   └── [Third-party licenses and docs]
│   │
│   └── 📁 References/
│       └── [Reference materials]
│
├── 📁 09_Archive/
│   └── [Archived versions and obsolete files]
│
├── 📄 .gitignore
├── 📄 README.md
├── 📄 PROJECT_INFO.md
└── 📄 CLAUDE.md  # Project-specific Claude instructions
```

## 📝 Folder Naming Conventions

### Client Code Format
```
[CLIENT_CODE]: 3-letter uppercase code
Examples:
- ABC (ABC Corporation)
- XYZ (XYZ Technologies)
- ZET (Zetos Internal)
```

### Project Name Format
```
[PROJECT_NAME]: PascalCase, no spaces
Examples:
- EcommercePortal
- HRManagementSystem
- CustomerServiceApp
```

### Complete Project Folder Name
```
Format: [CLIENT_CODE]_[PROJECT_NAME]
Examples:
- ABC_EcommercePortal
- XYZ_HRManagementSystem
- ZET_InternalTools
```

## 🔧 Folder-Specific Guidelines

### 00_Project_Management
**Purpose**: Central hub for all project management activities
**Key Files**:
- Project Charter: Overall project definition and scope
- Status Reports: Weekly/bi-weekly progress updates
- Meeting Notes: All stakeholder meetings documented
- Change Requests: Formal change management

### 01_Analysis
**Purpose**: All system analysis deliverables
**Key Standards**:
- Follow SA document standards (SA/01-12)
- Use standardized templates from SA/09
- Apply validation framework from SA/10

### 02_Quotation
**Purpose**: Cost estimation and quotation generation
**Integration**:
- Zack tool outputs for technical analysis
- Zara tool outputs for functional analysis
- Final customer-facing quotation

### 03_Design
**Purpose**: All UX/UI design deliverables
**Organization**:
- Figma files linked (not stored locally)
- Exported assets organized by component/page
- VI compliance documentation

### 04_Development
**Purpose**: All source code and technical implementation
**Platform-Specific**:
- Frontend folder adapts to platform (Bubble/Webflow/React)
- Backend follows standard structure
- Mobile apps in separate iOS/Android folders

### 05_Testing
**Purpose**: Quality assurance and testing artifacts
**Test Categories**:
- Functional Testing
- Integration Testing
- User Acceptance Testing (UAT)
- Performance Testing
- Security Testing

### 06_Deployment
**Purpose**: Deployment configurations and procedures
**Environment Management**:
- Separate configs for Dev/Staging/Prod
- CI/CD pipeline definitions
- Release management documentation

### 07_Documentation
**Purpose**: All project documentation
**Documentation Types**:
- Technical documentation for developers
- User manuals for end users
- Training materials for client teams
- Maintenance guides for support

### 08_Resources
**Purpose**: Project assets and resources
**Asset Management**:
- Original design assets
- Third-party components and licenses
- Reference materials

### 09_Archive
**Purpose**: Version history and obsolete files
**Archive Rules**:
- Move superseded documents here
- Maintain folder structure
- Add archive date to filenames

## 🚀 Implementation Guidelines

### 1️⃣ New Project Setup
1. Copy folder structure template
2. Rename with client code and project name
3. Create README.md with project information
4. Initialize Git repository
5. Set up access permissions

### 2️⃣ Document Creation Rules
- Always use naming conventions
- Include version numbers
- Add dates where specified
- Apply security classification
- Update parent folder index

### 3️⃣ File Organization Best Practices
- Keep active files in designated folders
- Archive old versions promptly
- Maintain consistent naming
- Update README files in each folder
- Document folder-specific conventions

### 4️⃣ Access Control
```
Standard Permissions:
- Project Manager: Full access
- SA/Developers: Read/Write to relevant folders
- Client: Read access to approved folders only
- Archive: Restricted access
```

### 5️⃣ Git Integration
```
.gitignore should exclude:
- Large binary files
- Environment configurations
- Sensitive credentials
- Temporary files
- Local IDE settings
```

## 📊 Folder Structure Variations

### Website Projects (Webflow)
```
04_Development/Frontend/
├── 📁 Webflow_Export/
├── 📁 Custom_Code/
├── 📁 CMS_Structure/
└── 📄 Webflow_Settings.md
```

### Mobile App Projects
```
04_Development/Mobile/
├── 📁 iOS/
│   ├── 📁 Source/
│   ├── 📁 Resources/
│   └── 📄 iOS_Build_Guide.md
└── 📁 Android/
    ├── 📁 app/src/
    ├── 📁 Resources/
    └── 📄 Android_Build_Guide.md
```

### No-Code Projects (Bubble)
```
04_Development/Frontend/
├── 📁 Bubble_Documentation/
├── 📁 Plugin_Configs/
├── 📁 Custom_Scripts/
└── 📄 Bubble_App_Settings.md
```

## ✅ Quality Checklist

### Project Setup Checklist
- [ ] Folder structure created from template
- [ ] Client code and project name applied
- [ ] README.md files created in main folders
- [ ] Git repository initialized
- [ ] .gitignore configured
- [ ] Access permissions set
- [ ] CLAUDE.md created with project-specific instructions
- [ ] PROJECT_INFO.md populated

### Ongoing Maintenance Checklist
- [ ] Files follow naming conventions
- [ ] Versions properly tracked
- [ ] Archives maintained regularly
- [ ] Documentation kept up-to-date
- [ ] Folder structure remains organized
- [ ] No files in root directory (except specified)

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Template Version: 1.0 - Master template for all projects**