# Design-to-Development Handoff Procedures
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**  
**Purpose: Standardize design handoff process for seamless development**

## 📋 Overview

This document establishes standardized procedures for handing off designs from the UX/UI team to development teams. It ensures all necessary information, assets, and specifications are properly documented and communicated for efficient implementation.

## 🎯 Objectives

1. **Zero Ambiguity**: Developers have all information needed without guesswork
2. **Asset Ready**: All design assets are export-ready and properly formatted
3. **Specification Complete**: Every interaction and state is documented
4. **Platform Optimized**: Handoff adapted for Bubble, Webflow, or React
5. **Feedback Loop**: Clear process for questions and clarifications

---

## 📊 Handoff Process Overview

```
Design Complete → Pre-Handoff Review → Asset Preparation → Documentation → Handoff Meeting → Development Support
      ↓                    ↓                  ↓                ↓                ↓                  ↓
   QA Check          Completeness        Export Ready     Specs Clear    Knowledge Transfer    Ongoing
```

---

## ✅ Pre-Handoff Checklist

### Design Completeness
- [ ] All screens designed (desktop + mobile)
- [ ] All component states included
- [ ] Edge cases covered
- [ ] Error states designed
- [ ] Loading states included
- [ ] Empty states designed
- [ ] Micro-interactions defined
- [ ] Responsive behavior documented

### Technical Validation
- [ ] Designs follow platform constraints
- [ ] Performance considerations addressed
- [ ] Accessibility standards met (WCAG AA)
- [ ] Browser compatibility noted
- [ ] Touch targets appropriate (44px minimum)
- [ ] Text remains readable at all sizes

### Asset Readiness
- [ ] All images optimized
- [ ] Icons in SVG format
- [ ] Fonts licensed for web use
- [ ] Colors in correct format
- [ ] Components properly named
- [ ] Layers organized and labeled

---

## 🎨 Platform-Specific Requirements

### For Bubble Projects
```
Handoff Package:
├── 📁 Design Files/
│   ├── Figma file (view access)
│   └── Component library reference
├── 📁 Assets/
│   ├── Images (PNG/WebP, max 500KB)
│   ├── Icons (SVG or Bubble icon set)
│   └── Custom fonts (if any)
├── 📁 Specifications/
│   ├── Responsive breakpoints
│   ├── Repeating group layouts
│   └── Workflow diagrams
└── 📄 Bubble_Implementation_Guide.pdf
```

**Special Considerations:**
- Design with Bubble's constraints in mind
- Use Bubble-friendly layouts (avoid complex overlaps)
- Specify repeating group behaviors
- Note conditional visibility rules
- Define responsive collapse behavior

### For Webflow Projects
```
Handoff Package:
├── 📁 Design Files/
│   ├── Figma file (edit access)
│   └── Style guide
├── 📁 Assets/
│   ├── Images (WebP preferred, with fallbacks)
│   ├── Icons (SVG)
│   ├── Lottie animations (if any)
│   └── Videos (MP4, optimized)
├── 📁 Specifications/
│   ├── CSS class naming structure
│   ├── Interaction specifications
│   └── CMS structure (if applicable)
└── 📄 Webflow_Build_Guide.pdf
```

**Special Considerations:**
- Provide class naming suggestions
- Detail hover/interaction animations
- Specify CMS collection structures
- Define SEO requirements
- Note custom code needs

### For React Projects
```
Handoff Package:
├── 📁 Design Files/
│   ├── Figma file (with Dev Mode)
│   └── Component architecture diagram
├── 📁 Assets/
│   ├── Images (multiple resolutions)
│   ├── Icons (SVG components)
│   └── Design tokens (JSON)
├── 📁 Specifications/
│   ├── Component prop documentation
│   ├── State management requirements
│   ├── API integration points
│   └── Animation specifications
└── 📄 React_Development_Specs.pdf
```

**Special Considerations:**
- Component-based thinking
- Props and state definitions
- Reusable component identification
- Performance optimization notes
- Accessibility implementation details

---

## 📐 Design Specifications Document

### Required Sections:

