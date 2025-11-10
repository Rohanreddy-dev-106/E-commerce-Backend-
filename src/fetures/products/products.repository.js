/* This class represents a product repository with methods for adding products, retrieving all
products, getting a single product by ID, filtering products by price range, and rating a product
with user feedback. */
import { ObjectId } from "mongodb"; // Use ObjectId from mongodb driver
import { GetDb } from "../../config/mongodb.js"; // Get the connected DB instance

export default class Productrepository {
    _collectionName;

    constructor(Name) {
        this._collectionName = Name; // Initialize the collection name
    }

    async Addproduct(_newproduct) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const result = await collection.insertOne(_newproduct);
            return { result };
        } catch (error) {
            console.log("Addproduct error:", error.message);
        }
    }

    async GetAll() {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const result = await collection.find().project({name:1,price:1,_id:0}).toArray();
            return { result };
        } catch (error) {
            console.log("GetAll error:", error.message);
        }
    }

    async getOne(id) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const objectId = new ObjectId(id);
            const result = await collection.findOne({ _id: objectId });
            return result;
        } catch (error) {
            console.log("getOne error:", error.message);
        }
    }

    async Filter(maxprise, minprise) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const result = await collection
                .find({ price: { $gte: parseInt(minprise), $lte: parseInt(maxprise) } })
                .toArray();
            return result;
        } catch (error) {
            console.log("Filter error:", error.message);
        }
    }

// async RateProduct(userid, productid, rating) {
//   try {
//     const db = GetDb();
//     const collection = db.collection(this._collectionName);

//     // findOne() returns a single document
//     const product = await collection.findOne({ _id: new ObjectId(productid) });

//     // If product not found, just return false
//     if (!product) {
//       console.log("Product not found");
//       return false;
//     }


//     const exist = product?.ratings?.find((user) => user.userid === userid);//null checks

//     if (exist) {
  
//       const result = await collection.updateOne(
//         { _id: new ObjectId(productid), "ratings.userid": userid },
//         { $set: { "ratings.$.rating": rating } }//$ represents the position of that matched element
//       );
//       return result.modifiedCount > 0;
//     } else {
//       // push new rating
//       const result = await collection.updateOne(
//         { _id: new ObjectId(productid) },
//         {
//           $push: {
//             ratings: {
//               "userid":userid,
//               "productid":productid,
//               "rating":rating
//             }
//           }
//         }
//       )
//       return result.modifiedCount > 0;
//     }
//   } catch (error) {
//     console.log("RateProduct error:", error.message);
//     throw error;
//   }
// }

//FIXME:Race conduction [Two req running parallel on same data]

async RateProduct(userid, productid, rating) {
  try {
    const db = GetDb();
    const collection = db.collection(this._collectionName);

    // 1️ Remove any existing rating by this user
    await collection.updateOne(
      { _id: new ObjectId(productid) },
      { $pull: { ratings: { userid: userid } } }  
    );

    // 2️ Add the new rating
    const result = await collection.updateOne(
      { _id: new ObjectId(productid) },
      {
        $push: {
          ratings: {
            userid: userid,
            productid: productid,
            rating: rating
          }
        }
      }
    );

    return result;

  } catch (error) {
    console.error("Error in RateProduct:", error.message);
  }
}


}