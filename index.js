import express from "express";
import productrouter from "./src/fetures/products/product.roote.js"
import bodyParser from "body-parser";
const server=express();

server.use(bodyParser.json())//it shoud  be first middlare to  file to pass the data


//we just give pattens it uses the middleware to route to  it

server.use("/api/products",productrouter)




export{server}