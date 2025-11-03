/* This code snippet is setting up a router using Express in a Node.js application. Here's a breakdown
of what it does: */
import express from "express"
import productcontroller from "./product.controller.js"
import fileurl from "../middlewares/file.uplode.middleware.js"
import Auth from "../middlewares/BasicAuth.middleware.js"
import jwtAuth from "../middlewares/jwtAuth.middleware.js"
const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 
const ProductControler=new productcontroller("product");
console.log(productcontroller);

router.get("/",jwtAuth,ProductControler.Getproducts.bind(ProductControler));
const middlewares = [fileurl.array("URL",10), ProductControler.Addproducts.bind(ProductControler)];
router.post("/add",middlewares)//we can take multiple url with it the name="URL"
router.get("/one/:id",ProductControler.Getone.bind(ProductControler));
router.get("/filter",productcontroller.Filterproducts)
router.post("/rate",jwtAuth,productcontroller.Rateproducts)

export default router;

