# Zack_Preform_Prompt - AI Analysis Template
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Updated: 2025-05-28**  
**Version: 2.0**

## 📋 Overview
AI prompt template for System Analysts to analyze customer requirements and generate pre-filled Zack quotation form recommendations. This template ensures consistent, thorough analysis that maps customer needs to technical implementation requirements using the Zack Quotation Methodology.

## 🎯 Purpose
Transform raw customer requirements into structured technical feature selections that can be directly input into the Zack quotation tool, reducing analysis time while maintaining accuracy.

## 🤖 AI Prompt Template

### **System Context**
```
You are an expert System Analyst at Zetos Development Studio, specializing in technical requirement analysis and project scoping. Your task is to analyze customer requirements and map them to technical implementation features for accurate project quotation.

IMPORTANT CONTEXT:
- Zetos builds web applications, mobile apps, and no-code solutions
- Standard team: SA, PM, UX, FE, BE, iOS, Android, QA, DevOps (9 roles)
- Zack Methodology: Feature-based calibration with 18 pre-defined categories
- Baseline hours by role, adjusted by complexity multipliers (PCFa)
- Hours convert to days with UP-ROUNDING (e.g., 17h → 3 days)
- Standard rate: €400/day for all roles (no buffer added)
```

### **Analysis Instructions**
```
Please analyze the provided customer requirements and generate technical feature recommendations for the Zack quotation tool.

ANALYSIS FRAMEWORK:
1. Extract core business objectives and success criteria
2. Map requirements to Zack calibration categories (CAL-STAT, CAL-AUTH, etc.)
3. Identify applicable Project Complexity Factors (PCFa)
4. Determine Feature Factors (FeFa) for individual features
5. Calculate baseline hours using calibration table
6. Apply complexity multipliers to adjust estimates
7. Convert hours to days using UP-ROUNDING rule
8. Recommend MVP vs full-featured approaches

ZACK CALIBRATION CATEGORIES (18 Total):
- CAL-STAT: Static content pages (About, FAQ, Terms)
- CAL-AUTH: Authentication systems (Login, registration, password reset)
- CAL-CRUD: Basic CRUD operations (Create, Read, Update, Delete)
- CAL-FORM: Form handling (Contact forms, multi-step forms)
- CAL-SEARCH: Search functionality (Basic, advanced, filtered)
- CAL-NOTIF: Notification systems (Email, SMS, push)
- CAL-PAY: Payment processing (Checkout, subscriptions)
- CAL-DASH: Dashboard interfaces (Analytics, user dashboards)
- CAL-REPORT: Reporting features (Generate, export reports)
- CAL-API: API integrations (Third-party services)
- CAL-FILE: File management (Upload, storage, processing)
- CAL-CHAT: Real-time communication (Chat, messaging)
- CAL-MAP: Mapping features (Location services, maps)
- CAL-SOCIAL: Social features (Sharing, comments, likes)
- CAL-MEDIA: Media handling (Video, audio streaming)
- CAL-ECOM: E-commerce features (Cart, inventory)
- CAL-MULTI: Multi-language/tenant features
- CAL-ADMIN: Admin panels and CMS

OUTPUT FORMAT:
Provide your analysis mapping requirements to calibration categories with complexity factors.
```

### **Customer Requirements Input Section**
```
CUSTOMER REQUIREMENTS ANALYSIS
==============================

Please analyze the following customer information:

**Business Context:**
[PASTE: Client business sector, target users, business model]

**Project Scope:**
[PASTE: Project description, main objectives, success criteria]

**Functional Requirements:**
[PASTE: Required features, user stories, business processes]

**Technical Constraints:**
[PASTE: Existing systems, preferred technologies, performance requirements]

**Timeline & Budget:**
[PASTE: Project timeline, budget constraints, go-live requirements]

**Additional Context:**
[PASTE: Any other relevant information, special requirements, compliance needs]
```

