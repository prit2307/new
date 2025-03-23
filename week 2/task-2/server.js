// server.js
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.send('Welcome to the Calculator API');
});

// Addition 
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  
    const result = parseFloat(a)+ parseFloat(b);
  
    res.json({ result });
 
});

// Subtraction 
app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  
    const result = parseFloat(a) - parseFloat(b)
    res.json({ result });
  
});

// Multiplication 
app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
 
    const result = parseFloat(a) * parseFloat(b);;
    res.json({ result });
 
});

// Division 
app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  
    const result = a/ b;
    res.json({ result });
 
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator API running at http://localhost:${port}`);
});
