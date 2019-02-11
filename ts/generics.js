// ***简易泛型
// function identity<t>(arg: t): t {
//     return arg;
// }
//
// console.log(identity('woshi'));
function test(arg) {
    console.log(arg.length);
    return arg;
}
test('hello');
