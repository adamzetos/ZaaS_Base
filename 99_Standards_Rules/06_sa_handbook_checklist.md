# System Analyst Handbook & Master Checklist
**Classification: ZETOS-CONFIDENTIAL ▲**
**Version**: 1.0
**Last Updated**: 2025-05-24
**Document Type**: SA Operating Manual & Comprehensive Checklist

## 📋 English Version

### Purpose
This handbook serves as the complete operating manual for System Analysts at Zetos. It provides a comprehensive, step-by-step checklist covering the entire system analysis phase, from initial contact through handoff to quotation. This ensures consistent, high-quality delivery across all client projects.

### How to Use This Handbook
1. **Follow sequentially** - Each section builds on the previous
2. **Check off items** - Track progress systematically
3. **Document everything** - Use specified naming conventions
4. **Validate at gates** - Don't skip quality checkpoints
5. **Measure performance** - Track metrics for improvement

### Document Naming Convention
```
[CLIENT]_[PHASE]_[TYPE]_[DESC]_v[VERSION]_[DATE].[EXT]
Example: ABC_01_REQ_BusinessRequirements_v1.0_20250524.docx
```

---

## Phase 0️⃣: Pre-Project Setup 🚀

### Initial Contact & Qualification
- [ ] **Sales Handoff Meeting**
  - [ ] Receive initial client brief from sales
  - [ ] Review any existing documentation
  - [ ] Understand win themes and client expectations
  - [ ] Clarify project scope boundaries
  - [ ] Confirm quotation timeline

- [ ] **Client Qualification**
  - [ ] Industry sector: ________________ (affects complexity factor)
  - [ ] Company size: ________________
  - [ ] Decision makers identified: Yes/No
  - [ ] Budget range confirmed: Yes/No
  - [ ] Timeline realistic: Yes/No

### Project Setup
- [ ] **Administrative Setup**
  - [ ] Create client code (3-4 letters): ________
  - [ ] Create project folder per 01_project_initialization.md
  - [ ] Set up shared Google Drive workspace
  - [ ] Create project tracking sheet
  - [ ] Add to project pipeline dashboard

- [ ] **Legal & Compliance**
  - [ ] NDA status: [ ] Required [ ] Signed [ ] Not needed
  - [ ] Data processing agreement: [ ] Required [ ] Signed
  - [ ] Compliance requirements identified: ________________
  - [ ] Document classification level confirmed: ________________

### Team Formation
- [ ] **Resource Assignment**
  - [ ] Primary SA assigned: ________________
  - [ ] Backup SA assigned: ________________
  - [ ] Sales contact: ________________
  - [ ] Technical consultant (if needed): ________________
  - [ ] Estimated effort: ____ days

- [ ] **Kickoff Preparation**
  - [ ] Internal team briefing scheduled
  - [ ] Client kickoff meeting scheduled
  - [ ] Meeting agenda prepared
  - [ ] Materials prepared (templates, samples)
  - [ ] Recording tools tested (if permitted)

---

## Phase 1️⃣: Discovery & Research 🔍

### Industry & Market Research
- [ ] **Industry Analysis**
  - [ ] Industry sector: ________________
  - [ ] Market size: ________________
  - [ ] Growth trends: ________________
  - [ ] Key challenges: ________________
  - [ ] Regulatory environment: ________________

- [ ] **Competitive Landscape**
  - [ ] Direct competitors identified:
    1. ________________
    2. ________________
    3. ________________
  - [ ] Competitor solutions analyzed
  - [ ] Market differentiators identified
  - [ ] Best practices documented

### Client Deep Dive
- [ ] **Company Research**
  - [ ] Company history and background
  - [ ] Business model analysis
  - [ ] Revenue streams identified
  - [ ] Organizational structure mapped
  - [ ] Strategic goals understood

- [ ] **Current State Assessment**
  - [ ] Existing systems inventory:
    - System 1: ________________
    - System 2: ________________
    - System 3: ________________
  - [ ] Current processes documented
  - [ ] Pain points preliminary list
  - [ ] Technical debt identified
  - [ ] Integration landscape mapped

### Stakeholder Mapping
- [ ] **Key Stakeholders Identified**
  
  **Executive Level**
  - [ ] Sponsor: ________________ (Role: ________)
  - [ ] Decision maker: ________________ (Role: ________)
  - [ ] Budget holder: ________________ (Role: ________)
  
  **Business Level**
  - [ ] Business owner: ________________ (Dept: ________)
  - [ ] Process owner: ________________ (Dept: ________)
  - [ ] Subject matter experts: ________________
  
  **Technical Level** (if applicable)
  - [ ] IT lead: ________________
  - [ ] System admin: ________________
  - [ ] Data owner: ________________

- [ ] **Stakeholder Analysis**
  - [ ] Influence/Interest matrix created
  - [ ] Communication plan defined
  - [ ] Meeting schedule proposed
  - [ ] Escalation path clarified

---

## Phase 2️⃣: Requirements Gathering 📝

### Business Requirements

#### Strategic Alignment
- [ ] **Business Objectives**
  - [ ] Primary objective: ________________________________
  - [ ] Secondary objectives:
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] Success criteria defined:
    - Metric 1: ________________ Target: ________
    - Metric 2: ________________ Target: ________
    - Metric 3: ________________ Target: ________
  - [ ] ROI expectations: ________________
  - [ ] Payback period: ________________

