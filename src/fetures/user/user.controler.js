/**
 * The Usercontroller class contains methods for user signup and signin functionality, interacting with
 * a Usermodel class.
 *
 * @format
 */

import Usermodel from "./user.model.js";
import jwt from "jsonwebtoken";
 import dotenv from "dotenv";
 dotenv.config();

export default class Usercontroller {
    static async signup(req, res, next) {
        const user = await Usermodel.Signup(req.body);
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
                process.env.JWT_TOKEN_KEY,
                {
                    algorithm: "HS256",
                    expiresIn: "6d",
                }
            );
            const EXPIRE = 6 * 24 * 60 * 60 * 1000; // 6 days in ms
            res.cookie("jwtToken", token, {
                maxAge: EXPIRE,
                httpOnly: true,
            });

            if (!token) {
                res.status(400).send("Invilled Signin..");
            }
            res.status(201).send("Your are signin..");
        }
    }
}
