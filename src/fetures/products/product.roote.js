/* This code snippet is setting up a router using Express in a Node.js application. Here's a breakdown
of what it does: */
import express from "express"
import productcontroller from "./product.controller.js"
import fileurl from "../middlewares/file.uplode.middleware.js"
import Auth from "../middlewares/BasicAuth.middleware.js"
import jwtAuth from "../middlewares/jwtAuth.middleware.js"
import { rootCertificates } from "tls"
const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 
const ProductControler=new productcontroller("product");
console.log(ProductControler,"this is product object");

router.get("/",(req,res,next)=>{
    ProductControler.Getproducts(req,res,next)
});
const middlewares = [fileurl.array("URL",10), (req,res,next)=>{ProductControler.Getproducts(req,res,next)}];
router.post("/add",middlewares)//we can take multiple url with it the name="URL"
router.get("/avg",(req,res,next)=>{ProductControler.average(req,res,next)})
router.get("/one/:id",(req,res,next)=>{ProductControler.Getone(req,res,next)});
router.get("/filter",(req,res,next)=>{ProductControler.Filterproducts(req,res,next)})
router.post("/rate",(req,res,next)=>{ProductControler.Rateproducts(req,res,next)})
export default router;

