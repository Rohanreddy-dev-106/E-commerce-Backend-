import { ObjectId } from "bson"; // Import ObjectId to work with MongoDB document IDs
import { GetDb } from "../../config/mongodb.js"; // Import the database connection function

// Repository class to manage product-related database operations
export default class Productrepository {
    _collectionName; // Property to store the collection name

    constructor(Name) {
        this._collectionName = Name // Initialize collection name through constructor
    }

    // Method to add a new product to the collection
    async Addproduct(_newproduct) {
        try {
            const db = GetDb(); // Get database instance
            const collection = db.collection(this._collectionName); // Access the specific collection
            const result = await collection.insertOne(_newproduct); // Insert new product
            return { result }; // Return result object
        }
        catch (error) {
            console.log(error.message); // Log any error message
        }
    }

    // Method to fetch all products from the collection
    async GetAll() {
        try {
            const db = GetDb(); // Get database instance
            const collection = db.collection(this._collectionName); // Access the specific collection
            const result = await collection.find().toArray(); // Convert all documents to an array
            return { result }; // Return result object
        }
        catch (error) {
            console.log(error.message); // Log any error message
        }
    }

    // Method to fetch a single product by its ID
    async getOne(id) {
        try {
            const db = GetDb(); // Get database instance
            const collection = db.collection(this._collectionName); // Access the specific collection

            const objectId = new ObjectId(id); // Convert string ID to MongoDB ObjectId

            console.log(objectId); // Log the converted ObjectId
            // findone() document with a filter
            const result = await collection.findOne({ _id: objectId }); 
            return result // Return the found product
        }
        catch (error) {
            console.log(error.message); // Log any error message
        }
    }

    // Method to filter products within a given price range
    async Filter(maxprise, minprise) {
        try {
            const db = GetDb(); // Get database instance
            const collection = db.collection(this._collectionName); // Access the specific collection
            // Query to find products where price is between min and max values
            const result = await collection.find({ price: { $gte: parseInt(minprise), $lte: parseInt(maxprise) } }).toArray();
            return result // Return filtered products
        }
        catch (error) {
            console.log(error.message); // Log any error message
        }
    }
    async RateProduct(id,productid,rating){
         try{
         const db = GetDb(); // Get database instance
         const collection = db.collection(this._collectionName); // Access the specific collection

         const result=await collection.updateOne({_id :new ObjectId(id)},{$put : {userid:id,rate:rating}})
         return result;

         }
         catch(error){
            console.log(error);
            
         }
    }
}