#### Current State Analysis
- [ ] **Process Documentation (AS-IS)**
  - [ ] Core processes mapped:
    1. Process: ________________ Pain points: ________________
    2. Process: ________________ Pain points: ________________
    3. Process: ________________ Pain points: ________________
  - [ ] Process inefficiencies quantified:
    - Time wasted: ____ hours/month
    - Cost impact: $____/month
    - Error rate: ____%
  - [ ] Manual workarounds documented
  - [ ] System limitations identified

#### Future State Vision
- [ ] **Process Design (TO-BE)**
  - [ ] Optimized processes designed
  - [ ] Automation opportunities:
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] Expected improvements:
    - Time savings: ____ hours/month
    - Cost savings: $____/month
    - Error reduction: ____%
  - [ ] New capabilities required:
    1. ________________________________
    2. ________________________________
    3. ________________________________

#### Business Rules & Logic
- [ ] **Core Business Rules**
  - [ ] Validation rules:
    1. Rule: ________________ Applied to: ________________
    2. Rule: ________________ Applied to: ________________
  - [ ] Calculation formulas:
    1. Formula: ________________ Purpose: ________________
    2. Formula: ________________ Purpose: ________________
  - [ ] Approval workflows:
    1. Workflow: ________________ Approvers: ________________
    2. Workflow: ________________ Approvers: ________________
  - [ ] Business policies:
    1. Policy: ________________ Enforcement: ________________
    2. Policy: ________________ Enforcement: ________________

### Functional Requirements

#### User Analysis
- [ ] **User Roles Definition**
  
  For each role, document:
  
  **Role 1**: ________________________________
  - [ ] Number of users: ____
  - [ ] Primary responsibilities: ________________________________
  - [ ] System usage frequency: [ ] Hourly [ ] Daily [ ] Weekly [ ] Monthly
  - [ ] Technical proficiency: [ ] Low [ ] Medium [ ] High
  - [ ] Geographic location: ________________________________
  - [ ] Key functionalities needed:
    1. ________________________________
    2. ________________________________
    3. ________________________________

  **Role 2**: ________________________________
  (Repeat structure for each role)

#### Feature Specification
- [ ] **Core Modules Identification**
  
  **Module 1**: ________________________________
  - [ ] Purpose: ________________________________
  - [ ] Users: ________________________________
  - [ ] Key features:
    1. Feature: ________________ Priority: [ ] Must [ ] Should [ ] Could
    2. Feature: ________________ Priority: [ ] Must [ ] Should [ ] Could
    3. Feature: ________________ Priority: [ ] Must [ ] Should [ ] Could
  - [ ] User stories created: ____
  - [ ] Acceptance criteria defined: Yes/No
  - [ ] Dependencies: ________________________________

  **Module 2**: ________________________________
  (Repeat structure for each module)

#### User Experience Requirements
- [ ] **UI/UX Specifications**
  - [ ] Brand guidelines received: Yes/No
  - [ ] VI elements:
    - Primary colors: ________________
    - Secondary colors: ________________
    - Font family: ________________
    - Logo files: [ ] Received [ ] Pending
  - [ ] Design preferences:
    - Style: [ ] Minimal [ ] Modern [ ] Corporate [ ] Playful
    - Reference sites: ________________
  - [ ] Device requirements:
    - [ ] Desktop (required)
    - [ ] Tablet (priority: ________)
    - [ ] Mobile (priority: ________)
  - [ ] Accessibility requirements:
    - WCAG level: [ ] A [ ] AA [ ] AAA
    - Special needs: ________________

#### Data Requirements
- [ ] **Data Architecture**
  - [ ] Core entities identified:
    1. Entity: ________________ Attributes: ____ Relationships: ____
    2. Entity: ________________ Attributes: ____ Relationships: ____
    3. Entity: ________________ Attributes: ____ Relationships: ____
  - [ ] Data volume estimates:
    - Initial: ____ records
    - Year 1: ____ records
    - Year 3: ____ records
  - [ ] Data retention policies:
    - Active data: ____ months
    - Archive: ____ years
    - Purge: ____ years
  - [ ] Privacy requirements:
    - [ ] Personal data involved
    - [ ] Consent mechanisms needed
    - [ ] Data portability required
    - [ ] Right to erasure required

### Technical Requirements (When Specified by Client)

#### Platform & Technology
- [ ] **Technology Constraints**
  - [ ] Mandatory technologies:
    - Frontend: ________________
    - Backend: ________________
    - Database: ________________
  - [ ] Prohibited technologies: ________________
  - [ ] Preferred platforms:
    - [ ] Bubble (affects quotation factor)
    - [ ] Webflow (affects quotation factor)
    - [ ] React (standard factor)
    - [ ] Other: ________________

#### Integration Requirements
- [ ] **System Integrations**
  
  **Integration 1**: ________________________________
  - [ ] System type: ________________
  - [ ] Version: ________________
  - [ ] API available: [ ] Yes [ ] No [ ] Custom needed
  - [ ] Data flow: [ ] One-way in [ ] One-way out [ ] Bidirectional
  - [ ] Frequency: [ ] Real-time [ ] Batch: ________
  - [ ] Data volume: ____ records/day
  - [ ] Authentication: ________________
  - [ ] Documentation: [ ] Available [ ] Limited [ ] None

  **Integration 2**: ________________________________
  (Repeat structure for each integration)

#### Non-Functional Requirements
- [ ] **Performance Requirements**
  - [ ] Page load time: < ____ seconds
  - [ ] API response time: < ____ ms
  - [ ] Concurrent users: ____ (normal) ____ (peak)
  - [ ] Transaction throughput: ____ /second
  - [ ] Database size limit: ____ GB

