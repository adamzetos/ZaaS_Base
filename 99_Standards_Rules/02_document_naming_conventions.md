# Document Naming Conventions for ZaaS Platform
**Classification: ZETOS-CONFIDENTIAL ▲**
**Version**: 1.0
**Last Updated**: 2025-05-24

## 📋 English Version

### Purpose
Establish consistent, professional naming conventions for all documents throughout the project lifecycle, ensuring easy identification, sorting, and version tracking across multicultural teams.

### Core Principles
1. **Simplicity** - Easy to understand and apply
2. **Consistency** - Same pattern across all phases
3. **Scalability** - Works for any project size
4. **Cross-platform** - Compatible with all systems
5. **Searchable** - Easy to find and filter

### Standard Naming Format

```
[CLIENT]_[PHASE]_[TYPE]_[DESC]_v[VERSION]_[DATE].[EXT]
```

#### Component Definitions

| Component | Format | Example | Description |
|-----------|--------|---------|-------------|
| CLIENT | 3-4 letters | ABC, TECH | Client code (uppercase) |
| PHASE | 2 digits | 01, 02, 03 | Development phase number |
| TYPE | Standard code | REQ, DES, DOC | Document type (see table below) |
| DESC | CamelCase | UserLogin, PaymentFlow | Brief description (no spaces) |
| VERSION | v1.0 | v1.0, v2.1 | Major.Minor version |
| DATE | YYYYMMDD | 20250524 | Creation/revision date |
| EXT | Standard | pdf, docx, md | File extension |

### Document Type Codes

#### Phase 01 - Analysis
| Code | Document Type | Example |
|------|--------------|---------|
| REQ | Requirements | ABC_01_REQ_UserStories_v1.0_20250524.docx |
| FLO | Workflow | ABC_01_FLO_OrderProcess_v1.0_20250524.pdf |
| JRN | User Journey | ABC_01_JRN_CustomerPath_v1.0_20250524.pdf |
| MAT | Matrix/Mapping | ABC_01_MAT_RolePermission_v1.0_20250524.xlsx |
| VAL | Validation | ABC_01_VAL_ClientApproval_v1.0_20250524.pdf |

#### Phase 02 - Quotation
| Code | Document Type | Example |
|------|--------------|---------|
| QTT | Technical Quote | ABC_02_QTT_TechnicalAnalysis_v1.0_20250524.xlsx |
| QTF | Functional Quote | ABC_02_QTF_BusinessModules_v1.0_20250524.xlsx |
| QTC | Customer Quote | ABC_02_QTC_FinalQuotation_v1.0_20250524.pdf |

#### Phase 03 - Design
| Code | Document Type | Example |
|------|--------------|---------|
| SIT | Sitemap | ABC_03_SIT_Navigation_v1.0_20250524.pdf |
| COM | Components | ABC_03_COM_UILibrary_v1.0_20250524.fig |
| DES | Design Files | ABC_03_DES_Homepage_v1.0_20250524.fig |
| VIC | VI Compliance | ABC_03_VIC_BrandCheck_v1.0_20250524.pdf |

#### Phase 04 - Development
| Code | Document Type | Example |
|------|--------------|---------|
| API | API Documentation | ABC_04_API_UserService_v1.0_20250524.md |
| ARC | Architecture | ABC_04_ARC_SystemDesign_v1.0_20250524.pdf |
| DBM | Database Model | ABC_04_DBM_Schema_v1.0_20250524.sql |
| CFG | Configuration | ABC_04_CFG_Environment_v1.0_20250524.yaml |

#### Phase 05 - Testing
| Code | Document Type | Example |
|------|--------------|---------|
| TSC | Test Cases | ABC_05_TSC_UserModule_v1.0_20250524.xlsx |
| TSR | Test Reports | ABC_05_TSR_RegressionTest_v1.0_20250524.pdf |
| BUG | Bug Reports | ABC_05_BUG_CriticalIssues_v1.0_20250524.xlsx |

#### Phase 06 - Deployment
| Code | Document Type | Example |
|------|--------------|---------|
| DEP | Deployment Guide | ABC_06_DEP_ProductionGuide_v1.0_20250524.md |
| REL | Release Notes | ABC_06_REL_Version2_v1.0_20250524.md |
| RBK | Rollback Plan | ABC_06_RBK_Emergency_v1.0_20250524.pdf |

