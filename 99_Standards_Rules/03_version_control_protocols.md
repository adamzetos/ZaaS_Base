# Version Control Protocols for ZaaS Platform
**Classification: ZETOS-CONFIDENTIAL ▲**
**Version**: 1.0
**Last Updated**: 2025-05-24

## 📋 English Version

### Purpose
Establish comprehensive version control protocols to ensure code quality, collaboration efficiency, and deployment safety throughout the development lifecycle.

### Git Workflow Overview

```
feature/* → dev → preprod → master
    ↓        ↓        ↓         ↓
  Working  Testing  Staging  Production
```

### Branch Management

#### 1️⃣ **Protected Branches**

| Branch | Purpose | Protection Rules |
|--------|---------|------------------|
| master | Production code | • No direct commits<br>• Requires PR from preprod<br>• PM + SA approval required<br>• All tests must pass |
| preprod | Staging/UAT | • No direct commits<br>• Requires PR from dev<br>• PM approval required<br>• Integration tests must pass |
| dev | Active development | • Default branch<br>• Direct commits allowed for fixes<br>• Feature branches merge here |

#### 2️⃣ **Feature Branches**

**Naming Convention:**
```
feature/[ticket-number]-[brief-description]
hotfix/[ticket-number]-[brief-description]
bugfix/[ticket-number]-[brief-description]
```

**Examples:**
- `feature/ZAAS-101-user-authentication`
- `hotfix/ZAAS-102-payment-critical-fix`
- `bugfix/ZAAS-103-login-validation`

### Commit Standards

#### Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

#### Commit Types
| Type | Description | Example |
|------|-------------|---------|
| feat | New feature | feat(auth): add OAuth2 login |
| fix | Bug fix | fix(payment): resolve decimal calculation |
| docs | Documentation | docs(api): update user endpoints |
| style | Code style | style(global): apply prettier formatting |
| refactor | Code refactoring | refactor(user): simplify validation logic |
| test | Add tests | test(auth): add unit tests for login |
| chore | Maintenance | chore(deps): update dependencies |

#### Commit Rules
1. **Subject line**: Max 50 characters, imperative mood
2. **Body**: Wrap at 72 characters, explain what and why
3. **Footer**: Reference issues, breaking changes

**Good Example:**
```
feat(payment): add Alipay integration

- Implement Alipay SDK integration
- Add payment status webhook handling
- Create unified payment interface

Closes #123
```

### Pull Request Process

#### 1️⃣ **Creating Pull Requests**

**PR Title Format:**
```
[ZAAS-XXX] <Type>: <Brief Description>
```

**PR Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No sensitive data exposed
```

#### 2️⃣ **Review Process**

| From → To | Reviewers | Criteria |
|-----------|-----------|----------|
| feature → dev | 1 developer | • Code quality<br>• Test coverage<br>• No conflicts |
| dev → preprod | PM | • Feature complete<br>• Tests passing<br>• Documentation |
| preprod → master | PM + SA | • UAT passed<br>• Performance verified<br>• Security checked |

### Merge Strategies

#### 1️⃣ **Feature → Dev**
- Use **Squash and merge** for clean history
- Delete feature branch after merge

#### 2️⃣ **Dev → Preprod**
- Use **Create a merge commit**
- Preserve full history

#### 3️⃣ **Preprod → Master**
- Use **Create a merge commit**
- Tag release after merge

### Release Management

#### Version Tagging
```
v<major>.<minor>.<patch>
```

**Examples:**
- `v1.0.0` - Initial release
- `v1.1.0` - New features
- `v1.1.1` - Bug fixes

#### Release Process
1. Create PR from preprod to master
2. Complete all approvals
3. Merge PR
4. Create release tag:
```bash
git checkout master
git pull origin master
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Conflict Resolution

#### Prevention
1. Pull latest changes before starting work
2. Keep branches short-lived (max 3 days)
3. Communicate about shared files

#### Resolution Steps
1. Pull latest target branch
2. Resolve conflicts locally
3. Test thoroughly
4. Commit with clear message:
```
fix: resolve merge conflicts with dev branch

- Resolved conflicts in user.service.ts
- Kept new authentication logic
- Updated tests accordingly
```

### Emergency Procedures

