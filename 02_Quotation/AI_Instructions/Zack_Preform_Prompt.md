# Zack_Preform_Prompt - AI Analysis Template
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
AI prompt template for System Analysts to analyze customer requirements and generate pre-filled Zack quotation form recommendations. This template ensures consistent, thorough analysis that maps customer needs to technical implementation requirements.

## 🎯 Purpose
Transform raw customer requirements into structured technical feature selections that can be directly input into the Zack quotation tool, reducing analysis time while maintaining accuracy.

## 🤖 AI Prompt Template

### **System Context**
```
You are an expert System Analyst at Zetos Development Studio, specializing in technical requirement analysis and project scoping. Your task is to analyze customer requirements and map them to technical implementation features for accurate project quotation.

IMPORTANT CONTEXT:
- Zetos builds web applications, mobile apps, and no-code solutions
- Standard team: SA, PM, UX Designer, Frontend, Backend, iOS, Android, QA, DevOps
- Technology stack: React/Vue/Angular, Node.js/Python/Java, AWS, MySQL
- Alternative platforms: Bubble, Webflow for faster development
- All projects follow standardized Zetos development processes
```

### **Analysis Instructions**
```
Please analyze the provided customer requirements and generate technical feature recommendations for the Zack quotation tool.

ANALYSIS FRAMEWORK:
1. Extract core business objectives and success criteria
2. Identify all user roles and their specific needs
3. Map functional requirements to technical implementations
4. Determine complexity factors based on business sector and requirements
5. Recommend minimum viable product (MVP) vs full-featured approaches
6. Consider integration requirements and technical constraints
7. Assess risk factors that may impact development effort

OUTPUT FORMAT:
Provide your analysis in the structured format specified below, with clear rationale for each recommendation.
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

**Business Sector Complexity Factor:**
- Sector: [Fintech/Medtech/Retail/ERP/etc.]
- Complexity Multiplier: [1.0-1.5x] 
- Rationale: [Why this multiplier is appropriate]

**Collaboration Type Factor:**
- Type: [Regular client/Strategic partner/Business partner/Equity holding]
- Complexity Multiplier: [0.7-1.1x]
- Rationale: [Relationship impact on project complexity]

**Service Type Factor:**
- Service: [Development with Specifications/MVP/Scale/Consulting]
- Complexity Multiplier: [0.8-1.5x]
- Rationale: [How service type affects effort]

**Business Model Factor:**
- Model: [SaaS/Marketplace/Transaction/etc.]
- Complexity Multiplier: [1.0-1.5x]
- Rationale: [Business model complexity impact]

## 🎯 PRODUCT SCOPE RECOMMENDATIONS

**Platform Recommendations:**
- Primary Platform: [Website/WebApp/PWA/Mobile App/Back Office]
- Reasoning: [Why this platform best serves the requirements]

**Responsive Design Requirements:**
- Customer Facing: [Yes/No for iPhone SE, iPad Mini, Desktop]
- Back Office: [Yes/No for Desktop]
- Rationale: [User behavior and access patterns]

**Technology Stack Recommendations:**

*Frontend:*
- Recommended: [Webflow/Bubble/React/Angular/Vue/Next.js/etc.]
- Complexity Factor: [0.7-1.2x]
- Rationale: [Why this technology fits the requirements]

*Backend:*
- Recommended: [PHP/Node.js/Python/Java/etc.]
- Complexity Factor: [1.0-1.5x]
- Rationale: [Technical requirements and team expertise]

*Cloud Service:*
- Recommended: [AWS/Azure/Google Cloud/On-Premise]
- Complexity Factor: [0.9-1.15x]
- Rationale: [Infrastructure requirements and constraints]

*Database:*
- RDS: [MySQL/PostgreSQL/SQL Server/Oracle/Not Applicable]
- NoSQL: [MongoDB/Firebase/DynamoDB/Not Applicable]
- Complexity Factor: [1.0-2.0x]
- Rationale: [Data requirements and volume]

## 🔧 FEATURE ANALYSIS & MAPPING

**Authentication & User Management:**
- Required Features: [List specific auth features needed]
- Zack Selections: [Map to specific Zack form options]
- Effort Factor: [Complexity multiplier]

**Core Business Features:**
- Feature Category: [e.g., E-commerce, CRM, Project Management]
- Required Functions: [List specific business functions]
- Zack Selections: [Map to Zack form options]
- Effort Factor: [Complexity multiplier]

**Data Management:**
- Requirements: [Data types, volume, processing needs]
- Zack Selections: [Database and data handling options]
- Effort Factor: [Complexity multiplier]

**Integration Requirements:**
- Third-party APIs: [List required integrations]
- File Systems: [Upload/download requirements]
- Zack Selections: [Integration complexity options]
- Effort Factor: [Complexity multiplier]

**UI/UX Requirements:**
- Design Complexity: [Simple/Medium/Complex]
- Custom Components: [Required custom elements]
- Zack Selections: [UI complexity options]
- Effort Factor: [Complexity multiplier]

**Performance & Scalability:**
- Expected Users: [Concurrent user requirements]
- Performance Needs: [Response time, throughput]
- Zack Selections: [Performance optimization options]
- Effort Factor: [Complexity multiplier]

## 📋 MINIMUM VS MAXIMUM SCOPE

**MVP (Minimum Viable Product) Recommendations:**
- Core Features Only: [List essential features for launch]
- Technology: [Simplest viable technology stack]
- Timeline: [Fastest delivery approach]
- Estimated Effort Reduction: [% reduction from full scope]

**Maximum Scope Recommendations:**
- Full Feature Set: [All requested and suggested features]
- Advanced Technology: [Best-in-class technology choices]
- Premium Features: [Additional value-add features]
- Estimated Effort Increase: [% increase from MVP]

## ⚠️ RISK FACTORS & CONSIDERATIONS

**Technical Risks:**
- [List potential technical challenges]
- Mitigation: [How to address each risk]
- Effort Impact: [Additional complexity factors]

**Integration Risks:**
- [List integration challenges]
- Mitigation: [Risk mitigation strategies]
- Effort Impact: [Additional time/complexity]

**Business Risks:**
- [List business or requirement risks]
- Mitigation: [How to address uncertainties]
- Effort Impact: [Potential scope changes]

## 🎯 ZACK FORM FILLING RECOMMENDATIONS

**High Priority Selections (Definitely Include):**
- [List Zack form options that should definitely be selected]
- Rationale: [Why these are essential]

**Medium Priority Selections (Consider for Full Scope):**
- [List optional but valuable features]
- Rationale: [When to include these features]

**Low Priority Selections (Future Phase):**
- [List features that could be deferred]
- Rationale: [Why these can wait]

**Complexity Factors Summary:**
- Global Project Multiplier: [Final calculated multiplier]
- Key Driving Factors: [Main complexity contributors]
- Effort Distribution: [Expected % by role: SA, PM, UX, FE, BE, etc.]

## 💡 ADDITIONAL RECOMMENDATIONS

**Alternative Approaches:**
- [Suggest alternative technical approaches]
- [Cost/time trade-offs to consider]

**Future Considerations:**
- [Features that might be needed in future phases]
- [Scalability considerations for growth]

**Client Communication Points:**
- [Key points to discuss with client for clarification]
- [Assumptions that need validation]
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
1. **Review Technical Accuracy**: Verify all technology recommendations are appropriate
2. **Check Business Alignment**: Ensure recommendations match customer objectives
3. **Validate Complexity Factors**: Confirm multipliers are realistic for the project
4. **Assess Completeness**: Identify any missing requirements or considerations

### **Step 4: Zack Form Preparation**
1. Use the AI recommendations to pre-fill Zack quotation form
2. Create both MVP and full-scope versions
3. Document any deviations from AI recommendations
4. Prepare rationale for SA validation discussion

## ✅ Quality Validation Checklist

### **Business Analysis Quality**
- [ ] Business sector and model correctly identified
- [ ] All user roles and their needs captured
- [ ] Core vs optional features clearly distinguished
- [ ] Success criteria mapped to technical requirements

### **Technical Analysis Quality**
- [ ] Technology recommendations align with requirements
- [ ] Complexity factors are realistic and justified
- [ ] Integration requirements fully analyzed
- [ ] Performance and scalability considerations included

### **Risk Assessment Quality**
- [ ] Technical risks identified and assessed
- [ ] Integration challenges considered
- [ ] Timeline and budget risks evaluated
- [ ] Mitigation strategies provided

### **Output Quality**
- [ ] All sections of template completed
- [ ] Recommendations are actionable
- [ ] Rationale provided for all major decisions
- [ ] MVP vs full scope clearly differentiated

## 🔄 Continuous Improvement

### **Feedback Collection**
- Track accuracy of AI recommendations vs actual project outcomes
- Document common analysis gaps or errors
- Collect SA feedback on prompt effectiveness
- Monitor Zack quotation accuracy improvements

### **Prompt Refinement**
- Update prompt based on new Zack features or categories
- Incorporate lessons learned from completed projects
- Adjust complexity factors based on historical data
- Enhance industry-specific analysis capabilities

### **Quality Metrics**
- **Analysis Accuracy**: % of AI recommendations that align with final project scope
- **Time Savings**: Reduction in requirement analysis time
- **Quotation Accuracy**: Improvement in Zack quotation precision
- **SA Satisfaction**: Feedback scores on prompt usefulness

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Review Schedule: Monthly updates based on project feedback and Zack tool evolution**