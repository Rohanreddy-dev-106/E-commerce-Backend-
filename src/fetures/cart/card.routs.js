import express from "express"
import controlers from "./cart.controler.js"
import jwtAuth from "../middlewares/jwtAuth.middleware.js"

const router=express.Router()

router.post("/",jwtAuth,controlers.add,controlers)
router.get("/get",jwtAuth,controlers.get)


export default router;