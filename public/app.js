// Main application logic
console.log('SmartFarm app initialized');

// DOM Elements
const tempElement = document.getElementById('soil-temp');
const humidityElement = document.getElementById('soil-humidity');
const nutrientsElement = document.getElementById('soil-nutrients');

// Fetch and display soil data
async function fetchSoilData() {
    try {
        const response = await fetch('/api/soil-data');
        const data = await response.json();
        updateSoilUI(data);
    } catch (error) {
        console.error('Error fetching soil data:', error);
    }
}

// Update soil data display
function updateSoilUI(data) {
    tempElement.textContent = `${data.temperature}°C`;
    humidityElement.textContent = `${data.humidity}%`;
    nutrientsElement.textContent = data.nutrients;
    
    // Update nutrient color based on status
    if (data.nutrients === 'Low') {
        nutrientsElement.className = 'text-red-600';
    } else if (data.nutrients === 'Medium') {
        nutrientsElement.className = 'text-yellow-600';
    } else {
        nutrientsElement.className = 'text-green-600';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    fetchSoilData();
    // Refresh data every 5 seconds
    setInterval(fetchSoilData, 5000);
});
