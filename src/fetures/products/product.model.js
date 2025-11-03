/* The productModel class defines properties and methods for managing product data in an e-commerce
application. */
/** @format */

import userModel from "../user/user.model.js";

export default class productModel {
  name;
  imageurl;
  category;
  price;
  size;
  constructor(_name, _imageURL, _cat, _price, _size) {
    this.name = _name;
    this.imageurl = _imageURL;
    this.category = _cat;
    this.price = _price;
    this.size = _size;
  }

 
  // static ProductRating(UserID, ProductID, rating) {
  //   let user = userModel.GetAll().find((user) => {
  //     if (user._id === UserID) {
  //       return true;
  //     }
  //   });
  //   if (!user) {
  //     return "User is not Exist..";
  //   }
  //   let product = products.find((p) => {
  //     if (p.id === ProductID) {
  //       return true;
  //     }
  //   });
  //   if (!product) {
  //     return "Product is not Exist..";
  //   }
  //   if (!product.rating) {
  //     let ratingArray = [];
  //     ratingArray.push({
  //       userid: UserID,
  //       productid: ProductID,
  //       Rating: rating,
  //     });
  //     product.rating = ratingArray;
  //   } else {
  //     const existingUser = product.rating.findIndex((r) => {
  //       if (r.userid === UserID) {
  //         return true;
  //       }
  //     });
  //     if (existingUser >= 0) {
  //       product.rating[existingUser] = {
  //         userid: UserID,
  //         productid: ProductID,
  //         Rating: rating,
  //       };
  //     } else {
  //       product.rating.push({
  //         userid: UserID,
  //         productid: ProductID,
  //         Rating: rating,
  //       });
  //     }
  //   }
  // }
 
}

