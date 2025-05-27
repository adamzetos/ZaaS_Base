# Figma-UXPilot Integration Standards & Workflow
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**  
**Purpose: Streamline UXPilot → Figma → Code workflow**

## 📋 Overview

This document establishes the complete workflow from UXPilot design generation to Figma organization and developer handoff. Since UXPilot generates most design elements, Figma's role is to import, organize, refine, and prepare for development.

## 🔄 Complete Workflow Overview

```
1. UXPilot (Generation) → 2. Figma (Organization) → 3. Code (Implementation)
     ↓                           ↓                         ↓
   AI Design                Import & Refine          Dev Handoff
   Components               Standardize              Clean Assets
   Layouts                  Document                 Design Tokens
   Screens                  Version Control          Specifications
```

---

## 🚀 Phase 1: UXPilot Design Generation

### What UXPilot Delivers:
1. **Component Library** - All UI components with states
2. **Layout Templates** - Standard page structures  
3. **Screen Designs** - Complete pages
4. **User Flows** - Connected journeys
5. **Responsive Versions** - Mobile adaptations

### Pre-Import Checklist:
- [ ] Component library generated and screenshotted
- [ ] All required screens designed
- [ ] Responsive versions created
- [ ] Edge cases covered
- [ ] Consistency verified

---

## 📥 Phase 2: UXPilot to Figma Import Process

### Import Methods:

#### Method 1: Copy Frame (Recommended)
```
1. Select frame in UXPilot
2. Copy (Cmd/Ctrl + C)
3. Paste in Figma (Cmd/Ctrl + V)
4. Maintains layers and structure
```

#### Method 2: Plugin Import
```
1. Use "UXPilot to Figma" plugin
2. Batch import multiple screens
3. Auto-organizes by type
```

### Import Organization Structure:
```
📄 [CUSTOMER]_[PROJECT]_Import_Raw/
├── 📑 UXPilot_Components_Raw
├── 📑 UXPilot_Desktop_Raw  
├── 📑 UXPilot_Mobile_Raw
├── 📑 UXPilot_Flows_Raw
└── 📑 Import_Log
```

### Import Log Template:
```
Import Date: [DATE]
UXPilot Version: [VERSION]
Screens Imported: [COUNT]
Components Imported: [COUNT]
Issues Found: [LIST]
```

---

## 🔧 Phase 3: Figma Organization & Refinement

### Step 1: Component Extraction & Standardization

#### From Raw Import → Design System:
```
📄 [CUSTOMER]_Design_System/
├── 📑 1. Cover & Import Info
│   ├── UXPilot Import Date
│   ├── Components Processed
│   └── Refinement Log
├── 📑 2. Extracted Components
│   ├── From UXPilot (Original)
│   └── Figma Refined (Final)
├── 📑 3. Component Library
│   ├── Buttons (All variants)
│   ├── Forms (All elements)
│   ├── Cards (All types)
│   └── [Other categories]
```

#### Component Processing Workflow:
1. **Extract** - Copy component from UXPilot import
2. **Refine** - Clean up any AI generation artifacts
3. **Standardize** - Apply proper naming convention
4. **Convert** - Turn into Figma component
5. **Document** - Add usage notes

#### Component Conversion Checklist:
- [ ] Remove any AI generation artifacts
- [ ] Apply Auto Layout
- [ ] Set up component properties
- [ ] Create all variants
- [ ] Name following convention
- [ ] Add description
- [ ] Test responsiveness

### Step 2: Screen Organization

#### From Import → Organized Designs:
```
📄 [CUSTOMER]_UI_Designs/
├── 📑 0. Import Reference
│   └── Links to raw import file
├── 📑 1. Processed Screens
│   ├── Desktop (from UXPilot)
│   └── Mobile (from UXPilot)
├── 📑 2. Refined Screens
│   ├── Component instances replaced
│   └── Spacing standardized
├── 📑 3. Final Screens
│   └── Ready for handoff
```

