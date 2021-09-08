// 1. parseInt(string, radix)

// string: 숫자로 변환할 문자열
// radix: 
// * optional 
// * string 문자열을 읽을 진법(수의 진법 체계의 진법)
// * 2~36의 수

console.log(parseInt('100', 10)); // 100
console.log(parseInt('100', 16)); // 256
console.log(parseInt('100', 8)); // 64
console.log(parseInt('100', 2)); // 4

console.log(parseInt("10.5")); // 10
console.log(parseInt("-10")); // -10
console.log(parseInt("  10")); // 10
console.log(parseInt("k10")); // NaN
console.log(parseInt("")); // NaN

console.log(parseInt('100%abc', 2)); // 100
console.log(Number('100%abc')); // NaN

// return
// string을 정수로 반환한 값
// string의 첫 글자를 정수로 변경할 수 없으면 NaN(Not a Number) 값 리턴한다.





// 2. parseFloat(string)

console.log(parseFloat(5.8)); // 5.8
console.log(parseFloat('5.8')); // 5.8
console.log(parseFloat('5.8abcd')); // 5.8
// 첫 글자 이후에 숫자로 변환할 수 없는 값이 오는 경우, 그 이후 값들은 무시한다.
// 'abcd'는 숫자로 변환할 수 있는 값이 아니고, 첫 글자가 아니므로 무시된다.

console.log(parseFloat("    5.8")); // 5.8
//첫 글자가 공백인 경우에, 공백은 무시된다.
