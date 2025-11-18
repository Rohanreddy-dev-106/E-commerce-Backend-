/* This code snippet is setting up a router using Express in a Node.js application. Here's a breakdown
of what it does: */
import express from "express"
import controllers from "./user.controler.js"


const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 
const usercontroller=new controllers();
// router.post("/signup",usercontroller.signup.bind(usercontroller))
// router.post("/signin", usercontroller.signin.bind(usercontroller));
//TODO:If you directly pass a class method → you lose this.You fix it using either .bind() or an arrow function.
router.post("/signup",(req,res,next)=>{
    usercontroller.signup(req,res,next)
})
router.post("/signin", usercontroller.signin.bind(usercontroller));
router.post("/logout", usercontroller.logout.bind(usercontroller));




export default router;

