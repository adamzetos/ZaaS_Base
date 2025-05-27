# System Analyst Complete Workflow - ZaaS Methodology

## 🎯 Overview

This document provides the complete workflow for System Analysts using the ZaaS methodology. Follow these steps to ensure consistent, high-quality project delivery.

## 📋 Phase 1: Project Initialization

### Step 1: Create Project Structure
```bash
# Create project folder
mkdir ClientCode_ProjectName
cd ClientCode_ProjectName

# Launch Claude Code
# Open Claude Code in current directory

# Clone ZaaS_Base
git clone https://github.com/adamzetos/ZaaS_Base.git .
rm -rf .git
git init
```

### Step 2: Initial Setup
1. Update `CLAUDE.md` with:
   - Project name and description
   - Client information
   - Initial scope understanding
   - Technical stack decisions

2. Update `PROJECT_INFO.md` with:
   - Team contacts
   - Client contacts
   - Communication schedule
   - Access credentials

### Step 3: Prepare Analysis Phase
1. Navigate to `01_Analysis/`
2. Review available AI prompts in `AI_Instructions/`
3. Review templates in `Project_Templates/`

## 📊 Phase 2: Requirements Gathering

### Step 1: Initial Client Meeting
1. Use template: `01_Analysis/Project_Templates/Requirements_Template.md`
2. Document in: `01_Analysis/Requirements/`
3. Key areas to cover:
   - Business objectives
   - User types and roles
   - Core functionalities
   - Technical constraints
   - Timeline and budget

### Step 2: AI-Assisted Analysis
1. Open `01_Analysis/AI_Instructions/AI_Requirements_Analysis_Prompt.md`
2. Copy prompt to Claude Code
3. Replace placeholders with project specifics
4. Let AI help:
   - Identify missing requirements
   - Suggest additional features
   - Flag potential issues
   - Create requirement priorities

### Step 3: User Journey Mapping
1. Use prompt: `01_Analysis/AI_Instructions/AI_User_Journey_Creation_Prompt.md`
2. For each user role:
   - Map key workflows
   - Identify pain points
   - Define success metrics
3. Save to: `01_Analysis/User_Journeys/`

### Step 4: System Analysis
1. Use prompt: `01_Analysis/AI_Instructions/AI_System_Analysis_Prompt.md`
2. Document:
   - System architecture
   - Data flows
   - Integration points
   - Security requirements

## 💰 Phase 3: Quotation Preparation

### Step 1: Technical Analysis
1. Navigate to `02_Quotation/`
2. Use prompts from `AI_Instructions/`:
   - `Zack_Preform_Prompt.md` for effort estimation
   - `Official_Quote_Prompt.md` for quote generation
3. Document in `Technical_Analysis/`:
   - Development tasks breakdown
   - Time estimates per module
   - Technical risks
   - Required resources

### Step 2: Pricing Calculation
1. Use template: `Project_Templates/Zack_CSV_Template.csv`
2. Fill in:
   - Task descriptions
   - Hour estimates
   - Resource allocation
   - Risk buffers
3. Save to: `02_Quotation/Pricing/`

### Step 3: Quote Generation
1. Use prompt: `AI_Instructions/Zara_Quote_Prompt.md`
2. Generate professional quote using:
   - `Project_Templates/ZaaS_Quote_Template.html`
   - Include all deliverables
   - Clear payment terms
   - Timeline milestones
3. Save to: `02_Quotation/Quotes/`

## 🎨 Phase 4: Design Collaboration

### Step 1: Design Brief Preparation
1. Navigate to `03_Design/`
2. Create design brief including:
   - Brand guidelines
   - UI preferences
   - Component requirements
   - Responsive needs

### Step 2: Support Designer with UXPilot
1. Share prompts from `AI_Instructions/`:
   - `UXPilot_Prompt_Templates.md`
   - `Designer_Handbook_UXPilot_Workflow.md`
2. Ensure designer follows:
   - Component-first approach
   - 8-10k character optimization
   - Consistent naming conventions

### Step 3: Design Review
1. Review deliverables in:
   - `03_Design/Components/`
   - `03_Design/UI_UX/`
   - `03_Design/Figma_Files/`
2. Validate against requirements
3. Document feedback

## 🔄 Phase 5: Development Handoff

### Step 1: Prepare Development Specs
1. Navigate to `04_Development/`
2. Create detailed specs for:
   - `Architecture/` - System design
   - `Backend/` - API specifications
   - `Frontend/` - Component specs
   - `Database/` - Schema design

### Step 2: AI-Assisted Documentation
1. Use development prompts from `AI_Instructions/`
2. Generate:
   - API documentation
   - Database schemas
   - Component interfaces
   - Integration guides

## ✅ Phase 6: Validation & Testing

### Step 1: Test Planning
1. Navigate to `05_Testing/`
2. Use `AI_Instructions/AI_Test_Case_Generation_Prompt.md`
3. Create test plans in `Test_Plans/`
4. Define test cases in `Test_Cases/`

### Step 2: Validation with Client
1. Prepare demos using:
   - Completed requirements
   - Design mockups
   - Working prototypes
2. Document feedback in `01_Analysis/Validation/`
3. Update requirements as needed

## 📝 Best Practices

### Documentation Standards
- Use Markdown for all documents
- Include version numbers
- Add timestamps to updates
- Keep clear change logs

### AI Usage Guidelines
1. **Always verify AI output** - Don't blindly trust
2. **Customize prompts** - Add project context
3. **Iterate results** - Refine until accurate
4. **Document changes** - Track AI suggestions

### Client Communication
- Weekly status updates
- Clear milestone communication
- Proactive issue escalation
- Regular validation checkpoints

### Quality Checklist
Before moving to next phase:
- [ ] All templates completed
- [ ] AI prompts utilized
- [ ] Client approval obtained
- [ ] Documentation updated
- [ ] Team briefed

## 🚨 Common Pitfalls

1. **Skipping Templates** - Always use provided templates
2. **Insufficient Detail** - More detail prevents rework
3. **No AI Verification** - Always review AI output
4. **Poor Communication** - Keep client informed
5. **Missing Validation** - Get approvals in writing

## 📊 Time Allocation Guide

Typical time distribution for SA tasks:
- Requirements Gathering: 30%
- Analysis & Documentation: 25%
- Quotation Preparation: 20%
- Design Collaboration: 15%
- Validation & Handoff: 10%

## 🔗 Related Documents

- `00_How_to_Use_ZaaS_Base.md` - General guide
- `02_Quotation_Process.md` - Detailed quotation workflow
- `03_Design_Workflow.md` - Design phase details
- Project-specific `CLAUDE.md` - Current project status

## 💡 Pro Tips

1. **Start with Why** - Understand business goals first
2. **Think User-First** - Every requirement should benefit users
3. **Document Everything** - If it's not written, it doesn't exist
4. **Use AI Wisely** - Augment, don't replace thinking
5. **Communicate Often** - Overcommunication prevents issues

---

*Remember: Quality requirements lead to quality products. Take time to get it right!*