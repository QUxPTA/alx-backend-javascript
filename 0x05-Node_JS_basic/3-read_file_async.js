const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.length > 0);

      if (lines.length <= 1) {
        resolve('Number of students: 0\n');
        return;
      }

      const header = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));

      let result = `Number of students: ${students.length}\n`;

      const fieldCount = {};
      students.forEach((student) => {
        const field = student[header.indexOf('field')];
        const firstname = student[header.indexOf('firstname')];

        if (!fieldCount[field]) {
          fieldCount[field] = [];
        }

        fieldCount[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fieldCount)) {
        result += `Number of students in ${field}: ${
          names.length
        }. List: ${names.join(', ')}\n`;
      }

      resolve(result);
    });
  });
}

module.exports = countStudents;
