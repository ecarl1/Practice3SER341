const express = require('express');
const app = express();

// Define an array of greetings
const greetings = [
    "Hi",
    "Hello",
    "Hola",
    "Aloha",
    "Ciao",
    "Bonjour"
];

// Route for getting a name
app.get('/welcome/:name', (req, res) => {
    const name = req.params.name;

    // Generate a random index to select a greeting from the array
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomIndex];

    // Construct the response
    const response = {
        greeting: `${randomGreeting} ${name}`
    };

    // Send the response as JSON
    res.json(response);
});


const port = 3200; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
