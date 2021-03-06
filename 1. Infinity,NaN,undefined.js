'use strict';

// Built-in Object

// 1. Infinity
// 전역 객체의 속성으로 무한대를 나타내는 숫자값이다.

console.log(Infinity);               //Infinity
console.log(Infinity + 1);           //Infinity
console.log(Infinity - 1);           //Infinity
console.log(Infinity / 1);           //Infinity
console.log(Infinity * 1);           //Infinity
console.log(100 / 0);                //Infinity
console.log(Math.pow(100, 1000000)); //Infinity

// 2. NaN
// Not a Number : 숫자가 아님을 나타낸다.

console.log(NaN);                   // NaN
console.log(isNaN(NaN));            //true
console.log(isNaN(100));            //false

// 3. undefined

console.log(undefined);             //undefined

let x;
console.log(x);                     //undefined