import { ObjectId } from "bson";
import { GetDb } from "../../config/mongodb.js";
export default class Productrepository {
    _collectionName;
    constructor(Name) {
        this._collectionName = Name
    }
    async Addproduct(_newproduct) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const result = await collection.insertOne(_newproduct);
            return { result };
        }
        catch (error) {
            console.log(error.message);

        }
    }
    async GetAll() {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
            const result = await collection.find().toArray();;
            return { result };
        }
        catch (error) {
            console.log(error.message);

        }
    }

    async getOne(id) {
        try {
            const db = GetDb();
            const collection = db.collection(this._collectionName);
             const objectId = new ObjectId(id);
             console.log(objectId);
             
            const result = await collection.findOne({ _id: objectId });
            return { result };
        }
        catch (error) {
            console.log(error.message);

        }

    }
}