# TypeScript-Learning-Note

# TypeScript 基础类型
* boolean 布尔值
* number 数字
* string 字符
* list 数组
* Tuple 元组
* enum 枚举
* any 任意值
* void 空值


## 基础类型
### boolean
```javascript
// var temp = true; //JS
var temp : boolean = true;
console.log(temp);
```

### number
```javascript
var temp : number = 9;
console.log(temp);
```

### string
```javascript
var temp : string = 'hello';
console.log(temp);
```

### 数组
```javascript
//两种写法
var temp:number[ ] = [1,2,3];
var temp: Array<number> = [1,2,3];
console.log(temp);
```

### 元组
* 元组是关系数据库中的基本概念，关系是一张表，表中的每行（即数据库中的每条记录）就是一个**元组**，每列就是一个属性。在二维表里，元组也称为记录。
```javascript
// 两种写法
var temp: [number, string, number] = [1,'s',2];
var temp : [ ] = [1,'d',2];
console.log(temp);
```
* 可以说，元组与数组的区别是，数组元素都是同一类型，元组元素可以是不同类型。

### 枚举
* 枚举在C/C++/C#中，是一个被命名的整型常数的集合。
```javascript
enum color { red, blue, green };
console.log(color);
console.log(typeof color);

// 输出 => {0: "red", 1: "blue", 2: "green", red: 0, blue: 1, green: 2}
// 输出 => object
```

### any
* any可以取任意值，可以对之前的赋值进行覆盖
* any可以使let失效
```javascript
let temp:any = 4;
temp = 'sss';
console.log(temp);
// 输出 => 'sss' 
```

### void
* void 类型表示没有任何类型。当一个函数没有返回值时，通常会为其定义为void
* 声明void通常只能赋值为undefined 和 null

```javascript
function out( ) : void {  
    console.log('aaa');
}
out( );
```

### 类型断言
通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。 类型断言好比其它语言里的**类型转换**，但是不进行特殊的数据检查和解构。 

```javascript
// 两种写法 将 any转换为string
var temp : any = '1312sasdasd';
var length : number = (<string>temp).length;
var length : number = (temp as string).length;
console.log(length);
```


# TypeScript 接口

## 基本接口
```javascript
interface laberValue {  
    label: string;
}
function printLabel( labelobj : laberValue ) {
    console.log(labelobj.label);
}
var obj = { size : 10, label : 'aaa' };
printLabel( obj );
```
* 代表声明接口laberValue，需要输入带有label属性的形参。

## 可选属性
* 在接口的属性值后加“？”，代表该值在输入时为可选（可写也可不写）
```javascript
interface laberValue {
    label: string; 
    color?: string;
}
function printLabel( labelobj : laberValue ) {
    console.log( labelobj.label );
}
var obj = { size : 10, label : 'aaa' };
printLabel( obj );
```
* 在此例中代表，color属性可以不在形参中出现，如果不写“？”，会报错。

```javascript
interface squareConfig {    
    color?: string;
    width?: number;
}
// 代表输入参数为接口，输出类型为对象{color, area}
function createSquare( config : squareConfig ) : { color: string; area: 
number}
{
    let newSquare = {color: 'white', area: 100};   
    if( config . color ){  
        newSquare.color = config.color;
    }
    if( config . width ){
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare( { color: 'black' } );
console.log( mySquare );
```


### 只读属性
* 只读功能readonly类似于const，只能在声明创建的时候赋值，后面再想更改都没用；
* readonly与const的区别是一个用于属性，一个用于变量；
```javascript
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```

### 函数类型
* 接口中也可以描述函数类型，格式是 ''（形参）：函数类型'
```javascript
interface SearchFunc {    
    ( source: string, subString: string ): boolean
}
let mySearch: SearchFunc;
// 此处注意，实际函数内的形参名可以与接口中的不一致，但是格式与类型必须一致
mySearch = function ( src: string, sub: string ): boolean {
    let result = src.search( sub );
    return result > -1;
}
console.log( mySearch( 'haha', 'a' ) );
// 输出 => true
```

### 索引类型
* 类似函数类型，也可以使用索引来对数组进行索引定位
```javascript
interface StringArray {    
    [index: number]: string;
    // 意味着索引必须为数组，数组元素必须为字符    
}
let myArray: StringArray;
myArray = ['a', 'S', 'b'];
let myStr: string = myArray[1];
console.log(myStr);
```

### 类 类型
* 类 类型与其他类型不同的是，使用“implements”代替“：”；
```javascript
// 类 类型
interface ClockInterface {  
    currentTime: Date;   
    setTime( d: Date );
}
// 声明类
class Clock implements ClockInterface{ 
    currentTime: Date; 
    setTime( d : Date ){
        this.currentTime = d;  
    }
    constructor( h: number, m: number ){ };
}
var clock = new Clock(2016, 10);
```

