// function to add five to the given number:
num = 2;
function addFive(n) {
    return n + 5;
}

result = addFive(num);
console.log(result);

//function to print the opposite of the given number

var n = 4;

function getOpposite(num) {
    return -num
}

var result = getOpposite(n);

console.log(result);

// minutes to second 
var min = 5;

function toSeconds(min) {
    return min * 60;
}

var secs = toSeconds(min)
console.log(secs);

// function to take a string and return a number
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr);
console.log(myint);

//function to increment a number by one

var myint = 0;
function nextNumber(myint) {
    return myint + 1;
}
var myNextint = nextNumber(myint);
console.log(myNextint);

//function to take a array return the first element

var arr = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arr);
console.log(data);

//function to convert hours to second
var arr = 2;
function hourToSeconds(arr) {
    return 2 * 3600;
}
var data = hourToSeconds(arr)
console.log(data);

//function to find the peremeter of the rectange
function findPerimeter(num1, num2) {
    return (2 * num1 + 2 * num2);
}
var peri = findPerimeter(6, 7);
console.log(peri);

//to find the sum is less than 100
function lessThan100(num1, num2) {
    if ((num1 + num2) < 100) {
        return true;
    }
    else {
        return false;
    }
}
var res = lessThan100(22, 15);
console.log(res);

// function to print the remainder

function remainder(num1, num2) {

    return (num1 % num2);
}

var res = remainder(3, 4);
console.log(res);

//function to count number of legs
function CountAnimals(tur, horse, pigs) {

    return (tur * 2 + (4 * (horse + pigs)));
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);

// function to return the frames per second
function frames(num1, num2) {

    return (num1 * num2 * 60)
}
var fps = frames(1, 2);
console.log(fps);

//function to display if the number is divisibe by 5
function divisibleByFive(num1) {
    if (num1 % 5 === 0) {
        return 'divisible';
    }
    else {
        return 'No';
    }
}
var divisible = divisibleByFive(34);
console.log(divisible);

//function to return if the given number is even or not
function isEven(num) {
    if (num % 2 === 0) {
        return 'even';
    }
    else {
        return 'No';
    }
} var even = isEven(5);
console.log(even);

// function to check if the given 2 number are odd 
function areBothOdd(num1, num2) {
    if ((num1 % 2 === 0) || (num2 % 2 === 0)) {
        return 'NO';
    }
    else {
        return 'ODD';
    }
}
var r = areBothOdd(1, 2)
console.log(r);

// function to display the full name:
function getFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}

var r = getFullName('GUVI', 'GEEK');
console.log(r);

//fnction to print the length of the given word
function getLengthOfWord(word1) {
    return word1.length;
}
var r = getLengthOfWord('GUVI');
console.log(r);

//function to check if the if the given two sting is same length
function isSameLength(word1, word2) {
    if (word1.length == word2.lenght) {

        return 'equal';
    }
    else {
        return 'No'
    }

}
var r = isSameLength('GUVI', 'GEEK');
console.log(r);

// function to find the distance between two points


function getDistance(x1, y1, x2, y2) {
    var r = ((Math.pow(x1, 2) - Math.pow(x2, 2)) + (Math.pow(y1, 2) - Math.pow(y2, 2)));
    return Math.sqrt(Math.abs(r));
}

console.log(getDistance(100, 100, 400, 300));

// function to print the nth element
function getNthElement(array, n) {
    return array[n];
}
var array = [1, 3, 4, 5]
var n = 2;
console.log(getNthElement(array, n));

//function to print the last element of the array

function getlastele(array) {
    if (array.length > 1) {
        console.log(array[array.length - 1]);

    }
    else {
        console.log(- 1);

    }
}
var a = [1, 2, 3, 4, 5];
getlastele(a);

// function to print the value of the given key in object.
var obj = {
    mykey: 'value'
};



function getProperty(obj, key) {
    console.log(obj[key]);
}

getProperty(obj, 'mykey');

//function add a property to the object
var obj = {
    mykey: 'value'
};
function addProperty(obj, key) {
    obj[key] = 'true';
    console.log(obj);
}
addProperty(obj, 'hi');

// function to delete a object
var obj =
{
    name: 'allen'
};
function removeProperty(obj, key) {
    delete obj.key;
    console.log(obj.key);
}
removeProperty(obj, 'name');

//function to count positive and neative numbers

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    a = [];
    a[0] = 0;
    a[1] = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            a[0] += arr[i];
        }
        else {
            a[1] += arr[i];
        }

    }
    return a;
}
console.log(ar2(arr));

function to return only the positive numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(ar) {
    var a = [];
    var b = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > 0) {
            a[b] = ar[i];
            b++;
        }

    }
    return a;

}
var ar2 = getPositives(ar);
console.log(ar2);

// print the power of two till the number given

function powersOfTwo(n) {
    var res = [];
    for (let i = 0; i < n; i++) {
        res[i] = (i * 2);
    }
    return res;
}

console.log(powersOfTwo(4));

// function to print the max of two numbers
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax(ar) {
    var max = 0
    for (let i = 0; i < ar.length; i++) {
        if (max < ar[i]) {
            max = ar[i];
        }
    }
    return max;
}
var max = findMax(ar);
console.log('Max', max);

// Print the first 100 prime numbers

function prime(a) {
    for (let i = 0; i < a; i++) {
        if (i == 1) {

        }
        else if (i == 2) {
            console.log(i);
        }
        else {
            let flag = 0;
            for (let j = 2; j <= (i / 2); j++) {
                if (i % j === 0) {
                    flag = flag + 1;
                }
            }
            if (flag === 0) {
                console.log(i);
            }
        }
    }
}

prime(100);

// function to reverse a string

function reverseString(s) {
    return s.split("").reverse().join("");
}
var s = reverseString("pajwrgjriop");
console.log(s);

//function to merge two arrays
function mergeArrays(ar1, ar2) {
    var result = [];//this will add the first array to the result array

    result = ar1.concat(ar2);
    //Some piece of code goes here 

    return result;
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6]; var ar = mergeArrays(ar1, ar2);
console.log(ar);

//function to Calculate the sum of numbers received in a comma delimited string

function sumCSV(s) {
    let sum = 0;
    var k = s.split(",")
    for (let i = 0; i < k.length; i++) {

        sum = sum + parseInt(k[i]);
    }

    return sum;
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));