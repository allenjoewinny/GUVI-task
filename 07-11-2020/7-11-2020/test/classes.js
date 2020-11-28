// class Rectangle {
//     //setup
//     constructor() {
//         console.log("the Rectangle is being Created");
//     }
// }

// let myRectangle1 = new Rectangle();

// let myRectangle2 = new Rectangle();


// // custome rectangle:
// class Rectangle {
//     //setup
//     constructor(_width, _height, _colour) {
//         console.log("the Rectangle is being Created");

//         this.width = _width;
//         this.height = _height;
//         this.colour = _colour;

//     }
// }

// let my_rectangle = new Rectangle(5, 3, "black");
// console.log(my_rectangle.colour);


//method:

//to get the area

// class Rectangle {
//     //setup
//     constructor(_width, _height, _colour) {
//         console.log("the Rectangle is being Created");

//         this.width = _width;
//         this.height = _height;
//         this.colour = _colour;

//     }

//     get_area() {

//         return (this.width * this.height);
//     }

//     rectangle_description()
//     {
//         console.log(`This is the rectangle of area ${this.width*this.height} and with an colour ${this.colour}`);
//     }
// }

// let my_rectangle = new Rectangle(5, 3, "blue");
// console.log(my_rectangle.get_area());
// my_rectangle.rectangle_description();// just call the method in class and get the result


// getter:

// class squar
// {
//     constructor(_width)
//     {
//         this.width =_width;
//         this.height =_width;
//     }

//     get area()
//     {
//         return this.width * this.height;
//     }
// }

// let s = new squar(3);
// console.log(s.area);


// setter
// class squar
// {
//     constructor(_width)
//     {
//         this.width =_width;
//         this.height =_width;
//     }

//     set  par(sq)
//     {
//         this.width = Math.sqrt(sq);
//         this.height = this.width;
//     }
// }

// let s = new squar;
// s.par  = 25;
// console.log(s.width,s.height);

//for the clarity of the getter
//here the count will have the track of how 
//many times the area is called 
//we can access the count like a class instance.
// class squar
// {
//     constructor(_width)
//     {
//         this.width =_width;
//         this.height =_width;
//         this.count =0;
//     }

//     get area()
//     {
//         this.count++;
//         return this.width * this.height;

//     }
// }

// let s = new squar(3);
// console.log(s.area);
// console.log(s.area);
// console.log(s.area);
// console.log(s.area);
// console.log(s.count);

// static method
// their is no instance bounded to it 
//or they do not requires the instance of the class


// class squar
// {
//     constructor(_width)
//     {
//         this.width =_width;
//         this.height =_width;
//         this.count =0;
//     }

//     static a(w,h)
//     {
//         // try giving this
//         return w ===h;
//     }
// }

// let s= new squar;

// console.log(squar.a(2,3));

// here we can not give like console.log(s.a(2,3))
// as we can not access the a functon in the class

// inheritance

//to call the parent constructor use "super"

// class person {
//     constructor(_name, _age) {
//         this.name = _name;
//         this.age = _age;
//     }

//     dis() {
//         console.log(`this is ${this.name} and i am ${this.age} old`)
//     }
// }

// class progammer extends person {
//     constructor(_name, _age, _yearsofexperence) {
//         super(_name, _age);
//         this.years_of_experence = _yearsofexperence;
//     }
//         code()
//         {
//             console.log(`this is ${this.name} and i am ${this.age} old and my experence is ${this.years_of_experence}`);
//         }

// }

// let s = new person('alies', 30);
// let y = new progammer('bob', 24, 4);

// console.log(s, y);

// y.code();
// y.dis(); // this accessing the parent class method

// const prog = [
//     new progammer('jef',23,2),
//     new progammer('jon',40,20)
// ];

// for(progammer of prog)
// {
//     progammer.code();
// }

//polymorphism

//is the act of redefining a method in child which is present in parent

//  class animal
//  {
//      counstructor(_name){
//          this.name = _name;
//      }

//      sound()
//      {
//          console.log('aaaaaa');
//      }
//  }

//  class dog extends animal
//  {
//      constructor (_name)
//      {
//          super(_name);
//      }

//      sound()
//      {
//         // super.sound();// this is calling the parent class method
//          console.log('bow bow');
//      }
//  }

//  let b = new dog;
//  b.sound();
//  let z = new animal;
//  z.sound();

