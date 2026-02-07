document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const unitSelect = document.getElementById('unit');
    const weightUnitSpan = document.getElementById('weight-unit');
    const heightUnitSpan = document.getElementById('height-unit');
    const resultContainer = document.getElementById('result');
    const bmiValueDiv = document.getElementById('bmi-value');
    const bmiCategoryDiv = document.getElementById('bmi-category');
    const bmiMessageDiv = document.getElementById('bmi-message');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(`${savedTheme}-theme`);
    themeToggleBtn.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Update units when selection changes
    unitSelect.addEventListener('change', function() {
        if (this.value === 'metric') {
            weightUnitSpan.textContent = 'kg';
            heightUnitSpan.textContent = 'cm';
        } else {
            weightUnitSpan.textContent = 'lbs';
            heightUnitSpan.textContent = 'inches';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Add loading effect
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Calculating...';
        submitButton.disabled = true;

        // Small delay to show the loading state
        setTimeout(() => {
            const unit = unitSelect.value;
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            if (!weight || !height || weight <= 0 || height <= 0) {
                alert('Please enter valid positive numbers for weight and height.');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                return;
            }

            let bmi;

            if (unit === 'metric') {
                // Convert height from cm to meters
                const heightInMeters = height / 100;
                bmi = weight / (heightInMeters * heightInMeters);
            } else {
                // Imperial calculation: BMI = (weight in lbs * 703) / (height in inches)^2
                bmi = (weight * 703) / (height * height);
            }

            // Display the result
            displayResult(bmi);

            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 500);
    });

    // Theme toggle functionality
    themeToggleBtn.addEventListener('click', function() {
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-theme');

        if (isDarkMode) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Function to determine BMI category and display result
    function displayResult(bmi) {
        let category, className, message;

        if (bmi < 18.5) {
            category = 'Underweight';
            className = 'bmi-underweight';
            message = 'You may need to gain weight. Consult a healthcare provider for advice.';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
            className = 'bmi-normal';
            message = 'Congratulations! You have a healthy weight. Maintain good habits.';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Overweight';
            className = 'bmi-overweight';
            message = 'Consider lifestyle changes to achieve a healthier weight.';
        } else {
            category = 'Obese';
            className = 'bmi-obese';
            message = 'Consult a healthcare provider for guidance on achieving a healthier weight.';
        }

        // Update the UI with results
        bmiValueDiv.textContent = bmi.toFixed(1);
        bmiCategoryDiv.textContent = category;
        bmiCategoryDiv.className = 'bmi-category ' + className;
        bmiMessageDiv.textContent = message;

        // Show the result container
        resultContainer.classList.add('show');
        
        // Add animation to the result
        bmiValueDiv.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
            bmiValueDiv.style.animation = '';
        }, 600);
    }
    
    // Add pulse animation for the BMI value
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});