- [ ] **Security Requirements**
  - [ ] Authentication method: ________________
  - [ ] Password policy: ________________
  - [ ] Session timeout: ____ minutes
  - [ ] Encryption required: [ ] In transit [ ] At rest
  - [ ] Audit logging: [ ] Basic [ ] Detailed [ ] Compliance-level

- [ ] **Compliance Requirements**
  - [ ] Industry standards:
    - [ ] GDPR
    - [ ] PIPL (China)
    - [ ] HIPAA
    - [ ] PCI-DSS
    - [ ] SOC 2
    - [ ] ISO 27001
    - [ ] Other: ________________
  - [ ] Audit requirements: ________________
  - [ ] Data residency: ________________

---

## Phase 3️⃣: Analysis & Design 🎨

### Business Process Modeling
- [ ] **Process Optimization**
  - [ ] Current vs future process comparison completed
  - [ ] Process flow diagrams created:
    - [ ] AS-IS processes
    - [ ] TO-BE processes
    - [ ] Gap analysis
  - [ ] BPMN notation used: Yes/No
  - [ ] Swimlane diagrams created: Yes/No
  - [ ] Decision points documented
  - [ ] Exception paths defined

### System Architecture Design
- [ ] **High-Level Architecture**
  - [ ] System context diagram created
  - [ ] Component architecture defined
  - [ ] Data flow diagrams created
  - [ ] Integration architecture mapped
  - [ ] Security architecture designed
  - [ ] Deployment architecture planned

### User Journey Mapping
- [ ] **Journey Maps Created**
  For each key user role:
  - [ ] User persona defined
  - [ ] Journey stages mapped
  - [ ] Touchpoints identified
  - [ ] Pain points marked
  - [ ] Opportunities highlighted
  - [ ] Emotional journey tracked

### Information Architecture
- [ ] **IA Design**
  - [ ] Sitemap created
  - [ ] Navigation structure defined
  - [ ] Content hierarchy established
  - [ ] Taxonomy defined
  - [ ] Search requirements specified
  - [ ] Personalization rules defined

---

## Phase 4️⃣: Conflict Detection & Resolution 🔍

### Business Logic Validation
- [ ] **Conflict Analysis**
  - [ ] Circular dependencies checked:
    - [ ] Approval chains validated
    - [ ] Workflow loops identified
    - [ ] Escalation paths verified
  - [ ] Business rule conflicts:
    - [ ] Contradictory rules identified
    - [ ] Overlapping conditions found
    - [ ] Exception handling gaps
  - [ ] Permission conflicts:
    - [ ] Role overlap analyzed
    - [ ] Access control conflicts
    - [ ] Segregation of duties verified

### Data Integrity Validation
- [ ] **Data Conflict Resolution**
  - [ ] Data model inconsistencies:
    - [ ] Duplicate entities identified
    - [ ] Relationship conflicts resolved
    - [ ] Referential integrity verified
  - [ ] Master data conflicts:
    - [ ] Single source of truth defined
    - [ ] Data ownership clarified
    - [ ] Synchronization rules established

### Process Conflict Resolution
- [ ] **Process Optimization**
  - [ ] Parallel process conflicts:
    - [ ] Resource contention identified
    - [ ] Timing conflicts resolved
    - [ ] Deadlock scenarios prevented
  - [ ] Integration conflicts:
    - [ ] API rate limits considered
    - [ ] Data format mismatches resolved
    - [ ] Timing dependencies mapped

### Technical Feasibility
- [ ] **Feasibility Validation**
  - [ ] Technical constraints verified
  - [ ] Performance requirements achievable
  - [ ] Security requirements implementable
  - [ ] Integration complexity assessed
  - [ ] Scalability confirmed
  - [ ] Risk mitigation strategies defined

---

## Phase 5️⃣: Documentation & Deliverables 📚

### Core Deliverables Production
- [ ] **Requirements Documentation**
  - [ ] Business Requirements Document (BRD)
    - [ ] Executive summary
    - [ ] Business objectives
    - [ ] Success criteria
    - [ ] Scope definition
    - [ ] Assumptions and constraints
  - [ ] Functional Requirements Specification (FRS)
    - [ ] Feature specifications
    - [ ] User stories
    - [ ] Acceptance criteria
    - [ ] UI/UX requirements
  - [ ] Technical Requirements Document (TRD)
    - [ ] Architecture design
    - [ ] Integration specifications
    - [ ] Performance requirements
    - [ ] Security specifications

### Supporting Documentation
- [ ] **Visual Deliverables**
  - [ ] Process flow diagrams
  - [ ] User journey maps
  - [ ] System architecture diagrams
  - [ ] Data model (ERD)
  - [ ] Wireframes/mockups (if applicable)
  - [ ] Sitemap

- [ ] **Analysis Reports**
  - [ ] Gap analysis report
  - [ ] Risk assessment document
  - [ ] Conflict resolution report
  - [ ] Feasibility study
  - [ ] ROI analysis

### Quality Assurance
- [ ] **Document Review**
  - [ ] Internal SA peer review completed
  - [ ] Technical accuracy verified
  - [ ] Business alignment confirmed
  - [ ] Completeness check passed
  - [ ] Consistency across documents
  - [ ] Version control applied

---

## Phase 6️⃣: Validation & Approval ✅

### Internal Validation
- [ ] **SA Team Review**
  - [ ] Peer review completed by: ________________
  - [ ] Review comments addressed
  - [ ] Technical feasibility confirmed
  - [ ] Estimation basis validated
  - [ ] Risk assessment reviewed

