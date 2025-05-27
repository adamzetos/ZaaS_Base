# UXPilot Prompt Templates - Component-First Design System
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-24**  
**Version: 2.1**  
**Purpose: Component-based AI design generation for consistent IT systems**

## 📋 Overview

This document provides UXPilot prompt templates following a component-first approach. By establishing a comprehensive component library FIRST, then referencing it in all subsequent page designs, we ensure consistency across the entire project.

## ⚠️ Character Limits (Tested & Verified)

### Actual Limits:
- **Context Box**: 8,000-10,000 characters ✅ (Much larger than expected!)
- **Page Description**: 3,000 characters ✅ (Plenty of room for details)
- **Flow Input**: 500-800 characters ⚡ (Keep concise, rely on context)

### Optimization Strategy:
1. **Maximize Context Box** - Include complete design system (8-10k chars available!)
2. **Detailed Page Descriptions** - Use the full 3k for comprehensive specs
3. **Concise Flow Descriptions** - Let the rich context carry the consistency

## 🎯 Critical Workflow Order

### ⚠️ IMPORTANT: Follow this exact sequence:
1. **Generate Component Library** (Template 1) - MUST DO FIRST
2. **Document/Screenshot Components** - Save for reference
3. **Generate Layout Templates** (Template 2) - Basic page structures
4. **Design Individual Pages** (Templates 3-6) - Always reference component library
5. **Use Edit Feature** - Refine any inconsistencies

---

## 🧩 Template 1: Component Library Generation [DO THIS FIRST!]

### Purpose: Create comprehensive design system foundation

### 💡 Pro Tip: With 8-10k characters available, be EXTREMELY detailed here!

#### Input Box 1 - Project Context:
```
Create a comprehensive design system for [CUSTOMER_NAME]'s [PROJECT_TYPE].

Brand Specifications:
- Primary Colors: [HEX_VALUES - e.g., #1E40AF, #3B82F6]
- Secondary Colors: [HEX_VALUES - e.g., #F59E0B, #10B981]
- Background Colors: [HEX_VALUES - e.g., #FFFFFF, #F9FAFB, #F3F4F6]
- Error/Warning/Success: [#EF4444, #F59E0B, #10B981]

Typography System:
- Primary Font: [FONT_NAME - e.g., Inter, Roboto]
- Heading Scale: [H1: 32px/40px, H2: 24px/32px, H3: 20px/28px, H4: 16px/24px]
- Body Text: [16px/24px regular, 14px/20px small]
- UI Text: [14px/20px medium for buttons, 12px/16px for captions]

Spacing System:
- Base Unit: [8px]
- Scale: [4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px]
- Component Padding: [12px small, 16px medium, 20px large]
- Border Radius: [4px small, 8px medium, 12px large]

Design Principles:
- Style: [modern, clean, professional]
- Shadows: [0 1px 3px rgba(0,0,0,0.1) for cards]
- Borders: [1px solid #E5E7EB]
- Interactions: [200ms transitions, subtle hover states]

Component Requirements:
ALL components must show: default, hover, active, focus, disabled states
Maintain WCAG AA accessibility standards
Include both light and dark variations where applicable
```

#### Input Box 2 - Page Description:
```
Generate a complete component library page showing:

BUTTONS:
- Primary Button (filled background, white text)
- Secondary Button (outline style)
- Tertiary Button (text only, no background)
- Icon Button (square, icon only)
- Button sizes: Small (32px), Medium (40px), Large (48px)

FORM ELEMENTS:
- Text Input (with label, helper text, error state)
- Password Input (with show/hide toggle)
- Textarea (resizable, character count)
- Select Dropdown (custom styled)
- Checkbox (custom design)
- Radio Button (custom design)
- Toggle Switch (on/off states)
- Search Input (with icon)

CARDS:
- Basic Card (with padding and shadow)
- Clickable Card (hover state)
- Stats Card (icon, number, label)
- Content Card (image, title, description, actions)
- Profile Card (avatar, name, role, actions)

NAVIGATION:
- Header Navigation Bar (logo, menu items, user avatar)
- Mobile Navigation (hamburger menu)
- Sidebar Navigation (collapsible)
- Breadcrumbs
- Tabs (horizontal)
- Pagination

FEEDBACK:
- Alert Messages (info, warning, error, success)
- Toast Notifications (auto-dismiss)
- Modal Dialog (with overlay)
- Loading Spinner
- Progress Bar
- Skeleton Loader

TYPOGRAPHY:
- All heading levels (H1-H6)
- Body text variations
- Link styles
- List styles (ordered/unordered)

Show each component with all interactive states clearly labeled.
```

