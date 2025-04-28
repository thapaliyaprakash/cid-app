const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to CID Backend Server!');
});

app.get('/api/cases', (req, res) => {
  res.json([
    { id: 1, title: "Case 1: Bank Robbery", status: "Solved" },
    { id: 2, title: "Case 2: Missing Person", status: "Investigating" }
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