#### Hotfix Process
1. Create hotfix branch from master:
```bash
git checkout -b hotfix/ZAAS-XXX-description master
```

2. Fix issue and test thoroughly

3. Create PR to master (requires expedited PM + SA approval)

4. After merge, backport to preprod and dev:
```bash
git checkout preprod
git merge master
git push origin preprod

git checkout dev
git merge preprod
git push origin dev
```

### Best Practices

#### DO's ✅
- Commit early and often
- Write meaningful commit messages
- Keep commits atomic (one change per commit)
- Update branch before creating PR
- Test before pushing
- Document breaking changes

#### DON'Ts ❌
- Don't commit sensitive data
- Don't force push to protected branches
- Don't merge without reviews
- Don't skip tests
- Don't commit large binary files
- Don't rewrite public history

### Git Commands Reference

#### Daily Workflow
```bash
# Start new feature
git checkout dev
git pull origin dev
git checkout -b feature/ZAAS-XXX-description

# Regular commits
git add .
git commit -m "feat(module): add new feature"
git push origin feature/ZAAS-XXX-description

# Update branch with latest dev
git checkout dev
git pull origin dev
git checkout feature/ZAAS-XXX-description
git merge dev

# Create PR via GitHub
```

#### Useful Commands
```bash
# Check branch status
git status

# View commit history
git log --oneline --graph

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Clean working directory
git clean -fd

# Stash changes
git stash
git stash pop
```

### Metrics & Monitoring

Track these metrics monthly:
- Average PR review time
- Number of commits per PR
- Merge conflict frequency
- Hotfix frequency
- Failed deployment rate

### Training Requirements
All team members must:
1. Complete Git basics training
2. Understand branch protection rules
3. Follow commit message standards
4. Know emergency procedures

---

## 📋 中文版本

### 目的
建立全面的版本控制协议，确保整个开发生命周期中的代码质量、协作效率和部署安全。

### Git工作流概览

```
feature/* → dev → preprod → master
    ↓        ↓        ↓         ↓
  开发中   测试中   预发布    生产环境
```

### 分支管理

#### 1️⃣ **受保护分支**

| 分支 | 用途 | 保护规则 |
|------|------|----------|
| master | 生产代码 | • 禁止直接提交<br>• 需要从preprod发起PR<br>• 需要PM + SA批准<br>• 所有测试必须通过 |
| preprod | 预发布/UAT | • 禁止直接提交<br>• 需要从dev发起PR<br>• 需要PM批准<br>• 集成测试必须通过 |
| dev | 活跃开发 | • 默认分支<br>• 允许直接提交修复<br>• 功能分支合并到此处 |

#### 2️⃣ **功能分支**

**命名规范：**
```
feature/[工单号]-[简要描述]
hotfix/[工单号]-[简要描述]
bugfix/[工单号]-[简要描述]
```

**示例：**
- `feature/ZAAS-101-user-authentication`
- `hotfix/ZAAS-102-payment-critical-fix`
- `bugfix/ZAAS-103-login-validation`

### 提交标准

#### 消息格式
```
<类型>(<范围>): <主题>

<正文>

<页脚>
```

#### 提交类型
| 类型 | 描述 | 示例 |
|------|------|------|
| feat | 新功能 | feat(auth): 添加OAuth2登录 |
| fix | 错误修复 | fix(payment): 解决小数计算问题 |
| docs | 文档 | docs(api): 更新用户端点 |
| style | 代码样式 | style(global): 应用prettier格式化 |
| refactor | 代码重构 | refactor(user): 简化验证逻辑 |
| test | 添加测试 | test(auth): 添加登录单元测试 |
| chore | 维护任务 | chore(deps): 更新依赖 |

#### 提交规则
1. **主题行**：最多50个字符，使用祈使语气
2. **正文**：72个字符换行，解释做了什么和为什么
3. **页脚**：引用问题，重大变更

**良好示例：**
```
feat(payment): 添加支付宝集成

- 实现支付宝SDK集成
- 添加支付状态webhook处理
- 创建统一支付接口

Closes #123
```

### 拉取请求流程

#### 1️⃣ **创建拉取请求**

**PR标题格式：**
```
[ZAAS-XXX] <类型>: <简要描述>
```

