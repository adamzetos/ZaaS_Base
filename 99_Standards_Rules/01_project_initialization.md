# Project Initialization Process for System Analysts
**Classification: ZETOS-CONFIDENTIAL ▲**
**Version**: 1.0
**Last Updated**: 2025-05-24

## 📋 English Version

### Purpose
This document defines the standardized process for initializing new projects using Claude Code and AI-assisted workflows. All System Analysts must follow this process to ensure consistency and completeness.

### Prerequisites
Before starting project initialization, ensure you have:
- [ ] Access to Claude Code
- [ ] Project requirements from client/sales
- [ ] Company standard documents (AI instructions, Git rules, Document control)
- [ ] Appropriate permissions in Google Drive
- [ ] GitHub repository access (if applicable)

### Step-by-Step Initialization Process

#### 1️⃣ **Prepare Foundation Documents**
Gather and organize the following mandatory documents:
- **AI_Instructions.md** - Core AI usage guidelines and communication rules
- **Github_rules.md** - Version control standards and branch management
- **Document_Control_Regulations.md** - Information classification and handling
- **Project specifications** - Initial requirements from client

**Action**: Place all documents in appropriate folders for Claude Code access.

#### 2️⃣ **Initialize Claude Code Session**
Start a new Claude Code session and provide comprehensive context:
```
"I have all the instructions for you, also I have all the project specifications, 
how I can effectively give you all those instructions and project specifications, 
so you can always remember and follow strictly?"
```

**Expected Response**: Claude will suggest creating a CLAUDE.md file for persistent instructions.

#### 3️⃣ **Provide Documents to Claude**
Instruct Claude to:
1. Review all instruction files
2. Analyze project specifications
3. Check for conflicts, ambiguities, or unclear points
4. Ask for clarifications before proceeding

**Critical**: Always ensure Claude analyzes thoroughly before creating CLAUDE.md.

#### 4️⃣ **Clarify Any Ambiguities**
Common clarification points include:
- Project scope boundaries
- Team structure and roles
- Validation authorities
- Platform selection criteria
- Tool integration details
- Conflict detection focus areas

**Best Practice**: Document all clarifications for future reference.

#### 5️⃣ **Create CLAUDE.md File**
The CLAUDE.md file must include:
- **Critical instruction**: Always analyze requirements thoroughly
- **Project overview** and objectives
- **Communication rules** (formatting, emojis, structure)
- **Document control** compliance requirements
- **Team structure** and responsibilities
- **Git workflow** rules and validation process
- **Development phases** with deliverables
- **Tool stack** and integration points
- **Success metrics** and goals
- **CLAUDE.md Update Rule**: Clear instructions for maintaining context

**Location**: Save in project root directory

**CRITICAL REMINDER**: Instruct Claude to:
- Update CLAUDE.md whenever new standards/protocols are created
- Add references to all finalized documents in the "Established Standards & Protocols" section
- Maintain the SA Deliverables Checklist
- Never lose project context by keeping CLAUDE.md current

#### 6️⃣ **Setup Project Folder Structure**
Create standardized folder structure:
```
/Project_Root/
├── 01_Analysis/
│   ├── Requirements/
│   ├── User_Journeys/
│   ├── Workflows/
│   └── Validation_Docs/
├── 02_Quotation/
│   ├── Technical_Analysis/
│   └── Functional_Analysis/
├── 03_Design/
│   ├── Sitemap/
│   ├── Components/
│   ├── Figma_Files/
│   └── VI_Compliance/
├── 04_Development/
│   ├── FE/
│   ├── BE/
│   └── Mobile/
├── 05_Testing/
│   ├── Test_Cases/
│   ├── Automation_Scripts/
│   └── Reports/
├── 06_Deployment/
│   └── Releases/
├── 07_Documentation/
│   ├── Technical/
│   ├── User_Manuals/
│   └── Meeting_Notes/
├── AI/
├── PM/
├── SA/
└── CLAUDE.md
```

#### 7️⃣ **Create Bilingual README Files**
For each directory, create README.md with:
- English version first
- Chinese version second
- Purpose and usage guidelines
- Key deliverables
- Responsible roles
- Document classification

### Quality Checklist
Before completing initialization:
- [ ] CLAUDE.md contains all necessary instructions
- [ ] CLAUDE.md includes update rule for maintaining context
- [ ] All folders created with correct hierarchy
- [ ] Bilingual README files in all directories
- [ ] Document classification applied (ZETOS-CONFIDENTIAL)
- [ ] No conflicts or ambiguities remaining
- [ ] Claude confirms understanding of all requirements
- [ ] Claude understands to update CLAUDE.md for new standards

### Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| Claude forgets context | Ensure CLAUDE.md is comprehensive and saved |
| Folder structure variations | Use exact structure from this document |
| Missing bilingual support | Always create EN first, then CN |
| Classification missing | Apply ZETOS-CONFIDENTIAL by default |

### Next Steps After Initialization
1. Create document naming conventions (Task I-1.2)
2. Establish version control protocols (Task I-1.3)
3. Begin requirements gathering (Phase II)

### Tips for Success
- ✅ Always verify Claude's analysis before proceeding
- ✅ Document all decisions and clarifications
- ✅ Use consistent naming and structure
- ✅ Maintain clear communication with team
- ✅ Review CLAUDE.md regularly for updates
- ✅ Remind Claude to update CLAUDE.md when creating new standards
- ✅ Ensure Claude never loses project context by keeping CLAUDE.md current

