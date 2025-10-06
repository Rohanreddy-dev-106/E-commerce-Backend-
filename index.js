import express from "express";
import productrouter from "./src/fetures/products/controllers/product.roote.js"
const server=express();


//we just give pattens it uses the middleware to route to  it

server.use("/api/products",productrouter)



export{server}