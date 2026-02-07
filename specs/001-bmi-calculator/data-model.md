# Data Model: BMI Calculator

## Entities

### BMI Value
- **Type**: Decimal number
- **Range**: Positive numbers typically between 10 and 60
- **Precision**: One decimal place
- **Validation**: Must be positive number, calculated from weight and height

### BMI Category
- **Type**: String enum
- **Values**: "Underweight", "Normal Weight", "Overweight", "Obese"
- **Validation**: Determined by BMI value ranges
  - Underweight: BMI < 18.5
  - Normal Weight: BMI 18.5-24.9
  - Overweight: BMI 25-29.9
  - Obese: BMI ≥ 30

### Measurement System
- **Type**: String enum
- **Values**: "metric", "imperial"
- **Default**: "metric"
- **Purpose**: Determines calculation formula and unit labels

### Weight Measurement
- **Type**: Positive decimal number
- **Validation**: Must be greater than 0
- **Units**: kg (metric) or lbs (imperial)
- **Display precision**: One decimal place

### Height Measurement
- **Type**: Positive decimal number
- **Validation**: Must be greater than 0
- **Units**: cm (metric) or inches (imperial)
- **Display precision**: One decimal place

## Relationships

```
Measurement System (1) -> (Many) Weight Measurement
Measurement System (1) -> (Many) Height Measurement
Weight Measurement (1) + Height Measurement (1) -> (1) BMI Value
BMI Value (1) -> (1) BMI Category
```

## State Transitions

### BMI Calculation Process
1. User selects measurement system
2. User enters weight and height values
3. System validates inputs (positive numbers)
4. System calculates BMI using appropriate formula
5. System assigns BMI category based on value
6. System displays results to user

### Measurement System Change
1. User changes system (metric ↔ imperial)
2. System updates unit labels accordingly
3. System preserves entered values (until user clears them)