---

## 📋 中文版本

### 目的
本文档定义了使用Claude Code和AI辅助工作流初始化新项目的标准化流程。所有系统分析师必须遵循此流程以确保一致性和完整性。

### 前提条件
在开始项目初始化之前，请确保您拥有：
- [ ] Claude Code访问权限
- [ ] 来自客户/销售的项目需求
- [ ] 公司标准文档（AI说明、Git规则、文档控制）
- [ ] Google Drive适当权限
- [ ] GitHub仓库访问权限（如适用）

### 分步初始化流程

#### 1️⃣ **准备基础文档**
收集并组织以下必需文档：
- **AI_Instructions.md** - 核心AI使用指南和沟通规则
- **Github_rules.md** - 版本控制标准和分支管理
- **Document_Control_Regulations.md** - 信息分类和处理
- **项目规格说明** - 来自客户的初始需求

**操作**：将所有文档放置在适当的文件夹中供Claude Code访问。

#### 2️⃣ **初始化Claude Code会话**
启动新的Claude Code会话并提供全面的上下文：
```
"我有所有的说明和项目规格说明，如何有效地提供给你，
让你能够始终记住并严格遵循？"
```

**预期响应**：Claude将建议创建CLAUDE.md文件以保持持久性说明。

#### 3️⃣ **向Claude提供文档**
指示Claude：
1. 审查所有说明文件
2. 分析项目规格说明
3. 检查冲突、歧义或不清楚的地方
4. 在继续之前要求澄清

**关键**：始终确保Claude在创建CLAUDE.md之前进行彻底分析。

#### 4️⃣ **澄清任何歧义**
常见的澄清点包括：
- 项目范围边界
- 团队结构和角色
- 验证权限
- 平台选择标准
- 工具集成细节
- 冲突检测重点领域

**最佳实践**：记录所有澄清以供将来参考。

#### 5️⃣ **创建CLAUDE.md文件**
CLAUDE.md文件必须包括：
- **关键指令**：始终彻底分析需求
- **项目概述**和目标
- **沟通规则**（格式、表情符号、结构）
- **文档控制**合规要求
- **团队结构**和职责
- **Git工作流**规则和验证流程
- **开发阶段**及交付物
- **工具栈**和集成点
- **成功指标**和目标
- **CLAUDE.md更新规则**：维护上下文的明确说明

**位置**：保存在项目根目录

**关键提醒**：指示Claude：
- 每当创建新标准/协议时更新CLAUDE.md
- 在"已建立的标准和协议"部分添加所有最终文档的引用
- 维护SA交付物清单
- 通过保持CLAUDE.md最新来确保永不丢失项目上下文

#### 6️⃣ **设置项目文件夹结构**
创建标准化文件夹结构：
```
/项目根目录/
├── 01_Analysis/
│   ├── Requirements/
│   ├── User_Journeys/
│   ├── Workflows/
│   └── Validation_Docs/
├── 02_Quotation/
│   ├── Technical_Analysis/
│   └── Functional_Analysis/
├── 03_Design/
│   ├── Sitemap/
│   ├── Components/
│   ├── Figma_Files/
│   └── VI_Compliance/
├── 04_Development/
│   ├── FE/
│   ├── BE/
│   └── Mobile/
├── 05_Testing/
│   ├── Test_Cases/
│   ├── Automation_Scripts/
│   └── Reports/
├── 06_Deployment/
│   └── Releases/
├── 07_Documentation/
│   ├── Technical/
│   ├── User_Manuals/
│   └── Meeting_Notes/
├── AI/
├── PM/
├── SA/
└── CLAUDE.md
```

#### 7️⃣ **创建双语README文件**
为每个目录创建README.md，包含：
- 首先是英文版本
- 其次是中文版本
- 目的和使用指南
- 主要交付物
- 负责角色
- 文档分类

### 质量检查清单
完成初始化前：
- [ ] CLAUDE.md包含所有必要说明
- [ ] CLAUDE.md包含维护上下文的更新规则
- [ ] 所有文件夹以正确层次结构创建
- [ ] 所有目录中都有双语README文件
- [ ] 应用文档分类（ZETOS-CONFIDENTIAL）
- [ ] 没有剩余的冲突或歧义
- [ ] Claude确认理解所有需求
- [ ] Claude理解为新标准更新CLAUDE.md

### 常见问题和解决方案

| 问题 | 解决方案 |
|------|----------|
| Claude忘记上下文 | 确保CLAUDE.md全面且已保存 |
| 文件夹结构变化 | 使用本文档中的确切结构 |
| 缺少双语支持 | 始终先创建英文，然后中文 |
| 缺少分类 | 默认应用ZETOS-CONFIDENTIAL |

### 初始化后的下一步
1. 创建文档命名规范（任务I-1.2）
2. 建立版本控制协议（任务I-1.3）
3. 开始需求收集（第二阶段）

### 成功提示
- ✅ 在继续之前始终验证Claude的分析
- ✅ 记录所有决定和澄清
- ✅ 使用一致的命名和结构
- ✅ 与团队保持清晰沟通
- ✅ 定期审查CLAUDE.md以获取更新
- ✅ 提醒Claude在创建新标准时更新CLAUDE.md
- ✅ 通过保持CLAUDE.md最新确保Claude永不丢失项目上下文