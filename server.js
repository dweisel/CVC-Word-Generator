const express = require('express');
const app = express();
const http = require('http').Server(app);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = 5501;
http.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
