
import Model from "../user/user.model.js";

export default function BasicAuth(req, res, next) {

    const Header = req.headers["authorization"]; // fixed key
    console.log(Header);

    if (!Header) {
        return res.status(401).send("Invalid cred...");
    } else {
        const base64code = Header.replace("Basic", "").trim(); // fixed trimming
        console.log(base64code);
        const validcred = Buffer.from(base64code, "base64").toString("utf-8"); //"username:password"
        const cred = validcred.split(":");//Array[name,password]
        const [username, password] = cred;
        //Cheak inn Data Base
        const user = Model.GetAll().find((value) => {
            if (username === value._Name && password === value._password) {
                return true;
            }
        });

        if (!user) {
            return res.status(401).send("User is Not Found..");
        }

        next();
    }
}
