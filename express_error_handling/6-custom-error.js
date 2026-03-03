/*
===========================================================
🔥 ERROR HANDLING FLOW IN EXPRESS APPLICATION

Controller
   ↓
next(new AppError("Message", statusCode))
   ↓
Express Global Error Middleware
   ↓
res.status(...).json(...)
   ↓
Client receives structured error response

IMPORTANT:
This class DOES NOT send response.
It only CREATES a structured error object.

The global error middleware is responsible for sending response.
===========================================================
*/


// Custom Error Class
// Extends built-in JavaScript Error class
// So it behaves like a normal Error but with extra properties
class AppError extends Error {

  constructor(message, statusCode) {

    // Call parent Error constructor
    // This sets:
    // - this.message
    // - this.stack
    super(message);

    // HTTP status code (e.g., 400, 404, 500)
    this.statusCode = statusCode;

    // Define error type based on status code
    // 4xx → client mistake → "fail"
    // 5xx → server issue → "error"
    this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";

    // Marks this as an expected (operational) error
    // Helps differentiate from programming bugs
    this.isOperational = true;

    // Removes constructor call from stack trace
    // Makes debugging cleaner
    Error.captureStackTrace(this, this.constructor);
  }
}


/*
===========================================================
🧪 TESTING THE CUSTOM ERROR CLASS
(This part is just for practice)
===========================================================
*/

try {

  // Simulating an error thrown inside a controller
  throw new AppError("Invalid User ID", 400);

} catch (err) {

  console.log("Message:", err.message);
  console.log("Status Code:", err.statusCode);
  console.log("Status:", err.status);
  console.log("Is Operational:", err.isOperational);
  console.log("Stack:\n", err.stack);
}