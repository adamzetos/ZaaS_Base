# Designer Handbook - UXPilot to Production Workflow
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**  
**Purpose: Complete guide for designers using UXPilot → Figma → Code workflow**

## 📋 Overview

This handbook provides step-by-step guidance for Zetos designers to efficiently create customer designs using AI-powered UXPilot, organize in Figma, and prepare for development handoff.

## 🎯 Designer Role in AI-Enhanced Workflow

### Traditional Designer vs. AI-Enhanced Designer:

| Traditional | AI-Enhanced (You) |
|------------|------------------|
| Creates from scratch | Guides AI generation |
| 80% creation, 20% refinement | 20% prompting, 80% refinement |
| Days for component library | Hours for complete system |
| Manual consistency | AI-enforced consistency |
| Individual creativity | System-level thinking |

### Your New Superpowers:
1. **AI Director** - Guide UXPilot to generate designs
2. **Quality Controller** - Refine AI output to perfection
3. **System Architect** - Organize chaos into structure
4. **Efficiency Master** - 3x faster delivery

---

## 🚀 Phase 1: Project Initialization

### Step 1: Gather Requirements
```
Time: 1-2 hours

Actions:
1. Review project brief
2. Complete Digital VI Requirements Checklist
3. Collect all brand assets
4. Understand business goals
5. Identify key user flows
```

### Step 2: Prepare UXPilot Context
```
Time: 30 minutes

Actions:
1. Open UXPilot_Prompt_Templates.md
2. Fill in customer variables:
   - Brand colors (exact HEX)
   - Typography (exact names)
   - Industry context
   - Target audience
3. Save as [CUSTOMER]_UXPilot_Context.txt
```

### Step 3: Project Setup
```
Time: 30 minutes

Actions:
1. Create Figma customer folder
2. Duplicate project templates
3. Rename with customer info
4. Set permissions
5. Create project channel in Slack
```

---

## 🎨 Phase 2: UXPilot Design Generation

### Step 1: Generate Component Library [CRITICAL - DO FIRST!]
```
Time: 1 hour

Context Box (8-10k chars):
- Paste complete context from template
- Include ALL brand specifications
- Add detailed component requirements

Page Description (3k chars):
- Request complete component library
- Specify all component types needed
- Include all states

Expected Output:
- All buttons, forms, cards, navigation
- Every state clearly shown
- Consistent styling throughout
```

### Step 2: Screenshot & Document
```
Time: 15 minutes

Actions:
1. Screenshot component library at 100%
2. Save as [CUSTOMER]_Components_Reference.png
3. List all component names in doc
4. Note any missing elements
```

### Step 3: Generate Layout Templates
```
Time: 30 minutes

Context Box:
- Same as Step 1 (copy exact)
- Add: "Use components from established library"

Page Description:
- Dashboard layout
- Form layout
- List/table layout
- Landing page layout
- Mobile adaptations

Quality Check:
- Components match library?
- Spacing consistent?
- Responsive considered?
```

### Step 4: Generate Individual Screens
```
Time: 2-4 hours (depending on project size)

For Each Screen:
1. Copy same context
2. Add: "Use ONLY our established components"
3. Describe page purpose and content
4. Reference specific components by name
5. Generate and review

Common Screens:
- Homepage
- Login/Register
- Dashboard
- List views
- Detail pages
- Settings
- Profile
```

### Step 5: Generate Mobile Versions
```
Time: 1-2 hours

Context Box:
- Same + mobile adaptation rules

Page Description:
- Reference desktop version
- Specify mobile transformations
- Component stacking order
- Touch optimizations
```

### Step 6: Create User Flows
```
Time: 30 minutes per flow

Flow Box (500-800 chars):
- List screens in order
- Specify connections
- Note persistent elements

Common Flows:
- Onboarding flow
- Purchase flow
- User task flows
```

---

## 📦 Phase 3: Figma Import & Organization

### Step 1: Import from UXPilot
```
Time: 30 minutes

Method:
1. Select frames in UXPilot
2. Copy (Cmd/Ctrl + C)
3. Create Import_Raw file in Figma
4. Paste preserving layers
5. Organize by type (components/screens)

File Structure:
[CUSTOMER]_Import_Raw_[DATE]
├── UXPilot Components
├── Desktop Screens
├── Mobile Screens
└── User Flows
```