#### Screen Processing Steps:
1. **Copy** from import file
2. **Replace** elements with component instances
3. **Align** to grid system
4. **Refine** spacing and alignment
5. **Annotate** for developers
6. **Link** components to library

### Step 3: Style Extraction & Tokens

#### Create from UXPilot Designs:
```
📄 [CUSTOMER]_Design_Tokens/
├── 📑 Colors (extracted from UXPilot)
├── 📑 Typography (standardized)
├── 📑 Spacing (refined to grid)
├── 📑 Effects (shadows, borders)
└── 📑 Export Settings
```

---

## 📊 Figma File Structure (Post-UXPilot)

### Complete Project Structure:
```
🏢 [CUSTOMER]/
├── 📄 [PROJECT]_Import_Raw ← UXPilot designs
├── 📄 [PROJECT]_Design_System ← Extracted & refined
├── 📄 [PROJECT]_UI_Designs ← Organized screens
├── 📄 [PROJECT]_Prototypes ← Interactive flows
├── 📄 [PROJECT]_Dev_Handoff ← Ready for code
└── 📁 Archive/
    └── Previous versions
```

### File Relationships:
```
Import_Raw ──extracts──> Design_System
     ↓                         ↓
     └──────references─────────┘
                ↓
          UI_Designs ──links──> Prototypes
                ↓
          Dev_Handoff
```

---

## 🎯 Component Naming After Import

### Standardization Rules:
```
UXPilot Generated → Figma Standard

Examples:
"primary button large" → Button / Primary / Large / Default
"input field error" → Form / Input / Text / Error  
"nav header sticky" → Navigation / Header / Desktop / Sticky
"card with image" → Card / Content / With Image / Default
```

### Batch Renaming Process:
1. Select similar components
2. Use Figma rename plugin
3. Apply naming convention
4. Update all instances

---

## 🔄 Version Control with UXPilot Updates

### When UXPilot Designs Change:
```
1. New Import File:
   [PROJECT]_Import_Raw_v2_[DATE]

2. Comparison Page:
   - Old version frames
   - New version frames
   - Change annotations

3. Update Process:
   - Identify changed components
   - Update design system
   - Propagate to screens
   - Document changes
```

### Change Log Template:
```
Version: [X.X]
Date: [DATE]
UXPilot Changes:
- [Component]: [What changed]
- [Screen]: [What changed]
Figma Updates:
- [What was updated]
- [Impact on other screens]
```

---

## 💻 Developer Handoff Preparation

### From Figma to Code:

#### 1. Component Specifications:
```
📄 [PROJECT]_Dev_Handoff/
├── 📑 Component Specs
│   ├── Measurements (from Figma)
│   ├── States (from UXPilot)
│   ├── Behaviors (documented)
│   └── Code snippets
```

#### 2. Design Tokens Export:
```json
{
  "colors": {
    "primary": "#[FROM_UXPILOT]",
    "secondary": "#[FROM_UXPILOT]"
  },
  "spacing": {
    "unit": 8,
    "scale": [8, 16, 24, 32, 48]
  },
  "typography": {
    "fontFamily": "[FROM_UXPILOT]",
    "scale": [...]
  }
}
```

#### 3. Asset Export:
- Icons: SVG (cleaned from UXPilot)
- Images: Optimized versions
- Components: Code-ready specs

---

## 📋 UXPilot → Figma Checklist

### For Designers:

#### Import Phase:
- [ ] Copy all UXPilot frames
- [ ] Organize into import file
- [ ] Document what was imported
- [ ] Check for missing elements

#### Processing Phase:
- [ ] Extract all unique components
- [ ] Standardize naming
- [ ] Create Figma components
- [ ] Build variants
- [ ] Apply Auto Layout
- [ ] Set up constraints

#### Refinement Phase:
- [ ] Replace with component instances
- [ ] Align to grid
- [ ] Fix any AI artifacts
- [ ] Add micro-interactions
- [ ] Document behaviors