- [ ] **Sales Alignment**
  - [ ] Sales team briefed
  - [ ] Commercial viability confirmed
  - [ ] Client expectations aligned
  - [ ] Pricing strategy discussed
  - [ ] Contract terms considered

### Client Validation
- [ ] **Presentation Preparation**
  - [ ] Validation session scheduled
  - [ ] Presentation materials prepared
  - [ ] Key stakeholders invited
  - [ ] Agenda distributed
  - [ ] Success criteria reviewed

- [ ] **Validation Session**
  - [ ] Requirements walkthrough completed
  - [ ] Questions captured:
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] Feedback documented:
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] Changes requested:
    1. ________________________________
    2. ________________________________
  - [ ] Next steps agreed

### Formal Approval
- [ ] **Sign-off Process**
  - [ ] Final documents updated
  - [ ] Change log maintained
  - [ ] Approval document prepared
  - [ ] Signatures obtained:
    - [ ] SA: ________________ Date: ________
    - [ ] Sales: ________________ Date: ________
    - [ ] Client: ________________ Date: ________
  - [ ] Approved documents archived
  - [ ] Document saved as: `[CLIENT]_01_VAL_RequirementsApproval_v[X.X]_[DATE].pdf`

---

## Phase 7️⃣: Handoff to Quotation 📤

### Quotation Preparation
- [ ] **Information for Zack (Technical)**
  - [ ] Module complexity ratings:
    - Module 1: ________ Complexity: [ ] Low [ ] Medium [ ] High
    - Module 2: ________ Complexity: [ ] Low [ ] Medium [ ] High
    - Module 3: ________ Complexity: [ ] Low [ ] Medium [ ] High
  - [ ] Integration points: ____ total
  - [ ] Custom development effort: ____ %
  - [ ] Technical risk factor: [ ] 0.8 [ ] 1.0 [ ] 1.2 [ ] 1.5
  - [ ] Platform complexity factors documented

- [ ] **Information for Zara (Functional)**
  - [ ] Business modules grouped:
    - Core modules: ____
    - Optional modules: ____
    - Future phases: ____
  - [ ] User benefit statements prepared
  - [ ] Business value quantified
  - [ ] Implementation roadmap suggested
  - [ ] Quick wins identified

### Handoff Package
- [ ] **Complete Deliverables**
  - [ ] All documents uploaded to project folder
  - [ ] File naming conventions verified
  - [ ] Version control confirmed
  - [ ] Access permissions set
  - [ ] Handoff checklist completed

- [ ] **Transition Meeting**
  - [ ] Quotation team briefed
  - [ ] Key insights shared
  - [ ] Client hot buttons communicated
  - [ ] Technical considerations highlighted
  - [ ] Timeline constraints emphasized

### Knowledge Transfer
- [ ] **Project Intelligence**
  - [ ] Client preferences documented
  - [ ] Decision-making process noted
  - [ ] Budget sensitivity assessed
  - [ ] Competition factors shared
  - [ ] Win probability discussed

---

## Phase 8️⃣: Metrics & Continuous Improvement 📊

### Performance Metrics
- [ ] **Effort Tracking**
  - [ ] Total effort spent: ____ hours
  - [ ] By phase:
    - Discovery: ____ hours
    - Requirements: ____ hours
    - Analysis: ____ hours
    - Documentation: ____ hours
    - Validation: ____ hours
  - [ ] Planned vs actual: ____% variance

- [ ] **Quality Metrics**
  - [ ] Requirements changes post-approval: ____
  - [ ] Conflicts identified: ____
  - [ ] Conflicts resolved: ____
  - [ ] Client satisfaction score: ____/5
  - [ ] Rework required: ____% 

- [ ] **Process Metrics**
  - [ ] Number of stakeholder sessions: ____
  - [ ] Response time to queries: ____ hours avg
  - [ ] Document iterations: ____
  - [ ] Time to approval: ____ days

### Lessons Learned
- [ ] **Project Retrospective**
  - [ ] What went well:
    1. ________________________________
    2. ________________________________
  - [ ] What could improve:
    1. ________________________________
    2. ________________________________
  - [ ] Process improvements suggested:
    1. ________________________________
    2. ________________________________
  - [ ] Knowledge base updated: Yes/No

### Continuous Improvement
- [ ] **Action Items**
  - [ ] Process updates required: ________________
  - [ ] Template improvements: ________________
  - [ ] Training needs identified: ________________
  - [ ] Tool enhancements: ________________
  - [ ] Best practices documented: Yes/No

---

## 🔧 Tools & Resources

### Required Tools
- [ ] Google Workspace (Docs, Sheets, Drive)
- [ ] Diagramming tool (Draw.io, Lucidchart)
- [ ] Project tracking (JIRA, Trello)
- [ ] Communication (Slack, Teams)
- [ ] Time tracking system

### Templates Available
- [ ] BRD template
- [ ] FRS template
- [ ] User story template
- [ ] Journey map template
- [ ] Process flow template
- [ ] Risk assessment template

### Reference Materials
- [ ] Industry best practices
- [ ] Zetos methodology guide
- [ ] Previous project examples
- [ ] Compliance checklists
- [ ] Technical standards

---

## 📋 Quick Reference Card

### Critical Success Factors
1. **Thorough preparation** - Research before you meet
2. **Active listening** - Understand before proposing
3. **Systematic approach** - Follow the checklist
4. **Clear documentation** - Write for your audience
5. **Timely validation** - Get approvals promptly

### Common Pitfalls to Avoid
- ❌ Skipping discovery phase
- ❌ Making technical assumptions
- ❌ Missing stakeholders
- ❌ Unclear requirements
- ❌ No conflict detection
- ❌ Poor handoff to quotation

