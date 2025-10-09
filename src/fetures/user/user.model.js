export default class Usermodel {
    _Email;
    _password;
    _Name;
    _Type;
    constructor(emil, password, name, type) {
        this._Email = emil;
        this._password = password
        this._Name = name
        this._Type = type
    }
    static Signup({email, password, name, type}) {
        const new_user = new Usermodel(email, password, name, type);
        users.push(new_user);
        return new_user;
    }
    static Signin(emil, password) {
        const user = users.find((user) => {
            if (user._Email === emil && user._password === password) {
                return true;
            }
        })
        return user;
    }
    static GetAll(){
        return users;
    }
}

const user1 = new Usermodel('rohan@example.com', 'pass123', 'Rohan Reddy', 'admin');
const user2 = new Usermodel('neela@example.com', 'neela456', 'Neela Kumari', 'user');
const user3 = new Usermodel('john@example.com', 'john789', 'John Doe', 'user');

// Store them in an array
const users = [user1, user2, user3];