import  mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL;
let clintDB = ""
async function ConnectTOmongoDb() {
    try {
        const clint = await mongodb.MongoClient.connect(url)
        clintDB = clint
        console.log("Mongodb is connected...");
        createCounter(clintDB.db())
        Index(clintDB.db())

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

async function createCounter(db) {
    const collection = db.collection("counter");


    const exist = await collection.findOne({ _id: "counter" });


    if (!exist) {
        await collection.insertOne({ _id: "counter", count: 0 });
        console.log("Counter initialized to 0");
    } else {
        console.log("Counter already exists");
    }
}

async function Index(db) {
    await db.collection("product").createIndex({ price: 1 });
    await db.collection("product").createIndex({
        name: 1,
        category: -1
    });


}

export { ConnectTOmongoDb, GetDb }