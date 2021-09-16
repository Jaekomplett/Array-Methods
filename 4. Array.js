'use strict';

// 0. Array

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




// 7. flat() 
//! No Mutation
let matrix = [1, 2, 3, [1, 2, 3, [10, 20]]];

console.log(matrix.flat());    // [ 1, 2, 3, 1, 2, 3, [ 10, 20 ] ]
console.log(matrix.flat(2));   // [ 1, 2, 3, 1, 2, 3, 10, 20 ]




// 8. includes(): 배열이 특정 항목을 포함하고 있는지 확인한다.
//! No Mutation
let fruits = ['apple', 'banana', 'pear', 'cherry'];

fruits.includes('apple'); // true
fruits.includes('grape'); // false




// 9. join(): 배열의 항목들을 특정 값으로 이어 붙인다.
//! No Mutation
let arr = [1, 2, 3, 4, 5];

console.log(arr.join('!')); // '1!2!3!4!5'
console.log(arr.join('--a')); // '1--a2--a3--a4--a5'




// 10. map(): 배열을 순회하며 함수를 실행한 결과로 새로운 배열을 만들어 반환한다.

let arr = [1, 2, 3, 4, 5];
let arrTwo = ['1', '2', '3', '4', '5'];

function coding(x){
  return x**2;
}

console.log(arr.map(coding)); // [1, 4, 9, 16, 25]

console.log(arr.map(x => parseInt(x, 10))); // [1, 2, 3, 4, 5]




// 11. sort(): 배열을 정렬 후 반환한다.

let arr = [1, 2, 100, 10, 222, 3];

// sort()는 유니코드에 따라 정렬한다.
console.log(arr.sort()); //[1, 10, 100, 2, 222, 3]

// 오름차순으로 정렬하기
let score = [40, 80, 75, 90, 35, 81];

score.sort((a, b) => {
  return a - b;
});

console.log(score); // [35, 40, 75, 80, 81, 90]

// 내림차순으로 정렬하기
score.sort((a, b) => {
  return b - a;
});

console.log(score); // [ 90, 81, 80, 75, 40, 35 ]




// 12. reverse(): 배열을 역순으로 정렬해서 반환한다.
let arr = [1, 2, 3, 4, 5];
console.log(arr.reverse()); // [5, 4, 3, 2, 1]


