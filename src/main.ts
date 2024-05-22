// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));


// Модуль 2э


// ==========================Базові типи====================
// const a: boolean = false

// const b: number = 12
// const c: string = "Hell"

// const d:undefined = undefined
// console.log(a, b, c, d);

// function foo(s: number, d: string, c: boolean) {
//   return  s,d,c
// }

// console.log(foo(2, "ge", true));



// ========================================Складні типи Object ======================================



// let user: { name: string, age: number } = { name: "Panda", age: 22 }
// console.log(user);
 
// interface User {
//   name: string, age:number
// }

// const panda: User = {
//   name: "Padn",
//   age: 333
  
// }
// console.log(panda);

// let user: { name: string; age: number } = {
//   age: 22,
//   name:"HElloEW"
// };


// let userNameLikeNumber: { name: string; age: number } = {
//   name: 10,
//   age: 30,
// };

// let a: { name: string, age: number, cool: boolean } = {
//   name:"Hello",age: 23, cool: false
// }
// console.log(a);



// type Panda = {
//   name: string,
//   age:number
// }

// const user: Panda ={
//   name:"Dima",
//   age:33,
// }
// console.log(user);


// ====================Array==============



// let a : number[]
// a = [2, 3, 4, 5]

// let b: number[] = [2,3,4,5,6,6]
// // console.log(a,b)

// const c:number [][] = [[1,2,3,4] ,[3,44,5,5,6,]]
// for (const ar of c) {
//   console.log(ar);
  
// }
  
// const d: (number | boolean)[] = [1, false]
// console.log(d);


// const a: Array<string> = ["a", "s"]


// const b: Array<number> = [1,2,2,3,4]
// console.log(b);




// let a : string[]
// a = ["hel", "dd"]
// console.log(a);

// let b: number[]

// b = [2, 3, 4, 4]
// console.log(b);


// let array: number[][]
// array = [[22, 3], [2, 34, 4]]
// console.log(array);


// let mix: (number | string)[]
// mix = [23, "dkfd"]
// console.log(mix);


// =============================== масив об'єктів==========================
// let panda: { name: string, age: number }[]
// panda = [{ name: "SDD", age: 33 }, { name: "SDD", age: 33 }]
// console.log(panda);
// type User ={ name: string, age: number }

// let panda:User[] = [{ name: "SDD", age: 33 },{ name: "SDD", age: 33 },{ name: "SDD", age: 33 },]
// console.log(panda);


// let user: {
//   name: string,
//   age:number
// }[]
// user = [{ name: "Yuriy", age: 25 },
//   { name: "Yuriy", age: 25 },
//   { name: "Yuriy", age: 25 },
// ]

// console.log(user);
// type User = {
//   name: string,
//   age:number
// }

// let panda:User[]=[{ name: "Yuriy", age: 25 },
//   { name: "Yuriy", age: 25 },]
//   console.log(panda);
  
// let anyArray: any[] = [1, 3, "dfsf"]
  
// console.log(anyArray);


// const a: any[] = [1, "sfds"]
// console.log(a);
// const a: number = 2
// console.log(a);


// ====================Типи для змінних та аргументів==============

// let notSure: number
// // console.log(notSure=2);
// let a: number

// notSure = 2

// a = notSure
// console.log(a);

// function fetchUserData() {
//   return 'Tom';
// }

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === 'string') {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }



// function a() {
//   return true
// }

// let user: unknown = a()
// if (typeof user === "boolean") {
//   console.log(user);
  
// }

// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: 'Tom' };

//   callback(responseData);
// }

// // Використання функції:
// fetchUserData('123', (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// export {};


// ========================Unknown======================

// let notSure: unknown = 4;
// notSure = 'maybe a string instead';
// notSure = false;

// let num: number;

// num = notSure;

// console.log(num);


// function fetchUserData() {
//   return 'Tom';
// }

// let userData: unknown = fetchUserData(); // fetchUserData повертає невідомі дані
// if (typeof userData === 'string') {
//   console.log(userData.toUpperCase()); // OK, тепер ми знаємо, що це рядок
// }


// ========================Tuple===================

// let a: [string]
// a = ["a",2]
// console.log(a);

// let fixed: [number, string] = [2, "aa"]
// fixed.push("dsfsdfjsldkjfl")
// console.log(fixed);


// let tup: [string, ...number[]]

// tup = ["Hwllo", 3, 3, 4, 5]

// console.log(tup);


// let tupleType: [string, boolean];
// tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

// console.log(tupleType);

// let date: [number, number, number];
// date = [7, 11, 2023]; // OK
// date.push(222)
// console.log(date);


// let tuple: [string, ...number[]];

// tuple = ['hello', 42, 100, 200]; // OK
// console.log(tuple);

// =============================Enum===========================

// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }



// enum Role {
//   ADMIN,
//   USER,
// }

// const person = {
//   role: Role.ADMIN,
// };

// if (person.role === Role.ADMIN) {
//   console.log('Role: ', Role.ADMIN);
// }

// enum Panda {
//   ADMIN="Helo",
//   USER=2,
//   SHAK=true,
// }

// const person = {
//   pa: Panda.SHAK
// }

// console.dir(Panda
// );


// const enum Panda {
//   ADMIN=2,
//   BAD=43
// }
// const a= Panda.ADMIN
// console.log(a);


// const enum Test {
//   A = [2,23],
//   C = 2,
// }

// for (let item in Test) {
//   console.log(item);
// }

// =========================Union Type=================================




// let mix: number | string | boolean

// mix = 's'
// mix= 2
// console.log(mix);


// const a = (param1: number|string, param2: number|string) => {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//   return param1 + param2
//   } else {
//     return param1.toString() + param1.toString()
// }
// }

// console.log(a(2,"2"));



// type Dog = {
//   legs: 4;
//   bark: () => void;
// };

// type Fish = {
//   fins: 2;
//   swim: () => void;
// };

// let pet: Dog | Fish;

// // type guard function
// function isDog(pet: Dog | Fish): pet is Dog {
//   return 'bark' in pet;
// }

// // Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
// if (isDog(pet)) {
//   pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
// } else {
//   pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
// }


// =================================Intersection Type==========================


// type Employee = {
//   name: string;
//   id: number;
// };

// type Manager = {
//   employees: Employee[];
// };

// type CEO = Employee & Manager;

// const ceo: CEO = {
//   name: 'Alice',
//   id: 1,
//   employees: [
//     {
//       name: 'Bob',
//       id: 2,
//     },
//   ],
// };

// console.log(ceo);


// type Dima = {
//   name: string;
//   age: number;
// }

// type Sasha = {
//   dout: Dima[]
// }
// type TO = Dima & Sasha
// const op: TO = {
//   name: "Panda",
//   age: 21,
//   dout: [
//     {
//       name: "Alia",
//       age:1
//   }]

// }
// console.log(op);


// =====================================﻿Literal Type================================

// type OneOrTeo = 1 | 2

// let value: OneOrTeo
// value = 2
// console.log(value);


type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case 'small':
      return { fontSize: '10px', padding: '5px' };
    case 'medium':
      return { fontSize: '15px', padding: '10px' };
    case 'large':
      return { fontSize: '18px', padding: '15px' };
    default:
      return { fontSize: '14px', padding: '10px' };
  }
}

let myButtonStyle = getButtonStyle('medium'); // OK


myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.



console.log(myButtonStyle);