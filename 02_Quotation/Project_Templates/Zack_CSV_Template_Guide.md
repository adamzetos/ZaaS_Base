# Zack CSV Template Guide - Version 2.0
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Updated: 2025-05-28**  
**Version: 2.0**

## 📋 Overview
This guide explains the updated Zack CSV template format that uses the calibration-based methodology. The CSV template enables System Analysts to prepare bulk quotations using the 18 calibration categories (CAL-*) with accurate Project Complexity Factors (PCFa).

## 🎯 Purpose
Provide a standardized CSV format that:
- Uses the 18 calibration categories from Zack methodology
- Calculates hours based on baseline calibration table
- Applies PCFa multipliers correctly
- Converts hours to days using UP-ROUNDING (CEILING)
- Maintains €400/day rate with NO buffer

## 📊 CSV Structure

### **Column Headers (Must Match Exactly)**
```csv
Project,Client,Date,SA,Business_Sector,PCFa_Business,Collaboration_Type,PCFa_Collaboration,Service_Type,PCFa_Service,Total_PCFa,CAL-STAT,CAL-AUTH,CAL-CRUD,CAL-FORM,CAL-SEARCH,CAL-NOTIF,CAL-PAY,CAL-DASH,CAL-REPORT,CAL-API,CAL-FILE,CAL-CHAT,CAL-MAP,CAL-SOCIAL,CAL-MEDIA,CAL-ECOM,CAL-MULTI,CAL-ADMIN,SA_Hours,PM_Hours,UX_Hours,FE_Hours,BE_Hours,iOS_Hours,Android_Hours,QA_Hours,DevOps_Hours,Total_Hours,SA_Days,PM_Days,UX_Days,FE_Days,BE_Days,iOS_Days,Android_Days,QA_Days,DevOps_Days,Total_Days,Total_Cost_EUR
```

### **Field Definitions**

#### **Project Information (Columns A-D)**
- **Project**: Project name/identifier
- **Client**: Client company name
- **Date**: Date of quotation (YYYY-MM-DD)
- **SA**: System Analyst name

#### **PCFa Factors (Columns E-K)**
- **Business_Sector**: Banking_Regulated / Government / Other_unregulated / Internal_project
- **PCFa_Business**: 1.5 / 1.3 / 1.2 / 0.8
- **Collaboration_Type**: Time_Materials / Waterfall_fixed / Agile_sprints
- **PCFa_Collaboration**: 1.0 / 1.3 / 0.9
- **Service_Type**: Full_development / Development_with_specs / Consulting_only
- **PCFa_Service**: 1.0 / 0.8 / 0.7
- **Total_PCFa**: Product of all PCFa factors (auto-calculated)

#### **Calibration Categories (Columns L-AC)**
Enter count of features for each category (0, 1, 2, 3...):
- **CAL-STAT**: Static content pages
- **CAL-AUTH**: Authentication systems
- **CAL-CRUD**: Basic CRUD operations
- **CAL-FORM**: Form handling
- **CAL-SEARCH**: Search functionality
- **CAL-NOTIF**: Notification systems
- **CAL-PAY**: Payment processing
- **CAL-DASH**: Dashboard interfaces
- **CAL-REPORT**: Reporting features
- **CAL-API**: API integrations
- **CAL-FILE**: File management
- **CAL-CHAT**: Real-time communication
- **CAL-MAP**: Mapping features
- **CAL-SOCIAL**: Social features
- **CAL-MEDIA**: Media handling
- **CAL-ECOM**: E-commerce features
- **CAL-MULTI**: Multi-language/tenant
- **CAL-ADMIN**: Admin panels and CMS

#### **Calculated Hours (Columns AD-AL)**
Hours after applying PCFa (auto-calculated):
- **SA_Hours**: System Analyst hours
- **PM_Hours**: Project Manager hours
- **UX_Hours**: UX Designer hours
- **FE_Hours**: Frontend Developer hours
- **BE_Hours**: Backend Developer hours
- **iOS_Hours**: iOS Developer hours
- **Android_Hours**: Android Developer hours
- **QA_Hours**: QA Engineer hours
- **DevOps_Hours**: DevOps Engineer hours
- **Total_Hours**: Sum of all hours

#### **Calculated Days (Columns AM-AV)**
Days using CEILING(hours ÷ 8):
- **SA_Days**: System Analyst days
- **PM_Days**: Project Manager days
- **UX_Days**: UX Designer days
- **FE_Days**: Frontend Developer days
- **BE_Days**: Backend Developer days
- **iOS_Days**: iOS Developer days
- **Android_Days**: Android Developer days
- **QA_Days**: QA Engineer days
- **DevOps_Days**: DevOps Engineer days
- **Total_Days**: Sum of all days

#### **Cost (Column AW)**
- **Total_Cost_EUR**: Total_Days × €400

## 📊 Baseline Hours Reference Table

