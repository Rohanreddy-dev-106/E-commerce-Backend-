import productModel from "./product.model.js";
export default class Products {

    static Addproducts(req, res, next) {

        const { id, name, imageurl, category, price, size } = req.body
        const newproduct = new ProductModel(id, name, imageurl, category, price, size);
        productModel.ADD(newproduct)
        console.log(req.body);

        res.status(201).send(req.body);

    }
    static Getproducts(req, res, next) {
        res.status(200).json({ "product": productModel.Getdata() })
    }
    static Getone(req, res, next) {
        const { id } = req.params;

        const data = productModel.ONE(id);
        if (data) {
            res.status(200).send(data)
        }
        res.status(404).send("Product is Not present...")
    }
    static Rateproducts(req, res, next) {

    }
    static Filterproducts(req, res, next) {

    }
}