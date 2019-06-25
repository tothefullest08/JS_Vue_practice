
// let: 블록 스코프. {} 내에서만 선언된 변수를 사용할 수 있음. 
for (let j=0; j<1; j++){
    console.log(j) // 0 
}
// console.log(j) // Uncaught TypeError: Assignment to constant variable 에러발생

// var: 함수 스코프. 함수 내에서 선언된 변수를 사용할 수 있음. 
// 따라서 반복문 블록{} 밖에서도 함수 내라면 선언된 함수를 사용할 수 있음.
for (var i=0; i<1; i++){
    console.log(i)
}
console.log(i)

const myFunction = function() {
    for (var k=0; k<1; k++){
        console.log(k)
    }
    console.log(k)
}
myFunction()
console.log(k) // ReferenceError: k is not defined

// 변수 선언 키워드 사용 X -> 무조건 전역변수로 취급됨
function myFunction1(){
    for (p=0; p<1; p++){
        console.log(p)
    }
    console.log(p)
}
myFunction1()
console.log(p) // 1


// 삼항 연산자
const number = 10
number === 10 ? console.log('number === 10') : console.log('number !== 10')

// 반복문
let i = 0
while(i<5){
    console.log(i)
    i++
}

for(let j=0; j<5; j++){
    console.log(j)
}

for(let number of [0,1,2,3,4]){
    console.log(number)
}

for(const number of [0,1,2,3,4]){
    console.log(number)
}

