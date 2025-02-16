// Import the built-in http module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header with a status code of 200 (OK) and content type as plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body with a welcome message
    res.end('Welcome to Node.js!');
});

// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