#### 1. Project Overview
```markdown
## Project: [Customer Name - Project Name]
**Version:** [X.X]
**Date:** [Handoff Date]
**Designer:** [Name]
**Developer:** [Name]
**Platform:** [Bubble/Webflow/React]

### Project Summary
[Brief description of the project scope and goals]

### Key Features
1. [Feature 1]
2. [Feature 2]
3. [Feature 3]
```

#### 2. Design System Reference
```markdown
## Design System

### Colors
| Name | HEX | RGB | Usage |
|------|-----|-----|--------|
| Primary | #006BA6 | 0,107,166 | CTAs, links |
| Secondary | #FF5E00 | 255,94,0 | Accents |
| [etc...] |

### Typography
| Style | Font | Size | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|--------|
| H1 | Inter | 32px | 600 | 1.2 | Page titles |
| Body | Inter | 16px | 400 | 1.5 | Content |
| [etc...] |

### Spacing
Base unit: 8px
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

#### 3. Component Specifications
```markdown
## Components

### Button
**Variants:** Primary, Secondary, Tertiary
**Sizes:** Small (32px), Medium (40px), Large (48px)
**States:** Default, Hover, Active, Disabled, Loading

**Behavior:**
- Hover: Darken 10%, scale(1.02)
- Active: Darken 20%, scale(0.98)
- Disabled: Opacity 0.5, cursor not-allowed
- Loading: Show spinner, disable click

**Implementation Notes:**
[Platform-specific implementation guidance]
```

#### 4. Page Specifications
```markdown
## Page: [Page Name]

### Desktop Layout (1440px)
[Screenshot with annotations]

**Grid:** 12 columns, 24px gutter
**Container:** Max-width 1200px, centered
**Sections:**
1. Header: Sticky, 64px height
2. Hero: 600px height, background image
3. Content: 3-column grid
4. Footer: 4-column layout

### Mobile Layout (375px)
[Screenshot with annotations]

**Changes from Desktop:**
- Single column layout
- Hamburger menu
- Stack all content vertically
- Increase touch targets
```

#### 5. Interactions & Animations
```markdown
## Interactions

### Page Transitions
- Type: Fade
- Duration: 300ms
- Easing: ease-out

### Hover Effects
| Element | Effect | Duration |
|---------|--------|----------|
| Button | Darken + lift | 200ms |
| Card | Shadow increase | 200ms |
| Link | Underline | 150ms |

### Micro-interactions
1. Form validation: Real-time with 500ms debounce
2. Loading states: Skeleton screens for content
3. Success feedback: Toast notification, top-right
```

#### 6. Responsive Behavior
```markdown
## Responsive Breakpoints

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

### Scaling Rules
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|----------|
| Font sizes | -2px | Base | Base |
| Spacing | 0.75x | 0.875x | 1x |
| Images | 100% width | 50% | Fixed |
```

---

## 📦 Asset Export Guidelines

### Image Assets
```
Format Selection:
- Photos: WebP (with JPEG fallback)
- Graphics: SVG (when possible)
- Icons: SVG
- Complex illustrations: PNG

Naming Convention:
[page]-[element]-[variant]@[size].[ext]
Examples:
- home-hero-desktop@2x.webp
- icon-search.svg
- product-card-thumb@1x.jpg

Size Guidelines:
- Hero images: Max 1920px width
- Content images: Max 800px width
- Thumbnails: 400px width
- Icons: 24px base size
```

### Icon Library
```
Organization:
/icons/
  /system/     (UI icons)
  /social/     (Social media icons)
  /custom/     (Project-specific icons)

