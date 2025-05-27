# ZaaS_Quote_Template - Professional Quotation Document Structure
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 1.0**

## 📋 Overview
Complete document template structure for professional Zetos Development Studio quotations. This template provides the exact formatting, branding, and content organization for executive-level client presentations.

## 🎯 Purpose
Ensure consistent, professional presentation of all Zetos quotations while maintaining brand standards, legal compliance, and executive-level quality across all client engagements.

## 📄 Master Template Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zetos Development Studio - Professional Quotation</title>
    <style>
        /* ZETOS BRAND STYLING */
        :root {
            --zetos-primary: #1a365d;
            --zetos-secondary: #2d3748;
            --zetos-accent: #3182ce;
            --zetos-gold: #d69e2e;
            --zetos-light: #f7fafc;
            --zetos-dark: #1a202c;
            --zetos-success: #38a169;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--zetos-dark);
            background-color: #ffffff;
        }
        
        /* HEADER STYLES */
        .header {
            background: linear-gradient(135deg, var(--zetos-primary) 0%, var(--zetos-secondary) 100%);
            color: white;
            padding: 40px 60px;
            position: relative;
        }
        
        .header::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: var(--zetos-gold);
        }
        
        .logo-section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .logo {
            font-size: 36px;
            font-weight: bold;
            color: white;
        }
        
        .tagline {
            font-size: 14px;
            opacity: 0.9;
            text-align: right;
        }
        
        .document-title {
            font-size: 28px;
            font-weight: 300;
            margin-bottom: 10px;
        }
        
        .document-subtitle {
            font-size: 16px;
            opacity: 0.8;
        }
        
        /* CONTENT STYLES */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 60px;
        }
        
        .section {
            margin: 40px 0;
            page-break-inside: avoid;
        }
        
        .section-title {
            font-size: 24px;
            color: var(--zetos-primary);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--zetos-accent);
        }
        
        .subsection-title {
            font-size: 18px;
            color: var(--zetos-secondary);
            margin: 25px 0 15px 0;
            font-weight: 600;
        }
        
        /* EXECUTIVE SUMMARY STYLES */
        .executive-summary {
            background: var(--zetos-light);
            padding: 30px;
            border-left: 5px solid var(--zetos-accent);
            margin: 30px 0;
        }
        
        .highlight-box {
            background: #ffffff;
            border: 1px solid var(--zetos-accent);
            padding: 20px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        /* INVESTMENT OPTIONS STYLES */
        .investment-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 30px 0;
        }
        
        .option-card {
            border: 2px solid var(--zetos-accent);
            border-radius: 10px;
            padding: 25px;
            background: #ffffff;
        }
        
        .option-recommended {
            border-color: var(--zetos-success);
            background: #f0fff4;
        }
        
        .option-title {
            font-size: 20px;
            font-weight: bold;
            color: var(--zetos-primary);
            margin-bottom: 15px;
        }
        
        .option-price {
            font-size: 32px;
            font-weight: bold;
            color: var(--zetos-success);
            margin-bottom: 10px;
        }
        
        .option-timeline {
            color: var(--zetos-secondary);
            margin-bottom: 15px;
        }
        
        /* MODULE STYLES */
        .module {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }
        
        .module-title {
            font-size: 16px;
            font-weight: bold;
            color: var(--zetos-primary);
            margin-bottom: 10px;
        }
        
        .module-features {
            list-style: none;
            padding-left: 0;
        }
        
        .module-features li {
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
        }
        
        .module-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--zetos-success);
            font-weight: bold;
        }
        
        /* TABLE STYLES */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        .data-table th {
            background: var(--zetos-primary);
            color: white;
            padding: 12px;
            text-align: left;
            font-weight: 600;
        }
        
        .data-table td {
            padding: 12px;
            border-bottom: 1px solid #e2e8f0;
        }
        
        .data-table tr:nth-child(even) {
            background: var(--zetos-light);
        }
        
        /* TIMELINE STYLES */
        .timeline {
            position: relative;
            padding-left: 30px;
        }
        
        .timeline::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 0;
            bottom: 0;
            width: 2px;
            background: var(--zetos-accent);
        }
        
        .timeline-item {
            position: relative;
            margin-bottom: 30px;
        }
        
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -37px;
            top: 5px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: var(--zetos-accent);
        }
        
        .timeline-title {
            font-weight: bold;
            color: var(--zetos-primary);
            margin-bottom: 5px;
        }
        
        /* FOOTER STYLES */
        .footer {
            background: var(--zetos-secondary);
            color: white;
            padding: 40px 60px;
            margin-top: 60px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
        }
        
        .footer-section h4 {
            color: var(--zetos-gold);
            margin-bottom: 15px;
        }
        
        .footer-section p {
            margin-bottom: 8px;
            opacity: 0.9;
        }
        
        /* PRINT STYLES */
        @media print {
            .header, .footer {
                background: var(--zetos-primary) !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
            
            .page-break {
                page-break-before: always;
            }
            
            .no-page-break {
                page-break-inside: avoid;
            }
        }
        
        /* RESPONSIVE STYLES */
        @media (max-width: 768px) {
            .container {
                padding: 0 20px;
            }
            
            .header {
                padding: 20px;
            }
            
            .investment-options {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
```

## 📄 Document Header Template

```html
<!-- DOCUMENT HEADER -->
<header class="header">
    <div class="logo-section">
        <div>
            <div class="logo">ZETOS</div>
            <div class="tagline">Development Studio</div>
        </div>
        <div class="tagline">
            Enterprise-Grade Development Solutions<br>
            Turning Vision Into Reality
        </div>
    </div>
    <h1 class="document-title">Professional Quotation</h1>
    <p class="document-subtitle">{{CLIENT_COMPANY_NAME}} - {{PROJECT_NAME}}</p>
</header>

<!-- DOCUMENT INFORMATION SECTION -->
<div class="container">
    <div class="section">
        <table class="data-table" style="width: 100%; margin-top: 30px;">
            <tr>
                <td style="width: 25%; font-weight: bold; background: var(--zetos-light);">Quotation Number:</td>
                <td>{{QUOTATION_NUMBER}}</td>
                <td style="width: 25%; font-weight: bold; background: var(--zetos-light);">Date:</td>
                <td>{{QUOTATION_DATE}}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; background: var(--zetos-light);">Valid Until:</td>
                <td>{{VALID_UNTIL_DATE}}</td>
                <td style="font-weight: bold; background: var(--zetos-light);">Project Code:</td>
                <td>{{PROJECT_CODE}}</td>
            </tr>
            <tr>
                <td style="font-weight: bold; background: var(--zetos-light);">Prepared For:</td>
                <td>{{CLIENT_CONTACT_NAME}}, {{CLIENT_CONTACT_TITLE}}</td>
                <td style="font-weight: bold; background: var(--zetos-light);">Company:</td>
                <td>{{CLIENT_COMPANY_NAME}}</td>
            </tr>
        </table>
    </div>
</div>
```

## 🎯 Executive Summary Template

```html
<!-- EXECUTIVE SUMMARY -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Executive Summary</h2>
        
        <div class="executive-summary">
            <h3 style="color: var(--zetos-primary); margin-bottom: 15px;">Project Vision</h3>
            <p>{{PROJECT_VISION_CONTENT}}</p>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 25px;">
                <div>
                    <h4 style="color: var(--zetos-secondary); margin-bottom: 10px;">Recommended Solution</h4>
                    <p><strong>{{RECOMMENDED_OPTION_NAME}}</strong></p>
                    <p style="font-size: 24px; color: var(--zetos-success); font-weight: bold;">€{{RECOMMENDED_AMOUNT}}</p>
                    <p>{{RECOMMENDED_TIMELINE}}</p>
                </div>
                <div>
                    <h4 style="color: var(--zetos-secondary); margin-bottom: 10px;">Key Benefits</h4>
                    <ul style="list-style-type: none; padding: 0;">
                        <li style="padding: 3px 0; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--zetos-success);">✓</span>
                            {{BENEFIT_1}}
                        </li>
                        <li style="padding: 3px 0; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--zetos-success);">✓</span>
                            {{BENEFIT_2}}
                        </li>
                        <li style="padding: 3px 0; padding-left: 20px; position: relative;">
                            <span style="position: absolute; left: 0; color: var(--zetos-success);">✓</span>
                            {{BENEFIT_3}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="highlight-box">
            <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">Investment Highlights</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div>
                    <strong>Total Investment:</strong><br>
                    <span style="font-size: 20px; color: var(--zetos-success);">€{{TOTAL_INVESTMENT}}</span>
                </div>
                <div>
                    <strong>Expected ROI:</strong><br>
                    <span style="font-size: 20px; color: var(--zetos-success);">{{ROI_PERCENTAGE}}%</span>
                </div>
                <div>
                    <strong>Timeline:</strong><br>
                    <span style="font-size: 20px; color: var(--zetos-accent);">{{IMPLEMENTATION_TIMELINE}}</span>
                </div>
                <div>
                    <strong>Payback Period:</strong><br>
                    <span style="font-size: 20px; color: var(--zetos-accent);">{{PAYBACK_MONTHS}} months</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 💰 Investment Options Template

```html
<!-- INVESTMENT OPTIONS -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Investment Options</h2>
        
        <div class="investment-options">
            <!-- CORE SOLUTION -->
            <div class="option-card option-recommended">
                <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 15px;">
                    <div class="option-title">Core Solution (Recommended)</div>
                    <div style="background: var(--zetos-success); color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px;">RECOMMENDED</div>
                </div>
                <div class="option-price">€{{CORE_PRICE}}</div>
                <div class="option-timeline">{{CORE_TIMELINE}}</div>
                
                <h4 style="margin: 20px 0 10px 0; color: var(--zetos-primary);">Business Modules Included:</h4>
                {{CORE_MODULES_LIST}}
                
                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                    <strong>Core Benefits:</strong>
                    <ul class="module-features" style="margin-top: 10px;">
                        <li>{{CORE_BENEFIT_1}}</li>
                        <li>{{CORE_BENEFIT_2}}</li>
                        <li>{{CORE_BENEFIT_3}}</li>
                    </ul>
                </div>
            </div>
            
            <!-- ENHANCED SOLUTION -->
            <div class="option-card">
                <div class="option-title">Enhanced Solution</div>
                <div class="option-price">€{{ENHANCED_PRICE}}</div>
                <div class="option-timeline">{{ENHANCED_TIMELINE}}</div>
                
                <h4 style="margin: 20px 0 10px 0; color: var(--zetos-primary);">Additional Modules:</h4>
                {{ENHANCED_MODULES_LIST}}
                
                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                    <strong>Enhanced Benefits:</strong>
                    <ul class="module-features" style="margin-top: 10px;">
                        <li>{{ENHANCED_BENEFIT_1}}</li>
                        <li>{{ENHANCED_BENEFIT_2}}</li>
                        <li>{{ENHANCED_BENEFIT_3}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🏗️ Business Modules Template

```html
<!-- BUSINESS MODULES BREAKDOWN -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Solution Components</h2>
        
        <h3 class="subsection-title">Core Business Modules</h3>
        <p style="margin-bottom: 25px; color: var(--zetos-secondary);">Essential components for business operations - included in all solutions</p>
        
        <!-- MODULE TEMPLATE (Repeat for each core module) -->
        <div class="module">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4 class="module-title">{{MODULE_NAME}}</h4>
                <span style="background: var(--zetos-accent); color: white; padding: 3px 8px; border-radius: 10px; font-size: 12px;">CORE</span>
            </div>
            
            <p style="margin-bottom: 15px; color: var(--zetos-secondary);">
                <strong>Business Purpose:</strong> {{MODULE_BUSINESS_PURPOSE}}
            </p>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
                <div>
                    <h5 style="margin-bottom: 10px; color: var(--zetos-primary);">Key Features:</h5>
                    <ul class="module-features">
                        <li>{{FEATURE_1}}</li>
                        <li>{{FEATURE_2}}</li>
                        <li>{{FEATURE_3}}</li>
                    </ul>
                </div>
                <div>
                    <h5 style="margin-bottom: 10px; color: var(--zetos-primary);">Business Value:</h5>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">{{BUSINESS_VALUE}}</p>
                    
                    <div style="margin-top: 15px; padding: 10px; background: var(--zetos-light); border-radius: 5px;">
                        <strong>Investment:</strong> €{{MODULE_COST}}<br>
                        <strong>Timeline:</strong> {{MODULE_TIMELINE}}
                    </div>
                </div>
            </div>
        </div>
        
        <h3 class="subsection-title" style="margin-top: 40px;">Optional Enhancement Modules</h3>
        <p style="margin-bottom: 25px; color: var(--zetos-secondary);">Additional capabilities for competitive advantage and advanced functionality</p>
        
        <!-- OPTIONAL MODULE TEMPLATE (Repeat for each optional module) -->
        <div class="module" style="border-color: var(--zetos-gold);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h4 class="module-title">{{OPTIONAL_MODULE_NAME}}</h4>
                <span style="background: var(--zetos-gold); color: white; padding: 3px 8px; border-radius: 10px; font-size: 12px;">OPTIONAL</span>
            </div>
            
            <p style="margin-bottom: 15px; color: var(--zetos-secondary);">
                <strong>Strategic Value:</strong> {{STRATEGIC_VALUE}}
            </p>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
                <div>
                    <h5 style="margin-bottom: 10px; color: var(--zetos-primary);">Advanced Capabilities:</h5>
                    <ul class="module-features">
                        <li>{{ADVANCED_FEATURE_1}}</li>
                        <li>{{ADVANCED_FEATURE_2}}</li>
                        <li>{{ADVANCED_FEATURE_3}}</li>
                    </ul>
                </div>
                <div>
                    <h5 style="margin-bottom: 10px; color: var(--zetos-primary);">ROI Enhancement:</h5>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">{{ROI_ENHANCEMENT}}</p>
                    
                    <div style="margin-top: 15px; padding: 10px; background: #fff8e1; border-radius: 5px;">
                        <strong>Additional Investment:</strong> €{{OPTIONAL_MODULE_COST}}<br>
                        <strong>Additional Timeline:</strong> {{OPTIONAL_MODULE_TIMELINE}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 📈 Business Case Template

```html
<!-- BUSINESS CASE & ROI -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Business Case & Return on Investment</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h3 class="subsection-title">Investment Justification</h3>
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Period</th>
                            <th>Business Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Year 1</td>
                            <td style="color: var(--zetos-success); font-weight: bold;">€{{YEAR_1_IMPACT}}</td>
                        </tr>
                        <tr>
                            <td>Year 2</td>
                            <td style="color: var(--zetos-success); font-weight: bold;">€{{YEAR_2_IMPACT}}</td>
                        </tr>
                        <tr>
                            <td>Year 3</td>
                            <td style="color: var(--zetos-success); font-weight: bold;">€{{YEAR_3_IMPACT}}</td>
                        </tr>
                        <tr style="background: var(--zetos-light); font-weight: bold;">
                            <td>Total 3-Year ROI</td>
                            <td style="color: var(--zetos-success); font-size: 18px;">{{TOTAL_ROI_PERCENTAGE}}%</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="highlight-box" style="margin-top: 20px;">
                    <strong>Payback Period:</strong> {{PAYBACK_PERIOD}} months
                </div>
            </div>
            
            <div>
                <h3 class="subsection-title">Competitive Advantages</h3>
                <div style="space-y: 15px;">
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--zetos-primary); margin-bottom: 5px;">{{ADVANTAGE_1_TITLE}}</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">{{ADVANTAGE_1_DESCRIPTION}}</p>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--zetos-primary); margin-bottom: 5px;">{{ADVANTAGE_2_TITLE}}</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">{{ADVANTAGE_2_DESCRIPTION}}</p>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--zetos-primary); margin-bottom: 5px;">{{ADVANTAGE_3_TITLE}}</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">{{ADVANTAGE_3_DESCRIPTION}}</p>
                    </div>
                </div>
                
                <div class="highlight-box" style="margin-top: 20px;">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">Risk Mitigation</h4>
                    <p style="font-size: 14px;">{{RISK_MITIGATION_CONTENT}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🗓️ Implementation Timeline Template

```html
<!-- IMPLEMENTATION APPROACH -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Implementation Approach</h2>
        
        <div class="timeline">
            <!-- PHASE 1 -->
            <div class="timeline-item">
                <h4 class="timeline-title">Phase 1: Foundation & Architecture ({{PHASE_1_TIMELINE}})</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 15px;">
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Deliverables:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_1_DELIVERABLE_1}}</li>
                            <li>{{PHASE_1_DELIVERABLE_2}}</li>
                            <li>{{PHASE_1_DELIVERABLE_3}}</li>
                        </ul>
                    </div>
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Milestones:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_1_MILESTONE_1}}</li>
                            <li>{{PHASE_1_MILESTONE_2}}</li>
                            <li>{{PHASE_1_MILESTONE_3}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- PHASE 2 -->
            <div class="timeline-item">
                <h4 class="timeline-title">Phase 2: Core Development ({{PHASE_2_TIMELINE}})</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 15px;">
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Deliverables:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_2_DELIVERABLE_1}}</li>
                            <li>{{PHASE_2_DELIVERABLE_2}}</li>
                            <li>{{PHASE_2_DELIVERABLE_3}}</li>
                        </ul>
                    </div>
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Milestones:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_2_MILESTONE_1}}</li>
                            <li>{{PHASE_2_MILESTONE_2}}</li>
                            <li>{{PHASE_2_MILESTONE_3}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- PHASE 3 -->
            <div class="timeline-item">
                <h4 class="timeline-title">Phase 3: Launch & Optimization ({{PHASE_3_TIMELINE}})</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 15px;">
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Deliverables:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_3_DELIVERABLE_1}}</li>
                            <li>{{PHASE_3_DELIVERABLE_2}}</li>
                            <li>{{PHASE_3_DELIVERABLE_3}}</li>
                        </ul>
                    </div>
                    <div>
                        <h5 style="color: var(--zetos-secondary); margin-bottom: 10px;">Milestones:</h5>
                        <ul class="module-features">
                            <li>{{PHASE_3_MILESTONE_1}}</li>
                            <li>{{PHASE_3_MILESTONE_2}}</li>
                            <li>{{PHASE_3_MILESTONE_3}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 👥 Team & Expertise Template

```html
<!-- ZETOS TEAM & EXPERTISE -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Your Dedicated Zetos Team</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 40px;">
            <!-- TEAM MEMBER CARD -->
            <div class="highlight-box">
                <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">{{ACCOUNT_MANAGER_NAME}}</h4>
                <p style="color: var(--zetos-accent); font-weight: bold; margin-bottom: 10px;">Account Manager</p>
                <p style="font-size: 14px; color: var(--zetos-secondary);">{{ACCOUNT_MANAGER_BACKGROUND}}</p>
            </div>
            
            <div class="highlight-box">
                <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">{{TECHNICAL_LEAD_NAME}}</h4>
                <p style="color: var(--zetos-accent); font-weight: bold; margin-bottom: 10px;">Technical Lead</p>
                <p style="font-size: 14px; color: var(--zetos-secondary);">{{TECHNICAL_LEAD_BACKGROUND}}</p>
            </div>
            
            <div class="highlight-box">
                <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">{{PROJECT_MANAGER_NAME}}</h4>
                <p style="color: var(--zetos-accent); font-weight: bold; margin-bottom: 10px;">Project Manager</p>
                <p style="font-size: 14px; color: var(--zetos-secondary);">{{PROJECT_MANAGER_BACKGROUND}}</p>
            </div>
        </div>
        
        <h3 class="subsection-title">Zetos Development Studio Capabilities</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <div style="margin-bottom: 20px;">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Enterprise Experience</h4>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">{{ENTERPRISE_EXPERIENCE_YEARS}} years delivering mission-critical applications for Fortune 500 companies</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Industry Expertise</h4>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">Proven success in {{CLIENT_INDUSTRY_SECTOR}} with deep understanding of regulatory and competitive landscapes</p>
                </div>
            </div>
            <div>
                <div style="margin-bottom: 20px;">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Technology Leadership</h4>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">Deep expertise in {{RELEVANT_TECHNOLOGIES}} with continuous innovation and best practices</p>
                </div>
                <div style="margin-bottom: 20px;">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Quality Standards</h4>
                    <p style="font-size: 14px; color: var(--zetos-secondary);">ISO-certified development processes with enterprise-grade security and compliance frameworks</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 📋 Terms & Conditions Template

```html
<!-- TERMS & CONDITIONS -->
<div class="container">
    <div class="section page-break">
        <h2 class="section-title">Terms & Conditions</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h3 class="subsection-title">Investment Structure</h3>
                <table class="data-table">
                    <tr>
                        <td style="font-weight: bold;">Core Solution</td>
                        <td style="color: var(--zetos-success); font-weight: bold;">€{{CORE_SOLUTION_AMOUNT}}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;">Enhanced Solution</td>
                        <td style="color: var(--zetos-accent); font-weight: bold;">€{{ENHANCED_SOLUTION_AMOUNT}}</td>
                    </tr>
                </table>
                
                <h4 style="margin: 20px 0 10px 0; color: var(--zetos-primary);">Payment Terms</h4>
                <ul style="font-size: 14px; color: var(--zetos-secondary);">
                    <li>Contract Signature: {{CONTRACT_PERCENTAGE}}% (€{{CONTRACT_AMOUNT}})</li>
                    <li>Development Milestones: {{MILESTONE_PERCENTAGE}}% per milestone</li>
                    <li>Go-Live Completion: {{FINAL_PERCENTAGE}}% (€{{FINAL_AMOUNT}})</li>
                    <li>Payment Terms: Net {{PAYMENT_DAYS}} days from invoice</li>
                </ul>
            </div>
            
            <div>
                <h3 class="subsection-title">Quality Guarantees</h3>
                <div style="font-size: 14px; color: var(--zetos-secondary); line-height: 1.6;">
                    <p><strong>Warranty Period:</strong> {{WARRANTY_MONTHS}} months post-launch support included</p>
                    <p><strong>Performance Standards:</strong> {{PERFORMANCE_SLA}}</p>
                    <p><strong>Bug Resolution:</strong> {{BUG_RESOLUTION_TIME}} response time commitment</p>
                </div>
                
                <h4 style="margin: 20px 0 10px 0; color: var(--zetos-primary);">Intellectual Property</h4>
                <div style="font-size: 14px; color: var(--zetos-secondary); line-height: 1.6;">
                    <p><strong>Client Ownership:</strong> Full ownership of custom application and source code</p>
                    <p><strong>Zetos IP:</strong> Retained ownership of proprietary frameworks and methodologies</p>
                    <p><strong>Third-Party:</strong> Appropriate licensing for all third-party components</p>
                </div>
            </div>
        </div>
        
        <div style="margin-top: 40px;">
            <h3 class="subsection-title">Project Governance</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                <div class="highlight-box">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Communication</h4>
                    <p style="font-size: 14px;">Weekly status reports and monthly steering committee meetings</p>
                </div>
                <div class="highlight-box">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Change Management</h4>
                    <p style="font-size: 14px;">Formal change request process with transparent impact assessment</p>
                </div>
                <div class="highlight-box">
                    <h4 style="color: var(--zetos-primary); margin-bottom: 8px;">Quality Assurance</h4>
                    <p style="font-size: 14px;">Continuous testing and client validation at every milestone</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🚀 Next Steps Template

```html
<!-- NEXT STEPS -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Next Steps</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
            <div>
                <h3 class="subsection-title">Decision Timeline</h3>
                <table class="data-table">
                    <tr>
                        <td style="font-weight: bold; background: var(--zetos-light);">Quotation Valid Until</td>
                        <td>{{QUOTATION_VALID_UNTIL}}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; background: var(--zetos-light);">Recommended Decision By</td>
                        <td>{{RECOMMENDED_DECISION_DATE}}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; background: var(--zetos-light);">Proposed Project Start</td>
                        <td>{{PROPOSED_START_DATE}}</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold; background: var(--zetos-light);">Expected Go-Live</td>
                        <td>{{EXPECTED_GOLIVE_DATE}}</td>
                    </tr>
                </table>
            </div>
            
            <div>
                <h3 class="subsection-title">Immediate Actions</h3>
                <div class="timeline" style="padding-left: 20px;">
                    <div class="timeline-item">
                        <h4 class="timeline-title">1. Internal Review</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">Share with technical and business stakeholders for comprehensive evaluation</p>
                    </div>
                    <div class="timeline-item">
                        <h4 class="timeline-title">2. Clarification Discussion</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">Schedule optional call to address any questions or clarifications needed</p>
                    </div>
                    <div class="timeline-item">
                        <h4 class="timeline-title">3. Contract Finalization</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">Finalize terms and begin legal review process for contract execution</p>
                    </div>
                    <div class="timeline-item">
                        <h4 class="timeline-title">4. Project Kickoff</h4>
                        <p style="font-size: 14px; color: var(--zetos-secondary);">Begin discovery and technical architecture phase immediately upon contract signature</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 📞 Contact Information Template

```html
<!-- CONTACT INFORMATION -->
<div class="container">
    <div class="section">
        <h2 class="section-title">Contact Information</h2>
        
        <div class="highlight-box" style="text-align: center; padding: 40px;">
            <h3 style="color: var(--zetos-primary); margin-bottom: 20px;">Ready to Transform Your Business?</h3>
            <p style="margin-bottom: 30px; font-size: 16px;">Contact our team to discuss this proposal and answer any questions</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; text-align: left;">
                <div>
                    <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">Primary Contact</h4>
                    <p><strong>{{SALES_CONTACT_NAME}}</strong></p>
                    <p>{{SALES_CONTACT_TITLE}}</p>
                    <p>📧 {{SALES_CONTACT_EMAIL}}</p>
                    <p>📱 {{SALES_CONTACT_PHONE}}</p>
                </div>
                
                <div>
                    <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">Technical Discussion</h4>
                    <p><strong>{{TECHNICAL_CONTACT_NAME}}</strong></p>
                    <p>{{TECHNICAL_CONTACT_TITLE}}</p>
                    <p>📧 {{TECHNICAL_CONTACT_EMAIL}}</p>
                    <p>📱 {{TECHNICAL_CONTACT_PHONE}}</p>
                </div>
                
                <div>
                    <h4 style="color: var(--zetos-primary); margin-bottom: 10px;">Schedule Meeting</h4>
                    <p>Book a call directly:</p>
                    <p>🗓️ {{CALENDAR_LINK}}</p>
                    <p>Or contact us for a custom time that works for your team</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

## 🏢 Footer Template

```html
<!-- FOOTER -->
<footer class="footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Zetos Development Studio</h4>
            <p>Enterprise-Grade Development Solutions</p>
            <p>Turning Vision Into Reality</p>
            <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                © 2025 Zetos Development Studio<br>
                All rights reserved. Confidential and proprietary.
            </p>
        </div>
        
        <div class="footer-section">
            <h4>Contact Information</h4>
            <p>📧 business@zetos.com</p>
            <p>📱 {{COMPANY_PHONE}}</p>
            <p>🌐 www.zetos.com</p>
            <p>📍 {{COMPANY_ADDRESS}}</p>
        </div>
        
        <div class="footer-section">
            <h4>Connect With Us</h4>
            <p>LinkedIn: /company/zetos-dev</p>
            <p>GitHub: /zetos-studio</p>
            <p>Twitter: @ZetosStudio</p>
            <p style="margin-top: 15px; font-size: 12px;">
                Follow us for insights on enterprise development and digital transformation
            </p>
        </div>
    </div>
</footer>

</body>
</html>
```

## 📝 Template Variable Guide

### **Client Information Variables:**
- `{{CLIENT_COMPANY_NAME}}` - Full client company name
- `{{CLIENT_CONTACT_NAME}}` - Primary contact person name
- `{{CLIENT_CONTACT_TITLE}}` - Primary contact job title
- `{{PROJECT_NAME}}` - Project title/name
- `{{PROJECT_CODE}}` - Internal Zetos project identifier

### **Quotation Details Variables:**
- `{{QUOTATION_NUMBER}}` - ZET-QUOTE-YYYY-MM-XXX format
- `{{QUOTATION_DATE}}` - Current date
- `{{VALID_UNTIL_DATE}}` - Expiration date (30-60 days)

### **Investment & Pricing Variables:**
- `{{CORE_PRICE}}` - Core solution price
- `{{ENHANCED_PRICE}}` - Enhanced solution price
- `{{RECOMMENDED_AMOUNT}}` - Recommended option price
- `{{TOTAL_INVESTMENT}}` - Total recommended investment

### **Timeline Variables:**
- `{{CORE_TIMELINE}}` - Core solution delivery time
- `{{ENHANCED_TIMELINE}}` - Enhanced solution delivery time
- `{{IMPLEMENTATION_TIMELINE}}` - Overall implementation time

### **Content Variables:**
- `{{PROJECT_VISION_CONTENT}}` - Executive summary content
- `{{CORE_MODULES_LIST}}` - HTML list of core modules
- `{{ENHANCED_MODULES_LIST}}` - HTML list of optional modules
- `{{BUSINESS_CASE_CONTENT}}` - ROI and business justification

### **Team Variables:**
- `{{ACCOUNT_MANAGER_NAME}}` - Account manager name
- `{{TECHNICAL_LEAD_NAME}}` - Technical lead name
- `{{PROJECT_MANAGER_NAME}}` - Project manager name

## 📋 Usage Instructions

### **Step 1: Content Generation**
1. Use `Official_Quote_Prompt.md` to generate all content
2. Extract key values for template variables
3. Organize content into appropriate template sections

### **Step 2: Template Population**
1. Replace all `{{VARIABLE}}` placeholders with actual content
2. Ensure all pricing information is accurate
3. Verify all contact information is current
4. Customize team member information

### **Step 3: Document Finalization**
1. Review HTML output for formatting accuracy
2. Test responsive design on different screen sizes
3. Verify print layout for PDF generation
4. Validate all links and contact information

### **Step 4: Quality Assurance**
1. Executive review for professional appearance
2. Legal review for terms and conditions accuracy
3. Brand compliance check for Zetos standards
4. Final proofread for spelling and grammar

---
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Document Control: Store in encrypted Google Drive with ACL**  
**Template Version: 1.0 - Master HTML template for all Zetos quotations**