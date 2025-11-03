/**
 * The function `jwtAuth` is a middleware that verifies a JWT token in the request headers and sends a
 * 401 response if the token is invalid.
 * @param req - The `req` parameter in the `jwtAuth` function is typically an object representing the
 * HTTP request. It contains information about the request made to the server, such as headers, body,
 * parameters, and more. In this case, the function is checking for a JWT token in the request headers
 * under
 * @param res - The `res` parameter in the `jwtAuth` function is the response object in Express.js. It
 * is used to send a response back to the client making the request. In the provided code snippet,
 * `res` is used to send a response with a status code of 401 and a message
 * @param next - The `next` parameter in the `jwtAuth` function is a callback function that is used to
 * pass control to the next middleware function in the stack. When called, it will execute the next
 * middleware function. This is commonly used in Express.js middleware functions to move to the next
 * function in the chain
 */

import jwt from "jsonwebtoken";
 import dotenv from "dotenv";
 dotenv.config();
 
export default function jwtAuth(req, res, next) {
const token = req.cookies.jwtToken;
 // const token = req.headers["authorization"];
  // console.log(token);
  
  if (!token) {
    res.status(401).send("Invallid cred...");
  } else {
    try {
      const paylode = jwt.verify(
        token,
       process.env.JWT_TOKEN_KEY,
      );
      console.log(paylode);
      // attach the userid to req object with a key value pare
      req.UserID=paylode.UserID;
      
    } catch (error) {
      res.status(401).send("Invallid cred...");
    }
    next();
  }
}
