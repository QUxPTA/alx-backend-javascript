import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      const totalStudents = Object.values(fields).reduce(
        (acc, val) => acc + val.length,
        0
      );
      response += `Number of students: ${totalStudents}\n`;

      Object.keys(fields)
        .sort()
        .forEach((field) => {
          response += `Number of students in ${field}: ${
            fields[field].length
          }. List: ${fields[field].join(', ')}\n`;
        });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(process.argv[2]);
      if (!fields[major]) {
        res.status(500).send('Cannot load the database');
        return;
      }
      const response = `List: ${fields[major].join(', ')}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
