export default class Cardmodels {
    productID;
    UserID;
    quentaty;
    id;
    constructor(_productid, _userid, _quentaty, _id) {
        this.productID = _productid;
        this.UserID = _userid;
        this.quentaty = _quentaty;
        this.id = _id;
    }
    static Addcards(productID, userid, quentaty, id) {
        const new_cart = new Cardmodels(productID, userid, quentaty, cards.length + 1)
        cards.push(new_cart);
        return new_cart;
    }
    static Update(userid, productid, quentaty) {
        const card = cards.findIndex((user) => {
            if (user.UserID === userid && user.productID === productid) {
                return true;
            }
        })
        if (!cards[card]) {
            return;
        }
        cards[card].quentaty = quentaty
        return "Updated..."

    }
    static delete(productID, user) {
        const cartitem = cards.findIndex((c) => {
            if (c.productID === productID && c.UserID === user) {
                return true;
            }
        })
        if (cartitem < 0) {
            return "Product is Not Found.."
        }
        else {
            const del = cards.splice(cartitem, 1);
        }
    }
    static Getcard(userid) {
        const cart = cards.filter((u) => {
            if (u.UserID === userid) {
                return true;
            }
        })
        return cart;
    }
}

const card1 = new Cardmodels(1, 1, 2, 1);



const cards = [card1];