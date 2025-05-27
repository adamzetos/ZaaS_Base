# ZaaS_Base - Zetos Project Template Repository
**The Single Source of Truth for All Zetos Projects**

## 🎯 What is ZaaS_Base?

ZaaS_Base is a complete project template repository that provides standardized structure, AI-powered workflows, and best-practice templates for all Zetos Development Studio projects. Simply clone and start working - no setup required!

## 🚀 Quick Start (3 Steps)

```bash
# 1. Create your project folder
mkdir ClientCode_ProjectName
cd ClientCode_ProjectName

# 2. Launch Claude Code
# Open Claude Code in the current directory

# 3. Clone ZaaS_Base as your project template
git clone https://github.com/adamzetos/ZaaS_Base.git .
rm -rf .git
git init
```

# 4. Instruct Claude Code to study / learn the CLAUDE.md instructions;
## To instruct Claude all the rules


That's it! You now have a complete project structure ready to use.

## 📁 What's Inside?

```
ZaaS_Base/
├── 00_Project_Management/   # Contracts, meetings, status tracking
├── 01_Analysis/            # Requirements, user journeys, validation
├── 02_Quotation/          # Technical analysis, pricing, quotes
├── 03_Design/             # UI/UX, components, Figma files
├── 04_Development/        # Code, architecture, databases
├── 05_Testing/            # Test plans, cases, results
├── 06_Deployment/         # CI/CD, environments, releases
├── 07_Documentation/      # Technical docs, user manuals
├── 08_Resources/          # Assets, third-party resources
├── 09_Archive/            # Old versions, deprecated files
└── _MASTER_INSTRUCTIONS/  # Complete workflow guides
```

### 🤖 Each Phase Includes:
- **AI_Instructions/** - Ready-to-use AI prompts for automation
- **Project_Templates/** - Professional document templates
- **Work Folders** - Where your deliverables go



## 💡 How to Use

### For System Analysts:
1. Add client specifications to `01_Analysis/Requirements/`
2. Use AI prompts from `01_Analysis/AI_Instructions/`
3. Fill templates from `01_Analysis/Project_Templates/`
4. Update `CLAUDE.md` with project specifics
5. Follow workflow in `_MASTER_INSTRUCTIONS/01_SA_Complete_Workflow.md`

### For Designers:
1. Check requirements in `01_Analysis/`
2. Use UXPilot prompts from `03_Design/AI_Instructions/`
3. Follow workflow in `_MASTER_INSTRUCTIONS/03_Design_Complete_Workflow.md`

### For Other Roles:
Each phase has specific instructions in `_MASTER_INSTRUCTIONS/`

## 🔄 Workflow Example

```
1. Clone ZaaS_Base → Your project is ready
2. SA adds requirements → AI helps analyze
3. Generate quotation → AI assists pricing
4. Design with UXPilot → AI creates components
5. Development begins → Templates guide coding
6. Testing & deployment → Checklists ensure quality
```

## ✨ Key Benefits

- **No Setup Required** - Clone and start immediately
- **AI-Powered** - Prompts for every phase
- **Consistent Quality** - Professional templates
- **Time Savings** - 60-80% faster delivery
- **Best Practices** - Built-in standards

## 📚 Master Instructions

Complete workflows available in `_MASTER_INSTRUCTIONS/`:
- How to Use ZaaS_Base
- SA Complete Workflow
- Quotation Process
- Design Workflow
- Development Standards
- Testing Procedures
- Deployment Process
- Documentation Standards

## 🔧 Customization

After cloning:
1. Update `CLAUDE.md` with project details
2. Update `PROJECT_INFO.md` with team contacts
3. Remove any phases not needed
4. Add client-specific resources

## 🤝 Contributing

To improve ZaaS_Base:
1. Create feature branch
2. Test with real project
3. Document changes
4. Submit PR with examples

## 📞 Support

- **Issues**: GitHub Issues
- **Email**: adam@zetos.fr
- **Documentation**: `_MASTER_INSTRUCTIONS/`

---

## 🚧 RESTRUCTURING IN PROGRESS

### Current Tasks:
1. ✅ Define new simplified structure
2. ⏳ Reorganize folders to match template design
3. ⏳ Move AI prompts to phase-specific AI_Instructions
4. ⏳ Move templates to phase-specific Project_Templates
5. ⏳ Create _MASTER_INSTRUCTIONS with complete workflows
6. ⏳ Update CLAUDE.md template
7. ⏳ Remove all initialization scripts
8. ⏳ Test complete workflow

### Timeline:
- Restructuring will be completed in next session
- All existing content will be preserved and reorganized
- Backwards compatibility maintained during transition

---

*ZaaS_Base - Making project delivery efficient, consistent, and AI-powered*