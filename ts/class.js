// // 类的声明
// class Family {
//     father: string;
//     mother: string;
//     greeting(age: number){
//         console.log(`hi, I'm ${this.father}'s son, I'm ${age} years old`);
//     }
//     constructor(father: string, mother?: string){
//         this.father = father;
//         this.mother = mother;
//     }
// }
//
// // 类继承
// class Son extends Family{
//     age: number;
//     // 构造函数
//     constructor(fatherName: string, age: number){
//         super(fatherName);  // 继承父类属性
//         this.age = age;
//     }
//     hi(age = this.age){
//         super.greeting(age);    // 继承父类方法
//     }
// }
// const son = new Son('xsj', 26);
// son.hi();
// console.log(son);
//
// // const family = new Family('xsj','cm');
// // console.log(family);
// // console.log(family.father);
// // console.log(family.greeting());
//***** private
// class Animal {
//     private name: string;
//     constructor(name: string){
//         this.name = name;
//     }
// }
//
// const dog = new Animal('dog');
// console.log(dog.name);  // error
// //***** protected
// class Person {
//     protected name: string;
//     private age: number;
//     constructor(name: string, age: number){
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Employee extends Person{
//     private department: string;
//     constructor(name:string, age: number, department: string){
//         super(name,age);
//         this.department = department;
//     }
//
//     public get(){
//         console.log(this.name);
//         console.log(this.age); // error, private不能被派生类访问
//         return `Hello, my name is ${this.name} and I work in ${this.department}`
//     }
// }
//
// const employee = new Employee('xhz', 26, 'online');
// console.log(employee.get());
// ***** static
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculate = function (point) {
        var distX = point.x - Grid.origin.x;
        var distY = point.y - Grid.origin.y;
        return Math.sqrt(distX * distX + distY * distY) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var point1 = new Grid(1);
var point2 = new Grid(5);
console.log(point1.calculate({ x: 10, y: 10 }));
console.log(point2.calculate({ x: 10, y: 10 }));
