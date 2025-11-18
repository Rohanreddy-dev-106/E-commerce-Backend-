/* The Usercontroller class handles user signup, signin, and logout operations with password hashing,
JWT token creation, and cookie management in a Node.js application. */

import Usermodel from "./user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import Userrepository from "./users.repository.js"
import bcrypt from "bcrypt"


export default class Usercontroller {
    userrepo;

    constructor() {
        this.userrepo = new Userrepository();
    }

    
    async signup(req, res, next) {
        try {
            const { email, password, name, type } = req.body;
            //hash password
            const hashpassword=await bcrypt.hash(password,12);

            const user = new Usermodel(email, hashpassword, name, type);
            const result=await this.userrepo.Signup(user);// hear this is a constructer object 
            res.status(201).send(result);
        } catch (error) {
            console.log("Signup Error:", error.message);
            res.status(500).send("Signup failed");
        }
    }
     async signin(req, res, next) {
        try {
            const { email, password } = req.body;
            const user=await this.userrepo.FindEmail(email);

            // compared hased password
            const finduser = await bcrypt.compare(password,user.password)

            if (!finduser) {
                return res.status(404).send("User not found");
            }
            else{

            // Create JWT token
            const token = jwt.sign(
                { UserID: finduser._id, Email: finduser.Email },
                process.env.JWT_TOKEN_KEY,
                {
                    algorithm: "HS256",
                    expiresIn: "6d",
                }
            );

            // 6 days in milliseconds
            const EXPIRE = 6 * 24 * 60 * 60 * 1000;

            // Store token in cookie
            res.cookie("jwtToken", token, {
                maxAge: EXPIRE,
                httpOnly: true,
            });

            return res.status(200).send({
                message: "Signin successful",
                user: finduser,
            });
        }

        } catch (error) {
            console.error("Signin Error:", error.message);
            res.status(500).send("Signin failed");
        }
    }
    async logout(req, res, next) {
    try {
        res.clearCookie("jwtToken", {
            httpOnly: true,
        });

        return res.status(200).send({
            message: "Logout successful"
        });

    } catch (error) {
        console.log("Logout Error:", error.message);
        res.status(500).send("Logout failed");
    }
}

}
