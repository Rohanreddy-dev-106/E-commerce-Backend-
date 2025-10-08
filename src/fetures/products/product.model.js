/* The class `productModel` defines a model for products with properties like id, name, image URL,
category, price, and size, along with static methods for retrieving data, adding new products,
getting a single product by id, and filtering products based on price range. */
export default class productModel {
  id;
  name;
  imageurl;
  category;
  price;
  size;
  constructor(_id, _name, _imageURL, _cat, _price, _size) {
    this.id = _id;
    this.name = _name;
    this.imageurl = _imageURL;
    this.category = _cat;
    this.price = _price;
    this.size = _size;
  }
  static Getdata() {
    return products;
  }
  static ADD(new_product) {
    products.push(new_product)
  }
  static ONE(id) {
    const data = products.find((value) => {
      if (value.id === Number(id)) {
        return true
      }

    })
    return data;
  }
  static Filter(maxprise, minprise) {
    const product = products.filter((value) => {
      if (value.price >= minprise && value.price <= maxprise) {
        return true;
      }
    })
    return product;
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
  )
];