#### Handoff Phase:
- [ ] Export design tokens
- [ ] Prepare assets
- [ ] Write specifications
- [ ] Create prototype
- [ ] Developer review

---

## 🚨 Common UXPilot → Figma Issues

### Issue 1: Inconsistent Spacing
**Problem**: AI might generate slightly different spacing
**Solution**: Standardize to 8px grid in Figma

### Issue 2: Text Not in Styles
**Problem**: UXPilot text as plain layers
**Solution**: Create text styles, batch apply

### Issue 3: Missing Component States
**Problem**: Not all states generated
**Solution**: Create missing states in Figma

### Issue 4: Color Variations
**Problem**: Slight color differences
**Solution**: Create color styles, replace all

### Issue 5: Non-standard Sizes
**Problem**: Components not matching grid
**Solution**: Resize to standard dimensions

---

## 🎨 Quality Standards

### Component Quality:
- ✅ All states present
- ✅ Auto Layout applied
- ✅ Properly constrained
- ✅ Named correctly
- ✅ Variants set up

### Screen Quality:
- ✅ Uses component instances
- ✅ Follows grid system
- ✅ Properly aligned
- ✅ Responsive behavior set
- ✅ Annotated for dev

### Handoff Quality:
- ✅ All specs documented
- ✅ Assets exportable
- ✅ Tokens extracted
- ✅ Prototype functional
- ✅ Code-ready

---

## 📊 Time Estimates

### Per Project:
- UXPilot Generation: 4-8 hours
- Import & Organization: 2-4 hours
- Component Refinement: 8-16 hours
- Screen Processing: 8-16 hours
- Handoff Preparation: 4-8 hours
**Total: 26-52 hours** (vs 80-120 traditional)

### Time Savings:
- 60-70% faster than traditional design
- Focus on refinement, not creation
- Consistent quality output

---

**Document Version:** 1.0  
**Workflow Status**: Optimized for UXPilot integration  
**Next Review**: After 3 project implementations

---

# Figma-UXPilot 集成标准与工作流程
**分类：ZETOS-机密 ▲**  
**创建日期：2025-05-24**  
**版本：1.0**  
**目的：优化 UXPilot → Figma → 代码工作流程**

## 📋 概述

本文档建立了从 UXPilot 设计生成到 Figma 组织再到开发交付的完整工作流程。由于 UXPilot 生成大部分设计元素，Figma 的角色是导入、组织、优化和准备开发交付。

## 🔄 完整工作流程概览

```
1. UXPilot（生成）→ 2. Figma（组织）→ 3. 代码（实现）
     ↓                    ↓                  ↓
   AI 设计            导入与优化          开发交付
   组件               标准化              清洁资产
   布局               文档化              设计令牌
   界面               版本控制            规格说明
```

---

## 🚀 第一阶段：UXPilot 设计生成

### UXPilot 交付内容：
1. **组件库** - 所有 UI 组件及状态
2. **布局模板** - 标准页面结构
3. **界面设计** - 完整页面
4. **用户流程** - 连接的用户旅程
5. **响应式版本** - 移动端适配

### 导入前检查清单：
- [ ] 组件库已生成并截图
- [ ] 所有必需界面已设计
- [ ] 响应式版本已创建
- [ ] 边缘情况已覆盖
- [ ] 一致性已验证

---

## 📥 第二阶段：UXPilot 到 Figma 导入流程

### 导入方法：

#### 方法一：复制框架（推荐）
```
1. 在 UXPilot 中选择框架
2. 复制（Cmd/Ctrl + C）
3. 在 Figma 中粘贴（Cmd/Ctrl + V）
4. 保持图层和结构
```

#### 方法二：插件导入
```
1. 使用"UXPilot to Figma"插件
2. 批量导入多个界面
3. 按类型自动组织
```

### 导入组织结构：
```
📄 [客户]_[项目]_Import_Raw/
├── 📑 UXPilot_Components_Raw
├── 📑 UXPilot_Desktop_Raw  
├── 📑 UXPilot_Mobile_Raw
├── 📑 UXPilot_Flows_Raw
└── 📑 Import_Log
```

