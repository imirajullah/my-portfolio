const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Contact form API (example)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received contact:", { name, email, message });
  res.json({ success: true, message: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
