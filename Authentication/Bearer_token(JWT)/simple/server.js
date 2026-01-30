const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

// Secret key used to sign and verify JWTs
const SECRET_KEY = 'mysecretkey';

// This route authenticates the user and generates a JWT
app.post('/login', (req, res) => {

    // Extract username and password from the request body
    const { username, password } = req.body;

    // Validate user credentials (hardcoded for learning)
    if (username === 'kaif' && password === '123') {

        // Generate a JWT after successful authentication
        const token = jwt.sign(
            { username: username },   // Payload: data stored inside the token
            SECRET_KEY,               // Secret key used to sign the token
            { expiresIn: '20s' }        // Token expiration time
        );

        // Send the generated token back to the client
        return res.json({
            message: 'Login successfully',
            token: token
        });
    }

    // If credentials are invalid, return 401 Unauthorized
    return res.status(401).json({ message: 'Invalid credentials' });
});



// This middleware protects routes by validating JWTs
const jwtAuth = (req, res, next) => {

    // Read the Authorization header from the request
    const authHeader = req.headers.authorization;

    // If Authorization header is missing, deny access
    if (!authHeader) {
        return res.status(401).json({ message: 'Token required...!!!' });
    }

    // Extract the token from the Authorization header
    // Format: "Bearer <token>"
    const token = authHeader.split(' ')[1];

    try {
        // Verify the JWT using the secret key
        // If valid, decoded payload is returned
        const decode = jwt.verify(token, SECRET_KEY);

        // Attach decoded user information to the request object
        req.user = decode;

        // Token is valid, move to the next middleware or route
        next();
    } catch (error) {
        // If token is invalid or expired, deny access
        return res.status(401).json({ message: error });
    }
};


// This route is accessible only if the JWT is valid
app.get('/protected', jwtAuth, (req, res) => {
    res.send('JWT auth success');
});


app.listen(3000, () => {
    console.log('server is started..!');
});
