Zetos Document Control Regulations
泽托斯文件管控条例
 Version 1.0 – Effective 2025-05-01 – Owner (CISO)

1️⃣ 🎯 Purpose / 目的
EN: Establish a company-wide framework to classify, label, handle and protect Zetos information assets, ensuring confidentiality, integrity, availability and compliance (ISO 27001, GDPR, CN-PIPL).
 中文: 建立全公司统一的信息分类、标识、处理与保护框架，确保泽托斯信息资产的保密性、完整性、可用性及合规性（符合 ISO 27001、GDPR、个人信息保护法）。

2️⃣ 📌 Scope / 范围
EN: Applies to all employees, contractors and third parties who create, access, store or dispose of Zetos information in any format (digital, paper, audio, video).
 中文: 适用于所有生成、使用、存储或销毁泽托斯信息的员工、外包人员与第三方，覆盖一切介质（电子、纸质、音频、视频）。

3️⃣ 🗂️ Classification Levels / 信息分类级别
Level & Label
Definition (EN)
定义（中文）
Examples / 示例
Public
ZETOS-PUBLIC
Freely shareable; no harm if disclosed.
可公开，泄露不造成损害。
Press releases, website blogs.
Internal
ZETOS-INTERNAL
For all Zetos staff; moderate operational impact.
限公司内部；泄露影响一般。
Process manuals, org charts.
Confidential
ZETOS-CONFIDENTIAL
Business-sensitive; competitive or contractual risk.
商业敏感；涉及竞争或合同风险。
Customer lists, source code, P&L.
Restricted
ZETOS-RESTRICTED
Highly sensitive; legal / regulatory or financial harm.
极度敏感；涉及法律/监管或重大财务风险。
Crypto keys, payroll data, M&A docs.


4️⃣ 🔖 Labeling Requirements / 标识要求
Header & footer must show the level code (◆ green = Internal, ▲ amber = Confidential, ■ red = Restricted).


Metadata tag auto-applied via Google Workspace Labels (AIP equivalent).


Watermark (username + timestamp) for all Confidential & Restricted PDFs/prints.


中文:


页眉页脚必须显示级别代码（◆绿色：内部；▲橙色：机密；■红色：严格保密）。


通过 Google Workspace 标签自动写入元数据。


机密及严格保密文档打印或PDF需动态水印（用户名＋时间）。



5️⃣ 🔒 Handling Controls / 处理控制
Stage
Public
Internal
Confidential
Restricted
Storage
Std. Drive
Google Drive (corp)
Encrypted drive + ACL
HSM / Zero-trust vault
Sharing
Any
Corp e-mail
Encrypted e-mail/SFTP; NDA
End-to-end encrypted channel (PGP/Tresorit)
Printing
Allowed
Badge printer
Watermark; sign-out log
No local printing; secure room
Disposal
Recycle bin
Shred bin
Cross-cut shred / secure erase
Certified destruction

中文控制措施同上表所示。

6️⃣ 👥 Roles & Responsibilities / 角色职责
Role
Duties (EN)
职责（中文）
Information Owner
Classify docs; review access yearly.
归属人：文档分类，年度权限复审。
Data Steward (IT Security)
Configure labels; audit controls.
数据管理员：配置标签，执行审计。
Employees / Contractors
Follow handling rules; report incidents.
员工/承包商：遵守规则，报告事件。
Compliance Team
Sample 5 % docs quarterly; drive ISO 27001 audits.
合规组：季度抽检5%，主导 ISO 27001审核。


7️⃣ 📈 Monitoring & Enforcement / 监控与执行
KPIs: ≥ 95 % correctly-labeled docs; zero Critical data breaches.


DLP alerts: Block external sharing of Confidential/Restricted docs.


Quarterly penetration test of sharing & vault controls.


Escalation: Violations handled per HR disciplinary matrix up to termination & legal action.


中文:


关键指标：正确标识率 ≥ 95%，重大泄露 0 起。


DLP 实时拦截机密/严格保密外发。


每季度渗透测试。


违规按人事纪律矩阵执行，可至解聘及法律追究。



8️⃣ 🎓 Training / 培训
15-minute e-learning at onboarding; annual refresher (≥ 80 % pass).


Desk reference card + intranet quick-search guide.


中文：入职 15 分钟线上培训，年度复训；发放桌面卡片与内网速查表。



9️⃣ 🔄 Review & Update / 评审与更新
Policy reviewed every 12 months or after major incident/legislative change.


Owner logs changes in the Policy Register; Board approval required for level or control changes.


中文：每 12 个月或重大事件/法规变动后复评；更改记录于《政策登记册》，涉及级别或控制调整须董事会批准。



✅ Approval Record / 批准记录
Date
Name & Title
Action
2025-04-30
Adam CHIN, CTO
Review ✔
2025-05-01
Anthony, CEO
Issue ✔
2025-05-01
Theo, COO
Operation ✔



