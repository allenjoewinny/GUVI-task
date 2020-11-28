// let a = [11, 22, 33];
// let b = [...a];
// let c = [333, ...a, ...b, 456]
// var obj1 = { id: 101, name: 'arun' }
// var obj2 = { age: 25, country: 'India' }
// const employee = { ...obj1, ...obj2, d: 12 }

// console.log(c);

//console.log(arguments);
// function f(...a)
// {
//     console.log(arguments);
// }

// f(1,2,3,4,5,6,7,10,19);


// a = [10, 30, 40, 50];

// b = a[1];
// c = a[2];
// d = a[3];
// e = a[0];




// [e1, b1, c1, d1] = [10, 30, 40, 50];

// console.log(e1,b1,c1,d1);

// ({a1,b1} = {a1:10,b1:20});

// console.log(a1,b1);

obj = {a : "inside the obj"};

function f (b, c) {
        console.log(this.a, b, c);
    }

f.call(obj,10,'arun');
f.apply(obj,[10,'allen']);