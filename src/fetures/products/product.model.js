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

  static Filter(maxprise, minprise) {
    const product = products.filter((value) => {
      if (value.price >= minprise && value.price <= maxprise) {
        return true;
      }
    });
    return product;
  }
  static ProductRating(UserID, ProductID, rating) {
    let user = userModel.GetAll().find((user) => {
      if (user._id === UserID) {
        return true;
      }
    });
    if (!user) {
      return "User is not Exist..";
    }
    let product = products.find((p) => {
      if (p.id === ProductID) {
        return true;
      }
    });
    if (!product) {
      return "Product is not Exist..";
    }
    if (!product.rating) {
      let ratingArray = [];
      ratingArray.push({
        userid: UserID,
        productid: ProductID,
        Rating: rating,
      });
      product.rating = ratingArray;
    } else {
      const existingUser = product.rating.findIndex((r) => {
        if (r.userid === UserID) {
          return true;
        }
      });
      if (existingUser >= 0) {
        product.rating[existingUser] = {
          userid: UserID,
          productid: ProductID,
          Rating: rating,
        };
      } else {
        product.rating.push({
          userid: UserID,
          productid: ProductID,
          Rating: rating,
        });
      }
    }
  }
}
const products = [
  new productModel(
    1,
    "Classic White T-Shirt",
    "https://via.placeholder.com/150?text=White+T-Shirt",
    "Clothing",
    499,
    "M"
  ),
  new productModel(
    2,
    "Running Shoes",
    "https://via.placeholder.com/150?text=Running+Shoes",
    "Footwear",
    1999,
    "9"
  ),
  new productModel(
    3,
    "Leather Wallet",
    "https://via.placeholder.com/150?text=Leather+Wallet",
    "Accessories",
    799,
    "Standard"
  ),
  new productModel(
    4,
    "Wireless Headphones",
    "https://via.placeholder.com/150?text=Headphones",
    "Electronics",
    2499,
    "One Size"
  ),
  new productModel(
    5,
    "Smartwatch",
    "https://via.placeholder.com/150?text=Smartwatch",
    "Electronics",
    3499,
    "Adjustable"
  ),
  new productModel(
    6,
    "Denim Jeans",
    "https://via.placeholder.com/150?text=Denim+Jeans",
    "Clothing",
    1299,
    "32"
  ),
  new productModel(
    7,
    "Backpack",
    "https://via.placeholder.com/150?text=Backpack",
    "Bags",
    899,
    "Large"
  ),
  new productModel(
    8,
    "Sunglasses",
    "https://via.placeholder.com/150?text=Sunglasses",
    "Accessories",
    599,
    "One Size"
  ),
  new productModel(
    9,
    "Bluetooth Speaker",
    "https://via.placeholder.com/150?text=Speaker",
    "Electronics",
    1599,
    "Compact"
  ),
  new productModel(
    10,
    "Formal Shirt",
    "https://via.placeholder.com/150?text=Formal+Shirt",
    "Clothing",
    899,
    "L"
  ),
];
