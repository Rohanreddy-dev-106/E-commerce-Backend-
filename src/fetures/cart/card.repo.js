import { GetDb } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

export default class Cardrepository {
  collection_name;

  constructor(Name) {
    this.collection_name = Name;
  }

  async Addcards(card) {
    try {
      const db = GetDb();
      const collection = db.collection(this.collection_name);
      const id = await this.Nextcounter();

      const findcart = await collection.findOne({
        UserID: card.UserID,
        productID: card.productID
      });

      if (findcart) {
        const result = await collection.updateOne(
          { UserID: card.UserID, productID: card.productID },
          { $inc: { quantity: card.quentaty } }
        );
        return result;
      } else {
        const insert = await collection.insertOne({
          _id: id,
          ...card
        });
        return insert;
      }
    } catch (error) {
      console.error("Error in Addcards:", error.message);
    }
  }

  async delete(productID, user) {
    try {
      const db = GetDb();
      const collection = db.collection(this.collection_name);
      const delet = await collection.deleteOne({
        productID: productID,
        UserID: user
      });
      return delet;
    } catch (error) {
      console.log(error.message);
    }
  }

  async GetAll() {
    try {
      const db = GetDb();
      const collection = db.collection(this.collection_name);
      return await collection.find().toArray();
    } catch (error) {
      console.log(error.message);
    }
  }

  async Nextcounter() {
    try {
      const db = GetDb();
      const collection = db.collection("counter");

      // ensure counter document exists
      const counterDoc = await collection.findOne({ _id: "counter" });
      if (!counterDoc) {
        await collection.insertOne({ _id: "counter", count: 0 });
      }

      const result = await collection.findOneAndUpdate(
        { _id: "counter" },
        { $inc: { count: 1 } },
        { returnDocument: "after" }
      );
      return result.value.count;
    } catch (error) {
      console.error("Error in Nextcounter:", error.message);
    }
  }
async CardItems(Userid) {
  const db = GetDb();
  const collection = db.collection(this.collection_name);

  const result = await collection.aggregate([
    { $match: { UserID: Userid } },
    {
      $addFields: {
        productObjId: { $toObjectId: "$productID" } // convert string to  ObjectId
      }
    },
    {
      $lookup: {
        from: "products",
        localField: "productObjId", 
        foreignField: "_id",
        as: "productDetails"
      }
    },
   
  ]).toArray();

  return result;
}



}

