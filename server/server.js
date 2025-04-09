const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// API Routes
app.get('/api/soil-data', (req, res) => {
    // Simulated IoT data
    const soilData = {
        temperature: 24 + Math.floor(Math.random() * 3),
        humidity: 65 + Math.floor(Math.random() * 5),
        nutrients: ['Low', 'Medium', 'High', 'Optimal'][Math.floor(Math.random() * 4)],
        timestamp: new Date().toISOString()
    };
    res.json(soilData);
});

app.get('/api/crop-recommendations', (req, res) => {
    // Sample crop recommendations
    const recommendations = {
        crops: [
            { name: 'Wheat', suitability: 'High', reason: 'Ideal soil conditions' },
            { name: 'Corn', suitability: 'Medium', reason: 'Good alternative' },
            { name: 'Soybeans', suitability: 'Low', reason: 'Market prices favorable' }
        ],
        timestamp: new Date().toISOString()
    };
    res.json(recommendations);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
