export default class Userrepository{
 async Signup(new_user) {
        try {
            const db = GetDb();
            const collection = db.collection("users");

            const result = await collection.insertOne(new_user);
            return { new_user, result };
        } catch (error) {
            console.log("Signup error:", error.message);
        }
    }
  Signin(emil, password) {
        // const user = users.find((user) => {
        //     if (user._Email === emil && user._password === password) {
        //         return true;
        //     }
        // })
        // return user;
    }
   GetAll() {
        // return users;
    }
}