### Quality Gates (Do Not Skip)
- ✅ Initial qualification complete
- ✅ All stakeholders identified
- ✅ Requirements validated
- ✅ Conflicts resolved
- ✅ Client approval obtained
- ✅ Handoff package complete

---

## 📋 中文版本

### 目的
本手册作为泽托斯系统分析师的完整操作手册。它提供了一个全面的、分步骤的检查清单，涵盖从初始接触到移交报价的整个系统分析阶段，确保所有客户项目的一致、高质量交付。

### 如何使用本手册
1. **按顺序执行** - 每个部分都建立在前一个部分的基础上
2. **勾选项目** - 系统地跟踪进度
3. **记录一切** - 使用指定的命名规范
4. **在关卡验证** - 不要跳过质量检查点
5. **衡量绩效** - 跟踪指标以改进

### 文档命名规范
```
[客户代码]_[阶段]_[类型]_[描述]_v[版本]_[日期].[扩展名]
示例：ABC_01_REQ_BusinessRequirements_v1.0_20250524.docx
```

---

## 阶段 0️⃣：项目前期准备 🚀

### 初始接触与资格审查
- [ ] **销售交接会议**
  - [ ] 从销售部门接收初始客户简报
  - [ ] 审查任何现有文档
  - [ ] 了解获胜主题和客户期望
  - [ ] 澄清项目范围边界
  - [ ] 确认报价时间表

- [ ] **客户资格审查**
  - [ ] 行业部门：________________（影响复杂度因子）
  - [ ] 公司规模：________________
  - [ ] 决策者已识别：是/否
  - [ ] 预算范围已确认：是/否
  - [ ] 时间表现实可行：是/否

### 项目设置
- [ ] **行政设置**
  - [ ] 创建客户代码（3-4个字母）：________
  - [ ] 按照01_project_initialization.md创建项目文件夹
  - [ ] 设置共享Google Drive工作空间
  - [ ] 创建项目跟踪表
  - [ ] 添加到项目管道仪表板

- [ ] **法律与合规**
  - [ ] 保密协议状态：[ ] 需要 [ ] 已签署 [ ] 不需要
  - [ ] 数据处理协议：[ ] 需要 [ ] 已签署
  - [ ] 已识别的合规要求：________________
  - [ ] 确认的文档分类级别：________________

### 团队组建
- [ ] **资源分配**
  - [ ] 主要SA已分配：________________
  - [ ] 备份SA已分配：________________
  - [ ] 销售联系人：________________
  - [ ] 技术顾问（如需要）：________________
  - [ ] 预估工作量：____ 天

- [ ] **启动准备**
  - [ ] 内部团队简报已安排
  - [ ] 客户启动会议已安排
  - [ ] 会议议程已准备
  - [ ] 材料已准备（模板、示例）
  - [ ] 录音工具已测试（如允许）

---

## 阶段 1️⃣：发现与研究 🔍

### 行业与市场研究
- [ ] **行业分析**
  - [ ] 行业部门：________________
  - [ ] 市场规模：________________
  - [ ] 增长趋势：________________
  - [ ] 主要挑战：________________
  - [ ] 监管环境：________________

- [ ] **竞争格局**
  - [ ] 已识别的直接竞争对手：
    1. ________________
    2. ________________
    3. ________________
  - [ ] 竞争对手解决方案已分析
  - [ ] 市场差异化因素已识别
  - [ ] 最佳实践已记录

### 客户深入研究
- [ ] **公司研究**
  - [ ] 公司历史和背景
  - [ ] 商业模式分析
  - [ ] 收入来源已识别
  - [ ] 组织结构已映射
  - [ ] 战略目标已理解

- [ ] **现状评估**
  - [ ] 现有系统清单：
    - 系统1：________________
    - 系统2：________________
    - 系统3：________________
  - [ ] 当前流程已记录
  - [ ] 痛点初步清单
  - [ ] 技术债务已识别
  - [ ] 集成格局已映射

### 利益相关者映射
- [ ] **关键利益相关者已识别**
  
  **执行层**
  - [ ] 发起人：________________（角色：________）
  - [ ] 决策者：________________（角色：________）
  - [ ] 预算持有人：________________（角色：________）
  
  **业务层**
  - [ ] 业务负责人：________________（部门：________）
  - [ ] 流程负责人：________________（部门：________）
  - [ ] 主题专家：________________
  
  **技术层**（如适用）
  - [ ] IT负责人：________________
  - [ ] 系统管理员：________________
  - [ ] 数据负责人：________________

- [ ] **利益相关者分析**
  - [ ] 影响力/兴趣矩阵已创建
  - [ ] 沟通计划已定义
  - [ ] 会议日程已提议
  - [ ] 升级路径已澄清

---

## 阶段 2️⃣：需求收集 📝

### 业务需求

#### 战略对齐
- [ ] **业务目标**
  - [ ] 主要目标：________________________________
  - [ ] 次要目标：
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] 成功标准已定义：
    - 指标1：________________ 目标：________
    - 指标2：________________ 目标：________
    - 指标3：________________ 目标：________
  - [ ] 投资回报率预期：________________
  - [ ] 投资回收期：________________

#### 现状分析
- [ ] **流程文档（现状）**
  - [ ] 核心流程已映射：
    1. 流程：________________ 痛点：________________
    2. 流程：________________ 痛点：________________
    3. 流程：________________ 痛点：________________
  - [ ] 流程低效已量化：
    - 浪费时间：____ 小时/月
    - 成本影响：$____/月
    - 错误率：____%
  - [ ] 手动解决方法已记录
  - [ ] 系统限制已识别