#### Phase 07 - Documentation
| Code | Document Type | Example |
|------|--------------|---------|
| USR | User Manual | ABC_07_USR_AdminGuide_v1.0_20250524.pdf |
| TEC | Technical Docs | ABC_07_TEC_APIReference_v1.0_20250524.md |
| MTG | Meeting Notes | ABC_07_MTG_Kickoff_v1.0_20250524.docx |

### Special Cases

#### 1. Draft Documents
Add "_DRAFT" before version:
```
ABC_01_REQ_UserStories_DRAFT_v0.1_20250524.docx
```

#### 2. Bilingual Documents
Add language code:
```
ABC_07_USR_AdminGuide_EN_v1.0_20250524.pdf
ABC_07_USR_AdminGuide_CN_v1.0_20250524.pdf
```

#### 3. Client Deliverables
Add "_FINAL":
```
ABC_02_QTC_FinalQuotation_FINAL_v1.0_20250524.pdf
```

#### 4. Internal Working Documents
Add "_INT":
```
ABC_01_REQ_Analysis_INT_v1.0_20250524.docx
```

### Version Numbering Rules

| Version | When to Use | Example |
|---------|------------|---------|
| v0.x | Draft versions | v0.1, v0.2 |
| v1.0 | First official release | v1.0 |
| v1.x | Minor updates | v1.1, v1.2 |
| v2.0 | Major revision | v2.0 |

### Best Practices

1. **DO's** ✅
   - Use uppercase for CLIENT and TYPE codes
   - Use CamelCase for descriptions (no spaces/underscores)
   - Always include version numbers
   - Keep descriptions brief (max 20 characters)
   - Update date when revising

2. **DON'Ts** ❌
   - Don't use special characters (except _ and -)
   - Don't use spaces in filenames
   - Don't exceed 100 characters total
   - Don't use Chinese characters in filenames
   - Don't skip version numbers

### Quick Reference Card

```
Standard: [CLIENT]_[PHASE]_[TYPE]_[DESC]_v[VERSION]_[DATE].[EXT]
Example:  ABC_01_REQ_UserLogin_v1.0_20250524.docx

CLIENT: 3-4 letters (ABC)
PHASE: 01-07
TYPE: REQ, DES, API, etc.
DESC: CamelCase
VERSION: v1.0
DATE: YYYYMMDD
```

### Implementation Checklist
- [ ] Train all team members on conventions
- [ ] Create client code registry
- [ ] Set up file templates
- [ ] Configure auto-naming tools
- [ ] Regular compliance audits

---

## 📋 中文版本

### 目的
为项目生命周期中的所有文档建立一致、专业的命名规范，确保跨文化团队能够轻松识别、排序和版本跟踪。

### 核心原则
1. **简单性** - 易于理解和应用
2. **一致性** - 所有阶段使用相同模式
3. **可扩展性** - 适用于任何项目规模
4. **跨平台** - 兼容所有系统
5. **可搜索** - 易于查找和筛选

### 标准命名格式

```
[客户代码]_[阶段]_[类型]_[描述]_v[版本]_[日期].[扩展名]
```

#### 组件定义

| 组件 | 格式 | 示例 | 说明 |
|------|------|------|------|
| 客户代码 | 3-4个字母 | ABC, TECH | 客户代码（大写） |
| 阶段 | 2位数字 | 01, 02, 03 | 开发阶段编号 |
| 类型 | 标准代码 | REQ, DES, DOC | 文档类型（见下表） |
| 描述 | 驼峰命名 | UserLogin, PaymentFlow | 简要描述（无空格） |
| 版本 | v1.0 | v1.0, v2.1 | 主版本.次版本 |
| 日期 | YYYYMMDD | 20250524 | 创建/修订日期 |
| 扩展名 | 标准 | pdf, docx, md | 文件扩展名 |

### 文档类型代码

#### 阶段 01 - 分析
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| REQ | 需求文档 | ABC_01_REQ_UserStories_v1.0_20250524.docx |
| FLO | 工作流程 | ABC_01_FLO_OrderProcess_v1.0_20250524.pdf |
| JRN | 用户旅程 | ABC_01_JRN_CustomerPath_v1.0_20250524.pdf |
| MAT | 矩阵/映射 | ABC_01_MAT_RolePermission_v1.0_20250524.xlsx |
| VAL | 验证文档 | ABC_01_VAL_ClientApproval_v1.0_20250524.pdf |

