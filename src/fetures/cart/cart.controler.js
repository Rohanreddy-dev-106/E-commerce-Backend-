import Model from "./card.model.js"
import Cardrepository from "./card.repo.js";
export default class Cartcontroler {
    constructor(Name){
        this.cartrepo=new Cardrepository(Name)
    }

    async add(req, res, next) {
        if (!req.body) {
            return res.status(400).send("Request body is missing");
        }
      const { productID, quentaty, userid } = req.body;

        // const user = req.UserID;
        if (!productID || !quentaty || !userid) {
            return res.status(400).send("Missing productID, quentaty, or userID.");
        }
        else{
            const insert=new Model(userid, productID, quentaty);
          const result = await this.cartrepo.Addcards(insert);
          res.status(201).json({ success: true, data: result });

        }

        // const existing = Model.Getcard(req.UserID).find((c) => {
        //     if (c.UserID === user && c.productID === productID) {
        //         return true;
        //     }
        // });
        // let cart;//message
        // if (existing) {
        //     cart = Model.Update(user, productID, quentaty);
        //     res.status(200).json({ message: "Cart updated successfully", card: cart });
        // } else {
        //     cart = Model.Addcards(productID, user, quentaty); // add new item
        //     res.status(200).json({ message: "Cart item added successfully", card: cart });
        // }
    }
    async get(req, res, next) {
        const userCart = await this.cartrepo.GetAll();
        res.status(200).json({data:userCart})
    }
    async del(req,res,next){
      const { productID,userid } = req.query;
    //    const user = req.UserID;
      await this.cartrepo.delete(productID,userid)
     res.status(404).send("cARD is deleted...");
    }

}