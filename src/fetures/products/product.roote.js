import express from "express"
import productcontroller from "./product.controller.js"
import fileurl from "../middlewares/file.uplode.middleware.js"
const router=express.Router();
// console.log(Object.getPrototypeOf(router));


//it has the patten 


router.get("/",productcontroller.Getproducts);

router.post("/add",fileurl.array("URL",10),productcontroller.Addproducts)//we can take multiple url with it the name="URL"
router.get("/one/:id",productcontroller.Getone);

export default router;