#### 阶段 02 - 报价
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| QTT | 技术报价 | ABC_02_QTT_TechnicalAnalysis_v1.0_20250524.xlsx |
| QTF | 功能报价 | ABC_02_QTF_BusinessModules_v1.0_20250524.xlsx |
| QTC | 客户报价 | ABC_02_QTC_FinalQuotation_v1.0_20250524.pdf |

#### 阶段 03 - 设计
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| SIT | 网站地图 | ABC_03_SIT_Navigation_v1.0_20250524.pdf |
| COM | 组件库 | ABC_03_COM_UILibrary_v1.0_20250524.fig |
| DES | 设计文件 | ABC_03_DES_Homepage_v1.0_20250524.fig |
| VIC | VI合规 | ABC_03_VIC_BrandCheck_v1.0_20250524.pdf |

#### 阶段 04 - 开发
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| API | API文档 | ABC_04_API_UserService_v1.0_20250524.md |
| ARC | 架构设计 | ABC_04_ARC_SystemDesign_v1.0_20250524.pdf |
| DBM | 数据库模型 | ABC_04_DBM_Schema_v1.0_20250524.sql |
| CFG | 配置文件 | ABC_04_CFG_Environment_v1.0_20250524.yaml |

#### 阶段 05 - 测试
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| TSC | 测试用例 | ABC_05_TSC_UserModule_v1.0_20250524.xlsx |
| TSR | 测试报告 | ABC_05_TSR_RegressionTest_v1.0_20250524.pdf |
| BUG | 缺陷报告 | ABC_05_BUG_CriticalIssues_v1.0_20250524.xlsx |

#### 阶段 06 - 部署
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| DEP | 部署指南 | ABC_06_DEP_ProductionGuide_v1.0_20250524.md |
| REL | 发布说明 | ABC_06_REL_Version2_v1.0_20250524.md |
| RBK | 回滚计划 | ABC_06_RBK_Emergency_v1.0_20250524.pdf |

#### 阶段 07 - 文档
| 代码 | 文档类型 | 示例 |
|------|----------|------|
| USR | 用户手册 | ABC_07_USR_AdminGuide_v1.0_20250524.pdf |
| TEC | 技术文档 | ABC_07_TEC_APIReference_v1.0_20250524.md |
| MTG | 会议记录 | ABC_07_MTG_Kickoff_v1.0_20250524.docx |

### 特殊情况

#### 1. 草稿文档
在版本前添加"_DRAFT"：
```
ABC_01_REQ_UserStories_DRAFT_v0.1_20250524.docx
```

#### 2. 双语文档
添加语言代码：
```
ABC_07_USR_AdminGuide_EN_v1.0_20250524.pdf
ABC_07_USR_AdminGuide_CN_v1.0_20250524.pdf
```

#### 3. 客户交付物
添加"_FINAL"：
```
ABC_02_QTC_FinalQuotation_FINAL_v1.0_20250524.pdf
```

#### 4. 内部工作文档
添加"_INT"：
```
ABC_01_REQ_Analysis_INT_v1.0_20250524.docx
```

### 版本编号规则

| 版本 | 使用时机 | 示例 |
|------|----------|------|
| v0.x | 草稿版本 | v0.1, v0.2 |
| v1.0 | 首次正式发布 | v1.0 |
| v1.x | 小更新 | v1.1, v1.2 |
| v2.0 | 重大修订 | v2.0 |

### 最佳实践

1. **应该做** ✅
   - 客户代码和类型代码使用大写
   - 描述使用驼峰命名（无空格/下划线）
   - 始终包含版本号
   - 保持描述简短（最多20个字符）
   - 修订时更新日期

2. **不应该做** ❌
   - 不使用特殊字符（除了_和-）
   - 文件名中不使用空格
   - 总长度不超过100个字符
   - 文件名中不使用中文字符
   - 不跳过版本号

### 快速参考卡

```
标准：[客户代码]_[阶段]_[类型]_[描述]_v[版本]_[日期].[扩展名]
示例：ABC_01_REQ_UserLogin_v1.0_20250524.docx

客户代码：3-4个字母（ABC）
阶段：01-07
类型：REQ, DES, API等
描述：驼峰命名
版本：v1.0
日期：YYYYMMDD
```

### 实施清单
- [ ] 培训所有团队成员使用规范
- [ ] 创建客户代码注册表
- [ ] 设置文件模板
- [ ] 配置自动命名工具
- [ ] 定期合规审计