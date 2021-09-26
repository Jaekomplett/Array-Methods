"use strict";

// 0. Array

let arr = [1, 2, 3, 4];

console.log(arr); // [1, 2, 3, 4]
console.log(arr[0]); // 1



// 1. concat()
//! No Mutation

let arr = ["apple", "pear", "orange", "banana"];
let arrTwo = ["pineapple", "kiwi"];

console.log(arr.concat(arrTwo));
//[ 'apple', 'pear', 'orange', 'banana', 'pineapple', 'kiwi' ]



// 2. 배열에 항목 추가, 제거하기
//! mutates
// push() : 배열 끝에 항목 +
// pop() : 배열 끝에서 항목 -
// unshift() : 배열 앞에 항목 +
// shift() : 배열 앞에서 항목 -

let arr = ["apple", "pear", "orange", "banana"];

console.log(arr.push("pineapple")); //5 (배열의 길이 출력)
console.log(arr); // [ 'apple', 'pear', 'orange', 'banana', 'pineapple' ]

console.log(arr.pop()); // 'pineapple' 삭제
console.log(arr); // [ 'apple', 'pear', 'orange', 'banana' ]

console.log(arr.unshift("kiwi")); //5 (배열의 길이 출력)
console.log(arr); // [ 'kiwi', 'apple', 'pear', 'orange', 'banana' ]

console.log(arr.shift()); // 'kiwi' 삭제
console.log(arr); // [ 'apple', 'pear', 'orange', 'banana' ]



// 3. splice(): 요소를 삭제하거나 교체
// arr.splice(시작 인덱스, 삭제할 요소 수, 추가할 요소)
//! mutates

let arr = ["apple", "pear", "orange", "banana"];

console.log(arr.splice(2, 1, "kiwi")); // 'orange' 삭제
console.log(arr); // [ 'apple', 'pear', 'kiwi', 'banana' ]

console.log(arr.splice(1, 0, "mango")); // []
console.log(arr); // [ 'apple', 'mango', 'pear', 'kiwi', 'banana' ]



// 4. slice(): 요소를 인덱스 기준으로 잘라낸다.
// arr.slice(시작 인덱스 이상부터, 종료 인덱스 미만까지)
//! NO Mutation
let arr = [3, 5, 2, 7, 8, 10, 1];

console.log(arr.slice(0, 4)); // [ 3, 5, 2, 7 ]
console.log(arr.slice(2, 4)); // [ 2, 7 ]



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
let words = ["tom", "hardy", "leo", "dicaprio", "mary", "jane"];

console.log(score.filter((x) => x > 30)); // [ 55, 80, 95, 100, 70 ]
console.log(score.filter((x) => x < 55)); // [ 10, 30 ]

console.log(words.filter((x) => x.length > 4)); // [ 'hardy', 'dicaprio' ]
console.log(words.filter((x) => x.length > 3)); // [ 'hardy', 'dicaprio', 'mary', 'jane' ]



// 7. flat()
//! No Mutation
let matrix = [1, 2, 3, [1, 2, 3, [10, 20]]];

console.log(matrix.flat()); // [ 1, 2, 3, 1, 2, 3, [ 10, 20 ] ]
console.log(matrix.flat(2)); // [ 1, 2, 3, 1, 2, 3, 10, 20 ]



// 8. includes(): 배열이 특정 항목을 포함하고 있는지 확인한다.
//! No Mutation
let fruits = ["apple", "banana", "pear", "cherry"];

fruits.includes("apple"); // true
fruits.includes("grape"); // false



// 9. join(): 배열의 항목들을 특정 값으로 이어 붙인다.
//! No Mutation
let arr = [1, 2, 3, 4, 5];

console.log(arr.join("!")); // '1!2!3!4!5'
console.log(arr.join("--a")); // '1--a2--a3--a4--a5'



// 10. map(): 배열을 순회하며 함수를 실행한 결과로 새로운 배열을 만들어 반환한다.

let arr = [1, 2, 3, 4, 5];
let arrTwo = ["1", "2", "3", "4", "5"];

function coding(x) {
  return x ** 2;
}

console.log(arr.map(coding)); // [1, 4, 9, 16, 25]

console.log(arr.map((x) => parseInt(x, 10))); // [1, 2, 3, 4, 5]



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




// --------------------------------------------------------------------
// Set Object
// 1. set(): 중복값을 제외한 유일한 값을 저장한다.

let arr = [1, 1, 2, 2, 3, 3, 3, 100, 100];
let doSet = new Set(arr);

console.log(doSet); // {1, 2, 3, 100}

// Set의 크기는 length가 아닌 size를 통해 구할 수 있다.
console.log(doSet.size); // 4
console.log(doSet.length); // undefined

//! 변수에 Set 함수를 할당하지 않으면 에러가 출력된다.
let arrSet = [1, 3, 3, 4, 5, 7];
console.log(arrSet.has(100)); // TypeError: arrSet.has is not a function

//! 변수에 Set 함수를 할당해줘야 has, add, delete, clear 메소드들을 사용할 수 없다.
let doSet = new Set([1, 3, 3, 4, 5, 7]);
console.log(doSet.has(100)); // false
// --------------------------------------------------------------------

