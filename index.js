import express from "express";
import swagger from "swagger-ui-express";
import { readFileSync } from 'fs';
import productrouter from "./src/fetures/products/product.roote.js"
import usersroute from "./src/fetures/user/user.roots.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cardrouts from "./src/fetures/cart/card.routs.js"
import CORS from "cors";
const server=express();
server.use(CORS())

const data = JSON.parse(readFileSync("./swagger.json", 'utf8'));
// server.use(bodyParser.json())//it shoud  be first middlare to  file to pass the data
server.use("/api-doc-rohan",swagger.serve,swagger.setup(data))
server.use(express.json())
server.use(cookieParser())
server.use(express.static("public"));

//we just give pattens it uses the middleware to route to  it

server.use("/api/products",productrouter)
server.use("/api/users",usersroute)
server.use("/api/card",cardrouts)
//404 error

server.use((req, res, next) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>404 Not Found</title>
      <!-- Bootstrap CSS CDN -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="alert alert-danger" role="alert">
        Page not found (404) so please check our API docs at /api-doc-rohan
      </div>
    </body>
    </html>
  `);
});




export{server}