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


// type ButtonSize = 'small' | 'medium' | 'large';

// function getButtonStyle(size: ButtonSize) {
//   switch (size) {
//     case 'small':
//       return { fontSize: '10px', padding: '5px' };
//     case 'medium':
//       return { fontSize: '15px', padding: '10px' };
//     case 'large':
//       return { fontSize: '18px', padding: '15px' };
//     default:
//       return { fontSize: '14px', padding: '10px' };
//   }
// }

// let myButtonStyle = getButtonStyle('medium'); // OK


// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.



// console.log(myButtonStyle);



// ===========================Типи для методів та функцій=======================================================

// Return Type=============


// function a(num): number {
//   return num
// }

// console.log(a(2));

// function greet(): number [] {
//   return [1,23,3,4]
// }

// let result = greet();
// console.log(result);


// const newFun = (): string => {
//   return "Hello"
// }

// console.log(newFun());


// const ho = (): number[] => {
//   return [1,2,3,4]
// }

// console.log(ho());


// type User = {
//   id: number;
//   name: string;
// };

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const users: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// let result = getUserNames(users);
// console.log(result); // ['Alice', 'Bob', 'Charlie']
// type User = {
//   id: number;
//   name: string;
// }

// const getSom = (users: User[]): string[] => {
//   return  users.map((user)=>user.name)
// }

// const me: User[] =   [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ]

// const re = getSom(me)
// console.log(re);

// type User = {
//   id: number;
//   name: string
// }

// const getUser = (users: User[]): number[] => {
//   return users.map((user)=>user.id )
// }

// const my: User[] = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ]

// console.log(getUser(my));


// function hi() {
//   return 23232
// }

// const greet: number = hi()

// console.log(greet);



// ===========================Void========================


// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello, world!');


// function lod(message: string): void {
//   console.log(message);
  
// }

// lod("Jello")

// function doSomething(callback: () => void) {
//   callback();
// }

// doSomething(() => {
//   console.log('Callback function!');
// });


// function a(num: number): void {
//   console.log(num);
  
// }

// a(2)


// function a(callback: () => void) {
//   callback()
// }

// a(()=>{console.log(2);
// })


// =================================Never========================

// function throwError(message: string): never {
//   throw new Error(message);
// }


// function throwError(message: number): never {
//   throw new Error(message)
// }

// console.log(throwError("Hello"));


// =========================Function Type=====================

// let myFunc: (firstArg: string, secondArg: number) => void;

// myFunc = (first: string, second: number) => {
//   console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42); // Висновок: "First: Hello, Second: 42"



// Визначення типу функції, який приймає два числа та повертає число
// type CallbackType = (num1: number, num2: number) => number;

// // Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log('Result:', callback(param1, param2));
// }

// // Приклади використання calc з різними функціями зворотного виклику
// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);



// =================================Custom Types==================================


// type User = {
//   id: number;
//   name:string
// }


// const user: User = {
//   id: 2,
//   name:"Panda"
// }
// console.log(user);


// type Numbers = [number, string]

// type Hi = {
//   id: number;
//   name: string;
//   coords: Numbers
// }


// const probe: Hi = {
//   id: 2,
//   name: "Panda",
//   coords:[1,"Hello"]
// }
// console.log(probe);


// enum AnimalIds {
//   cat = 'cat',
//   dog = 'dog',
//   fish = 'fish',
// }

// type Animal = {
//   [AnimalIds.cat]: {
//     meow: () => string;
//   };
//   [AnimalIds.dog]: {
//     bark: () => string;
//   };
//   [AnimalIds.fish]: {
//     swim: () => undefined;
//   };
// };

// // Створення об'єктів типу Animal
// let cat: Animal[AnimalIds.cat] = {
//   meow: () => 'Meow! I am a cat',
// };

// let dog: Animal[AnimalIds.dog] = {
//   bark: () => 'Woof! I am a dog',
// };

// let fish: Animal[AnimalIds.fish] = {
//   swim: () => undefined,
// };




// ========================================Опціональні параметри та властивості=================================


// function greet(name?: string) {
//   if (name) {
//     return `Hello, ${name}!`;
//   } else {
//     return `Hello!`;
//   }
// }

// console.log(greet('Alice')); // Виводить: Hello, Alice!
// console.log(greet()); // Виводить: Hello!



// function a(num?: number) {
//   if (num) {
//     return `Hello ${num}`
//   } else {
//     return "Hello"
//   }
// }

// console.log(a(2));
// console.log(a());



// type User = {
//   name?: string;
//   age:number
// }

// const a: User = {
//   age: 22,
//   // name:"Hello"
// }
// console.log(a);

// ===================================Різниця між Type та Interface===============================

// interface Animal {
//   name:string
// }

// const a: Animal = {
//   name:"Cat"
// }

// console.log(a);

// type An = {
//   age:number
// }

// const b: An = {
//   age:23
// }

// console.log(b);

// interface Animal {
//   age:number
// }

// const c: Animal = {
//   name: "Panda",
//   age:32
// }

