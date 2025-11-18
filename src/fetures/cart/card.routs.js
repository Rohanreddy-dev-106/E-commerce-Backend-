import express from "express"
import controlers from "./cart.controler.js"
import jwtAuth from "../middlewares/jwtAuth.middleware.js"

const router=express.Router()
const controller=new controlers("Cart");
router.post("/",(req,res,next)=>{controller.add(req , res , next)});
router.get("/get",jwtAuth,(req,res,next)=>{controller.get(req , res , next)})
router.delete("/",jwtAuth,(req,res,next)=>{controller.del(req , res , next)})
router.get("/items",(req,res,next)=>{controller.items(req,res,next)})


export default router;