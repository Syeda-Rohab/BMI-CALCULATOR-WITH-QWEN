# Feature Specification: BMI Calculator

## Overview
Create a BMI (Body Mass Index) calculator web application using HTML, CSS, and JavaScript that allows users to calculate their BMI based on their weight and height measurements. The calculator should support both metric (kg/cm) and imperial (lbs/inches) units and provide accurate BMI classification with health recommendations.

## User Scenarios & Testing

### Primary User Scenario
1. User visits the BMI calculator webpage
2. User selects measurement unit system (metric or imperial)
3. User enters their weight and height values
4. User clicks "Calculate BMI" button
5. System displays calculated BMI value, classification category, and health recommendation
6. User can adjust inputs and recalculate as needed

### Secondary User Scenarios
- User views BMI category definitions without calculating
- User switches between metric and imperial units to see equivalent measurements
- User receives appropriate error messaging for invalid inputs

### Edge Cases
- User enters zero or negative values for weight or height
- User enters extremely high or low values outside normal human ranges
- User attempts to calculate with empty fields

## Functional Requirements

### FR-001: Unit Selection
The system SHALL allow users to select between metric (kilograms and centimeters) and imperial (pounds and inches) measurement systems.

### FR-002: Input Validation
The system SHALL validate that weight and height inputs are positive numeric values.

### FR-003: BMI Calculation
The system SHALL calculate BMI using the formula:
- Metric: BMI = weight(kg) / [height(m)]²
- Imperial: BMI = [weight(lbs) × 703] / [height(in)]²

### FR-004: BMI Classification
The system SHALL classify BMI values according to standard medical categories:
- Underweight: BMI < 18.5
- Normal weight: BMI 18.5-24.9
- Overweight: BMI 25-29.9
- Obese: BMI ≥ 30

### FR-005: Result Display
The system SHALL display:
- Calculated BMI value rounded to one decimal place
- BMI category with appropriate color coding
- Health recommendation based on the BMI category

### FR-006: Unit Conversion Display
The system SHALL dynamically update unit labels when the user changes the measurement system.

## Success Criteria

### Quantitative Measures
- 100% of valid inputs result in accurate BMI calculations within 0.1 difference from standard calculations
- BMI calculations complete and display results in under 1 second
- 95% of users can successfully calculate their BMI on first attempt without instruction

### Qualitative Measures
- Users can easily distinguish between BMI categories through visual indicators
- Health recommendations are clear and appropriate for each BMI category
- Interface is intuitive and accessible across different device sizes

## Key Entities

### BMI Value
- Decimal number representing the calculated Body Mass Index
- Range: Positive numbers typically between 10 and 60

### BMI Category
- Text classification based on BMI value range
- Values: "Underweight", "Normal Weight", "Overweight", "Obese"

### Measurement Units
- System: "Metric" (kg/cm) or "Imperial" (lbs/inches)
- Weight: Positive number with appropriate unit label
- Height: Positive number with appropriate unit label

## Assumptions

- Users have basic knowledge of BMI concept and its relevance to health
- Users know their approximate weight and height measurements
- Calculations follow standard medical formulas for BMI
- Users will interpret BMI classifications in consultation with healthcare providers

## Constraints

- Calculation accuracy must match standard BMI formulas
- Interface must be usable without console interaction
- Application must work in all modern browsers without plugins
- No server-side processing required - all calculations performed client-side