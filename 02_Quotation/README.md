# 02_Quotation - Project Quotation Phase / 项目报价阶段
**Classification: ZETOS-CONFIDENTIAL ▲**

## 📋 English Version

### Purpose
This directory contains all quotation-related documents using the Zack Quotation Methodology - a sophisticated feature-based calibration system that ensures accurate, consistent project estimation.

### Directory Structure
```
02_Quotation/
├── AI_Instructions/      # AI prompts for quotation automation
│   ├── Zack_Preform_Prompt.md    # Technical analysis & calibration
│   ├── Zara_Quote_Prompt.md      # Business module translation
│   └── Official_Quote_Prompt.md  # Professional quote generation
├── Project_Templates/    # Quote templates and calculators
│   ├── Zack_CSV_Template.csv     # Calibration-based calculator
│   ├── Zack_CSV_Template_Guide.md # CSV usage instructions
│   └── ZaaS_Quote_Template.html  # Professional HTML template
├── Technical_Analysis/   # Zack tool outputs - technical modules & man-days
├── Functional_Analysis/  # Zara tool outputs - business modules & pricing
├── Pricing/             # Cost calculations using €400/day (no buffer)
└── Quotes/              # Final quotations for clients
```

### Zack Methodology Overview
The Zack system uses:
- **18 Calibration Categories** (CAL-STAT, CAL-AUTH, etc.)
- **9 Development Roles** (SA, PM, UX, FE, BE, iOS, Android, QA, DevOps)
- **Feature-Based Estimation** with pre-defined baseline hours
- **Complexity Multipliers** (PCFa) for business context
- **Standard Rate**: €400/day with NO buffer
- **Up-Rounding Rule**: Hours ÷ 8 rounded UP to full days

### Key Deliverables
- ✅ Feature calibration mapping
- ✅ Role-based effort allocation
- ✅ Man-days estimation with up-rounding
- ✅ Business module categorization
- ✅ Core vs optional module separation
- ✅ Customer-facing quotation document
- ✅ Transparent pricing breakdown

### Workflow
1. **Feature Mapping**
   - Map project features to 18 CAL-* categories
   - Apply Feature Factors (FeFa) for complexity
   
2. **Technical Analysis (Zack)**
   - Calculate baseline hours per role
   - Apply PCFa multipliers
   - Convert hours to days (CEILING)
   - Generate technical quotation
   
3. **Functional Analysis (Zara)**
   - Convert technical modules to business modules
   - Create customer-perspective pricing
   - Separate core and optional features

4. **Professional Quotation**
   - Use Official_Quote_Prompt for executive formatting
   - Include Zack calculation transparency
   - Present investment options with ROI

### Responsible Roles
- **Primary**: SA + Sales Team
- **Validation**: Client + Sales
- **Review**: Project Manager (PM)

---

## 📋 中文版本

### 目的
本目录包含使用 Zack 报价方法的所有报价相关文档 - 这是一个复杂的基于功能的校准系统，确保准确、一致的项目估算。

### 目录结构
```
02_Quotation/
├── AI_Instructions/      # 报价自动化的AI提示
│   ├── Zack_Preform_Prompt.md    # 技术分析和校准
│   ├── Zara_Quote_Prompt.md      # 业务模块转换
│   └── Official_Quote_Prompt.md  # 专业报价生成
├── Project_Templates/    # 报价模板和计算器
│   ├── Zack_CSV_Template.csv     # 基于校准的计算器
│   ├── Zack_CSV_Template_Guide.md # CSV使用说明
│   └── ZaaS_Quote_Template.html  # 专业HTML模板
├── Technical_Analysis/   # Zack工具输出 - 技术模块和人天
├── Functional_Analysis/  # Zara工具输出 - 业务模块和定价
├── Pricing/             # 使用€400/天的成本计算（无缓冲）
└── Quotes/              # 客户的最终报价
```

### Zack方法概述
Zack系统使用：
- **18个校准类别**（CAL-STAT、CAL-AUTH等）
- **9个开发角色**（SA、PM、UX、FE、BE、iOS、Android、QA、DevOps）
- **基于功能的估算**，具有预定义的基准小时数
- **复杂性乘数**（PCFa）用于业务上下文
- **标准费率**：€400/天，无缓冲
- **向上舍入规则**：小时÷8向上舍入到整天

### 主要交付物
- ✅ 功能校准映射
- ✅ 基于角色的工作量分配
- ✅ 带向上舍入的人天估算
- ✅ 业务模块分类
- ✅ 核心与可选模块分离
- ✅ 面向客户的报价文档
- ✅ 透明的定价细分

### 工作流程
1. **功能映射**
   - 将项目功能映射到18个CAL-*类别
   - 应用功能因子（FeFa）以获得复杂性
   
2. **技术分析（Zack）**
   - 计算每个角色的基准小时数
   - 应用PCFa乘数
   - 将小时转换为天（CEILING）
   - 生成技术报价
   
3. **功能分析（Zara）**
   - 将技术模块转换为业务模块
   - 创建客户视角定价
   - 分离核心和可选功能

4. **专业报价**
   - 使用Official_Quote_Prompt进行高管格式化
   - 包括Zack计算透明度
   - 展示投资选项和投资回报率

### 负责角色
- **主要负责**: SA + 销售团队
- **验证**: 客户 + 销售
- **审核**: 项目经理 (PM)