### Step 2: Extract & Refine Components
```
Time: 4-6 hours

For Each Component:
1. Copy from import
2. Clean up any artifacts
3. Apply Auto Layout
4. Create component
5. Build all variants
6. Name properly: Category / Type / Variant / State
7. Add description

Quality Checklist:
- [ ] Auto Layout applied
- [ ] Constraints set
- [ ] All states created
- [ ] Properly named
- [ ] Description added
```

### Step 3: Create Design System
```
Time: 2-3 hours

Structure:
[CUSTOMER]_Design_System
├── 1. Cover & Info
├── 2. Colors (from UXPilot)
├── 3. Typography (from UXPilot)
├── 4. Components (refined)
├── 5. Patterns
└── 6. Documentation

Actions:
1. Extract color values → Create color styles
2. Extract text specs → Create text styles  
3. Organize components by category
4. Document usage guidelines
5. Create example compositions
```

### Step 4: Process Screens
```
Time: 4-6 hours

For Each Screen:
1. Copy from import
2. Replace elements with component instances
3. Apply proper spacing (8px grid)
4. Ensure responsive settings
5. Add annotations for dev
6. Group and name layers properly

Before/After:
- Before: Raw AI generation
- After: Clean, component-based, grid-aligned
```

### Step 5: Create Prototypes
```
Time: 1-2 hours

Actions:
1. Link screens based on flows
2. Add micro-interactions
3. Set up overlays/modals
4. Define transitions
5. Test all paths
```

---

## 💻 Phase 4: Developer Handoff

### Step 1: Prepare Handoff File
```
Time: 2 hours

Structure:
[CUSTOMER]_Dev_Handoff
├── 1. Component Specs
├── 2. Design Tokens
├── 3. Screen Specs
├── 4. Assets
└── 5. Documentation

Include:
- Measurements
- Spacing rules
- Color values
- Interaction notes
```

### Step 2: Export Design Tokens
```
Time: 30 minutes

Format:
{
  "colors": {
    "primary": "#006BA6",
    "secondary": "#FF5E00"
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16
  },
  "typography": {
    "h1": {
      "size": 32,
      "weight": 600,
      "lineHeight": 1.2
    }
  }
}
```

### Step 3: Asset Preparation
```
Time: 1 hour

Actions:
1. Mark assets for export
2. Set up export settings
3. Icons → SVG
4. Images → PNG/WebP
5. Create asset documentation
```

### Step 4: Developer Review
```
Time: 1 hour

Meeting Agenda:
1. Walk through design system
2. Explain component behaviors  
3. Review responsive approach
4. Discuss implementation order
5. Address questions
6. Set up feedback channel
```

---

## 🛠️ Tools & Resources

### Essential Tools:
1. **UXPilot** - AI design generation
2. **Figma** - Design refinement & handoff
3. **Stark** - Accessibility checking
4. **Figma Tokens** - Design token management

### Key Documents:
1. **UXPilot_Prompt_Templates.md** - Your prompting bible
2. **Digital_VI_Requirements_Checklist.md** - Pre-project checklist
3. **Figma_UXPilot_Integration_Standards.md** - Organization guide
4. **This Handbook** - Your daily reference

### Figma Plugins:
- **Rename It** - Batch renaming
- **Design Tokens** - Token export
- **Able** - Accessibility
- **Figma to Code** - HTML/CSS preview

---

## 📊 Quality Checklist

### Before Marking Complete:

#### UXPilot Phase:
- [ ] Component library comprehensive
- [ ] All screens generated
- [ ] Mobile versions created
- [ ] Consistency verified
- [ ] Edge cases covered

#### Figma Phase:
- [ ] All components extracted & refined
- [ ] Design system organized
- [ ] Screens use instances only
- [ ] Responsive behavior set
- [ ] Accessibility checked

#### Handoff Phase:
- [ ] Specs documented
- [ ] Assets prepared
- [ ] Tokens exported
- [ ] Prototype functional
- [ ] Dev review complete

---

## 🚀 Pro Tips

### UXPilot Mastery:
1. **Context is King** - Detailed context = consistent output
2. **Component First** - Always generate library before screens
3. **Reference Explicitly** - "Use our Primary Button component"
4. **Iterate Quickly** - Regenerate if not perfect
5. **Save Everything** - Screenshot good outputs

### Figma Efficiency:
1. **Batch Process** - Select similar elements, convert together
2. **Use Plugins** - Automate repetitive tasks
3. **Component Variants** - Set up properly, save time later
4. **Auto Layout** - Master it, everything becomes easier
5. **Keyboard Shortcuts** - Learn them, 2x faster

