const express = require('express');

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const cors = require('cors');
const courseRoutes = require('./routes/courses');
const studentRoutes = require('./routes/students');
app.use(cors());
app.use(express.json());
// Define a simple Express route to serve the React front.

app.use('/api', courseRoutes);
app.use('/api', studentRoutes);
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
