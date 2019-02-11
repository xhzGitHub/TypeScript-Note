// interface声明
// interface laberValue {
//     label: string;
//     color?: string;
// }
//
// function printLabel(labelobj: laberValue) {
//     console.log(labelobj.label);
// }
//
// var obj = {size: 10, label: 'aaa'};
// printLabel(obj);

// 可选属性
// interface squareConfig {
//     color?: string;
//     width?: number;
// }
//
// function createSquare(config: squareConfig) : {color: string; area: number}{
//     let newSquare = {color: 'white', area: 100};
//     if(config.color){
//         newSquare.color = config.color;
//     }
//     if(config.width){
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }
//

// let mySquare = createSquare({color: 'black'});
// console.log(mySquare);

// //只读属性
// interface Point{
//     readonly x: number;
//     readonly y: number;
// }
//
// let p1: Point = {x: 10, y: 20};
// p1.x = 5;   // 此处报错

// 函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean
// }
//
// let mySearch: SearchFunc;
// mySearch = function (src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }
//
// console.log(mySearch('haha', 'a'));

// 索引类型
// interface StringArray {
//     [index: number]: string;
// }
//
// let myArray: StringArray;
// myArray = ['a', 'S', 'b'];
// let myStr: string = myArray[1];
// console.log(myStr);

// // 类 类型
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
//
// class Clock implements ClockInterface{
//     currentTime: Date;
//     setTime(d:Date){
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number){};
// }
//
// var clock = new Clock(2016, 10);

// // 继承接口
// interface Shape {
//     color: string;
// }
//
// interface Square extends Shape{
//     sideLength: number;
// }
//
// // let square = <Square>{};
// // square.sideLength = 12;
// // square.color = 'blue';
// var square: Square;
// square = {sideLength : 11, color: 'blue'};
// console.log(square);
//
// interface Counter {
//     (start: number): string;
//     interval: number;
//     reset(): void;
// }
//
// function getCounter(): Counter {
//     let counter = <Counter>function (start: number) { };
//     counter.interval = 123;
//     counter.reset = function () { };
//     return counter;
// }
//
// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;
// console.log(typeof c);
interface Clock {
    (src: string, sub: string):boolean;
}

let myClock : Clock;
myClock = function (src: string, sub:string) {
    const result = src.search(sub);
    return result > -1;
}
let result = myClock('hhaa','h');
console.log(result);