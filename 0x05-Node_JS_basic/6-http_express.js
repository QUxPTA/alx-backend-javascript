const express = require('express');

// Create an instance of an Express application
const app = express();

// Define the endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

// Export the app for testing or further use
module.exports = app;
