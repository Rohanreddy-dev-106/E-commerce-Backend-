import ProductModel from "../models/product.model.js"
export default class Products {

    static Addproducts(req, res, next) {
       ProductModel.ADD(req.body);
        res.status(200).send("POST is Sufull....")
       
    }
    static Getproducts(req, res, next) {
        res.status(200).json({"product":ProductModel.Getdata()})
    }
    static Rateproducts(req, res, next) {

    }
    static Filterproducts(req, res, next) {

    }
}