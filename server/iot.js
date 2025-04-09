// IoT Device Simulation
class SoilSensor {
    constructor() {
        this.deviceId = 'soil-sensor-001';
        this.location = 'Field A';
    }

    getSensorData() {
        return {
            temperature: 24 + Math.random() * 2 - 1, // Random fluctuation
            humidity: 65 + Math.random() * 4 - 2,
            nitrogen: 0.5 + Math.random() * 0.3,
            phosphorus: 0.4 + Math.random() * 0.2,
            potassium: 0.6 + Math.random() * 0.4,
            timestamp: new Date().toISOString()
        };
    }
}

module.exports = SoilSensor;