### Communication:
1. **Document Decisions** - Why you changed something
2. **Annotate Clearly** - Developers appreciate notes
3. **Version Control** - Clear naming, regular saves
4. **Ask Questions** - When in doubt, clarify
5. **Share Progress** - Keep team updated

---

## 📈 Performance Metrics

### Track Your Efficiency:
- Component library: Target < 2 hours (vs 2 days traditional)
- Full project: Target < 40 hours (vs 120 hours traditional)
- Revisions: Target < 2 rounds (AI consistency helps)
- Handoff issues: Target < 5 questions from dev

### Quality Indicators:
- ✅ Zero detached instances
- ✅ 100% component usage
- ✅ All states documented
- ✅ Accessibility passed
- ✅ Developer happy

---

## 🆘 Troubleshooting

### UXPilot Issues:

**Problem**: Inconsistent components
**Solution**: More detailed context, explicit references

**Problem**: Wrong style generated
**Solution**: Check context accuracy, regenerate

**Problem**: Missing states
**Solution**: Explicitly request in prompt

### Figma Issues:

**Problem**: Slow performance
**Solution**: Split into multiple files, use components

**Problem**: Messy imports
**Solution**: Clean as you go, don't batch

**Problem**: Version conflicts
**Solution**: Clear naming, regular branches

---

## 🎓 Continuous Learning

### Weekly:
- Review generated designs
- Share tips with team
- Update prompt templates
- Refine workflows

### Monthly:
- Analyze time savings
- Identify bottlenecks
- Update documentation
- Train on new features

### Quarterly:
- Review entire process
- Update standards
- Share best practices
- Celebrate wins

---

**Handbook Version:** 1.0  
**For**: All Zetos UX/UI Designers  
**Next Update**: After 5 projects completed

Remember: You're not just a designer anymore - you're an AI-enhanced design systems architect! 🚀

---

# 设计师手册 - UXPilot 到生产工作流程
**分类：ZETOS-机密 ▲**  
**创建日期：2025-05-24**  
**版本：1.0**  
**目的：设计师使用 UXPilot → Figma → 代码工作流程的完整指南**

## 📋 概述

本手册为 Zetos 设计师提供使用 AI 驱动的 UXPilot 高效创建客户设计、在 Figma 中组织并准备开发交付的分步指导。

## 🎯 AI 增强工作流程中的设计师角色

### 传统设计师 vs. AI 增强设计师：

| 传统 | AI 增强（你） |
|------|--------------|
| 从零开始创建 | 引导 AI 生成 |
| 80% 创建，20% 优化 | 20% 提示，80% 优化 |
| 组件库需要数天 | 完整系统只需数小时 |
| 手动保持一致性 | AI 强制一致性 |
| 个人创造力 | 系统级思维 |

### 你的新超能力：
1. **AI 导演** - 引导 UXPilot 生成设计
2. **质量控制员** - 将 AI 输出优化至完美
3. **系统架构师** - 将混乱组织成结构
4. **效率大师** - 3 倍速交付

---

## 🚀 第一阶段：项目初始化

### 步骤 1：收集需求
```
时间：1-2 小时

行动：
1. 审查项目简报
2. 完成数字 VI 需求检查清单
3. 收集所有品牌资产
4. 理解业务目标
5. 识别关键用户流程
```

### 步骤 2：准备 UXPilot 上下文
```
时间：30 分钟

行动：
1. 打开 UXPilot_Prompt_Templates.md
2. 填入客户变量：
   - 品牌颜色（精确 HEX）
   - 字体（精确名称）
   - 行业背景
   - 目标受众
3. 保存为 [客户]_UXPilot_Context.txt
```

### 步骤 3：项目设置
```
时间：30 分钟

行动：
1. 创建 Figma 客户文件夹
2. 复制项目模板
3. 使用客户信息重命名
4. 设置权限
5. 在 Slack 创建项目频道
```

---

## 🎨 第二阶段：UXPilot 设计生成

### 步骤 1：生成组件库 [关键 - 必须先做！]
```
时间：1 小时

上下文框（8-10k 字符）：
- 粘贴模板中的完整上下文
- 包含所有品牌规格
- 添加详细的组件需求

页面描述（3k 字符）：
- 请求完整的组件库
- 指定所需的所有组件类型
- 包括所有状态

预期输出：
- 所有按钮、表单、卡片、导航
- 清楚显示每个状态
- 全程保持一致的样式
```

