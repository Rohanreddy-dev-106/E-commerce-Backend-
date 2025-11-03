/**
 * The class `Products` contains methods for adding products, getting all products, getting a single
 * product, rating products, and filtering products based on price.
 *
 * @format
 */

import productModel from "./product.model.js";
import Productrepository from "./products.repository.js";
export default class Products {
  Productrepo;
  constructor(Name) {
    this.Productrepo = new Productrepository(Name);
  }
  async Addproducts(req, res, next) {
    const { name, imageUrl, category, price, size } = req.body;
    const newproduct = new productModel(name, imageUrl, category, price, size);
    const result = await this.Productrepo.Addproduct(newproduct);
    console.log(req.body);

    res.status(201).send(result);
  }
  async Getproducts(req, res, next) {
    const result = await this.Productrepo.GetAll();
    res.status(200).send(result);
  }

  async Getone(req, res, next) {
    try {
      const { id } = req.params;

      const data = await this.Productrepo.getOne(id);
      if (data) {
        res.status(200).send(data);
      }
      res.status(404).send("Product is Not present...");
    }
    catch (error) {
      console.log(error.message);

    }
  }






  static Rateproducts(req, res, next) {
    const { userid, productid, rating } = req.query;
    const error = productModel.ProductRating(
      Number(userid),
      Number(productid),
      Number(rating)
    );
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send("Rating is Done....");
    }
  }

  static Filterproducts(req, res, next) {
    const { maxprise, minprise } = req.query;
    const product_filtere = productModel.Filter(maxprise, minprise);
    res.status(200).send(product_filtere);
  }
}
