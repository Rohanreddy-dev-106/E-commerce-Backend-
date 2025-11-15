export default class Ordermodel{
    Userid;
    TotalAmount;
    Time;
    constructor(userid, totalamount, time){
        this.Userid=userid;
        this.TotalAmount=totalamount;
        this.Time=time;
    }
}