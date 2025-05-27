# Zack Quotation Methodology - CLAUDE.md Section

## 💰 Zack Quotation Methodology

### Overview
The **Zack Quotation System** is Zetos' sophisticated feature-based calibration methodology that ensures accurate, consistent project estimation based on actual development effort by role.

### Key Principles
1. **Feature-Based Calibration**: Pre-defined baseline hours for 18 common feature categories
2. **Role-Specific Tracking**: Hours calculated separately for 9 roles (SA, PM, UX, FE, BE, iOS, Android, QA, DevOps)
3. **Complexity Multipliers**: Project Context Factors (PCFa) adjust estimates based on business sector, collaboration type, and service type
4. **Up-Rounding Rule**: Hours convert to full days using CEILING function (e.g., 17h → 3 days)
5. **Standard Rate**: €400/day for all roles with NO buffer

### 18 Calibration Categories
1. **CAL-STAT**: Static content pages (About, FAQ, Terms)
2. **CAL-AUTH**: Authentication systems (Login, registration, password reset)
3. **CAL-CRUD**: Basic CRUD operations (Create, Read, Update, Delete)
4. **CAL-FORM**: Form handling (Contact forms, multi-step forms)
5. **CAL-SEARCH**: Search functionality (Basic, advanced, filtered)
6. **CAL-NOTIF**: Notification systems (Email, SMS, push)
7. **CAL-PAY**: Payment processing (Checkout, subscriptions)
8. **CAL-DASH**: Dashboard interfaces (Analytics, user dashboards)
9. **CAL-REPORT**: Reporting features (Generate, export reports)
10. **CAL-API**: API integrations (Third-party services)
11. **CAL-FILE**: File management (Upload, storage, processing)
12. **CAL-CHAT**: Real-time communication (Chat, messaging)
13. **CAL-MAP**: Mapping features (Location services, maps)
14. **CAL-SOCIAL**: Social features (Sharing, comments, likes)
15. **CAL-MEDIA**: Media handling (Video, audio streaming)
16. **CAL-ECOM**: E-commerce features (Cart, inventory)
17. **CAL-MULTI**: Multi-language/tenant features
18. **CAL-ADMIN**: Admin panels and CMS

### Calculation Process
```
1. Feature Selection → Match features to calibration categories
2. Base Hours → Look up baseline hours per role from calibration table
3. Apply Feature Factor (FeFa) → Multiply individual feature complexity
4. Apply PCFa Multipliers → Business sector × Collaboration × Service type
5. Convert to Days → Total hours ÷ 8, rounded UP
6. Calculate Cost → Total days × €400
```

### Project Complexity Factors (PCFa)
**Business Sector Multipliers:**
- Banking/Regulated: 1.5x
- Government: 1.3x
- Other unregulated business: 1.2x (includes non-profits)
- Internal project: 0.8x

**Collaboration Type Multipliers:**
- Time & Materials: 1.0x
- Waterfall fixed price: 1.3x
- Agile sprints: 0.9x

**Service Type Multipliers:**
- Full development (no specs): 1.0x
- Development with specs: 0.8x
- Consulting only: 0.7x

### Example Calculation
```
Feature: User Authentication (CAL-AUTH)
Base hours: SA=8h, PM=4h, UX=12h, FE=24h, BE=32h, QA=16h
FeFa: 1.0 (standard complexity)
PCFa: 1.2 × 0.9 × 0.8 = 0.864
Total hours: 96h × 0.864 = 82.94h
Days: CEILING(82.94 ÷ 8) = 11 days
Cost: 11 days × €400 = €4,400
```

## 🤖 AI Instructions & Rules

### Core AI Capabilities
You are an expert in the Zack Quotation Methodology with extensive experience in:
- Feature-based project estimation using calibration categories
- Role-specific effort allocation across 9 development roles
- Applying complexity multipliers (FeFa and PCFa)
- Converting hours to days using up-rounding rules
- Creating accurate, consistent quotations at €400/day

### Strict Response Rules
✅ Always use the 18 calibration categories (CAL-*) for feature classification
✅ Include all 9 roles (SA, PM, UX, FE, BE, iOS, Android, QA, DevOps) in calculations
✅ Apply the up-rounding rule: hours ÷ 8 rounded UP to full days
✅ Use €400/day with NO buffer for all roles
✅ Multiply PCFa factors correctly (Business × Collaboration × Service)
✅ Show detailed breakdowns by role when creating quotations
✅ Reference the calibration baseline hours from the official table
❌ Never apply buffers or margins to the €400/day rate
❌ Never round hours down - always use CEILING function
❌ Never skip roles - include all 9 even if hours are 0

## 📋 Reference Documents

### Full Methodology
- **Master Document**: `/02_Quotation/Zack_Methodology/Zack_Methodology_Prompt.md`
- **Feature Matrix**: `/02_Quotation/Zack_Methodology/02 - Zack_Catalog - FeatureMatrix.csv`
- **Calibration Table**: `/02_Quotation/Zack_Methodology/Zack_Catalog - Calibration.csv`
- **Roles Reference**: `/02_Quotation/Zack_Methodology/03 - Zack_Catalog - Roles.csv`

### Templates
- **CSV Template**: `/02_Quotation/Zack_CSV_Template.csv`
- **CSV Guide**: `/02_Quotation/Zack_CSV_Template_Guide.md`
- **Quote Prompts**: `/02_Quotation/Official_Quote_Prompt.md`

## 💡 Quick Reference Guide

### When to Use Zack Methodology
- Creating new project quotations
- Estimating feature development effort
- Breaking down complex projects into calibrated components
- Ensuring consistent pricing across projects
- Providing transparent role-based effort allocation

### Common Pitfalls to Avoid
1. **Don't forget the up-rounding**: Always use CEILING for day conversion
2. **Include all roles**: Even if some have 0 hours for certain features
3. **Apply all PCFa multipliers**: Business × Collaboration × Service
4. **No buffer on rates**: €400/day is the final rate
5. **Match features correctly**: Use the 18 CAL-* categories precisely

### Platform-Specific Multipliers
When creating quotations, remember to apply the correct platform multiplier from the Feature Factor (FeFa):
- **Mobile iOS/Android**: 1.0x (baseline)
- **Web Application**: 0.9x
- **Desktop Application**: 1.1x
- **Cross-platform**: 1.2x
- **Webflow**: 0.8x
- **WordPress**: 0.8x
- **Shopify**: 0.8x
- **Other Low-code**: 0.7x

### Payment Structure
Standard payment terms for all Zetos projects:
- **30%** upon project kickoff
- **40%** upon development phase completion  
- **20%** upon testing phase completion
- **10%** upon go-live and project closure

All payments are net 30 days from invoice date.

## 📄 Document Update History

| Date | Version | Changes | Updated By |
|------|---------|---------|------------|
| 2025-05-28 | 2.0 | Complete rewrite focusing on Zack methodology only | Claude Code |

---

**Document Classification:** ZETOS-INTERNAL ◆

*This section should be included in project CLAUDE.md files to ensure consistent application of the Zack Quotation Methodology across all projects.*