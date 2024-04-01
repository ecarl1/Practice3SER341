const http = require("http");
const hostname = 'localhost';
const port = 3000;

// Define the path to request 
const path = '/index.html';

// Make a GET request to the server
http.get(`http://${hostname}:${port}${path}`, (response) => {
    let data = '';

    // Processing the data
    response.on('data', (chunk) => {
        data += chunk;
    });

    // once the entire data has been recieved 
    response.on('end', () => {
        console.log('Response from server:', data);
    });
}).on("error", (error) => {
    console.error("Error:", error.message);
});
