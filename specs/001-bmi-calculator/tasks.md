# Tasks: BMI Calculator

## Feature Overview

Implement a BMI (Body Mass Index) calculator web application using HTML, CSS, and JavaScript that allows users to calculate their BMI based on weight and height measurements. The calculator supports both metric (kg/cm) and imperial (lbs/inches) units and provides accurate BMI classification with health recommendations.

## Implementation Strategy

Build the BMI calculator in phases, starting with the core functionality and progressively adding features. The MVP will include basic BMI calculation with metric/imperial support. Subsequent phases will enhance the UI and add validation.

## Dependencies

- User Story 2 (Unit Selection) must be completed before User Story 3 (BMI Calculation) can begin
- User Story 3 (BMI Calculation) must be completed before User Story 4 (Result Display) can begin

## Parallel Execution Examples

- Styling tasks can run in parallel with JavaScript functionality tasks
- HTML structure and CSS can be developed independently from JavaScript logic

---

## Phase 1: Setup

Initialize the project structure and create the basic files.

- [x] T001 Create project structure with index.html, style.css, and script.js files

## Phase 2: Foundational

Create the foundational HTML structure and basic styling.

- [x] T002 [P] Create HTML structure for BMI calculator in index.html
- [x] T003 [P] Add form elements for unit selection, weight, and height inputs in index.html
- [x] T004 [P] Add result display area in index.html
- [x] T005 [P] Add BMI category information section in index.html
- [x] T006 [P] Create basic CSS layout in style.css
- [x] T007 [P] Add responsive design foundation in style.css

## Phase 3: [US1] Primary User Scenario - Basic BMI Calculation

Enable the core functionality of calculating BMI based on user inputs.

**Goal**: User can enter weight and height, select units, and get a BMI calculation result.

**Independent Test Criteria**:
- User can select between metric and imperial units
- User can enter weight and height values
- User can click calculate button and see a BMI value
- BMI calculation is accurate according to specified formulas

### Implementation Tasks

- [x] T008 [US1] Implement unit selection dropdown with metric/imperial options in index.html
- [x] T009 [US1] Add JavaScript event listener for form submission in script.js
- [x] T010 [US1] Implement BMI calculation function for metric units in script.js
- [x] T011 [US1] Implement BMI calculation function for imperial units in script.js
- [x] T012 [US1] Connect form inputs to calculation function in script.js

## Phase 4: [US2] Input Validation

Validate user inputs to ensure they are positive numeric values.

**Goal**: Prevent invalid inputs from causing incorrect calculations.

**Independent Test Criteria**:
- Entering zero or negative values shows appropriate error message
- Entering non-numeric values shows appropriate error message
- Empty fields are handled appropriately

### Implementation Tasks

- [x] T013 [US2] Add input validation for positive numeric values in script.js
- [x] T014 [US2] Implement error handling for invalid inputs in script.js
- [x] T015 [US2] Add visual feedback for invalid inputs in style.css

## Phase 5: [US3] BMI Classification

Classify the calculated BMI value according to standard medical categories.

**Goal**: Display the appropriate BMI category (Underweight, Normal Weight, Overweight, Obese) based on the calculated value.

**Independent Test Criteria**:
- BMI < 18.5 displays as "Underweight"
- BMI 18.5-24.9 displays as "Normal Weight"
- BMI 25-29.9 displays as "Overweight"
- BMI ≥ 30 displays as "Obese"

### Implementation Tasks

- [x] T016 [US3] Implement BMI classification function in script.js
- [x] T017 [US3] Map BMI values to categories (Underweight, Normal, Overweight, Obese) in script.js
- [x] T018 [US3] Add category display to result area in index.html

## Phase 6: [US4] Result Display

Display the calculated BMI value, classification, and health recommendations with appropriate styling.

**Goal**: Present results clearly with color coding and health recommendations.

**Independent Test Criteria**:
- BMI value is displayed rounded to one decimal place
- Category is displayed with appropriate color coding
- Health recommendation is shown based on the BMI category

### Implementation Tasks

- [x] T019 [US4] Format BMI value to one decimal place in script.js
- [x] T020 [US4] Add color coding for BMI categories in style.css
- [x] T021 [US4] Implement health recommendation display based on category in script.js
- [x] T022 [US4] Style result display area with appropriate colors in style.css

## Phase 7: [US5] Unit Conversion Display

Dynamically update unit labels when the user changes the measurement system.

**Goal**: Unit labels change appropriately when the user switches between metric and imperial systems.

**Independent Test Criteria**:
- When metric is selected, labels show "kg" and "cm"
- When imperial is selected, labels show "lbs" and "inches"
- Labels update immediately when the user changes the selection

### Implementation Tasks

- [x] T023 [US5] Add JavaScript to update unit labels based on selection in script.js
- [x] T024 [US5] Connect unit selection to label update function in script.js
- [x] T025 [US5] Add styling for dynamic unit labels in style.css

## Phase 8: Polish & Cross-Cutting Concerns

Enhance the UI/UX and ensure responsiveness across devices.

**Goal**: Create a polished, responsive, and accessible BMI calculator.

**Independent Test Criteria**:
- Interface works well on mobile, tablet, and desktop devices
- Color contrast meets accessibility standards
- Form elements are properly labeled for screen readers
- Overall design is aesthetically pleasing

### Implementation Tasks

- [x] T026 Add responsive design enhancements in style.css
- [x] T027 Improve accessibility with proper ARIA attributes in index.html
- [x] T028 Add smooth animations/transitions in style.css
- [x] T029 Add hover and focus states for interactive elements in style.css
- [x] T030 Test across different browsers and devices
- [x] T031 Add loading states for calculations in script.js
- [x] T032 Optimize performance and ensure <100ms calculation time in script.js