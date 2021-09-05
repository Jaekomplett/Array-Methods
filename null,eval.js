'use strict';

// 1. null

console.log(null); //null
console.log(null + 1); // 1

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(typeof(null)); //object
console.log(typeof(undefined)); //undefined

/* 
'=='와 '==='의 차이점
'==='는 자료형까지 같아야 true를 반환한다.
*/


// 2. eval()
// 문자열로 나타낸 자바스크립트 명령문 또는 연산식을 실행한다.
// But eval()은 사용하지 않는 것을 권장.

console.log(eval('100 + 100')); // 200

let x = 10;
let y = 20;
console.log(eval('x + y')); // 30
