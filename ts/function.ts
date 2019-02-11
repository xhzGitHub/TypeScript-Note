// 命名函数
// function add(x: number, y: number): number {
//     return x + y;
// }
//
// console.log(add(10, 2));

// 匿名函数

let add = function (x: number, y: number): number {
    return x + y;
}(10, 2)

console.log(add);