### 导入日志模板：
```
导入日期：[日期]
UXPilot 版本：[版本]
导入界面数：[数量]
导入组件数：[数量]
发现问题：[列表]
```

---

## 🔧 第三阶段：Figma 组织与优化

### 步骤 1：组件提取与标准化

#### 从原始导入 → 设计系统：
```
📄 [客户]_Design_System/
├── 📑 1. 封面与导入信息
│   ├── UXPilot 导入日期
│   ├── 处理的组件
│   └── 优化日志
├── 📑 2. 提取的组件
│   ├── 来自 UXPilot（原始）
│   └── Figma 优化（最终）
├── 📑 3. 组件库
│   ├── 按钮（所有变体）
│   ├── 表单（所有元素）
│   ├── 卡片（所有类型）
│   └── [其他类别]
```

#### 组件处理工作流：
1. **提取** - 从 UXPilot 导入复制组件
2. **优化** - 清理 AI 生成的瑕疵
3. **标准化** - 应用正确的命名规范
4. **转换** - 转为 Figma 组件
5. **文档** - 添加使用说明

#### 组件转换检查清单：
- [ ] 移除 AI 生成瑕疵
- [ ] 应用自动布局
- [ ] 设置组件属性
- [ ] 创建所有变体
- [ ] 按规范命名
- [ ] 添加描述
- [ ] 测试响应性

### 步骤 2：界面组织

#### 从导入 → 组织设计：
```
📄 [客户]_UI_Designs/
├── 📑 0. 导入参考
│   └── 链接到原始导入文件
├── 📑 1. 处理的界面
│   ├── 桌面端（来自 UXPilot）
│   └── 移动端（来自 UXPilot）
├── 📑 2. 优化的界面
│   ├── 组件实例已替换
│   └── 间距已标准化
├── 📑 3. 最终界面
│   └── 准备交付
```

#### 界面处理步骤：
1. **复制** 从导入文件
2. **替换** 元素为组件实例
3. **对齐** 到网格系统
4. **优化** 间距和对齐
5. **标注** 为开发者
6. **链接** 组件到库

### 步骤 3：样式提取与令牌

#### 从 UXPilot 设计创建：
```
📄 [客户]_Design_Tokens/
├── 📑 颜色（从 UXPilot 提取）
├── 📑 字体（标准化）
├── 📑 间距（优化到网格）
├── 📑 效果（阴影、边框）
└── 📑 导出设置
```

---

## 📊 Figma 文件结构（UXPilot 后）

### 完整项目结构：
```
🏢 [客户]/
├── 📄 [项目]_Import_Raw ← UXPilot 设计
├── 📄 [项目]_Design_System ← 提取并优化
├── 📄 [项目]_UI_Designs ← 组织的界面
├── 📄 [项目]_Prototypes ← 交互流程
├── 📄 [项目]_Dev_Handoff ← 准备编码
└── 📁 Archive/
    └── 之前版本
```

### 文件关系：
```
Import_Raw ──提取──> Design_System
     ↓                    ↓
     └──────引用──────────┘
                ↓
          UI_Designs ──链接──> Prototypes
                ↓
          Dev_Handoff
```

---

## 🎯 导入后的组件命名

### 标准化规则：
```
UXPilot 生成 → Figma 标准

示例：
"primary button large" → Button / Primary / Large / Default
"input field error" → Form / Input / Text / Error  
"nav header sticky" → Navigation / Header / Desktop / Sticky
"card with image" → Card / Content / With Image / Default
```

### 批量重命名流程：
1. 选择相似组件
2. 使用 Figma 重命名插件
3. 应用命名规范
4. 更新所有实例

---

## 🔄 UXPilot 更新的版本控制