---

## 📐 Template 2: Layout Templates

### Purpose: Create reusable page structures using component library

#### Input Box 1 - Project Context:
```
[COPY ENTIRE CONTEXT FROM TEMPLATE 1]

ADDITIONAL INSTRUCTION:
Use EXACTLY the components from our established component library.
Reference specific components by name when creating layouts.
Maintain identical styling, spacing, and interaction patterns.
```

#### Input Box 2 - Page Description:
```
Create standard layout templates using our component library:

1. DASHBOARD LAYOUT:
- Use our Header Navigation component at top
- Use our Sidebar Navigation on left (collapsible)
- Main content area with our card components
- Use our standard spacing system (24px gaps)

2. FORM LAYOUT:
- Centered container (max-width: 480px)
- Use our Basic Card as container
- Stack our form components with 16px spacing
- Primary button right-aligned at bottom

3. LIST/TABLE LAYOUT:
- Full-width layout with our Header Navigation
- Filters section using our form components
- Data table with our button components for actions
- Our Pagination component at bottom

4. LANDING PAGE LAYOUT:
- Full-width sections with alternating backgrounds
- Hero section with our Primary/Secondary buttons
- Feature cards using our Content Card component
- Footer with multi-column layout

5. MOBILE LAYOUT ADAPTATION:
- Show how our components stack on mobile
- Demonstrate our Mobile Navigation usage
- Responsive padding adjustments
```

---

## 🎨 Template 3: Individual Page Design

### Purpose: Design specific pages using established components

#### Input Box 1 - Project Context:
```
[COPY ENTIRE CONTEXT FROM TEMPLATE 1]

CRITICAL INSTRUCTIONS:
- Use ONLY components from our established component library
- Do NOT create new component styles
- Reference components by exact names
- If you need a component not in library, use closest match
- Maintain exact colors, fonts, spacing from component library
```

#### Input Box 2 - Page Description:
```
Design [PAGE_NAME] for [CUSTOMER_NAME] using our component library:

Page Purpose: [WHAT THIS PAGE DOES]

Layout Structure:
- Header: Use our standard Header Navigation component
- Container: [full-width/centered/with-sidebar]

Content Sections:
1. [SECTION_NAME]:
   - Use our [SPECIFIC_COMPONENT_NAME]
   - Content: [WHAT GOES HERE]
   - Actions: [Primary Button for X, Secondary Button for Y]

2. [SECTION_NAME]:
   - Use our [SPECIFIC_COMPONENT_NAME]
   - Arrange in [LAYOUT_PATTERN]
   - Include [SPECIFIC_ELEMENTS]

Component Usage:
- Hero CTA: Our Primary Button (Large size)
- Form: Our Text Input, Select Dropdown, and Primary Button
- Cards: Our Content Card component in 3-column grid
- Feedback: Our Toast Notification for success messages

Specific Requirements:
- [ANY_PAGE_SPECIFIC_NEEDS]
- [RESPONSIVE_CONSIDERATIONS]
- [USER_FLOW_ELEMENTS]

Remember: Use EXACT component styles from our library. Do not modify component designs.
```

---

## 🔄 Template 4: Edit Existing Design

### Purpose: Refine generated designs while maintaining consistency

#### Edit Feature Instructions:
```
When using UXPilot's Edit feature:

1. SELECT the specific area to modify
2. REFERENCE the component library:
   "Replace this button with our Primary Button component from the library"
   "Adjust spacing to match our 24px standard gap"
   "Change this card to use our Content Card component style"

3. MAINTAIN consistency:
   "Keep all other elements unchanged"
   "Preserve the established design system"
   "Match the exact hex colors from our palette"

Common Edit Requests:
- "Replace generic button with our Primary Button component"
- "Adjust this form to use our standard form components"
- "Update navigation to match our Header Navigation component"
- "Fix spacing to follow our 8px grid system"
- "Change font to match our typography system"
```

