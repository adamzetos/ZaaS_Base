# Team Collaboration Protocol / 团队协作规范
**Document ID**: SA-013  
**Version**: 1.0  
**Last Updated**: 2025-05-24  
**Author**: System Analyst Team  
**Classification**: ZETOS-CONFIDENTIAL ▲

---

# [English Version]

## 📋 Table of Contents
1. [Overview](#overview)
2. [Multi-Session Collaboration Scenarios](#multi-session-collaboration-scenarios)
3. [Conflict Prevention Framework](#conflict-prevention-framework)
4. [Git Workflow for Concurrent Development](#git-workflow-for-concurrent-development)
5. [Task Assignment & Tracking Protocol](#task-assignment-tracking-protocol)
6. [Real-time Synchronization Methods](#real-time-synchronization-methods)
7. [Conflict Resolution Procedures](#conflict-resolution-procedures)
8. [Communication Standards](#communication-standards)
9. [Best Practices Checklist](#best-practices-checklist)

## 1. Overview

This protocol ensures seamless collaboration when multiple team members or AI sessions work simultaneously on the ZaaS project. It addresses potential conflicts, establishes clear communication channels, and defines synchronization methods for maintaining consistency across concurrent work streams.

### 🎯 Objectives
- Prevent file conflicts and data loss
- Ensure consistent project state across all sessions
- Maximize parallel work efficiency
- Maintain clear communication channels
- Enable real-time progress tracking

### 👥 Applicable Scenarios
- Multiple Claude Code sessions by same user
- Different team members working simultaneously
- Cross-functional team collaboration (SA, PM, Dev, QA)
- Remote team coordination across time zones
- AI-human collaborative development

## 2. Multi-Session Collaboration Scenarios

### 2.1 Same User, Multiple Sessions
**Scenario**: Single user running multiple Claude Code terminals
```
Terminal 1: Working on SA documentation
Terminal 2: Developing PM workflows
```

**Risks**:
- Conflicting file edits
- Duplicate work on same tasks
- Inconsistent project state understanding

### 2.2 Multiple Team Members
**Scenario**: Different team members working concurrently
```
SA: Requirements analysis
UX: Design mockups
Dev: Technical architecture
```

**Risks**:
- Overlapping responsibilities
- Communication gaps
- Integration challenges

### 2.3 AI-Human Collaboration
**Scenario**: Claude Code + Human developers
```
Claude: Generating boilerplate code
Human: Implementing business logic
```

**Risks**:
- Style inconsistencies
- Misaligned understanding
- Merge conflicts

## 3. Conflict Prevention Framework

### 3.1 File-Level Conflict Prevention

#### **Exclusive File Locking**
```yaml
Working Files Registry (in CLAUDE.md):
- File: /SA/requirements.md
  Locked By: Session-A
  Lock Time: 2025-05-24 10:00
  Expected Release: 2025-05-24 11:00
```

#### **Directory Ownership**
```yaml
Directory Assignments:
  /01_Analysis/: SA Team Lead
  /02_Quotation/: Business Analyst
  /03_Design/: UX Designer
  /04_Development/FE/: Frontend Lead
  /04_Development/BE/: Backend Lead
```

### 3.2 Task-Level Conflict Prevention

#### **Task Assignment Matrix**
| Task Category | Primary Owner | Backup Owner | Review Required |
|--------------|---------------|--------------|-----------------|
| Requirements | SA | PM | Sales |
| Architecture | Backend Lead | SA | CTO |
| UI/UX | Designer | Frontend | PM |
| Testing | QA | Dev Team | PM |

## 4. Git Workflow for Concurrent Development

### 4.1 Branch Strategy for Multi-Session Work

```
master (protected)
  ├── preprod (protected)
  │   └── dev (main development)
  │       ├── feature/sa-requirements-adam-session1
  │       ├── feature/sa-templates-adam-session2
  │       ├── feature/ux-components-designer
  │       └── feature/be-api-backend-dev
```

### 4.2 Branch Naming Convention
```
feature/[phase]-[task]-[owner]-[session]

Examples:
- feature/sa-requirements-adam-session1
- feature/ux-homepage-jane-main
- feature/be-auth-john-terminal2
```

### 4.3 Commit & Sync Protocol

#### **Before Starting Work**
```bash
# 1. Update local repository
git checkout dev
git pull origin dev

# 2. Create feature branch
git checkout -b feature/[your-branch-name]

# 3. Check CLAUDE.md for active work
cat CLAUDE.md | grep "Currently Working"
```

#### **During Work**
```bash
# Commit frequently (every 30 minutes)
git add .
git commit -m "feat(phase): description [WIP]"

# Push to remote regularly
git push origin feature/[your-branch-name]
```

#### **After Completing Task**
```bash
# 1. Final commit
git add .
git commit -m "feat(phase): complete description"

# 2. Update from dev
git checkout dev
git pull origin dev
git checkout feature/[your-branch-name]
git rebase dev

# 3. Push and create PR
git push origin feature/[your-branch-name]
```

## 5. Task Assignment & Tracking Protocol

### 5.1 Centralized Task Registry

Update CLAUDE.md with active tasks section:
```markdown
## 🔄 Active Work Sessions
| Session ID | Team Member | Current Task | Branch | Status | Last Update |
|------------|-------------|--------------|---------|---------|-------------|
| SESSION-001 | Adam (Terminal 1) | SA Templates | feature/sa-templates | In Progress | 2025-05-24 10:30 |
| SESSION-002 | Adam (Terminal 2) | PM Workflows | feature/pm-workflows | In Progress | 2025-05-24 10:45 |
```

### 5.2 Task Claiming Process

1. **Check Available Tasks**
   ```bash
   # Use TodoRead in Claude Code
   # Or check project management tool
   ```

2. **Claim Task**
   - Update CLAUDE.md Active Work Sessions
   - Create feature branch
   - Update task status to "In Progress"

3. **Regular Updates**
   - Push commits every 30 minutes
   - Update progress in CLAUDE.md
   - Communicate blockers immediately

## 6. Real-time Synchronization Methods

### 6.1 File System Monitoring

#### **For Google Drive Projects**
- Changes sync automatically
- ~30 second delay for propagation
- Check file timestamps before editing

#### **For Local Projects**
```bash
# Use file watchers
fswatch -r . | while read f; do echo "Changed: $f"; done
```

### 6.2 Git-based Synchronization

```bash
# Create sync script (sync.sh)
#!/bin/bash
while true; do
    git fetch origin
    git status
    sleep 300  # Check every 5 minutes
done
```

### 6.3 Communication Channels

| Channel | Purpose | Response Time |
|---------|---------|---------------|
| CLAUDE.md | Task status, active work | Real-time |
| Git commits | Code changes | Every 30 min |
| Slack/Teams | Urgent issues | < 5 minutes |
| PR comments | Code review | < 2 hours |

## 7. Conflict Resolution Procedures

### 7.1 Git Merge Conflicts

#### **Prevention**
1. Work on separate files/directories
2. Rebase frequently from dev
3. Communicate before major refactoring

#### **Resolution Process**
```bash
# 1. Identify conflicts
git status

# 2. Pull latest changes
git pull origin dev

# 3. Resolve conflicts
# Edit conflicted files
git add [resolved-files]
git commit -m "fix: resolve merge conflicts"

# 4. Notify team
# Update CLAUDE.md with resolution
```

### 7.2 Task Overlap Conflicts

#### **Detection**
- Regular CLAUDE.md checks
- Task status monitoring
- Team standup meetings

#### **Resolution**
1. Immediate communication
2. Determine task ownership
3. Merge or divide work
4. Update task assignments

### 7.3 Business Logic Conflicts

#### **Process**
1. Document both approaches
2. Schedule team discussion
3. SA/PM makes final decision
4. Update requirements docs

## 8. Communication Standards

### 8.1 Status Updates

#### **Format for CLAUDE.md Updates**
```markdown
## 📝 Session Updates
### SESSION-001 | 2025-05-24 11:00
- ✅ Completed: Requirements template v1
- 🔄 In Progress: Validation framework
- 🚧 Blocked: Need PM input on workflow
- 📅 Next: Technical specifications
```

### 8.2 Commit Message Standards

```
[session-id] type(scope): description

Examples:
[S001] feat(sa): add requirements template
[S002] fix(ux): resolve responsive issues
[MAIN] docs: update collaboration protocol
```

### 8.3 PR Description Template

```markdown
## 📋 Summary
Brief description of changes

## 🎯 Objectives
- What this PR accomplishes
- Related tasks/tickets

## 🔄 Session Info
- Session ID: SESSION-001
- Branch: feature/sa-templates
- Working Duration: 2 hours

## ✅ Checklist
- [ ] Updated CLAUDE.md
- [ ] No merge conflicts
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
```

## 9. Best Practices Checklist

### 9.1 Before Starting Work
- [ ] Pull latest changes from dev
- [ ] Check CLAUDE.md for active sessions
- [ ] Verify no one working on same files
- [ ] Create feature branch with proper naming
- [ ] Update Active Work Sessions in CLAUDE.md

### 9.2 During Work
- [ ] Commit every 30 minutes minimum
- [ ] Push to remote after each commit
- [ ] Update task status regularly
- [ ] Check for new updates from team
- [ ] Document any decisions made

### 9.3 Before Ending Session
- [ ] Commit all changes
- [ ] Push to remote repository
- [ ] Update CLAUDE.md status
- [ ] Create PR if task complete
- [ ] Note any handoff items

### 9.4 Conflict Avoidance
- [ ] Work on assigned directories only
- [ ] Communicate before major changes
- [ ] Use feature branches always
- [ ] Rebase frequently from dev
- [ ] Review others' active work

### 9.5 Communication
- [ ] Update session status hourly
- [ ] Document blockers immediately
- [ ] Review team updates regularly
- [ ] Respond to queries promptly
- [ ] Share learnings and issues

## 📊 Collaboration Metrics

Track these metrics to improve collaboration:

| Metric | Target | Measurement |
|--------|--------|-------------|
| Merge Conflicts | < 5% of PRs | Git statistics |
| Task Overlap | < 2% of tasks | Task tracking |
| Sync Delays | < 5 minutes | Update timestamps |
| Communication Response | < 15 minutes | Message tracking |
| PR Review Time | < 2 hours | GitHub metrics |

## 🚨 Emergency Procedures

### When Conflicts Occur:
1. **Stop all work** on affected files
2. **Communicate** in team channel
3. **Backup** any uncommitted changes
4. **Coordinate** resolution approach
5. **Document** lessons learned

### Lost Work Recovery:
```bash
# Check git reflog
git reflog

# Recover lost commits
git checkout [commit-hash]

# Check Google Drive version history
# Right-click file → Version history
```

---

# [中文版]

## 📋 目录
1. [概述](#概述)
2. [多会话协作场景](#多会话协作场景)
3. [冲突预防框架](#冲突预防框架)
4. [并发开发的Git工作流](#并发开发的git工作流)
5. [任务分配与跟踪协议](#任务分配与跟踪协议)
6. [实时同步方法](#实时同步方法)
7. [冲突解决程序](#冲突解决程序)
8. [沟通标准](#沟通标准)
9. [最佳实践清单](#最佳实践清单)

## 1. 概述

本协议确保多个团队成员或AI会话同时在ZaaS项目上工作时的无缝协作。它解决了潜在冲突，建立了清晰的沟通渠道，并定义了同步方法以保持并发工作流的一致性。

### 🎯 目标
- 防止文件冲突和数据丢失
- 确保所有会话间的项目状态一致
- 最大化并行工作效率
- 维护清晰的沟通渠道
- 实现实时进度跟踪

### 👥 适用场景
- 同一用户的多个Claude Code会话
- 不同团队成员同时工作
- 跨职能团队协作（SA、PM、开发、QA）
- 跨时区的远程团队协调
- AI与人类协作开发

## 2. 多会话协作场景

### 2.1 同一用户，多个会话
**场景**：单个用户运行多个Claude Code终端
```
终端1：处理SA文档
终端2：开发PM工作流
```

**风险**：
- 文件编辑冲突
- 相同任务的重复工作
- 项目状态理解不一致

### 2.2 多个团队成员
**场景**：不同团队成员并发工作
```
SA：需求分析
UX：设计原型
开发：技术架构
```

**风险**：
- 职责重叠
- 沟通断层
- 集成挑战

### 2.3 AI-人类协作
**场景**：Claude Code + 人类开发者
```
Claude：生成基础代码
人类：实现业务逻辑
```

**风险**：
- 风格不一致
- 理解偏差
- 合并冲突

## 3. 冲突预防框架

### 3.1 文件级冲突预防

#### **独占文件锁定**
```yaml
工作文件注册表（在CLAUDE.md中）：
- 文件：/SA/requirements.md
  锁定者：Session-A
  锁定时间：2025-05-24 10:00
  预计释放：2025-05-24 11:00
```

#### **目录所有权**
```yaml
目录分配：
  /01_Analysis/：SA团队负责人
  /02_Quotation/：业务分析师
  /03_Design/：UX设计师
  /04_Development/FE/：前端负责人
  /04_Development/BE/：后端负责人
```

### 3.2 任务级冲突预防

#### **任务分配矩阵**
| 任务类别 | 主要负责人 | 备份负责人 | 需要审核 |
|---------|-----------|-----------|----------|
| 需求 | SA | PM | 销售 |
| 架构 | 后端负责人 | SA | CTO |
| UI/UX | 设计师 | 前端 | PM |
| 测试 | QA | 开发团队 | PM |

## 4. 并发开发的Git工作流

### 4.1 多会话工作的分支策略

```
master（受保护）
  ├── preprod（受保护）
  │   └── dev（主开发分支）
  │       ├── feature/sa-requirements-adam-session1
  │       ├── feature/sa-templates-adam-session2
  │       ├── feature/ux-components-designer
  │       └── feature/be-api-backend-dev
```

### 4.2 分支命名规范
```
feature/[阶段]-[任务]-[负责人]-[会话]

示例：
- feature/sa-requirements-adam-session1
- feature/ux-homepage-jane-main
- feature/be-auth-john-terminal2
```

### 4.3 提交与同步协议

#### **开始工作前**
```bash
# 1. 更新本地仓库
git checkout dev
git pull origin dev

# 2. 创建功能分支
git checkout -b feature/[你的分支名]

# 3. 检查CLAUDE.md中的活跃工作
cat CLAUDE.md | grep "Currently Working"
```

#### **工作期间**
```bash
# 频繁提交（每30分钟）
git add .
git commit -m "feat(phase): description [WIP]"

# 定期推送到远程
git push origin feature/[你的分支名]
```

#### **完成任务后**
```bash
# 1. 最终提交
git add .
git commit -m "feat(phase): complete description"

# 2. 从dev更新
git checkout dev
git pull origin dev
git checkout feature/[你的分支名]
git rebase dev

# 3. 推送并创建PR
git push origin feature/[你的分支名]
```

## 5. 任务分配与跟踪协议

### 5.1 集中式任务注册表

在CLAUDE.md中更新活跃任务部分：
```markdown
## 🔄 活跃工作会话
| 会话ID | 团队成员 | 当前任务 | 分支 | 状态 | 最后更新 |
|--------|---------|---------|------|------|---------|
| SESSION-001 | Adam（终端1） | SA模板 | feature/sa-templates | 进行中 | 2025-05-24 10:30 |
| SESSION-002 | Adam（终端2） | PM工作流 | feature/pm-workflows | 进行中 | 2025-05-24 10:45 |
```

### 5.2 任务认领流程

1. **检查可用任务**
   ```bash
   # 在Claude Code中使用TodoRead
   # 或检查项目管理工具
   ```

2. **认领任务**
   - 更新CLAUDE.md活跃工作会话
   - 创建功能分支
   - 更新任务状态为"进行中"

3. **定期更新**
   - 每30分钟推送提交
   - 更新CLAUDE.md中的进度
   - 立即沟通阻塞问题

## 6. 实时同步方法

### 6.1 文件系统监控

#### **Google Drive项目**
- 更改自动同步
- 约30秒的传播延迟
- 编辑前检查文件时间戳

#### **本地项目**
```bash
# 使用文件监视器
fswatch -r . | while read f; do echo "Changed: $f"; done
```

### 6.2 基于Git的同步

```bash
# 创建同步脚本（sync.sh）
#!/bin/bash
while true; do
    git fetch origin
    git status
    sleep 300  # 每5分钟检查一次
done
```

### 6.3 沟通渠道

| 渠道 | 用途 | 响应时间 |
|------|------|---------|
| CLAUDE.md | 任务状态、活跃工作 | 实时 |
| Git提交 | 代码更改 | 每30分钟 |
| Slack/Teams | 紧急问题 | < 5分钟 |
| PR评论 | 代码审查 | < 2小时 |

## 7. 冲突解决程序

### 7.1 Git合并冲突

#### **预防**
1. 在独立的文件/目录工作
2. 频繁从dev分支rebase
3. 重大重构前先沟通

#### **解决流程**
```bash
# 1. 识别冲突
git status

# 2. 拉取最新更改
git pull origin dev

# 3. 解决冲突
# 编辑冲突文件
git add [已解决的文件]
git commit -m "fix: resolve merge conflicts"

# 4. 通知团队
# 在CLAUDE.md中更新解决方案
```

### 7.2 任务重叠冲突

#### **检测**
- 定期检查CLAUDE.md
- 任务状态监控
- 团队站会

#### **解决**
1. 立即沟通
2. 确定任务所有权
3. 合并或分割工作
4. 更新任务分配

### 7.3 业务逻辑冲突

#### **流程**
1. 记录两种方法
2. 安排团队讨论
3. SA/PM做最终决定
4. 更新需求文档

## 8. 沟通标准

### 8.1 状态更新

#### **CLAUDE.md更新格式**
```markdown
## 📝 会话更新
### SESSION-001 | 2025-05-24 11:00
- ✅ 已完成：需求模板v1
- 🔄 进行中：验证框架
- 🚧 阻塞：需要PM对工作流的输入
- 📅 下一步：技术规范
```

### 8.2 提交消息标准

```
[session-id] type(scope): description

示例：
[S001] feat(sa): 添加需求模板
[S002] fix(ux): 解决响应式问题
[MAIN] docs: 更新协作协议
```

### 8.3 PR描述模板

```markdown
## 📋 摘要
更改的简要描述

## 🎯 目标
- 此PR完成的内容
- 相关任务/工单

## 🔄 会话信息
- 会话ID：SESSION-001
- 分支：feature/sa-templates
- 工作时长：2小时

## ✅ 检查清单
- [ ] 已更新CLAUDE.md
- [ ] 无合并冲突
- [ ] 测试通过（如适用）
- [ ] 文档已更新
```

## 9. 最佳实践清单

### 9.1 开始工作前
- [ ] 从dev拉取最新更改
- [ ] 检查CLAUDE.md中的活跃会话
- [ ] 验证无人在相同文件上工作
- [ ] 创建符合命名规范的功能分支
- [ ] 更新CLAUDE.md中的活跃工作会话

### 9.2 工作期间
- [ ] 至少每30分钟提交一次
- [ ] 每次提交后推送到远程
- [ ] 定期更新任务状态
- [ ] 检查团队的新更新
- [ ] 记录所做的任何决定

### 9.3 结束会话前
- [ ] 提交所有更改
- [ ] 推送到远程仓库
- [ ] 更新CLAUDE.md状态
- [ ] 如任务完成则创建PR
- [ ] 记录任何交接事项

### 9.4 避免冲突
- [ ] 仅在分配的目录工作
- [ ] 重大更改前先沟通
- [ ] 始终使用功能分支
- [ ] 频繁从dev进行rebase
- [ ] 审查他人的活跃工作

### 9.5 沟通
- [ ] 每小时更新会话状态
- [ ] 立即记录阻塞问题
- [ ] 定期审查团队更新
- [ ] 及时响应询问
- [ ] 分享经验和问题

## 📊 协作指标

跟踪这些指标以改进协作：

| 指标 | 目标 | 衡量方法 |
|------|------|---------|
| 合并冲突 | < PR的5% | Git统计 |
| 任务重叠 | < 任务的2% | 任务跟踪 |
| 同步延迟 | < 5分钟 | 更新时间戳 |
| 沟通响应 | < 15分钟 | 消息跟踪 |
| PR审查时间 | < 2小时 | GitHub指标 |

## 🚨 紧急程序

### 发生冲突时：
1. **停止**所有受影响文件的工作
2. 在团队频道**沟通**
3. **备份**任何未提交的更改
4. **协调**解决方法
5. **记录**经验教训

### 丢失工作的恢复：
```bash
# 检查git reflog
git reflog

# 恢复丢失的提交
git checkout [commit-hash]

# 检查Google Drive版本历史
# 右键文件 → 版本历史
```

---

*本协议确保多会话协作的顺畅进行，同时保持代码质量和项目一致性。根据团队反馈定期审查和更新将优化这些程序。*