# 04_Development - Development Phase / 开发阶段
**Classification: ZETOS-CONFIDENTIAL ▲**

## 📋 English Version

### Purpose
This directory contains all development artifacts including system architecture, backend APIs, frontend applications, database schemas, and mobile apps.

### Directory Structure
```
04_Development/
├── AI_Instructions/      # AI prompts for code generation
├── Project_Templates/    # Code templates and boilerplates
├── Architecture/        # System design and architecture docs
├── Backend/            # Server-side code and APIs
├── Frontend/           # Client-side applications
├── Database/           # Schema, migrations, seeds
└── Mobile/             # iOS and Android apps
```

### Key Deliverables
- ✅ System architecture diagram
- ✅ API documentation
- ✅ Database schema design
- ✅ Backend services
- ✅ Frontend application
- ✅ Mobile applications (if applicable)
- ✅ Integration documentation
- ✅ Deployment configurations

### Development Standards
1. **Code Quality**
   - Follow ESLint/Prettier configurations
   - Maintain >80% test coverage
   - Document all public APIs
   - Code review required for all PRs

2. **Architecture Principles**
   - Microservices or modular monolith
   - RESTful or GraphQL APIs
   - Responsive design
   - Progressive enhancement

3. **Security Requirements**
   - Input validation
   - Authentication & authorization
   - Data encryption
   - Security headers

### Git Workflow
```
feature/* → dev → preprod → master
```
See CLAUDE.md for complete Git workflow rules.

### Technology Stack
- **Backend**: [As specified in CLAUDE.md]
- **Frontend**: [As specified in CLAUDE.md]
- **Database**: [As specified in CLAUDE.md]
- **Mobile**: React Native / Flutter / Native

### Usage Guidelines
1. All code follows project conventions
2. Create feature branches for new work
3. Write tests before implementation (TDD)
4. Update documentation with code changes
5. Follow semantic versioning

### Responsible Roles
- **Backend**: Backend Developer
- **Frontend**: Frontend Developer
- **Database**: Backend Developer / DBA
- **Mobile**: Mobile Developer
- **Review**: Tech Lead / SA

---

## 📋 中文版本

### 目的
本目录包含所有开发工件，包括系统架构、后端API、前端应用、数据库模式和移动应用。

### 目录结构
```
04_Development/
├── AI_Instructions/      # 代码生成的AI提示
├── Project_Templates/    # 代码模板和样板
├── Architecture/        # 系统设计和架构文档
├── Backend/            # 服务器端代码和API
├── Frontend/           # 客户端应用
├── Database/           # 模式、迁移、种子数据
└── Mobile/             # iOS和Android应用
```

### 主要交付物
- ✅ 系统架构图
- ✅ API文档
- ✅ 数据库模式设计
- ✅ 后端服务
- ✅ 前端应用
- ✅ 移动应用（如适用）
- ✅ 集成文档
- ✅ 部署配置

### 开发标准
1. **代码质量**
   - 遵循ESLint/Prettier配置
   - 保持>80%的测试覆盖率
   - 记录所有公共API
   - 所有PR需要代码审查

2. **架构原则**
   - 微服务或模块化单体
   - RESTful或GraphQL API
   - 响应式设计
   - 渐进增强

3. **安全要求**
   - 输入验证
   - 身份验证和授权
   - 数据加密
   - 安全头

### Git工作流
```
feature/* → dev → preprod → master
```
完整Git工作流规则见CLAUDE.md。

### 技术栈
- **后端**: [如CLAUDE.md中指定]
- **前端**: [如CLAUDE.md中指定]
- **数据库**: [如CLAUDE.md中指定]
- **移动端**: React Native / Flutter / 原生

### 使用指南
1. 所有代码遵循项目约定
2. 为新工作创建功能分支
3. 实施前编写测试（TDD）
4. 随代码更改更新文档
5. 遵循语义化版本控制

### 负责角色
- **后端**: 后端开发人员
- **前端**: 前端开发人员
- **数据库**: 后端开发人员 / DBA
- **移动端**: 移动开发人员
- **审查**: 技术主管 / SA