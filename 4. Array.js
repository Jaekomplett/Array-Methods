'use strict';

let arr = [1, 2, 3, 4];

console.log(arr); // [1, 2, 3, 4]
console.log(arr[0]); // 1

// 1. concat() 
//! No Mutation

let arr = ['apple', 'pear', 'orange', 'banana'];
let arrTwo = ['pineapple', 'kiwi'];

console.log(arr.concat(arrTwo));
//[ 'apple', 'pear', 'orange', 'banana', 'pineapple', 'kiwi' ]


// 2. 배열에 항목 추가, 제거하기
//! mutates
// push() : 배열 끝에 항목 +
// pop() : 배열 끝에서 항목 -
// unshift() : 배열 앞에 항목 +
// shift() : 배열 앞에서 항목 -

let arr = ['apple', 'pear', 'orange', 'banana'];

console.log(arr.push('pineapple')) //5 (배열의 길이 출력)
console.log(arr); // [ 'apple', 'pear', 'orange', 'banana', 'pineapple' ]

console.log(arr.pop()); // 'pineapple' 삭제
console.log(arr); // [ 'apple', 'pear', 'orange', 'banana' ]

console.log(arr.unshift('kiwi')); //5 (배열의 길이 출력)
console.log(arr);// [ 'kiwi', 'apple', 'pear', 'orange', 'banana' ]


console.log(arr.shift()); // 'kiwi' 삭제
console.log(arr);// [ 'apple', 'pear', 'orange', 'banana' ]

// 3. splice(): 요소를 삭제하거나 교체
// arr.splice(시작 인덱스, 삭제할 요소 수, 추가할 요소)
//! mutates

let arr = ['apple', 'pear', 'orange', 'banana'];

console.log(arr.splice(2, 1, 'kiwi')); // 'orange' 삭제
console.log(arr); // [ 'apple', 'pear', 'kiwi', 'banana' ]

console.log(arr.splice(1, 0, 'mango')); // []
console.log(arr); // [ 'apple', 'mango', 'pear', 'kiwi', 'banana' ]


// 4. slice(): 요소를 인덱스 기준으로 잘라낸다.
// arr.slice(시작 인덱스 이상부터, 종료 인덱스 미만까지)
//! NO Mutation
let arr = [3, 5, 2, 7, 8, 10, 1];

console.log(arr.slice(0,4)); // [ 3, 5, 2, 7 ]
console.log(arr.slice(2,4)); // [ 2, 7 ]


// 5. fill(): 해당 값으로 배열을 채운다. 
// arr.fill(배열에 입력할 값, 시작 인덱스 이상, 종료 인덱스 미만)
//! mutates
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.fill(0)); // [ 0, 0, 0, 0, 0, 0 ]
console.log(arr.fill(100, 3, 5)); // [ 0, 0, 0, 100, 100, 0 ] 

console.log(arr.fill(99, 2, 5)); // [ 0, 0, 99, 99, 99, 0 ]
console.log(arr.fill(99, 2, 6)); // [ 0, 0, 99, 99, 99, 99 ]

// 6. filter(): 조건을 만족하는 항목들만 배열로 반환한다.
//! No Mutation
let score = [10, 30, 55, 80, 95, 100, 70];
let words = ['tom', 'hardy', 'leo', 'dicaprio', 'mary', 'jane']

console.log(score.filter(x => x > 30)); // [ 55, 80, 95, 100, 70 ]
console.log(score.filter(x => x < 55)); // [ 10, 30 ]

console.log(words.filter(x => x.length > 4)); // [ 'hardy', 'dicaprio' ]
console.log(words.filter(x => x.length > 3)); // [ 'hardy', 'dicaprio', 'mary', 'jane' ]