| Category | SA | PM | UX | FE | BE | iOS | Android | QA | DevOps |
|----------|----|----|----|----|----|----|---------|-------|---------|
| CAL-STAT | 1 | 2 | 8 | 16 | 8 | 0 | 0 | 4 | 2 |
| CAL-AUTH | 2 | 4 | 8 | 16 | 24 | 8 | 8 | 12 | 2 |
| CAL-CRUD | 4 | 8 | 16 | 32 | 40 | 16 | 16 | 16 | 2 |
| CAL-FORM | 2 | 4 | 12 | 24 | 16 | 8 | 8 | 8 | 1 |
| CAL-SEARCH | 2 | 4 | 8 | 16 | 24 | 8 | 8 | 8 | 2 |
| CAL-NOTIF | 2 | 4 | 4 | 8 | 16 | 8 | 8 | 8 | 2 |
| CAL-PAY | 4 | 8 | 8 | 16 | 32 | 16 | 16 | 16 | 4 |
| CAL-DASH | 4 | 8 | 24 | 40 | 32 | 16 | 16 | 16 | 2 |
| CAL-REPORT | 3 | 6 | 16 | 24 | 32 | 12 | 12 | 12 | 2 |
| CAL-API | 4 | 6 | 4 | 16 | 32 | 16 | 16 | 16 | 4 |
| CAL-FILE | 2 | 4 | 8 | 16 | 24 | 12 | 12 | 12 | 3 |
| CAL-CHAT | 3 | 6 | 16 | 32 | 40 | 24 | 24 | 20 | 4 |
| CAL-MAP | 2 | 4 | 12 | 24 | 20 | 16 | 16 | 12 | 2 |
| CAL-SOCIAL | 2 | 4 | 12 | 20 | 16 | 12 | 12 | 10 | 2 |
| CAL-MEDIA | 3 | 6 | 16 | 32 | 40 | 20 | 20 | 16 | 4 |
| CAL-ECOM | 6 | 12 | 32 | 64 | 80 | 32 | 32 | 32 | 4 |
| CAL-MULTI | 4 | 8 | 16 | 32 | 40 | 16 | 16 | 16 | 2 |
| CAL-ADMIN | 4 | 8 | 24 | 40 | 32 | 0 | 0 | 16 | 2 |

## 📝 Calculation Process

### **Step 1: Select Calibration Features**
For each feature needed, increment the count in the appropriate CAL-* column.

### **Step 2: Calculate Base Hours**
For each role:
```
Base_Hours = Σ(CAL_count × Baseline_hours_for_category)
```

### **Step 3: Apply PCFa**
```
Adjusted_Hours = Base_Hours × Total_PCFa
where Total_PCFa = PCFa_Business × PCFa_Collaboration × PCFa_Service
```

### **Step 4: Convert to Days**
```
Days = CEILING(Adjusted_Hours ÷ 8)
```

### **Step 5: Calculate Cost**
```
Total_Cost = Total_Days × €400
```

## ✅ Data Validation Rules

### **Required Fields**
- All PCFa fields must have valid selections
- CAL-* fields must be non-negative integers (0, 1, 2, ...)
- Date must be in YYYY-MM-DD format
- All calculated fields must use formulas, not manual entry

### **Formula Examples (Excel/Sheets)**
```excel
# Total_PCFa (K2)
=F2*H2*J2

# SA_Hours (AD2)
=SUMPRODUCT(L2:AC2,BaselineTable[SA])*K2

# SA_Days (AM2)
=CEILING(AD2/8,1)

# Total_Days (AV2)
=SUM(AM2:AU2)

# Total_Cost_EUR (AW2)
=AV2*400
```

### **Logical Consistency**
- Mobile-only projects should have 0 for web-specific features
- iOS/Android hours should be 0 for web-only projects
- DevOps hours should reflect infrastructure complexity
- QA hours should be proportional to development effort

## 🔄 Common Scenarios

### **MVP Web Application**
- Business: Other_unregulated (1.2x)
- Collaboration: Agile_sprints (0.9x)
- Service: Development_with_specs (0.8x)
- Features: CAL-STAT(1), CAL-AUTH(1), CAL-CRUD(2), CAL-FORM(1), CAL-DASH(1), CAL-ADMIN(1)

### **Enterprise Platform**
- Business: Banking_Regulated (1.5x)
- Collaboration: Waterfall_fixed (1.3x)
- Service: Full_development (1.0x)
- Features: All CAL-* categories with multiple instances

### **No-Code/Low-Code Project**
- Apply platform-specific FeFa multiplier (0.7-0.8x) as additional factor
- Reduce DevOps allocation
- Focus on configuration rather than development hours

## 🚨 Important Notes

1. **UP-ROUNDING**: Always use CEILING function for day conversion
2. **NO BUFFER**: €400/day is the final rate - do not add any buffer
3. **ALL ROLES**: Include all 9 roles even if some have 0 hours
4. **PCFa MULTIPLICATION**: Multiply all factors together, don't add
5. **BASELINE REFERENCE**: Always use official calibration table hours

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Related Documents**: Zack_Methodology_Prompt.md, Calibration Table, Feature Matrix