### 当 UXPilot 设计变更时：
```
1. 新导入文件：
   [项目]_Import_Raw_v2_[日期]

2. 比较页面：
   - 旧版本框架
   - 新版本框架
   - 变更标注

3. 更新流程：
   - 识别变更的组件
   - 更新设计系统
   - 传播到界面
   - 记录变更
```

### 变更日志模板：
```
版本：[X.X]
日期：[日期]
UXPilot 变更：
- [组件]：[变更内容]
- [界面]：[变更内容]
Figma 更新：
- [更新内容]
- [对其他界面的影响]
```

---

## 💻 开发交付准备

### 从 Figma 到代码：

#### 1. 组件规格：
```
📄 [项目]_Dev_Handoff/
├── 📑 组件规格
│   ├── 尺寸（来自 Figma）
│   ├── 状态（来自 UXPilot）
│   ├── 行为（已记录）
│   └── 代码片段
```

#### 2. 设计令牌导出：
```json
{
  "colors": {
    "primary": "#[来自_UXPILOT]",
    "secondary": "#[来自_UXPILOT]"
  },
  "spacing": {
    "unit": 8,
    "scale": [8, 16, 24, 32, 48]
  },
  "typography": {
    "fontFamily": "[来自_UXPILOT]",
    "scale": [...]
  }
}
```

#### 3. 资产导出：
- 图标：SVG（从 UXPilot 清理）
- 图片：优化版本
- 组件：代码就绪规格

---

## 📋 UXPilot → Figma 检查清单

### 设计师检查清单：

#### 导入阶段：
- [ ] 复制所有 UXPilot 框架
- [ ] 组织到导入文件
- [ ] 记录导入内容
- [ ] 检查缺失元素

#### 处理阶段：
- [ ] 提取所有独特组件
- [ ] 标准化命名
- [ ] 创建 Figma 组件
- [ ] 构建变体
- [ ] 应用自动布局
- [ ] 设置约束

#### 优化阶段：
- [ ] 替换为组件实例
- [ ] 对齐到网格
- [ ] 修复 AI 瑕疵
- [ ] 添加微交互
- [ ] 记录行为

#### 交付阶段：
- [ ] 导出设计令牌
- [ ] 准备资产
- [ ] 编写规格
- [ ] 创建原型
- [ ] 开发者评审

---

## 🚨 常见 UXPilot → Figma 问题

### 问题 1：间距不一致
**问题**：AI 可能生成略有不同的间距
**解决**：在 Figma 中标准化为 8px 网格

### 问题 2：文本不在样式中
**问题**：UXPilot 文本为普通图层
**解决**：创建文本样式，批量应用

### 问题 3：缺失组件状态
**问题**：未生成所有状态
**解决**：在 Figma 中创建缺失状态

### 问题 4：颜色变化
**问题**：轻微的颜色差异
**解决**：创建颜色样式，全部替换

### 问题 5：非标准尺寸
**问题**：组件不符合网格
**解决**：调整为标准尺寸

---

## 🎨 质量标准

### 组件质量：
- ✅ 所有状态齐全
- ✅ 应用自动布局
- ✅ 正确约束
- ✅ 正确命名
- ✅ 设置变体

### 界面质量：
- ✅ 使用组件实例
- ✅ 遵循网格系统
- ✅ 正确对齐
- ✅ 设置响应行为
- ✅ 为开发标注

### 交付质量：
- ✅ 所有规格已记录
- ✅ 资产可导出
- ✅ 令牌已提取
- ✅ 原型功能正常
- ✅ 代码就绪

---

## 📊 时间估算

### 每个项目：
- UXPilot 生成：4-8 小时
- 导入与组织：2-4 小时
- 组件优化：8-16 小时
- 界面处理：8-16 小时
- 交付准备：4-8 小时
**总计：26-52 小时**（对比传统 80-120 小时）

### 时间节省：
- 比传统设计快 60-70%
- 专注于优化，而非创建
- 一致的质量输出

---

**文档版本：** 1.0  
**工作流状态**：针对 UXPilot 集成优化  
**下次评审**：完成 3 个项目实施后