/* The Usercontroller class contains methods for user signup and signin functionality, interacting with
a Usermodel class. */
import Usermodel from "./user.model.js";
export default class Usercontroller {

    static signup(req, res, next) {
        const user = Usermodel.Signup(req.body);
        res.status(201).send(user);
    }
    static signin(req, res, next) {
        const { email, password ,name} = req.body;
        const user = Usermodel.Signin(email, password)
        if (!email && !password) {
            res.status(400).send("Invilled Signin..")
        }
        res.status(200).send(`hi ${name} you are Login to our Websit..`)
    }
}