---

## 📱 Template 5: Responsive Adaptation

### Purpose: Adapt desktop designs for mobile using same components

#### Input Box 1 - Project Context:
```
[COPY ENTIRE CONTEXT FROM TEMPLATE 1]

MOBILE ADAPTATION RULES:
- Use our Mobile Navigation component (hamburger menu)
- Stack components vertically
- Maintain our standard mobile padding (16px)
- Buttons become full-width on mobile
- Cards stack in single column
```

#### Input Box 2 - Page Description:
```
Adapt [PAGE_NAME] for mobile devices (375px width):

Component Transformations:
- Header Navigation → Mobile Navigation component
- Sidebar → Hidden, accessible via hamburger menu
- Multi-column cards → Single column stack
- Button groups → Stack vertically, full width
- Data tables → Card-based list view

Specific Adaptations:
- [DESKTOP_ELEMENT] → [MOBILE_TREATMENT]
- Hide: [ELEMENTS_TO_HIDE_ON_MOBILE]
- Prioritize: [MOST_IMPORTANT_MOBILE_CONTENT]

Touch Optimizations:
- All buttons use Large size (48px height)
- Increase tap targets to 44px minimum
- Add proper spacing between interactive elements

Use exact same component styles, just rearranged for mobile viewport.
```

---

## 🚀 Template 6: Flow Generation

### Purpose: Create connected user journeys with consistent components

#### Using Autoflow Feature:
```
Project Context:
[COPY ENTIRE CONTEXT FROM TEMPLATE 1]

FLOW CONSISTENCY:
- Every screen uses our established component library
- Navigation remains consistent across all screens
- Form elements maintain same styling throughout
- Feedback messages use our standard components

Flow Description:
Create a [FLOW_NAME] user flow with these screens:

1. [SCREEN_1_NAME]:
   - Purpose: [WHAT USER DOES]
   - Components: [LIST SPECIFIC COMPONENTS]
   - Primary Action: [BUTTON_NAME] leads to Screen 2

2. [SCREEN_2_NAME]:
   - Purpose: [WHAT HAPPENS HERE]
   - Uses: [SPECIFIC COMPONENTS FROM LIBRARY]
   - Actions: [NEXT_STEPS]

3. [SCREEN_3_NAME]:
   - Purpose: [COMPLETION/RESULT]
   - Shows: [SUCCESS_STATE_USING_OUR_COMPONENTS]

Maintain exact component styling across all screens.
Use our standard transitions and feedback patterns.
```

---

## 💡 Best Practices for Consistency

### 1. **Always Start with Component Library**
- Never skip Template 1
- Generate comprehensive component set
- Document all component names

### 2. **Reference Components Explicitly**
- ❌ "Add a button" 
- ✅ "Use our Primary Button component (medium size)"

### 3. **Copy Full Context**
- Always include complete brand specifications
- Add consistency instructions
- Reference component library existence

### 4. **Use Edit Feature Strategically**
- Fix inconsistencies immediately
- Reference specific components when editing
- Maintain design system integrity

### 5. **Document Everything**
- Screenshot component library
- Save component names list
- Track any custom additions

---

## 📊 Quality Checklist

Before delivering any UXPilot-generated design:

- [ ] Component library was generated first
- [ ] All pages reference established components
- [ ] No unauthorized component variations
- [ ] Colors match exact HEX values
- [ ] Typography follows defined system
- [ ] Spacing uses standard grid
- [ ] Interactive states are consistent
- [ ] Mobile adaptations use same components
- [ ] Accessibility standards maintained

---

## 🔧 Troubleshooting

### If components don't match:
1. Use Edit feature to correct
2. Reference specific component by name
3. Provide exact specifications

### If new component needed:
1. First check if existing component can work
2. If not, generate separately matching system
3. Add to component library documentation

### If consistency breaks:
1. Return to component library reference
2. Use Edit feature with specific instructions
3. Explicitly state "match our component library"

---

**Document Version:** 2.1  
**Major Update:** Added verified character limits (8-10k context, 3k page, 500-800 flow)  
**Previous Version:** 2.0 - Component-first workflow  
**Next Review:** After 5 projects using new workflow