**PR模板：**
```markdown
## 描述
变更的简要描述

## 变更类型
- [ ] 错误修复
- [ ] 新功能
- [ ] 重大变更
- [ ] 文档更新

## 测试
- [ ] 单元测试通过
- [ ] 集成测试通过
- [ ] 手动测试完成

## 检查清单
- [ ] 代码遵循样式指南
- [ ] 自我审查完成
- [ ] 为复杂代码添加注释
- [ ] 文档已更新
- [ ] 未暴露敏感数据
```

#### 2️⃣ **审查流程**

| 从 → 到 | 审查者 | 标准 |
|---------|--------|------|
| feature → dev | 1名开发者 | • 代码质量<br>• 测试覆盖率<br>• 无冲突 |
| dev → preprod | PM | • 功能完整<br>• 测试通过<br>• 文档完善 |
| preprod → master | PM + SA | • UAT通过<br>• 性能验证<br>• 安全检查 |

### 合并策略

#### 1️⃣ **Feature → Dev**
- 使用**压缩合并**保持历史清晰
- 合并后删除功能分支

#### 2️⃣ **Dev → Preprod**
- 使用**创建合并提交**
- 保留完整历史

#### 3️⃣ **Preprod → Master**
- 使用**创建合并提交**
- 合并后创建标签

### 发布管理

#### 版本标签
```
v<主版本>.<次版本>.<补丁>
```

**示例：**
- `v1.0.0` - 初始发布
- `v1.1.0` - 新功能
- `v1.1.1` - 错误修复

#### 发布流程
1. 从preprod向master创建PR
2. 完成所有审批
3. 合并PR
4. 创建发布标签：
```bash
git checkout master
git pull origin master
git tag -a v1.0.0 -m "发布版本 1.0.0"
git push origin v1.0.0
```

### 冲突解决

#### 预防
1. 开始工作前拉取最新更改
2. 保持分支短期存在（最多3天）
3. 就共享文件进行沟通

#### 解决步骤
1. 拉取最新目标分支
2. 本地解决冲突
3. 充分测试
4. 提交清晰的消息：
```
fix: 解决与dev分支的合并冲突

- 解决了user.service.ts中的冲突
- 保留了新的认证逻辑
- 相应更新了测试
```

### 紧急程序

#### 热修复流程
1. 从master创建热修复分支：
```bash
git checkout -b hotfix/ZAAS-XXX-description master
```

2. 修复问题并充分测试

3. 向master创建PR（需要加急PM + SA批准）

4. 合并后，回溯到preprod和dev：
```bash
git checkout preprod
git merge master
git push origin preprod

git checkout dev
git merge preprod
git push origin dev
```

### 最佳实践

#### 应该做 ✅
- 尽早且频繁提交
- 编写有意义的提交消息
- 保持提交原子性（每次提交一个更改）
- 创建PR前更新分支
- 推送前测试
- 记录重大变更

#### 不应该做 ❌
- 不提交敏感数据
- 不强制推送到受保护分支
- 不在没有审查的情况下合并
- 不跳过测试
- 不提交大型二进制文件
- 不重写公共历史

### Git命令参考

#### 日常工作流
```bash
# 开始新功能
git checkout dev
git pull origin dev
git checkout -b feature/ZAAS-XXX-description

# 常规提交
git add .
git commit -m "feat(module): 添加新功能"
git push origin feature/ZAAS-XXX-description

# 使用最新dev更新分支
git checkout dev
git pull origin dev
git checkout feature/ZAAS-XXX-description
git merge dev

# 通过GitHub创建PR
```

#### 有用的命令
```bash
# 检查分支状态
git status

# 查看提交历史
git log --oneline --graph

# 撤销最后一次提交（保留更改）
git reset --soft HEAD~1

# 清理工作目录
git clean -fd

# 暂存更改
git stash
git stash pop
```

### 指标与监控

每月跟踪这些指标：
- 平均PR审查时间
- 每个PR的提交数
- 合并冲突频率
- 热修复频率
- 部署失败率

### 培训要求
所有团队成员必须：
1. 完成Git基础培训
2. 理解分支保护规则
3. 遵循提交消息标准
4. 了解紧急程序