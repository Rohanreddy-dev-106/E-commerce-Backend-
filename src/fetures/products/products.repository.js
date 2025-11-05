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
            const result = await collection.find().toArray();
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

    async RateProduct(userid, productid, rating) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);

            const result = await collection.updateOne(
                {  _id: new ObjectId(productid) },
                {
                    $push: {
                        ratings: {
                            userid,
                            productid,
                            rating
                        }
                    }
                }
            );

            // Return success boolean or result
            return result.modifiedCount > 0;
        } catch (error) {
            console.log("RateProduct error:", error.message);
            throw error;
        }
    }
}
