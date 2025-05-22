const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/bookings', (req, res) => {
  const { name, email, address, date, details } = req.body;
  if (!name || !email || !address || !date) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('New booking received:', { name, email, address, date, details });

  res.status(200).json({ message: 'Booking successful!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
