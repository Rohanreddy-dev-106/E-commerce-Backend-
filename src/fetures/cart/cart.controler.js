import Model from "./card.model.js"
export default class Cartcontroler {

    static add(req, res, next) {
        if (!req.body) {
            return res.status(400).send("Request body is missing");
        }
        const { productID, quentaty } = req.body;
        const user = req.UserID;
        if (!productID || !quentaty || !user) {
            return res.status(400).send("Missing productID, quentaty, or userID.");
        }
        const existing = Model.Getcard(req.UserID).find((c) => {
            if (c.UserID === user && c.productID === productID) {
                return true;
            }
        });
        let cart;//message
        if (existing) {
            cart = Model.Update(user, productID, quentaty);
            res.status(200).json({ message: "Cart updated successfully", card: cart });
        } else {
            cart = Model.Addcards(productID, user, quentaty); // add new item
            res.status(200).json({ message: "Cart item added successfully", card: cart });
        }
    }
    static get(req, res, next) {
        const userCart = Model.Getcard(req.UserID);
        res.status(200).send(userCart)
    }

}