export default class Products {

    static Addproducts(req, res, next) {
       res.send("ADD..")
    }
    static Getproducts(req, res, next) {
        res.json({"product":"getpage"})
    }
    static Rateproducts(req, res, next) {

    }
    static Filterproducts(req, res, next) {

    }
}