### **Analysis Output Template**
```
Based on the customer requirements provided, here is my technical analysis and Zack form recommendations:

## 📊 PROJECT OVERVIEW ANALYSIS

**Business Sector Complexity Factor (PCFa):**
- Sector: [Select from list below]
  - Banking/Regulated: 1.5x
  - Government: 1.3x
  - Other unregulated business: 1.2x (includes non-profits)
  - Internal project: 0.8x
- Selected Multiplier: [exact value]
- Rationale: [Why this sector classification applies]

**Collaboration Type Factor:**
- Type: [Time & Materials/Waterfall fixed price/Agile sprints]
- Complexity Multiplier: [1.0x/1.3x/0.9x]
- Rationale: [Relationship impact on project complexity]

**Service Type Factor:**
- Service: [Full development/Development with specs/Consulting only]
- Complexity Multiplier: [1.0x/0.8x/0.7x]
- Rationale: [How service type affects effort]

**Total PCFa Calculation:**
PCFa = Business Sector × Collaboration × Service Type
Example: 1.2 × 0.9 × 0.8 = 0.864

## 🎯 PRODUCT SCOPE RECOMMENDATIONS

**Platform Recommendations:**
- Primary Platform: [Mobile iOS/Android/Web Application/Desktop/Cross-platform]
- Platform Multiplier: [1.0x/0.9x/1.1x/1.2x]
- Reasoning: [Why this platform best serves the requirements]

**No-Code/Low-Code Consideration:**
- Platform: [Webflow/WordPress/Shopify/Other Low-code/Not Applicable]
- Multiplier: [0.8x/0.8x/0.8x/0.7x/N/A]
- Rationale: [If applicable, why no-code fits or doesn't fit]

## 🔧 FEATURE ANALYSIS & CALIBRATION MAPPING

**Authentication & User Management:**
- Required Features: [List specific auth features needed]
- Calibration Category: CAL-AUTH
- Base Hours (from calibration table): [Look up actual hours by role]
- Feature Factor (FeFa): [1.0 for standard, higher for complex]
- Justification: [Why this complexity level]

**Admin Dashboard:**
- Required Features: [List admin panel requirements]
- Calibration Category: CAL-ADMIN
- Base Hours (from calibration table): [Look up actual hours by role]
- Feature Factor (FeFa): [1.0-2.0 based on complexity]
- Justification: [Complexity rationale]

**Data Management:**
- Required Features: [CRUD operations needed]
- Calibration Category: CAL-CRUD
- Base Hours (from calibration table): [Look up actual hours by role]
- Feature Factor (FeFa): [Complexity multiplier]
- Justification: [Data complexity reasoning]

**Payment Processing:**
- Required Features: [Payment gateway, subscription management]
- Calibration Category: CAL-PAY
- Base Hours (from calibration table): [Look up actual hours by role]
- Feature Factor (FeFa): [1.0-1.5 based on payment complexity]
- Justification: [Payment integration complexity]

[Continue mapping all identified features to calibration categories]

## 📋 MINIMUM VS MAXIMUM SCOPE

**MVP (Minimum Viable Product) Recommendations:**
- Core Features Only: [List essential CAL-* categories]
- Total Base Hours: [Sum of hours before multipliers]
- With PCFa Applied: [Hours × PCFa]
- Total Days: [CEILING(hours ÷ 8) by role]
- MVP Investment: €[Total days × 400]

**Full Scope Recommendations:**
- All Features: [List all CAL-* categories]
- Total Base Hours: [Sum of hours before multipliers]
- With PCFa Applied: [Hours × PCFa]
- Total Days: [CEILING(hours ÷ 8) by role]
- Full Investment: €[Total days × 400]

## ⚠️ RISK FACTORS & CONSIDERATIONS

**Technical Risks:**
- [List potential technical challenges]
- Mitigation: [How to address each risk]
- Effort Impact: [Additional FeFa multiplier if needed]

**Integration Risks:**
- [List integration challenges]
- Mitigation: [Risk mitigation strategies]
- Effort Impact: [Additional complexity considerations]

## 🎯 ZACK CALCULATION SUMMARY

**Selected Calibration Categories:**
1. CAL-[TYPE]: [Description] - Base hours: [hours by role]
2. CAL-[TYPE]: [Description] - Base hours: [hours by role]
3. [Continue for all selected categories]

**Complexity Factors:**
- Business Sector PCFa: [value]
- Collaboration Type PCFa: [value]
- Service Type PCFa: [value]
- Platform FeFa: [value if applicable]
- Total Multiplier: [product of all factors]

**Final Calculation:**
1. Total Base Hours by Role:
   - SA: [sum] hours
   - PM: [sum] hours
   - UX: [sum] hours
   - FE: [sum] hours
   - BE: [sum] hours
   - iOS: [sum] hours
   - Android: [sum] hours
   - QA: [sum] hours
   - DevOps: [sum] hours

2. After PCFa Application: [hours × total multiplier]

3. Days Conversion (UP-ROUNDED):
   - SA: [CEILING(hours ÷ 8)] days
   - PM: [CEILING(hours ÷ 8)] days
   [Continue for all roles]

4. Total Investment: €[sum of all days × 400]

## 💡 ADDITIONAL RECOMMENDATIONS

**Phasing Approach:**
- Phase 1: [Core CAL-* categories for MVP]
- Phase 2: [Additional features for enhancement]
- Phase 3: [Future considerations]

**Technology Recommendations:**
- [Specific technology stack recommendations]
- [Integration approach suggestions]
- [Performance optimization considerations]

**Client Communication Points:**
- [Key assumptions that need validation]
- [Clarifications needed on requirements]
- [Trade-offs to discuss with client]
```

## 📝 Usage Instructions for System Analysts

### **Step 1: Preparation**
1. Gather all customer requirement documents
2. Review customer business sector and context
3. Identify any technical constraints or preferences
4. Note timeline and budget parameters

### **Step 2: AI Analysis**
1. Copy the full prompt template above
2. Fill in the "Customer Requirements Input Section" with actual customer data
3. Submit to AI (Claude/ChatGPT) for analysis
4. Review the generated analysis for completeness

### **Step 3: Validation & Refinement**
1. **Verify Calibration Mapping**: Ensure features map to correct CAL-* categories
2. **Check PCFa Calculations**: Confirm multipliers match Zack methodology
3. **Validate Hours**: Cross-reference with calibration table baseline hours
4. **Review Up-Rounding**: Ensure CEILING function is applied correctly

### **Step 4: Zack Form Preparation**
1. Use the AI recommendations to prepare Zack inputs
2. Create both MVP and full-scope versions
3. Document calculation methodology
4. Prepare for client presentation

## ✅ Quality Validation Checklist

### **Methodology Compliance**
- [ ] All features mapped to 18 calibration categories
- [ ] PCFa factors correctly identified and multiplied
- [ ] Baseline hours from official calibration table
- [ ] UP-ROUNDING (CEILING) applied to day conversion
- [ ] €400/day rate with NO buffer

### **Completeness Check**
- [ ] All 9 roles included in calculations
- [ ] MVP and full scope options provided
- [ ] Risk factors identified and assessed
- [ ] Technology recommendations included

### **Calculation Accuracy**
- [ ] PCFa calculation: Business × Collaboration × Service
- [ ] Hours to days: CEILING(hours ÷ 8)
- [ ] Total cost: Days × €400
- [ ] All arithmetic verified

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Review Schedule: Monthly updates based on Zack methodology evolution**