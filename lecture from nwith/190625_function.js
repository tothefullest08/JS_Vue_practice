// 함수 선언식
function add(num1, num2){
    return num1 + num2
}
console.log(add(1,2))

// 함수 표현식
const sub = function(num1, num2){
    return num1 - num2
}
console.log(sub(5,3))

// Arrow Function

// 기존 방법
const mul = function(num1, num2){
    return num1*num2
}
console.log(mul(2,3))

// Arrow
const mul2 = (num1, num2) => {
    return num1*num2
}
console.log(mul2(5,7))

// Arrow 2
const mul3 = (num1, num2) => num1*num2

console.log(mul3(5,7))

// Arrow 3
let square = num => num**2
console.log(square(7))

let noArgs = () => 'No args'
console.log(noArgs(1))

let returnObject = (letter) => ({key:'value'})
console.log(returnObject('hi'))

// 함수의 기본인자 설정 가능
const sayHello = (name='noName') => {
    return `hi${name}`
}
console.log(sayHello('Ron'))
console.log(sayHello())

