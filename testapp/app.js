const express = require('express');
const app = express();
const port = 8080;

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Docker Swarm!',
    hostname: require('os').hostname(),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Health check for ALB
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Container hostname: ${require('os').hostname()}`);
});