### 步骤 2：截图并记录
```
时间：15 分钟

行动：
1. 以 100% 截图组件库
2. 保存为 [客户]_Components_Reference.png
3. 在文档中列出所有组件名称
4. 记录任何缺失的元素
```

### 步骤 3：生成布局模板
```
时间：30 分钟

上下文框：
- 与步骤 1 相同（精确复制）
- 添加："使用已建立库中的组件"

页面描述：
- 仪表板布局
- 表单布局
- 列表/表格布局
- 着陆页布局
- 移动端适配

质量检查：
- 组件匹配库？
- 间距一致？
- 考虑响应式？
```

### 步骤 4：生成单个界面
```
时间：2-4 小时（取决于项目大小）

对于每个界面：
1. 复制相同的上下文
2. 添加："仅使用我们已建立的组件"
3. 描述页面目的和内容
4. 按名称引用特定组件
5. 生成并审查

常见界面：
- 主页
- 登录/注册
- 仪表板
- 列表视图
- 详情页
- 设置
- 个人资料
```

### 步骤 5：生成移动版本
```
时间：1-2 小时

上下文框：
- 相同 + 移动适配规则

页面描述：
- 引用桌面版本
- 指定移动转换
- 组件堆叠顺序
- 触摸优化
```

### 步骤 6：创建用户流程
```
时间：每个流程 30 分钟

流程框（500-800 字符）：
- 按顺序列出界面
- 指定连接
- 记录持续元素

常见流程：
- 入门流程
- 购买流程
- 用户任务流程
```

---

## 📦 第三阶段：Figma 导入与组织

### 步骤 1：从 UXPilot 导入
```
时间：30 分钟

方法：
1. 在 UXPilot 中选择框架
2. 复制（Cmd/Ctrl + C）
3. 在 Figma 中创建 Import_Raw 文件
4. 粘贴保留图层
5. 按类型组织（组件/界面）

文件结构：
[客户]_Import_Raw_[日期]
├── UXPilot 组件
├── 桌面界面
├── 移动界面
└── 用户流程
```

### 步骤 2：提取并优化组件
```
时间：4-6 小时

对于每个组件：
1. 从导入复制
2. 清理任何瑕疵
3. 应用自动布局
4. 创建组件
5. 构建所有变体
6. 正确命名：类别 / 类型 / 变体 / 状态
7. 添加描述

质量检查清单：
- [ ] 应用自动布局
- [ ] 设置约束
- [ ] 创建所有状态
- [ ] 正确命名
- [ ] 添加描述
```

### 步骤 3：创建设计系统
```
时间：2-3 小时

结构：
[客户]_Design_System
├── 1. 封面与信息
├── 2. 颜色（来自 UXPilot）
├── 3. 字体（来自 UXPilot）
├── 4. 组件（优化后）
├── 5. 模式
└── 6. 文档

行动：
1. 提取颜色值 → 创建颜色样式
2. 提取文本规格 → 创建文本样式
3. 按类别组织组件
4. 记录使用指南
5. 创建示例组合
```

### 步骤 4：处理界面
```
时间：4-6 小时

对于每个界面：
1. 从导入复制
2. 用组件实例替换元素
3. 应用适当的间距（8px 网格）
4. 确保响应式设置
5. 为开发添加标注
6. 正确分组和命名图层

前后对比：
- 之前：原始 AI 生成
- 之后：清洁、基于组件、网格对齐
```

### 步骤 5：创建原型
```
时间：1-2 小时

行动：
1. 基于流程链接界面
2. 添加微交互
3. 设置叠加层/模态
4. 定义过渡
5. 测试所有路径
```

---

## 💻 第四阶段：开发交付

### 步骤 1：准备交付文件
```
时间：2 小时

结构：
[客户]_Dev_Handoff
├── 1. 组件规格
├── 2. 设计令牌
├── 3. 界面规格
├── 4. 资产
└── 5. 文档

包括：
- 测量
- 间距规则
- 颜色值
- 交互说明
```

### 步骤 2：导出设计令牌
```
时间：30 分钟

格式：
{
  "colors": {
    "primary": "#006BA6",
    "secondary": "#FF5E00"
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16
  },
  "typography": {
    "h1": {
      "size": 32,
      "weight": 600,
      "lineHeight": 1.2
    }
  }
}
```

