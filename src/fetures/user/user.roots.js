/* This code snippet is setting up a router using Express in a Node.js application. Here's a breakdown
of what it does: */
import express from "express"
import controllers from "./user.controler.js"

const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 
router.post("/signup",controllers.signup)
router.post("/signin",controllers.signin);




export default router;

