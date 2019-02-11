// ***简易泛型
// function identity<t>(arg: t): t {
//     return arg;
// }
//
// console.log(identity('woshi'));


//** 接口泛型
// interface ss<t> {
//     (arg: t) : t
// }
//
// function Add<t>(arg: t): t {
//     return arg;
// }
//
// let dd: ss<number> = Add;
// console.log(dd(10));

//** 泛型类
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
//
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) { return x + y; };

//** 泛型继承
interface jicheng {
    length: number;
}
function test<t extends jicheng>(arg: t): t {
    console.log(arg.length);
    return arg;
}

test('hello');