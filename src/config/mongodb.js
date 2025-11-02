import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL;
let clintDB = ""
async function ConnectTOmongoDb() {
    try {
        const clint = await MongoClient.connect(url)
        clintDB = clint
        console.log("Mongodb is connected...");

    } catch (error) {
        console.log(error.message);

    }


}
function GetDb() {
    if (!clintDB) {
        return "NO such Db.."
    }
    else {
        return clintDB.db()
    }
}

export { ConnectTOmongoDb, GetDb }