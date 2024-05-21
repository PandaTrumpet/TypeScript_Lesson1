// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));


// Модуль 2э


// ==========================Базові типи====================


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


// ====================Типи для змінних та аргументів==============


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

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('Role: ', Role.ADMIN);
}