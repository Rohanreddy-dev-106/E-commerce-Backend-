
import productModel from "./product.model.js";
import Productrepository from "./products.repository.js";
export default class Products {
  Productrepo;
  constructor(Name) {
    this.Productrepo = new Productrepository(Name);//it represent a single product
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



async Rateproducts(req, res, next) {
  try {
    const { userid, productid, rating } = req.body || {};
    if (!userid || !productid || rating == null) {
      return res.status(400).send("Missing required fields");
    }

    const result = await this.Productrepo.RateProduct(userid, productid, rating);

    if (!result) {
      return res.status(400).send("Failed to rate product");
    }

    res.status(200).send("Rating is Done....");
  } catch (err) {
    console.error("Rateproducts error:", err.message);
    res.status(500).send("Internal server error");
  }
}




  async Filterproducts(req, res, next) {
    const { maxprise, minprise } = req.query;
    const product_filtere = await this.Productrepo.Filter(maxprise,minprise);
    res.status(200).send(product_filtere);
  }


  async average(req, res, next){
    const avg=await this.Productrepo.Findaverage();
    res.status(200).send(avg);
  }
 
}
