import express from "express";
import swagger from "swagger-ui-express";
import { readFileSync } from 'fs';
import productrouter from "./src/fetures/products/product.roote.js"
import usersroute from "./src/fetures/user/user.roots.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cardrouts from "./src/fetures/cart/card.routs.js"
const server=express();

const data = JSON.parse(readFileSync("../swagger.json", 'utf8'));
// server.use(bodyParser.json())//it shoud  be first middlare to  file to pass the data
server.use("/api-doc-rohan",swagger.serve,swagger.setup(data))
server.use(express.json())
server.use(cookieParser())
app.use(express.static("public"));
//we just give pattens it uses the middleware to route to  it

server.use("/api/products",productrouter)
server.use("/api/users",usersroute)
server.use("/api/card",cardrouts)



export{server}