import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});

export default app;
