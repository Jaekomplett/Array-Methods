'use strict';

let arr = [1, 2, 3, 4];

console.log(arr); // [1, 2, 3, 4]
console.log(arr[0]); // 1

// 1. concat()

let arr = ['apple', 'pear', 'orange', 'banana'];
let arrTwo = ['pineapple', 'kiwi'];

console.log(arr.concat(arrTwo));
//[ 'apple', 'pear', 'orange', 'banana', 'pineapple', 'kiwi' ]


// 2. 배열에 항목 추가, 제거하기
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

