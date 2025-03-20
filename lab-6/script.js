const activityMultipliers = {
    running: 10,
    cycling: 8,
    swimming: 9,
    walking: 5
};

function calculateCalories(weight, activity, duration) {
    return (activityMultipliers[activity] * weight * (duration / 60)).toFixed(2);
}

function handleSubmit(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;
    const duration = parseFloat(document.getElementById("duration").value);
    const resultElement = document.getElementById("result");
    
    if (isNaN(weight) || weight <= 0 || isNaN(duration) || duration <= 0) {
        resultElement.textContent = "Please enter valid values for weight and duration.";
        return;
    }
    
    const caloriesBurned = calculateCalories(weight, activity, duration);
    resultElement.textContent = `You burned approximately ${caloriesBurned} calories.`;
}

document.getElementById("calorieForm").addEventListener("submit", handleSubmit);
