# Internal API Contract: BMI Calculator

## Overview
This document describes the internal interfaces and data flow within the BMI calculator application. Since this is a client-side application, there are no external APIs, but this contract defines how the different components interact.

## Components

### HTML Form Component
- **Inputs**:
  - `unit` (select): "metric" or "imperial"
  - `weight` (number): positive decimal value
  - `height` (number): positive decimal value
- **Event**: `submit` when form is submitted

### JavaScript Calculator Module
- **Function**: `calculateBMI(weight, height, unit)`
  - **Input**: weight (number), height (number), unit (string)
  - **Output**: BMI value (number)
  - **Formula**:
    - Metric: BMI = weight(kg) / [height(m)]²
    - Imperial: BMI = [weight(lbs) × 703] / [height(in)]²

### JavaScript Classifier Module
- **Function**: `classifyBMI(bmiValue)`
  - **Input**: bmiValue (number)
  - **Output**: object with category and color
  - **Categories**:
    - Underweight: BMI < 18.5
    - Normal Weight: BMI 18.5-24.9
    - Overweight: BMI 25-29.9
    - Obese: BMI ≥ 30

### UI Display Component
- **Updates**:
  - BMI value display element
  - BMI category display element
  - Health recommendation message
  - Color coding based on category

## Data Flow

1. User interacts with HTML form
2. Form submit event triggers JavaScript handler
3. Handler extracts values and validates inputs
4. Calculator module computes BMI
5. Classifier module determines category
6. UI display component updates the DOM with results
7. Results are displayed to user

## Error Handling

- Invalid inputs (zero, negative, non-numeric) trigger user alert
- Form validation prevents submission of invalid data
- Error messages are displayed to guide user correction