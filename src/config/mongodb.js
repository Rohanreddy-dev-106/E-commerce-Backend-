import { MongoClient } from "mongodb";
 import dotenv from "dotenv";
 dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL;

async function ConnectTOmongoDb() {
    try {
        const clint = await MongoClient.connect(url)
        console.log("Mongodb is connected...");

    } catch (error) {
        console.log(error.message);

    }


}
export {ConnectTOmongoDb}