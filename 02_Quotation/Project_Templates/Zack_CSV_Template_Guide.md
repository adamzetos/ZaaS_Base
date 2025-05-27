# Zack CSV Template Guide - Google Form Response Format
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
This guide explains the Zack CSV template format that matches Google Forms response output. The CSV template enables System Analysts to prepare bulk quotations or import pre-analyzed requirements into the Zack quotation system.

## 🎯 Purpose
Provide a standardized CSV format that:
- Matches Google Forms response structure exactly
- Enables bulk quotation preparation
- Facilitates AI-generated pre-filling of Zack forms
- Maintains consistency with Zack's calibration methodology

## 📊 CSV Structure

### **Column Headers (Must Match Exactly)**
```csv
Timestamp,Client Name,Project Name,System Analyst,1. User Management,2. Authentication & Authorization,3. Content Management,4. Notification System,5. Payment Integration,6. Analytics & Reporting,7. API Management,8. Multi-tenancy,9. Workflow Automation,10. Search & Discovery,11. File Management,12. Admin Dashboard,13. Data Export/Import,14. Email Integration,15. Localization,16. Security Features,17. Performance Optimization,18. Mobile Responsiveness,19. Third-party Integrations,20. Backup & Recovery,PCFa (Platform Complexity Factor),FeFa (Feature Factor),SA Man-days,PM Man-days,Designer Man-days,FE Man-days,BE Man-days,iOS Man-days,Android Man-days,QA Man-days,Total Man-days,Daily Rate (EUR),Total Cost (EUR),Notes
```

### **Field Definitions**

#### **Administrative Fields**
1. **Timestamp**: Google Form submission time (Format: "YYYY/M/D H:MM:SS")
2. **Client Name**: Full company name
3. **Project Name**: Descriptive project identifier
4. **System Analyst**: SA name who prepared the quotation

#### **Calibration Items (1-20)**
Complexity scores from 0-10 for each technical feature:
- **0**: Not required
- **1-3**: Basic implementation
- **4-6**: Standard implementation
- **7-9**: Advanced implementation
- **10**: Enterprise-grade implementation

1. **User Management**: User profiles, roles, permissions
2. **Authentication & Authorization**: Login, SSO, 2FA, OAuth
3. **Content Management**: CMS, media handling, versioning
4. **Notification System**: Email, SMS, push, in-app
5. **Payment Integration**: Payment gateways, subscriptions
6. **Analytics & Reporting**: Dashboards, reports, metrics
7. **API Management**: REST/GraphQL, documentation, rate limiting
8. **Multi-tenancy**: Tenant isolation, customization
9. **Workflow Automation**: Business process automation
10. **Search & Discovery**: Full-text search, filters, facets
11. **File Management**: Upload, storage, processing
12. **Admin Dashboard**: System administration interface
13. **Data Export/Import**: Bulk operations, formats
14. **Email Integration**: Templates, tracking, automation
15. **Localization**: Multi-language, regional settings
16. **Security Features**: Encryption, audit logs, compliance
17. **Performance Optimization**: Caching, CDN, optimization
18. **Mobile Responsiveness**: Adaptive design, PWA
19. **Third-party Integrations**: External services, APIs
20. **Backup & Recovery**: Data protection, disaster recovery

#### **Complexity Factors**
- **PCFa (Platform Complexity Factor)**: 
  - 1.0 = Simple (Bubble/Webflow)
  - 1.2 = Standard (React with standard stack)
  - 1.5 = Complex (Microservices, multiple platforms)
  - 2.0 = Enterprise (High-availability, distributed)

- **FeFa (Feature Factor)**:
  - 1.0 = Basic features only
  - 1.15 = Standard feature set
  - 1.3 = Advanced features
  - 1.5 = Full enterprise features

#### **Effort Estimation (Man-days)**
- **SA Man-days**: System analysis effort
- **PM Man-days**: Project management effort
- **Designer Man-days**: UX/UI design effort
- **FE Man-days**: Frontend development effort
- **BE Man-days**: Backend development effort
- **iOS Man-days**: iOS development effort (0 if not needed)
- **Android Man-days**: Android development effort (0 if not needed)
- **QA Man-days**: Quality assurance effort

#### **Financial Fields**
- **Total Man-days**: Sum of all role efforts
- **Daily Rate (EUR)**: Standard rate (typically 400)
- **Total Cost (EUR)**: Total Man-days × Daily Rate
- **Notes**: Additional context, assumptions, or variations

## 📝 Usage Instructions

### **For Manual Entry**
1. Open Zack_CSV_Template.csv in Excel or Google Sheets
2. Fill in administrative fields
3. Score each calibration item (0-10)
4. Set complexity factors based on project architecture
5. Calculate effort distribution
6. Add notes for context

### **For AI-Generated Pre-filling**
1. Use Zack_Preform_Prompt.md to analyze requirements
2. Copy AI-generated scores to CSV
3. Create two rows:
   - Row 1: MVP version (minimum viable features)
   - Row 2: Full version (all requested features)
4. Validate and adjust as needed

### **For Bulk Import**
1. Prepare multiple project rows in CSV format
2. Ensure all required fields are populated
3. Validate data consistency
4. Import to Google Sheets or quotation system

## ✅ Data Validation Rules

### **Required Fields**
- All fields must have values (use 0 for unused features)
- Timestamp must be valid date/time format
- Calibration scores must be 0-10 (integers)
- Complexity factors must be positive decimals
- Man-days must be positive integers or 0

### **Calculation Verification**
```
Total Man-days = SA + PM + Designer + FE + BE + iOS + Android + QA
Total Cost = Total Man-days × Daily Rate
```

### **Logical Consistency**
- If iOS/Android = 0, Mobile Responsiveness should still be scored for web
- Multi-tenancy = 0 only for single-tenant applications
- Security Features should never be 0 (minimum security always required)
- QA effort should be proportional to development effort (typically 20-30%)

## 🔄 Template Maintenance

### **Version Control**
- Template version should match Zack tool version
- Update when new calibration items added
- Archive old versions for historical quotations

### **Customization Guidelines**
- Do not modify column headers (breaks import)
- Can add columns after "Notes" for internal use
- Can modify daily rate based on market/client
- Can adjust complexity factor ranges with approval

## 📊 Example Entries

### **MVP SaaS Platform**
```csv
"2025/5/24 10:00:00","TechStart Inc","Customer Portal MVP","Sarah Chen",5,3,6,2,0,3,4,0,2,1,3,8,1,2,0,5,2,8,3,0,1.2,1.0,8,5,10,30,25,0,0,15,93,400,37200,"MVP - Core features only, no mobile apps"
```

### **Enterprise Platform**
```csv
"2025/5/24 14:30:00","GlobalCorp Ltd","Enterprise Platform","John Smith",10,10,10,8,8,10,10,10,10,8,10,10,8,8,5,10,8,10,10,8,2.0,1.5,40,25,35,120,100,45,45,50,460,400,184000,"Full enterprise solution with mobile apps"
```

## 🚨 Important Notes

1. **Google Forms Compatibility**: Column headers must match exactly for import
2. **CSV Encoding**: Use UTF-8 encoding to preserve special characters
3. **Decimal Separator**: Use period (.) not comma for decimals
4. **Date Format**: Follow Google Forms timestamp format
5. **Quoting**: Text fields with commas must be quoted

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Related Documents**: Zack_Preform_Prompt.md, Zack Quotation Methodology