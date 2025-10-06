import express from "express"
import productcontroller from "./product.controller.js"


const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 


router.get("/",productcontroller.Getproducts);

router.post("/add",productcontroller.Addproducts)


export default router;

