
const express = require('express');

const app = express();

// Global middleware runs for EVERY incoming request
app.use((req, res, next) => {

    // Read the Authorization header from the request
    const auth = req.headers.authorization;

    // If Authorization header is missing
    if (!auth) {
        // Tell the client that Basic Authentication is required
        res.set('WWW-Authenticate', 'Basic');

        // Respond with 401 Unauthorized
        return res.status(401).send('Authentication required!');
    }

    // Extract the Base64-encoded credentials
    const base64 = auth.split(' ')[1];

    // Decode Base64 to get "username:password"
    const decoded = Buffer.from(base64, 'base64').toString();

    // Split decoded string into username and password
    const [username, password] = decoded.split(':');

    // Validate credentials (hardcoded for learning)
    if (username === 'kaif' && password === '123') {
        // Credentials are valid → move to the next middleware/route
        next();
    } else {
        // Credentials are invalid → reject request
        return res.status(401).send('Invalid credentials !');
    }
});

// Protected route
app.get('/', (req, res) => {
    res.send('Basic auth successfull...');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on 3000...');
});
