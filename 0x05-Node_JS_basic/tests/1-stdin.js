const readline = require('readline');

// Function to handle user input and output the result
function handleInput (name) {
  console.log(`Your name is: ${name}`);
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
}

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Check if input is coming from a TTY (interactive) or a pipe
if (process.stdin.isTTY) {
  // Interactive mode: prompt the user for their name
  rl.question('', (name) => {
    handleInput(name);
    rl.close();
  });
} else {
  // Piped input: read input directly
  let data = '';
  process.stdin.on('data', (chunk) => {
    data += chunk;
  });
  process.stdin.on('end', () => {
    handleInput(data.trim());
    rl.close();
  });
}

// Event listener for when the readline interface is closed
rl.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
  process.exit(0);
});
