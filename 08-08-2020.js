// 1
//class Movie
{
    constructor(_strng)
    {
        let pars = _strng.split(" ");
        this.title = pars[0];
        this.studio = pars[1];

        if (pars[2] == undefined) {
            this.rating = 'PG';
        }
        else {
            this.rating = pars[2];
        }
    }

    //(c) to create a method getPG which takes an 
    //array as Movies as input and returns a new 
    //array with only the rating as PG

    static getPG(_mov)
    {
        let filtered_movies = _mov.filter(data => {
            return data.rating === 'PG';
        })
        return filtered_movies;
    }
}

let movie_1 = new Movie("padayapa AVM PG");
let movie_2 = new Movie("payar lyca r");
let movie_3 = new Movie("entheran sun_pictures PG");
let movie_4 = new Movie("ramana libra PG");
let movie_5 = new Movie("Hey_ram kamal r");

let arr = [];

arr[0] = movie_1;
arr[1] = movie_2;
arr[2] = movie_3;
arr[3] = movie_4;
arr[4] = movie_5;

// to get the movies with pg rating
let under_PG = Movie.getPG(arr);

console.log(under_PG);

// to check if pg is assined default

let movie_6 = new Movie("bigil AGS");

console.log(movie_6);

// to create a new instance of the class Movie
//with the title "casino Royale"
// studio "Eon Productions"
//and the rating "PG13"

let movie_7 = new Movie("casino_Royale Eon_Productions PG13");

console.log(movie_7);


//2

// to create a constructor to accept from no
//argument to 2 arguments

class c {
    constructor(_radius, _colour) {
        this.radius = _radius;
        this.colour = _colour;

        if ((this.radius == undefined)
            && (this.colour == undefined)) {
            console.log("Enpty");
        }
        else if (((this.radius == undefined)
            || (this.colour == undefined))) {
            if (this.radius == undefined) {
                console.log(this.colour);
            }
            else {
                console.log(this.radius);
            }
        }
        else {
            console.log(this.radius, this.colour);
        }
    }

}

let circle = new c(5, 'blue');

//3

// Tv class inheritance

class TV {
    constructor(_brand, _channel, _price, _inches, _onoff, _volume) {
        this.brand = _brand;
        if (!_channel) {
            this.channel = 1;
        }
        else {
            this.channel = _channel;
        }
        this.price = _price;
        this.inches = _inches;
        this.onoff = _onoff;
        if (!_volume) {
            this.volume = 50;
        }
        else {
            this.volume = _volume;
        }

    }

    change_volume(v) {
        if ((v >= 0) && (v <= 100)) {
            this.volume = v;
        }
    }

    change_channel(v) {
        if ((v >= 0) && (v <= 50)) {
            this.channel = v;
        }
    }

    reset() {
        this.channel = 1;
        this.volume = 50;
    }

    status() {
        console.log(`${this.brand} at channel ${this.channel},volume ${this.volume}`);
    }

}

let t = new TV('pana', '20', '1000', '21', 'on', '35');

t.change_volume(59);
t.change_channel(6);
t.status();

class LED extends TV {
    constructor(_brand, _channel, _thickness, _energy_usage, _lifespane, _refreshrate) {
        super();
        this.thick = _thickness;
        this.energy_usage = _energy_usage;
        this.lifespane = _lifespane;
        this.refresh_rate = _refreshrate;
        this.brand = _brand;
        this.channel = _channel;
    }
}

class plasma extends (TV, LED)
{
    constructor(_brand, _channel, _Viewing_angle, _Backlight) {
        super();
        this.vewingangle = _Viewing_angle;
        this.Backlight = _Backlight;
        this.brand = _brand;
        this.channel = _channel;
    }

    display() {
        console.log(this.brand, this.channel, this.vewingangle, this.Backlight);
    }
}

let k = new LED('22', '100', '10', '60');

let z = new plasma('pana', '12', '101', '20');

z.display();


//4

class Bank {
    constructor(_code, _address) {
        this.code = _code;
        this.address = _address;
    }

    manager() {

    }
    maintains() {

    }
}

class ATM {
    constructor(_location, _managedby) {
        this.location = _location;
        this.managedby = _managedby;
        this.bank = bankobj;
    }

    identifies() {

    }

    transactions() {

    }
}

class customer {
    constructor(_name, _address, _dob, _card_number, _pin) {
        this.name = _name;
        this.address = _address;
        this.dob = _dob;
        this.card_number = _card_number;
        this.pin = _pin;
        this.bank = bankobj;
        this.Account;
    }

    setacc(Accountobj) {
        if (this.account.length <= 2) {

        }
    }

    verifyPassword() {

    }

    withdraw_money(ATmobj) {
        ATmobj.withraw(1000);
    }
}

class Account {
    constructor(_number, _balance) {
        this.number = _number;
        this.balance = _balance;
        this.bank = bankobj;
    }

    deposit() {

    }

    withdraw() {

    }

    create_transaction() {

    }
}

class Atm_Transaction {
    constructor(_trans_id, _data, _type, _amount, _post_balance) {
        this.transaction_id = _trans_id;
        this.data = _data;
        this.type = _type;
        this.amount = _amount;
        this.post_balance = _post_balance;
    }

    tracaction_account(Accountobj) {

    }
}

class Current_account extends Account {
    constructor(_acc_no, _balance) {
        this.acc_no = _acc_no;
        this.balance = _balance;
    }

    withdraw() {

    }

    saving_check(saving_accountobj) {

    }
}

class Saving_account extends Account {
    constructor(_acc_no, _balance) {
        this.acc_no = _acc_no;
        this.balance = _balance;
    }



}

// calculator oth problem

class calc {
    constructor(_one, _two) {
        this.one = _one;
        this.two = _two;
    }

    add() {
        console.log(this.one + this.two);
    }

    sub() {
        console.log(this.one - this.two);
    }

    mul() {
        console.log(this.one * this.two);
    }

    div() {
        console.log(this.one / this.two);
    }
}

let a = new calc(2, 2);

a.div();
