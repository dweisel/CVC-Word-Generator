const WebSocket = require('ws');

// Create a new WebSocket server
const wss = new WebSocket.Server({ port: 5501 });

// Event handler for when a client connects to the WebSocket server
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Generate a random word
  const word = getRandomWord();

  // Send the word to the client
  ws.send(JSON.stringify({ word }));

  // Event handler for receiving messages from the client (optional)
  ws.on('message', function incoming(message) {
    console.log('Received message from client:', message);
    // Handle incoming messages from the client if needed
  });

  // Event handler for when a client disconnects (optional)
  ws.on('close', function close() {
    console.log('Client disconnected');
  });
});

// Function to generate a random word
function getRandomWord() {
  // Replace this with your word generation logic
  return 'example';
}
