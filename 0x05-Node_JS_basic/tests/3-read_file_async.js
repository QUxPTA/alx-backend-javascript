const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the file
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject the Promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content into lines and remove any empty lines
      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.length > 0);

      // Handle case where there are no valid student entries
      if (lines.length <= 1) {
        resolve('Number of students: 0\n');
        return;
      }

      // Extract the header and parse student data
      const header = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      let result = `Number of students: ${students.length}\n`;

      // Count students by field
      const fieldCount = {};
      students.forEach((student) => {
        const field = student[header.indexOf('field')];
        const firstname = student[header.indexOf('firstname')];

        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }

        fieldCount[field].push(firstname);
      });

      // Format the result with student counts per field
      for (const [field, names] of Object.entries(fieldCount)) {
        result += `Number of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}\n`;
      }

      // Resolve the Promise with the formatted result
      resolve(result);
    });
  });
}

module.exports = countStudents;