### 步骤 3：资产准备
```
时间：1 小时

行动：
1. 标记要导出的资产
2. 设置导出设置
3. 图标 → SVG
4. 图片 → PNG/WebP
5. 创建资产文档
```

### 步骤 4：开发者评审
```
时间：1 小时

会议议程：
1. 演示设计系统
2. 解释组件行为
3. 审查响应式方法
4. 讨论实施顺序
5. 解答问题
6. 设置反馈渠道
```

---

## 🛠️ 工具与资源

### 必备工具：
1. **UXPilot** - AI 设计生成
2. **Figma** - 设计优化与交付
3. **Stark** - 无障碍检查
4. **Figma Tokens** - 设计令牌管理

### 关键文档：
1. **UXPilot_Prompt_Templates.md** - 你的提示圣经
2. **Digital_VI_Requirements_Checklist.md** - 项目前检查清单
3. **Figma_UXPilot_Integration_Standards.md** - 组织指南
4. **本手册** - 你的日常参考

### Figma 插件：
- **Rename It** - 批量重命名
- **Design Tokens** - 令牌导出
- **Able** - 无障碍
- **Figma to Code** - HTML/CSS 预览

---

## 📊 质量检查清单

### 标记完成前：

#### UXPilot 阶段：
- [ ] 组件库全面
- [ ] 所有界面已生成
- [ ] 创建移动版本
- [ ] 验证一致性
- [ ] 覆盖边缘情况

#### Figma 阶段：
- [ ] 所有组件已提取并优化
- [ ] 设计系统已组织
- [ ] 界面仅使用实例
- [ ] 设置响应式行为
- [ ] 检查无障碍

#### 交付阶段：
- [ ] 规格已记录
- [ ] 资产已准备
- [ ] 令牌已导出
- [ ] 原型功能正常
- [ ] 开发评审完成

---

## 🚀 专业提示

### UXPilot 精通：
1. **上下文为王** - 详细的上下文 = 一致的输出
2. **组件优先** - 总是先生成库再生成界面
3. **明确引用** - "使用我们的主要按钮组件"
4. **快速迭代** - 如果不完美就重新生成
5. **保存一切** - 截图好的输出

### Figma 效率：
1. **批量处理** - 选择相似元素，一起转换
2. **使用插件** - 自动化重复任务
3. **组件变体** - 正确设置，后期节省时间
4. **自动布局** - 掌握它，一切变得更容易
5. **键盘快捷键** - 学习它们，速度提高 2 倍

### 沟通：
1. **记录决定** - 为什么你改变了某些东西
2. **清晰标注** - 开发者感激笔记
3. **版本控制** - 清晰命名，定期保存
4. **提出问题** - 有疑问时，澄清
5. **分享进度** - 保持团队更新

---

## 📈 性能指标

### 跟踪你的效率：
- 组件库：目标 < 2 小时（对比传统 2 天）
- 完整项目：目标 < 40 小时（对比传统 120 小时）
- 修订：目标 < 2 轮（AI 一致性有帮助）
- 交付问题：目标 < 5 个开发问题

### 质量指标：
- ✅ 零分离实例
- ✅ 100% 组件使用
- ✅ 所有状态已记录
- ✅ 无障碍通过
- ✅ 开发者满意

---

## 🆘 故障排除

### UXPilot 问题：

**问题**：组件不一致
**解决**：更详细的上下文，明确引用

**问题**：生成错误的样式
**解决**：检查上下文准确性，重新生成

**问题**：缺失状态
**解决**：在提示中明确请求

### Figma 问题：

**问题**：性能缓慢
**解决**：拆分成多个文件，使用组件

**问题**：凌乱的导入
**解决**：边做边清理，不要批量

**问题**：版本冲突
**解决**：清晰命名，定期分支

---

## 🎓 持续学习

### 每周：
- 审查生成的设计
- 与团队分享提示
- 更新提示模板
- 优化工作流程

### 每月：
- 分析时间节省
- 识别瓶颈
- 更新文档
- 培训新功能

### 每季度：
- 审查整个流程
- 更新标准
- 分享最佳实践
- 庆祝胜利

---

**手册版本：** 1.0  
**适用于**：所有 Zetos UX/UI 设计师  
**下次更新**：完成 5 个项目后

记住：你不再只是一名设计师 - 你是一名 AI 增强的设计系统架构师！🚀