#### 未来状态愿景
- [ ] **流程设计（未来）**
  - [ ] 优化流程已设计
  - [ ] 自动化机会：
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] 预期改进：
    - 时间节省：____ 小时/月
    - 成本节省：$____/月
    - 错误减少：____%
  - [ ] 所需新功能：
    1. ________________________________
    2. ________________________________
    3. ________________________________

#### 业务规则与逻辑
- [ ] **核心业务规则**
  - [ ] 验证规则：
    1. 规则：________________ 应用于：________________
    2. 规则：________________ 应用于：________________
  - [ ] 计算公式：
    1. 公式：________________ 目的：________________
    2. 公式：________________ 目的：________________
  - [ ] 审批工作流：
    1. 工作流：________________ 审批人：________________
    2. 工作流：________________ 审批人：________________
  - [ ] 业务政策：
    1. 政策：________________ 执行：________________
    2. 政策：________________ 执行：________________

### 功能需求

#### 用户分析
- [ ] **用户角色定义**
  
  对于每个角色，记录：
  
  **角色1**：________________________________
  - [ ] 用户数量：____
  - [ ] 主要职责：________________________________
  - [ ] 系统使用频率：[ ] 每小时 [ ] 每天 [ ] 每周 [ ] 每月
  - [ ] 技术熟练度：[ ] 低 [ ] 中 [ ] 高
  - [ ] 地理位置：________________________________
  - [ ] 所需关键功能：
    1. ________________________________
    2. ________________________________
    3. ________________________________

  **角色2**：________________________________
  （为每个角色重复结构）

#### 功能规格
- [ ] **核心模块识别**
  
  **模块1**：________________________________
  - [ ] 目的：________________________________
  - [ ] 用户：________________________________
  - [ ] 关键功能：
    1. 功能：________________ 优先级：[ ] 必须 [ ] 应该 [ ] 可以
    2. 功能：________________ 优先级：[ ] 必须 [ ] 应该 [ ] 可以
    3. 功能：________________ 优先级：[ ] 必须 [ ] 应该 [ ] 可以
  - [ ] 用户故事已创建：____
  - [ ] 验收标准已定义：是/否
  - [ ] 依赖关系：________________________________

  **模块2**：________________________________
  （为每个模块重复结构）

#### 用户体验需求
- [ ] **UI/UX规格**
  - [ ] 品牌指南已收到：是/否
  - [ ] VI元素：
    - 主色：________________
    - 辅色：________________
    - 字体系列：________________
    - Logo文件：[ ] 已收到 [ ] 待定
  - [ ] 设计偏好：
    - 风格：[ ] 极简 [ ] 现代 [ ] 企业 [ ] 活泼
    - 参考网站：________________
  - [ ] 设备要求：
    - [ ] 桌面（必需）
    - [ ] 平板（优先级：________）
    - [ ] 移动（优先级：________）
  - [ ] 可访问性要求：
    - WCAG级别：[ ] A [ ] AA [ ] AAA
    - 特殊需求：________________

#### 数据需求
- [ ] **数据架构**
  - [ ] 核心实体已识别：
    1. 实体：________________ 属性：____ 关系：____
    2. 实体：________________ 属性：____ 关系：____
    3. 实体：________________ 属性：____ 关系：____
  - [ ] 数据量估计：
    - 初始：____ 条记录
    - 第1年：____ 条记录
    - 第3年：____ 条记录
  - [ ] 数据保留政策：
    - 活动数据：____ 个月
    - 存档：____ 年
    - 清除：____ 年
  - [ ] 隐私要求：
    - [ ] 涉及个人数据
    - [ ] 需要同意机制
    - [ ] 需要数据可移植性
    - [ ] 需要删除权

### 技术需求（当客户指定时）

#### 平台与技术
- [ ] **技术约束**
  - [ ] 强制技术：
    - 前端：________________
    - 后端：________________
    - 数据库：________________
  - [ ] 禁止的技术：________________
  - [ ] 首选平台：
    - [ ] Bubble（影响报价因子）
    - [ ] Webflow（影响报价因子）
    - [ ] React（标准因子）
    - [ ] 其他：________________

#### 集成需求
- [ ] **系统集成**
  
  **集成1**：________________________________
  - [ ] 系统类型：________________
  - [ ] 版本：________________
  - [ ] API可用：[ ] 是 [ ] 否 [ ] 需要定制
  - [ ] 数据流：[ ] 单向输入 [ ] 单向输出 [ ] 双向
  - [ ] 频率：[ ] 实时 [ ] 批处理：________
  - [ ] 数据量：____ 记录/天
  - [ ] 认证：________________
  - [ ] 文档：[ ] 可用 [ ] 有限 [ ] 无

  **集成2**：________________________________
  （为每个集成重复结构）

#### 非功能需求
- [ ] **性能需求**
  - [ ] 页面加载时间：< ____ 秒
  - [ ] API响应时间：< ____ 毫秒
  - [ ] 并发用户：____（正常）____（峰值）
  - [ ] 事务吞吐量：____ /秒
  - [ ] 数据库大小限制：____ GB

- [ ] **安全需求**
  - [ ] 认证方法：________________
  - [ ] 密码策略：________________
  - [ ] 会话超时：____ 分钟
  - [ ] 加密要求：[ ] 传输中 [ ] 静态
  - [ ] 审计日志：[ ] 基本 [ ] 详细 [ ] 合规级别

