import { GetDb } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";
export default class Cardrepository {
    collection_name
    constructor(Name) {
        this.collection_name = Name;
    }
    async Addcards(card) {
        try {
            const db = GetDb()
            const collection = db.collection(this.collection_name);
            const insert = await collection.insertOne(card);
            return { insert }
        }
        catch (error) {
            console.log(error.message);

        }
    }
    async delete(productID, user) {
        try {
            const db = GetDb()
            const collection = db.collection(this.collection_name);
            const delet = await collection.deleteOne({ productID: productID, userid: user });

            return { delet }
        }
        catch (error) {
            console.log(error.message);

        }
    }
    async GetAll() {
try {
            const db = GetDb()
            const collection = db.collection(this.collection_name);
            const findALL = await collection.find().toArray();
            return { findALL }
        }
        catch (error) {
            console.log(error.message);

        }
    }
}