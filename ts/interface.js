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
var myClock;
myClock = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var result = myClock('hhaa', 'h');
console.log(result);
