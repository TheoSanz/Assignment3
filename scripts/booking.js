let dailyRate = 35;
let selectedDays = new Set(); 
const calculatedCostElement = document.getElementById('calculated-cost');
const dayButtons = document.querySelectorAll('.day-selector li');
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');
const clearButton = document.getElementById('clear-button');

calculatedCostElement.innerHTML = 0;

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (button.classList.contains('clicked')) {
            button.classList.remove('clicked');
            selectedDays.delete(button.id);
        } else {
            button.classList.add('clicked');
            selectedDays.add(button.id);
        }

        calculateTotalCost();
    });
});

clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    
    selectedDays.clear();
    dailyRate = 35;
    
    calculatedCostElement.innerHTML = 0;
});

halfDayButton.addEventListener('click', function() {
    dailyRate = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');

    calculateTotalCost();
});

fullDayButton.addEventListener('click', function() {
    dailyRate = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    
    calculateTotalCost();
});

function calculateTotalCost() {
    const totalCost = dailyRate * selectedDays.size;
    calculatedCostElement.innerHTML = totalCost;
}
