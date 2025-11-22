import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL;

export default async function mongooseConnection() {
    try {

        await mongoose.connect(url)
        console.log("mogodb is connected using mongoose");
    }
    catch (err) {
        console.log(err.message);

    }

}