Requirements:
- SVG format
- Consistent 24px viewBox
- Single color (currentColor)
- Optimized (SVGO)
```

### Design Tokens
```json
{
  "color": {
    "primary": {
      "value": "#006BA6",
      "type": "color"
    },
    "text": {
      "primary": {
        "value": "#1F2937",
        "type": "color"
      }
    }
  },
  "spacing": {
    "xs": {
      "value": "4px",
      "type": "spacing"
    }
  },
  "typography": {
    "heading": {
      "h1": {
        "fontSize": "32px",
        "fontWeight": "600",
        "lineHeight": "1.2"
      }
    }
  }
}
```

---

## 🤝 Handoff Meeting Agenda

### Duration: 60-90 minutes

#### 1. Project Overview (10 min)
- Business goals
- User needs
- Success metrics
- Timeline

#### 2. Design Walkthrough (20 min)
- User flows
- Key screens
- Interactions
- Edge cases

#### 3. Technical Review (20 min)
- Component architecture
- State management
- API requirements
- Third-party integrations

#### 4. Asset Review (10 min)
- File organization
- Export settings
- Naming conventions
- Access permissions

#### 5. Q&A (20 min)
- Developer questions
- Clarifications
- Potential challenges
- Alternative approaches

#### 6. Next Steps (10 min)
- Development timeline
- Feedback process
- Review checkpoints
- Communication channels

---

## 💬 Communication Protocol

### During Development

#### Daily Updates
```
Channel: Project Slack Channel
Format: 
- ✅ Completed: [What was done]
- 🔄 In Progress: [What's being worked on]
- ❓ Questions: [Any blockers or clarifications needed]
```

#### Design Questions
```
Response Time: Within 4 hours (working hours)
Format:
1. Screenshot of the issue
2. Specific question
3. Proposed solution (if any)
4. Impact on timeline
```

#### Change Requests
```
Process:
1. Document the requested change
2. Assess impact (design + development)
3. Get stakeholder approval
4. Update designs if approved
5. Communicate to all parties
```

### Review Checkpoints

#### Component Review (Week 1)
- Basic components implemented
- Verify against design system
- Test all states
- Mobile responsiveness

#### Page Review (Week 2-3)
- Complete pages
- Interactions working
- Cross-browser testing
- Performance check

#### Final Review (Week 4)
- Full application
- User flows complete
- Bug fixes done
- Ready for QA

---

## 📱 Responsive Documentation

### Mobile-First Approach
```
Start with mobile design, enhance for larger screens

Mobile (320-767px)
├── Single column
├── Stack all elements
├── Simplified navigation
├── Touch-optimized
└── Performance focused

Tablet (768-1023px)
├── 2-column layouts
├── Expanded navigation
├── Larger touch targets
└── More content visible

Desktop (1024px+)
├── Full layouts
├── Hover states
├── Advanced interactions
└── Maximum features
```

### Component Adaptations
| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|----------|
| Navigation | Hamburger | Hamburger | Full menu |
| Cards | Stack | 2-column | 3-column |
| Forms | Full width | Centered | Sidebar |
| Tables | Card view | Scroll | Full table |
| Modals | Full screen | Centered | Centered |

---

## 🔍 Quality Assurance

### Design QA Checklist
Before handoff, verify:
- [ ] All designs match brand guidelines
- [ ] Consistent spacing throughout
- [ ] All states designed
- [ ] Accessibility validated
- [ ] Performance considered
- [ ] Cross-platform tested

### Development QA Support
Designer responsibilities during development:
- Review implemented components
- Verify visual accuracy
- Test interactions
- Validate responsive behavior
- Approve before production

---

## 📚 Handoff Templates

### 1. Email Template
```
Subject: Design Handoff - [Project Name] - Ready for Development

Hi [Developer Name],

The designs for [Project Name] are ready for development handoff.

Handoff Package:
- Figma File: [Link]
- Assets: [Link to folder]
- Documentation: [Link]
- Design Tokens: [Link]

Key Points:
1. [Important consideration 1]
2. [Important consideration 2]
3. [Platform-specific note]

I'm available for a handoff meeting at:
- [Time slot 1]
- [Time slot 2]

Please review the materials and let me know your preferred time.

Best regards,
[Designer Name]
```

### 2. Handoff Checklist Template
```markdown
## Handoff Checklist - [Project Name]
**Date:** [Date]
**Designer:** [Name]
**Developer:** [Name]

### Design Deliverables
- [ ] Figma file shared with proper permissions
- [ ] All screens completed (list attached)
- [ ] Component library documented
- [ ] Design tokens exported
- [ ] Assets exported and organized

### Documentation
- [ ] Design specifications document
- [ ] Interaction documentation
- [ ] Responsive behavior guide
- [ ] Platform-specific notes
- [ ] Known limitations documented

### Assets
- [ ] Images optimized and exported
- [ ] Icons in correct format
- [ ] Fonts included with licenses
- [ ] Design token JSON file
- [ ] Any custom assets

### Meeting
- [ ] Handoff meeting scheduled
- [ ] Agenda sent
- [ ] Questions collected
- [ ] Recording setup (if remote)

### Sign-off
- [ ] Designer: _________________ Date: _______
- [ ] Developer: _______________ Date: _______
- [ ] PM: _____________________ Date: _______
```

---

## 🚀 Best Practices

### Do's
✅ Over-communicate specifications
✅ Provide examples for complex interactions
✅ Include edge cases and error states
✅ Use developer-friendly naming
✅ Keep files organized and labeled
✅ Document your design decisions
✅ Be available for questions

### Don'ts
❌ Assume developers know your intentions
❌ Use design-only terminology
❌ Forget mobile/responsive specs
❌ Leave states undefined
❌ Use non-web fonts without licenses
❌ Change designs after handoff without communication
❌ Skip the handoff meeting

---

## 📈 Success Metrics

### Handoff Quality Indicators
- **< 5** clarification questions per project
- **Zero** missing assets reported
- **100%** of states documented
- **< 2** design revision requests
- **On-time** development delivery

### Continuous Improvement
- Collect developer feedback after each project
- Update templates based on lessons learned
- Share successful patterns with team
- Build component library over time

---

**Document Version:** 1.0  
**Implementation:** Required for all projects  
**Next Review:** After 5 handoffs completed

---

# 设计到开发交接程序
**分类：ZETOS-机密 ▲**  
**创建日期：2025-05-24**  
**版本：1.0**  
**目的：标准化设计交接流程，实现无缝开发**

## 📋 概述

本文档建立了从 UX/UI 团队向开发团队交接设计的标准化程序。确保所有必要的信息、资产和规格都得到适当的记录和沟通，以实现高效的实施。

## 🎯 目标

1. **零歧义**：开发人员拥有所需的所有信息，无需猜测
2. **资产就绪**：所有设计资产都可导出并格式正确
3. **规格完整**：记录每个交互和状态
4. **平台优化**：针对 Bubble、Webflow 或 React 调整交接
5. **反馈循环**：明确的问题和澄清流程

---

## 📊 交接流程概览

```
设计完成 → 交接前审查 → 资产准备 → 文档编制 → 交接会议 → 开发支持
   ↓           ↓           ↓          ↓          ↓          ↓
 质检      完整性检查    导出就绪   规格清晰   知识传递    持续支持
```

---

## ✅ 交接前检查清单

### 设计完整性
- [ ] 所有界面已设计（桌面端 + 移动端）
- [ ] 包含所有组件状态
- [ ] 覆盖边缘情况
- [ ] 设计错误状态
- [ ] 包含加载状态
- [ ] 设计空状态
- [ ] 定义微交互
- [ ] 记录响应式行为

### 技术验证
- [ ] 设计遵循平台约束
- [ ] 已考虑性能因素
- [ ] 符合无障碍标准（WCAG AA）
- [ ] 注明浏览器兼容性
- [ ] 触摸目标适当（最小 44px）
- [ ] 文本在所有尺寸下保持可读

### 资产准备度
- [ ] 所有图片已优化
- [ ] 图标为 SVG 格式
- [ ] 字体已获得网络使用许可
- [ ] 颜色格式正确
- [ ] 组件命名正确
- [ ] 图层已组织和标记

---

## 🎨 平台特定要求

### Bubble 项目
```
交接包：
├── 📁 设计文件/
│   ├── Figma 文件（查看权限）
│   └── 组件库参考
├── 📁 资产/
│   ├── 图片（PNG/WebP，最大 500KB）
│   ├── 图标（SVG 或 Bubble 图标集）
│   └── 自定义字体（如有）
├── 📁 规格/
│   ├── 响应式断点
│   ├── 重复组布局
│   └── 工作流程图
└── 📄 Bubble_实施指南.pdf
```

**特殊考虑：**
- 考虑 Bubble 的约束进行设计
- 使用 Bubble 友好的布局（避免复杂重叠）
- 指定重复组行为
- 注明条件可见性规则
- 定义响应式折叠行为

### Webflow 项目
```
交接包：
├── 📁 设计文件/
│   ├── Figma 文件（编辑权限）
│   └── 样式指南
├── 📁 资产/
│   ├── 图片（首选 WebP，带后备）
│   ├── 图标（SVG）
│   ├── Lottie 动画（如有）
│   └── 视频（MP4，已优化）
├── 📁 规格/
│   ├── CSS 类命名结构
│   ├── 交互规格
│   └── CMS 结构（如适用）
└── 📄 Webflow_构建指南.pdf
```

**特殊考虑：**
- 提供类命名建议
- 详细说明悬停/交互动画
- 指定 CMS 集合结构
- 定义 SEO 要求
- 注明自定义代码需求

### React 项目
```
交接包：
├── 📁 设计文件/
│   ├── Figma 文件（带开发模式）
│   └── 组件架构图
├── 📁 资产/
│   ├── 图片（多种分辨率）
│   ├── 图标（SVG 组件）
│   └── 设计令牌（JSON）
├── 📁 规格/
│   ├── 组件属性文档
│   ├── 状态管理要求
│   ├── API 集成点
│   └── 动画规格
└── 📄 React_开发规格.pdf
```

**特殊考虑：**
- 基于组件的思维
- 属性和状态定义
- 可重用组件识别
- 性能优化说明
- 无障碍实施细节

---

## 📐 设计规格文档

### 必需部分：

#### 1. 项目概览
```markdown
## 项目：[客户名称 - 项目名称]
**版本：** [X.X]
**日期：** [交接日期]
**设计师：** [姓名]
**开发者：** [姓名]
**平台：** [Bubble/Webflow/React]

### 项目摘要
[项目范围和目标的简要描述]

### 关键功能
1. [功能 1]
2. [功能 2]
3. [功能 3]
```

#### 2. 设计系统参考
```markdown
## 设计系统

### 颜色
| 名称 | HEX | RGB | 用途 |
|------|-----|-----|------|
| 主色 | #006BA6 | 0,107,166 | CTA、链接 |
| 辅色 | #FF5E00 | 255,94,0 | 强调 |
| [等...] |

### 字体
| 样式 | 字体 | 大小 | 字重 | 行高 | 用途 |
|------|------|------|------|------|------|
| H1 | Inter | 32px | 600 | 1.2 | 页面标题 |
| 正文 | Inter | 16px | 400 | 1.5 | 内容 |
| [等...] |

### 间距
基础单位：8px
比例：4, 8, 12, 16, 24, 32, 48, 64, 96, 128
```

#### 3. 组件规格
```markdown
## 组件

### 按钮
**变体：** 主要、次要、第三级
**尺寸：** 小（32px）、中（40px）、大（48px）
**状态：** 默认、悬停、活动、禁用、加载

**行为：**
- 悬停：变暗 10%，缩放(1.02)
- 活动：变暗 20%，缩放(0.98)
- 禁用：透明度 0.5，光标禁止
- 加载：显示加载动画，禁用点击

**实施说明：**
[特定平台的实施指导]
```

#### 4. 页面规格
```markdown
## 页面：[页面名称]

### 桌面布局（1440px）
[带标注的截图]

**网格：** 12 列，24px 间距
**容器：** 最大宽度 1200px，居中
**部分：**
1. 页眉：固定，64px 高度
2. 主图：600px 高度，背景图片
3. 内容：3 列网格
4. 页脚：4 列布局

### 移动布局（375px）
[带标注的截图]

**与桌面版的变化：**
- 单列布局
- 汉堡菜单
- 垂直堆叠所有内容
- 增加触摸目标
```

#### 5. 交互与动画
```markdown
## 交互

### 页面过渡
- 类型：淡入淡出
- 持续时间：300ms
- 缓动：ease-out

### 悬停效果
| 元素 | 效果 | 持续时间 |
|------|------|----------|
| 按钮 | 变暗 + 抬起 | 200ms |
| 卡片 | 阴影增加 | 200ms |
| 链接 | 下划线 | 150ms |

### 微交互
1. 表单验证：实时，500ms 防抖
2. 加载状态：内容骨架屏
3. 成功反馈：Toast 通知，右上角
```

#### 6. 响应式行为
```markdown
## 响应式断点

### 断点
- 移动端：320px - 767px
- 平板：768px - 1023px  
- 桌面：1024px+

### 缩放规则
| 元素 | 移动端 | 平板 | 桌面 |
|------|--------|------|------|
| 字体大小 | -2px | 基础 | 基础 |
| 间距 | 0.75x | 0.875x | 1x |
| 图片 | 100% 宽度 | 50% | 固定 |
```

---

## 📦 资产导出指南

### 图片资产
```
格式选择：
- 照片：WebP（带 JPEG 后备）
- 图形：SVG（尽可能）
- 图标：SVG
- 复杂插图：PNG

命名规范：
[页面]-[元素]-[变体]@[尺寸].[扩展名]
示例：
- home-hero-desktop@2x.webp
- icon-search.svg
- product-card-thumb@1x.jpg

尺寸指南：
- 主图：最大 1920px 宽度
- 内容图片：最大 800px 宽度
- 缩略图：400px 宽度
- 图标：24px 基础尺寸
```

### 图标库
```
组织：
/icons/
  /system/     (UI 图标)
  /social/     (社交媒体图标)
  /custom/     (项目特定图标)

要求：
- SVG 格式
- 一致的 24px 视图框
- 单色（currentColor）
- 优化（SVGO）
```

### 设计令牌
```json
{
  "color": {
    "primary": {
      "value": "#006BA6",
      "type": "color"
    },
    "text": {
      "primary": {
        "value": "#1F2937",
        "type": "color"
      }
    }
  },
  "spacing": {
    "xs": {
      "value": "4px",
      "type": "spacing"
    }
  },
  "typography": {
    "heading": {
      "h1": {
        "fontSize": "32px",
        "fontWeight": "600",
        "lineHeight": "1.2"
      }
    }
  }
}
```

---

## 🤝 交接会议议程

### 时长：60-90 分钟

#### 1. 项目概览（10 分钟）
- 业务目标
- 用户需求
- 成功指标
- 时间线

#### 2. 设计演示（20 分钟）
- 用户流程
- 关键界面
- 交互
- 边缘情况

#### 3. 技术审查（20 分钟）
- 组件架构
- 状态管理
- API 要求
- 第三方集成

#### 4. 资产审查（10 分钟）
- 文件组织
- 导出设置
- 命名规范
- 访问权限

#### 5. 问答（20 分钟）
- 开发者问题
- 澄清
- 潜在挑战
- 替代方案

#### 6. 后续步骤（10 分钟）
- 开发时间线
- 反馈流程
- 审查检查点
- 沟通渠道

---

## 💬 沟通协议

### 开发期间

#### 每日更新
```
渠道：项目 Slack 频道
格式：
- ✅ 已完成：[完成的工作]
- 🔄 进行中：[正在进行的工作]
- ❓ 问题：[任何障碍或需要澄清的问题]
```

#### 设计问题
```
响应时间：4 小时内（工作时间）
格式：
1. 问题截图
2. 具体问题
3. 建议的解决方案（如有）
4. 对时间线的影响
```

#### 变更请求
```
流程：
1. 记录请求的变更
2. 评估影响（设计 + 开发）
3. 获得利益相关者批准
4. 如批准则更新设计
5. 向所有各方沟通
```

### 审查检查点

#### 组件审查（第 1 周）
- 基础组件已实施
- 根据设计系统验证
- 测试所有状态
- 移动响应性

#### 页面审查（第 2-3 周）
- 完整页面
- 交互工作正常
- 跨浏览器测试
- 性能检查

#### 最终审查（第 4 周）
- 完整应用
- 用户流程完成
- 错误修复完成
- 准备质检

---

## 📱 响应式文档

### 移动优先方法
```
从移动设计开始，为更大屏幕增强

移动端（320-767px）
├── 单列
├── 堆叠所有元素
├── 简化导航
├── 触摸优化
└── 性能优先

平板（768-1023px）
├── 2 列布局
├── 扩展导航
├── 更大的触摸目标
└── 更多内容可见

桌面（1024px+）
├── 完整布局
├── 悬停状态
├── 高级交互
└── 最大功能
```

### 组件适配
| 组件 | 移动端 | 平板 | 桌面 |
|------|--------|------|------|
| 导航 | 汉堡菜单 | 汉堡菜单 | 完整菜单 |
| 卡片 | 堆叠 | 2 列 | 3 列 |
| 表单 | 全宽 | 居中 | 侧边栏 |
| 表格 | 卡片视图 | 滚动 | 完整表格 |
| 模态框 | 全屏 | 居中 | 居中 |

---

## 🔍 质量保证

### 设计质检清单
交接前验证：
- [ ] 所有设计符合品牌指南
- [ ] 全程一致的间距
- [ ] 设计所有状态
- [ ] 验证无障碍性
- [ ] 考虑性能
- [ ] 跨平台测试

### 开发质检支持
开发期间设计师的责任：
- 审查已实施的组件
- 验证视觉准确性
- 测试交互
- 验证响应式行为
- 生产前批准

---

## 📚 交接模板

### 1. 邮件模板
```
主题：设计交接 - [项目名称] - 准备开发

您好 [开发者姓名]，

[项目名称] 的设计已准备好进行开发交接。

交接包：
- Figma 文件：[链接]
- 资产：[文件夹链接]
- 文档：[链接]
- 设计令牌：[链接]

关键要点：
1. [重要考虑事项 1]
2. [重要考虑事项 2]
3. [平台特定说明]

我可以在以下时间进行交接会议：
- [时间段 1]
- [时间段 2]

请查看材料并告知您的首选时间。

此致，
[设计师姓名]
```

### 2. 交接检查清单模板
```markdown
## 交接检查清单 - [项目名称]
**日期：** [日期]
**设计师：** [姓名]
**开发者：** [姓名]

### 设计交付物
- [ ] Figma 文件已共享并设置适当权限
- [ ] 所有界面已完成（附列表）
- [ ] 组件库已记录
- [ ] 设计令牌已导出
- [ ] 资产已导出并组织

### 文档
- [ ] 设计规格文档
- [ ] 交互文档
- [ ] 响应式行为指南
- [ ] 平台特定说明
- [ ] 已知限制已记录

### 资产
- [ ] 图片已优化并导出
- [ ] 图标格式正确
- [ ] 包含字体及许可
- [ ] 设计令牌 JSON 文件
- [ ] 任何自定义资产

### 会议
- [ ] 交接会议已安排
- [ ] 议程已发送
- [ ] 问题已收集
- [ ] 录制设置（如远程）

### 签字
- [ ] 设计师：_________________ 日期：_______
- [ ] 开发者：_________________ 日期：_______
- [ ] 项目经理：_______________ 日期：_______
```

---

## 🚀 最佳实践

### 应该做的
✅ 过度沟通规格
✅ 为复杂交互提供示例
✅ 包括边缘情况和错误状态
✅ 使用开发者友好的命名
✅ 保持文件组织和标记
✅ 记录您的设计决策
✅ 随时回答问题

### 不应该做的
❌ 假设开发者知道您的意图
❌ 使用仅限设计的术语
❌ 忘记移动/响应式规格
❌ 留下未定义的状态
❌ 使用没有许可的非网络字体
❌ 在交接后未经沟通更改设计
❌ 跳过交接会议

---

## 📈 成功指标

### 交接质量指标
- 每个项目 **< 5** 个澄清问题
- **零** 缺失资产报告
- **100%** 的状态已记录
- **< 2** 个设计修订请求
- **按时** 开发交付

### 持续改进
- 每个项目后收集开发者反馈
- 根据经验教训更新模板
- 与团队分享成功模式
- 随时间构建组件库

---

**文档版本：** 1.0  
**实施：** 所有项目必需  
**下次审查：** 完成 5 次交接后