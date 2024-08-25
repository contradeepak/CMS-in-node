const express = require('express');
const app = express();

// Middleware to parse incoming form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the Customer.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/Customer.html");
});

// Handle the POST request from the form submission
app.post('/', (req, res) => {
    const customerData = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    };
    
    // Log the received customer data to the console
    console.log("Received Customer Data: ", customerData);
    
    // Send a response back to the client
    res.send(`Customer ${customerData.name} added successfully!`);
});

// Start the server
app.listen(7080, '127.0.0.1', () => {
    console.log('Server started at http://127.0.0.1:7080');
});
