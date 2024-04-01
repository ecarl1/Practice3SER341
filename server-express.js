const express = require('express');
const app = express();

// Route for today
app.get('/today', (req, res) => {
    // Get the current date and time
    const currentDate = new Date();

    // Convert date to string format
    const dateString = currentDate.toLocaleString();

    // Send the date string as the response
    res.send(`Current Date and Time: ${dateString}`);
});

const port = 3100; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
