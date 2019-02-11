// 数字枚举
enum Person {
    face = 1,
    ears,
    nose
}

console.log(Person.face);
console.log(Person.ears);
console.log(Person[3]);

// 枚举计算
enum People {
    zhang = 2,
    wang = zhang * 3,
    li = 'li'.length,
}

console.log(People.wang);
console.log(People.li);