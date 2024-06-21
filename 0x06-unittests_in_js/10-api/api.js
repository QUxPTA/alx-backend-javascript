const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Endpoint to get available payment methods
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('User name is required');
  }
  res.send(`Welcome ${userName}`);
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