- [ ] **合规需求**
  - [ ] 行业标准：
    - [ ] GDPR
    - [ ] 个人信息保护法（中国）
    - [ ] HIPAA
    - [ ] PCI-DSS
    - [ ] SOC 2
    - [ ] ISO 27001
    - [ ] 其他：________________
  - [ ] 审计要求：________________
  - [ ] 数据驻留：________________

---

## 阶段 3️⃣：分析与设计 🎨

### 业务流程建模
- [ ] **流程优化**
  - [ ] 当前与未来流程比较已完成
  - [ ] 流程图已创建：
    - [ ] 现状流程
    - [ ] 未来流程
    - [ ] 差距分析
  - [ ] 使用BPMN符号：是/否
  - [ ] 泳道图已创建：是/否
  - [ ] 决策点已记录
  - [ ] 异常路径已定义

### 系统架构设计
- [ ] **高层架构**
  - [ ] 系统上下文图已创建
  - [ ] 组件架构已定义
  - [ ] 数据流图已创建
  - [ ] 集成架构已映射
  - [ ] 安全架构已设计
  - [ ] 部署架构已规划

### 用户旅程映射
- [ ] **旅程图已创建**
  对于每个关键用户角色：
  - [ ] 用户角色已定义
  - [ ] 旅程阶段已映射
  - [ ] 接触点已识别
  - [ ] 痛点已标记
  - [ ] 机会已突出显示
  - [ ] 情感旅程已跟踪

### 信息架构
- [ ] **IA设计**
  - [ ] 网站地图已创建
  - [ ] 导航结构已定义
  - [ ] 内容层次已建立
  - [ ] 分类法已定义
  - [ ] 搜索需求已指定
  - [ ] 个性化规则已定义

---

## 阶段 4️⃣：冲突检测与解决 🔍

### 业务逻辑验证
- [ ] **冲突分析**
  - [ ] 循环依赖已检查：
    - [ ] 审批链已验证
    - [ ] 工作流循环已识别
    - [ ] 升级路径已验证
  - [ ] 业务规则冲突：
    - [ ] 矛盾规则已识别
    - [ ] 重叠条件已发现
    - [ ] 异常处理差距
  - [ ] 权限冲突：
    - [ ] 角色重叠已分析
    - [ ] 访问控制冲突
    - [ ] 职责分离已验证

### 数据完整性验证
- [ ] **数据冲突解决**
  - [ ] 数据模型不一致：
    - [ ] 重复实体已识别
    - [ ] 关系冲突已解决
    - [ ] 参照完整性已验证
  - [ ] 主数据冲突：
    - [ ] 单一真相来源已定义
    - [ ] 数据所有权已澄清
    - [ ] 同步规则已建立

### 流程冲突解决
- [ ] **流程优化**
  - [ ] 并行流程冲突：
    - [ ] 资源争用已识别
    - [ ] 时间冲突已解决
    - [ ] 死锁场景已预防
  - [ ] 集成冲突：
    - [ ] API速率限制已考虑
    - [ ] 数据格式不匹配已解决
    - [ ] 时间依赖已映射

### 技术可行性
- [ ] **可行性验证**
  - [ ] 技术约束已验证
  - [ ] 性能需求可实现
  - [ ] 安全需求可实施
  - [ ] 集成复杂度已评估
  - [ ] 可扩展性已确认
  - [ ] 风险缓解策略已定义

---

## 阶段 5️⃣：文档与交付物 📚

### 核心交付物制作
- [ ] **需求文档**
  - [ ] 业务需求文档（BRD）
    - [ ] 执行摘要
    - [ ] 业务目标
    - [ ] 成功标准
    - [ ] 范围定义
    - [ ] 假设和约束
  - [ ] 功能需求规格说明（FRS）
    - [ ] 功能规格
    - [ ] 用户故事
    - [ ] 验收标准
    - [ ] UI/UX需求
  - [ ] 技术需求文档（TRD）
    - [ ] 架构设计
    - [ ] 集成规格
    - [ ] 性能需求
    - [ ] 安全规格

### 支持文档
- [ ] **可视化交付物**
  - [ ] 流程图
  - [ ] 用户旅程图
  - [ ] 系统架构图
  - [ ] 数据模型（ERD）
  - [ ] 线框图/原型（如适用）
  - [ ] 网站地图

- [ ] **分析报告**
  - [ ] 差距分析报告
  - [ ] 风险评估文档
  - [ ] 冲突解决报告
  - [ ] 可行性研究
  - [ ] 投资回报率分析

### 质量保证
- [ ] **文档审查**
  - [ ] 内部SA同行评审已完成
  - [ ] 技术准确性已验证
  - [ ] 业务对齐已确认
  - [ ] 完整性检查已通过
  - [ ] 文档间一致性
  - [ ] 版本控制已应用

---

## 阶段 6️⃣：验证与批准 ✅

### 内部验证
- [ ] **SA团队审查**
  - [ ] 同行评审完成者：________________
  - [ ] 审查意见已处理
  - [ ] 技术可行性已确认
  - [ ] 估算基础已验证
  - [ ] 风险评估已审查

- [ ] **销售对齐**
  - [ ] 销售团队已简报
  - [ ] 商业可行性已确认
  - [ ] 客户期望已对齐
  - [ ] 定价策略已讨论
  - [ ] 合同条款已考虑

### 客户验证
- [ ] **演示准备**
  - [ ] 验证会议已安排
  - [ ] 演示材料已准备
  - [ ] 关键利益相关者已邀请
  - [ ] 议程已分发
  - [ ] 成功标准已审查

