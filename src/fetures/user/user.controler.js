/**
 * The Usercontroller class contains methods for user signup and signin functionality, interacting with
 * a Usermodel class.
 *
 * @format
 */

import Usermodel from "./user.model.js";
import jwt from "jsonwebtoken";
export default class Usercontroller {
    static signup(req, res, next) {
        const user = Usermodel.Signup(req.body);
        res.status(201).send(user);
    }
    static signin(req, res, next) {
        const { email, password, name } = req.body;
        const user = Usermodel.Signin(email, password);
        if (!user) {
            res.send("User is not found..");
        }
        else {
            const token = jwt.sign(
                { UserID: user._id, Email: user._Email },
                "VqLmXgmOBeMXUqyT31mPWEUOKoG1SP5i29D7794E95BC6BFA11ABA3572D942",
                {
                    algorithm: "HS256",
                    expiresIn: "6d",
                }
            );

            if (!token) {
                res.status(400).send("Invilled Signin..");
            }
            res.status(201).send(token);
        }
    }
}
