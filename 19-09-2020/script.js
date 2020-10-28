var Pets_availabe = /** @class */ (function () {
    function Pets_availabe() {
        this.pets = [];
        this.count = 0;
    }
    Pets_availabe.prototype.setInput = function (input_arr) {
        var temp_arr = input_arr.split(" ");
        this.pets[this.count] = ({ bread: temp_arr[0],
            food: temp_arr[1],
            age: temp_arr[2],
            origin: temp_arr[3] });
        console.log(this.pets);
        this.count++;
    };
    Pets_availabe.prototype.each_count = function () {
        var c = {};
        for (var i = 0; i < this.pets.length; i++) {
            if (!c[this.pets[i].bread]) {
                c[this.pets[i].bread] = 1;
            }
            else {
                c[this.pets[i].bread]++;
            }
        }
        return c;
    };
    return Pets_availabe;
}());
var k = new Pets_availabe();
k.setInput('dog nv 2 india');
k.setInput('cat nv 2 india');
var pets_quereies = /** @class */ (function () {
    function pets_quereies() {
        this.enqurie = [];
        this.count = 0;
        this.plain_Input = [];
    }
    pets_quereies.prototype.store_enquere = function (input) {
        this.plain_Input[this.count] = input;
        var temp = input.split(" ");
        var temp_1 = {};
        for (var j = 0; j < temp.length; j++) {
            if (!temp_1[temp[j]]) {
                temp_1[temp[j]] = 1;
            }
            else {
                temp_1[temp[j]]++;
            }
        }
        console.log(temp_1);
        this.enqurie[this.count] = temp_1;
        this.count++;
    };
    pets_quereies.prototype.match_enquere = function () {
        var temp = k.each_count();
        var result = [];
        for (var i = 0; i < this.enqurie.length; i++) {
            for (var key in this.enqurie[i]) {
                if ((!temp[key])) {
                    result[i] = 'not';
                    break;
                }
                else if (this.enqurie[i][key] > temp[key]) {
                    result[i] = 'not';
                }
                else {
                    result[i] = 'Available';
                }
            }
        }
        return [result, this.plain_Input];
    };
    pets_quereies.prototype.match_5 = function () {
        var result = this.match_enquere();
        console.log(result[0]);
        return [result[0].slice(0, 5), this.plain_Input];
    };
    return pets_quereies;
}());
var z = new pets_quereies();
z.store_enquere('dag cat');
z.match_enquere();