let doSet = new Set([1, 3, 5, 7, 9]);


// 1) .has(): 해당 값을 가지고 있는지 확인하고 boolean 값으로 출력한다.
console.log(doSet.has(6)); // false
console.log(doSet.has(7)); // true


// 2) .add(): 새로운 요소를 추가한다.
console.log(doSet.add(100)); // {1, 3, 5, 7, 9, 100}
console.log(doSet.has(100)); // true


// 3) .delete(): 해당 요소를 제거한다.
//
doSet.delete(100);
console.log(doSet); // {1, 3, 5, 7, 9}
console.log(doSet.has(100)); // false


// 4) .clear(): 모든 요소를 제거한다.
doSet.clear();
console.log(doSet); // {}




// --------------------------------------------------------------------
// Map Object
// key와 value를 같이 저장하는 객체

// 1) set(): Map 객체에 key와 value를 넣고 객체를 반환한다.

let mapping = new Map();

mapping.set("하나", "one");
mapping.set("둘", "two");
mapping.set("셋", "three");

console.log(mapping);
// {'하나' => 'one', '둘' => 'two', '셋' => 'three'}



// 2) get(): 주어진 key에 해당하는 value를 반환한다.

let mapping = new Map();
mapping.set("이름", "name");

console.log(mapping.get("이름")); // 'name'



// 3) has(): 객체 내 주어진 key의 value가 있는지 확인하고 Boolean 값을 반환한다.

let mapping = new Map();
mapping.set("score", 90);

console.log(mapping.has("score")); //true
console.log(mapping.has(90)); //false



// 4) for-of

let score = new Map();

score.set('Math', 90);
score.set('Science', 75);
score.set('Physic', 100);
// Map(3) {'Math' => 90, 'Science' => 75, 'Physic' => 100}

for (let [key, value] of score) {
  console.log(`${key} : ${value}`);
}
// Math : 90
// Science : 75
// Physic : 100


for (let i of score) {
  console.log(i);
}

// (2) ['Math', 90]
//   0: "Math"
//   1: 90
//   length: 2

// (2) ['Science', 75]
//   0: "Science"
//   1: 75
//   length: 2

// (2) ['Physic', 100]
//   0: "Physic"
//   1: 100
//   length: 2


// --------------------------------------------------------------------
// String

let str = 2;
let strTwo = 'two';
let strThree = "둘";

console.log(strTwo);    //'two'
console.log(strThree);  //'둘'

//템플릿 리터럴
console.log(`${str}는 ${strTwo}이고 ${strThree}이다.`);
//2는 two이고 둘이다.


// 이스케이프 문자
// \n : Enter(한 칸 띄우기)
// \t : 탭
// \v : 세로 탭
// \' : 작은 따옴표
// \" : 큰 따옴표
// \\ : 역슬래시



// 1. concat()
let str = 'welcome to';

console.log(str.concat(' coding class'));
//'welcome to coding class'



// 2. includes()
let str = 'abc abcd asbcde ab cd def';

console.log(str.includes('abc')); //true
console.log(str.includes('fgh')); //false




// 3. split() : 문자열을 지정된 구분자로 나눈 후 배열로 반환한다.
let str = '복잡한 세상 편하게 살자';

console.log(str.split(' ')); 
// [ '복잡한', '세상', '편하게', '살자' ]



// 4. replace() : 특정 패턴에 일치하는 문자열을 교체할 수 있다.
let str = 'abc abcd abcde ab cd def';

console.log(str.replace('abc', 'A')); 
// 'A abcd abcde ab cd def'

//정규 표현식을 사용해 전역으로 교체하기
console.log(str.replace(/abc/g, '!')); 
// '! !d !de ab cd def'

console.log(str.replace(/ /g, '-')); 
// 'abc-abcd-abcde-ab-cd-def'



// 5. slice(): 인덱스를 기준으로 문자열을 잘라내 반환한다.
// 6. indexOf(): 주어진 문자열과 첫번째로 만나는 문자열의 인덱스를 반환한다.
let str = '딱히 적을 것이 생각나지 않는다';

console.log(str.indexOf('생각')); //9
console.log(str.slice(9,11)); // '생각'

console.log(str.slice(9,14)); // '생각나지 '



// 7. match(): 문자열에서 정규식과 매치되는 부분을 검색하고 배열로 반환한다.
let str = 'abc abcd abcde ab cd def ABC';
let lower = /abc/g // 전역에서 소문자만 찾는다.
let lowerUpper = /abc/gi // 전역에서 대소문자 구별하지 않고 찾는다

console.log(str.match(lower));
console.log(str.match(lowerUpper));



// 8. toLowerCase() / toUpperCase(): 대소문자로 변환한다.
let str = 'abcDEFghiJKlmnoPqR';

console.log(str.toLowerCase()); // 'abcdefghijklmnopqr'
console.log(str.toUpperCase()); // 'ABCDEFGHIJKLMNOPQR'

// 대소문자 판별하기
let str = 'apple';

if(str === str.toLowerCase()){
  console.log('소문자');
} else {
  console.log('대문자')
}