// console.log(c);
// type AnimalName = {
//   name:string
// }
// type AnimalAge = {
//   age:number
// }

// type Animal = AnimalAge & AnimalName

// const c: Animal = {
//   name: "Panda",
//   age:21
// }
// console.log(c);


// type Cat = {
//   meow: () => string;
// };

// interface Dog {
//   bark: () => string;
// }

// type DogOrCat = Dog | Cat;
// type DogAndCat = Dog & Cat;

// type Animal = {
//   cat: ()=>string
// }
// interface Panda{
//   bar: ()=>string
// }

// type AnAndPa = Animal | Panda
// type AnAndPa = Animal & Panda




// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   bark: string;
// }

// class MyDog implements Dog {
//   name = 'Fido';
//   bark = 'Woof!';
// }

// // Error: Property 'name' is missing in type 'OtherDog'
// class OtherDog implements Dog {
//   bark = 'Woof!';
// }


// interface Walkable {
//   walk(): void;
// }

// interface Eatable {
//   eat(): void;
// }

// class Animal implements Walkable, Eatable {
//   walk() {
//     console.log('The animal walks...');
//   }

//   eat() {
//     console.log('The animal eats...');
//   }
// }

// const animal = new Animal();
// console.log(animal);

// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;

// add = (n1:number, n2: number) => {
//   return n1 + n2;
// }


// =========================================================Інтерфейси===========================================


// interface Person {
//   firstName: string;
//   lastName: string;
//   age?:number
// }

// function greet(person: Person) {
//   console.log(`Hello ${person.firstName} ${person.lastName}`);
  
// }
// const john: Person = {
//   firstName: "Dima",
//   lastName: "PAnda"
// }

// greet(john)


// ============================Інтерфейси об'єктів=======================


// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string):void
// }

// let user: IPerson

// user = {
//   name: "Patrick",
//   age: 2,
//   greet(phrase) {
//     console.log(phrase + this.name+ "I am"  + this.age);
    
//   }
// }

// user.greet("Hello,")


// ======================Readonly=================================


// interface IPerson {
//   readonly name:string
// }
// const person: IPerson = {
//   name: "John"
// }
// person.name = "Panda"///


// ========================================Extending Interfaces=========================
// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void
// }

// interface IPilot extends IPerson {
//   flyMesage():void
// }

// ==============================Інтерфейси як тип функції============================

// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// let add: AddFunc;
// add = (n1: number, n2: number) => {
//   return n1+n2
// }


// console.log(add(1,2));

// ====================================Опціональні властивості=====================================

// interface IPerson {
//   name?: string;
//   age:number
// }

// const poly: IPerson = {
//   age:23
// }
// console.log(poly.age);


// ======================================================Advanced Types==============================================

// =============Type Casting===================

// let someValue: unknown = "Hell0"
// let strLength1: number = (<string>someValue).length
// // console.log(strLength1);
// // or

// let strLength2: number = (someValue as string).length
// console.log(strLength2);


// let strLength3: number = someValue.length;
// console.log(strLength3);


// const input = <HTMLInputElement>document.getElementById("inputEmail")
// input.value = 'test@test.ts';
// console.log(input);

// const input = document.getElementById("email") as HTMLInputElement
// input.value = "sjdfkljsd@lkjklfs"



// const input = document.getElementById("ere")

// if (input) {
//   (input as HTMLInputElement).value = "sdfsd@jsdklf"
// }


// ===================Index Properties===================

// type IndexType = {
//   [prop: string]: string;
// }

// type Person = {
//   name: string;
//   [x:string]:string
// }

// const user: Person = {
//   name: "Panda",
//   gender: "Hi",
//   por: "DDDD",
// //  dddd:2
// }

// console.log(user);


// type User = {
//   id: number;
//   name: string;
//   email:string
// }

// type Users = {
//   [id:string]:User
// }

// let users: Users = {}

// let user: User = {
//   id: '1',
//   name: 'Alex',
//   email: 'alex@example.com',
// };

// users[user.id] = user;
// console.log(user);


// ====================================Generics===========================================================


// let arr: Array<string | number> = []
// arr = [2, "Hello"]
// console.log(arr);

// let b: Array<boolean | null> = []
// b = [null, true]
// console.log(b);


// const promise: Promise<string> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve('Done!');
//   }, 1000);
// });

// promise.then((data) => {
//   console.log(data);
// });


// const prom: Promise<number> = new Promise((resolve) => {
//   setInterval(() => {
//     resolve(2)
//   },1200)
// })

// prom.then((data) => {
//   console.log(data);
  
// })


// function hello<T>(arg: T): T {
//   return arg
// }

// const probe1 = hello("Hello")
// const probe2 = hello(2)

// console.log(probe2);

// console.log(probe1);


// function a<A>(arg: A): A{ 
//   return arg
// }

// let b = a("Panda")
// console.log(b);


// function firsElement<T>(arg: T[]) {
//   return arg[2]
// }

// let a = firsElement([1, 2, 3, 3, 4, 5])
// console.log(a);



function a(num1: string | number, num2: string | number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2
  }
}

console.log(a(2,3));