### 继承接口
* 接口的属性也可以进行继承，使用关键词**extend**
* 两种声明变量的写法： 
* 1. “<继承的接口名>{ }”
* 2. “：”
```javascript
// 继承接口
interface Shape { 
    color: string;
}
// Square接口继承Shape
interface Square extends Shape{   
    sideLength: number;
}
// 写法1
let square = <Square>{ };
square.sideLength = 12;
square.color = 'blue';
console.log(square);
// 写法2
var square: Square;
square = { sideLength : 11, color: 'blue' };
console.log( square );
// 输出 => {sideLength: 12, color: "blue"}
```

# TypeScript 类
## 类的声明
* 类中，需要有属性，方法，构造函数。构造函数用于传参。
```javascript
// 类的声明
class Family {
    father: string;
    mother: string;
    greeting( ){
        return `hi, I'm ${ this.father }'s son`
    }
    constructor( father: string, mother: string ){
        this.father = father;
        this.mother = mother;   
    }}
    
const family = new Family('xsj','cm');
console.log(family);
console.log(family.father);
console.log(family.greeting());

// 输出 => Family {father: "xsj", mother: "cm"}
// 输出 => xsj
// 输出 => hi, I'm xsj's son
```

## 类 继承
* 类的继承需要使用关键词 **extends**
* 子类的构造函数继承父类构造函数，使用**super(父类属性)**
* 继承父类方法使用**super . 父类方法**
```javascript
class Son extends Family{    
    age: number;   
    // 构造函数    
    constructor( fatherName: string, age: number ){
        super( fatherName );  // 继承父类属性    
        this.age = age;
    }
    hi( age = this.age ){
        super.greeting(age);    // 继承父类方法    
    }
}
const son = new Son('xsj', 26);
son.hi( );
console.log(son);
// 输出 => hi, I'm xsj's son, I'm 26 years old
// 输出 => Son {father: "xsj", mother: undefined, age: 26}
```

## 公有，私有和受保护的修饰符
### public
* 在Ts中，所有类中的变量，默认为public（公有的），

### private
* 声明了private的变量，是**不能**在声明它的类之外所访问， 即只能在class类中被访问
```javascript
class Animal { 
    private name: string; 
    constructor( name: string ){
        this.name = name; 
        }
    }
const dog = new Animal( 'dog' );
console.log(dog.name);  // error
```

### protected
* protected 与 pirvate类似，但是protected还能在派生类的class中被访问
```javascript
// protected
class Person {  
    protected name: string;
    private age: number;
    constructor( name: string, age: number ){
        this.name = name;   
        this.age = age; 
    }
}
class Employee extends Person{  
    private department: string;
    constructor( name:string, age: number, department: string ){
        super(name,age);   
        this.department = department;  
    }
    public get( ){
        console.log(this.name);    
        console.log(this.age); // error, private不能被派生类访问       
        return `Hello, my name is ${this.name} and I work in ${this.department}`   
    }
}
const employee = new Employee('xhz', 26, 'online');
console.log(employee.get());
```

### static
* static即在类中声明的变量存在于类本身上，而不是类的实例化上，因为不是通过构造函数创建的
```javascript
// ***** static
class Grid {
    static origin = {x: 0, y: 0}; 
    calculate( point: {x: number, y: number} )
    {
        const distX = point.x - Grid.origin.x; 
        const distY = point.y - Grid.origin.y;  
        return Math.sqrt( distX * distX + distY * distY ) / this.scale;
    }
    constructor( public scale: number ){ }
}
const point1 = new Grid(1);
const point2 = new Grid(5);
console.log( point1.calculate( {x:10,y:10} ));
console.log( point2.calculate( {x:10,y:10} ));
```

# TypeScript 泛型
* 泛型其实类似于模板组件，
可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
## 简易泛型
```javascript
// 在函数名后加<t>代表泛型函数，其中的t即模板
// 该函数表示传入的参数类型与函数返回类型需一致
function identity<t>(arg: t): t { 
    return arg;
}
console.log(identity('woshi'));
```

## 数组泛型
```javascript
function loggingIdentity<T>(arg: T[ ]): T[ ] {
    console.log(arg.length); // Array has a .length, so no more error
    return arg; 
}
```

## 接口泛型
```javascript
interface ss<t> {    
    (arg: t) : t
}
function Add<t>(arg: t): t {
    return arg;
}
let add: ss<number> = Add;
console.log( dd(10) );
```

## 类 泛型
```javascript
class GenericNumber<T> { 
    zeroValue: T;   
    add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};
```

## 泛型继承
```javascript
//** 泛型继承
interface jicheng {  
    length: number;
}
// test的泛型继承了jicheng接口的方法length
function test<t extends jicheng>(arg: t): t {
    console.log(arg.length);  
    return arg;
}
test('hello');
```
