const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(404).send('Invalid cart ID');
  } else {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
