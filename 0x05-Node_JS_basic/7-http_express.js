const express = require('express');
const { argv } = require('process');
const fs = require('fs');

// Creating an instance of the Express app
const app = express();

// Defining a route for the root URL ('/')
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

// Defining a route for the /students URL
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  // Reading the file specified by the second command-line argument (argv[2])
  fs.readFile(argv[2], 'utf8', (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }

    // Splitting the file data into an array of lines
    const result = [];
    data.split('\n').forEach((data) => {
      result.push(data.split(','));
    });

    // Removing the header row from the result
    result.shift();

    // Creating a new array with only the first and fourth columns
    const newis = [];
    result.forEach((data) => newis.push([data[0], data[3]]));

    // Creating a set of unique fields (fourth column values)
    const fields = new Set();
    newis.forEach((item) => fields.add(item[1]));

    // Creating an object to store the count of students for each field
    const final = {};
    fields.forEach((data) => {
      final[data] = 0;
    });

    // Counting the number of students for each field
    newis.forEach((data) => {
      final[data[1]] += 1;
    });

    // Writing the response with the total number of students
    res.write(
      `Number of students: ${
        result.filter((check) => check.length > 3).length
      }\n`
    );

    // Writing the response with the count of students for each field
    Object.keys(final).forEach((data) =>
      res.write(
        `Number of students in ${data}: ${final[data]}. List: ${newis
          .filter((n) => n[1] === data)
          .map((n) => n[0])
          .join(', ')}\n`
      )
    );

    res.end();
  });
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

module.exports = app;