- [ ] **验证会议**
  - [ ] 需求演练已完成
  - [ ] 问题已捕获：
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] 反馈已记录：
    1. ________________________________
    2. ________________________________
    3. ________________________________
  - [ ] 请求的更改：
    1. ________________________________
    2. ________________________________
  - [ ] 下一步已同意

### 正式批准
- [ ] **签字流程**
  - [ ] 最终文档已更新
  - [ ] 变更日志已维护
  - [ ] 批准文档已准备
  - [ ] 签名已获得：
    - [ ] SA：________________ 日期：________
    - [ ] 销售：________________ 日期：________
    - [ ] 客户：________________ 日期：________
  - [ ] 批准的文档已存档
  - [ ] 文档保存为：`[客户代码]_01_VAL_RequirementsApproval_v[X.X]_[日期].pdf`

---

## 阶段 7️⃣：移交至报价 📤

### 报价准备
- [ ] **Zack的信息（技术）**
  - [ ] 模块复杂度评级：
    - 模块1：________ 复杂度：[ ] 低 [ ] 中 [ ] 高
    - 模块2：________ 复杂度：[ ] 低 [ ] 中 [ ] 高
    - 模块3：________ 复杂度：[ ] 低 [ ] 中 [ ] 高
  - [ ] 集成点：____ 总计
  - [ ] 自定义开发工作量：____ %
  - [ ] 技术风险因子：[ ] 0.8 [ ] 1.0 [ ] 1.2 [ ] 1.5
  - [ ] 平台复杂度因子已记录

- [ ] **Zara的信息（功能）**
  - [ ] 业务模块已分组：
    - 核心模块：____
    - 可选模块：____
    - 未来阶段：____
  - [ ] 用户利益陈述已准备
  - [ ] 业务价值已量化
  - [ ] 实施路线图已建议
  - [ ] 快速成功已识别

### 移交包
- [ ] **完整交付物**
  - [ ] 所有文档已上传到项目文件夹
  - [ ] 文件命名规范已验证
  - [ ] 版本控制已确认
  - [ ] 访问权限已设置
  - [ ] 移交清单已完成

- [ ] **过渡会议**
  - [ ] 报价团队已简报
  - [ ] 关键见解已分享
  - [ ] 客户热点已沟通
  - [ ] 技术考虑已突出显示
  - [ ] 时间限制已强调

### 知识转移
- [ ] **项目情报**
  - [ ] 客户偏好已记录
  - [ ] 决策过程已注明
  - [ ] 预算敏感性已评估
  - [ ] 竞争因素已分享
  - [ ] 获胜概率已讨论

---

## 阶段 8️⃣：指标与持续改进 📊

### 绩效指标
- [ ] **工作量跟踪**
  - [ ] 总工作量：____ 小时
  - [ ] 按阶段：
    - 发现：____ 小时
    - 需求：____ 小时
    - 分析：____ 小时
    - 文档：____ 小时
    - 验证：____ 小时
  - [ ] 计划与实际：____% 差异

- [ ] **质量指标**
  - [ ] 批准后需求变更：____
  - [ ] 识别的冲突：____
  - [ ] 解决的冲突：____
  - [ ] 客户满意度评分：____/5
  - [ ] 需要返工：____% 

- [ ] **流程指标**
  - [ ] 利益相关者会议次数：____
  - [ ] 查询响应时间：____ 小时平均
  - [ ] 文档迭代次数：____
  - [ ] 批准时间：____ 天

### 经验教训
- [ ] **项目回顾**
  - [ ] 做得好的：
    1. ________________________________
    2. ________________________________
  - [ ] 可以改进的：
    1. ________________________________
    2. ________________________________
  - [ ] 建议的流程改进：
    1. ________________________________
    2. ________________________________
  - [ ] 知识库已更新：是/否

### 持续改进
- [ ] **行动项目**
  - [ ] 需要的流程更新：________________
  - [ ] 模板改进：________________
  - [ ] 识别的培训需求：________________
  - [ ] 工具增强：________________
  - [ ] 最佳实践已记录：是/否

---

## 🔧 工具与资源

### 必需工具
- [ ] Google Workspace（文档、表格、云端硬盘）
- [ ] 图表工具（Draw.io、Lucidchart）
- [ ] 项目跟踪（JIRA、Trello）
- [ ] 沟通（Slack、Teams）
- [ ] 时间跟踪系统

### 可用模板
- [ ] BRD模板
- [ ] FRS模板
- [ ] 用户故事模板
- [ ] 旅程图模板
- [ ] 流程图模板
- [ ] 风险评估模板

### 参考材料
- [ ] 行业最佳实践
- [ ] 泽托斯方法论指南
- [ ] 以前的项目示例
- [ ] 合规检查清单
- [ ] 技术标准

---

## 📋 快速参考卡

### 关键成功因素
1. **充分准备** - 在会面前进行研究
2. **积极倾听** - 在提议前理解
3. **系统方法** - 遵循检查清单
4. **清晰文档** - 为您的受众写作
5. **及时验证** - 及时获得批准

### 要避免的常见陷阱
- ❌ 跳过发现阶段
- ❌ 做出技术假设
- ❌ 遗漏利益相关者
- ❌ 需求不明确
- ❌ 没有冲突检测
- ❌ 向报价的移交不当

### 质量关卡（不要跳过）
- ✅ 初始资格审查完成
- ✅ 所有利益相关者已识别
- ✅ 需求已验证
- ✅ 冲突已解决
- ✅ 客户批准已获得
- ✅ 移交包已完成