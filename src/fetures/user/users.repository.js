
import { GetDb } from "../../config/mongodb.js";
export default class Userrepository {
    async Signup(new_user) {
        try {
            const db = GetDb();
            const collection = db.collection("users");

            const result = await collection.insertOne(new_user);
            return { result };
        } catch (error) {
            console.log("Signup error:", error.message);
        }
    }
    async FindEmail(emil) {
        try {
            const db = GetDb();
            const collection = db.collection("users");
            const result = await collection.findOne({ Email: emil});
            console.log(result, typeof result);
            
            return result

        } catch (error) {
            console.log(error.message);

        }
    }
    GetAll() {
        // return users;
    }
}