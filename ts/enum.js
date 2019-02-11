// 数字枚举
var Person;
(function (Person) {
    Person[Person["face"] = 1] = "face";
    Person[Person["ears"] = 2] = "ears";
    Person[Person["nose"] = 3] = "nose";
})(Person || (Person = {}));
console.log(Person.face);
console.log(Person.ears);
console.log(Person[3]);
// 枚举计算
var People;
(function (People) {
    People[People["zhang"] = 2] = "zhang";
    People[People["wang"] = 6] = "wang";
    People[People["li"] = 'li'.length] = "li";
})(People || (People = {}));
console.log(People.wang);
console.log(People.li);
