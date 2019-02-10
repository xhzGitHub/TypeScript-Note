// // var temp = true; //JS
// var temp:boolean = true;
// console.log(temp);

//** var name:string = 'wos';
// var age:number = 33;
// var out = `hello, my name is ${name}
// I'm ${age} years old`;
// console.log(out);

//** list
// // var temp:number[] = [1,2,3];
// var temp: Array<number> = [1,2,3];
// console.log(temp);

//** tumple
// var temp: [number, string, number] = [1,'s',2];
// // var temp : [] = [1,'d',2];
// console.log(typeof temp);

//** enum
// enum color{red, blue, green};
// console.log(color);
// console.log(typeof color);

//** any
// let temp:any = 4;
// temp = 'sss';
// console.log(temp);

//** void
// function out(): void {
//     console.log('aaa');
// }
//
// out();

//** 类型断言
var temp : any = '1312sasdasd';
var length : number = (<string>temp).length;
// var length : number = (temp as string).length;
console.log(length);
// console.log(typeof temp);