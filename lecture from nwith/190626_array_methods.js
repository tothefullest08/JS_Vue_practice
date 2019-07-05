// forEach
//  기본적인 방법
const colors = ['red', 'blue', 'green']
const f = function(color){
    console.log(color)
}
colors.forEach(f)

// callback 함수로 동작
const color2 = ['red', 'blue', 'green']
color2.forEach(function(color){
    console.log(color)
})


// map
var numbers = [1,2,3]
var doubleNumbers = []
for (var i=0; i<numbers.length; i++){
    doubleNumbers.push(numbers[i]*2)
}
console.log(doubleNumbers)

const numbers2 = [1,2,3]
const doubleNumbers2 = numbers2.map(function(number){
    return number*2
})
console.log(doubleNumbers2)

const numbers3 = [4,5,6]
const square = numbers3.map(function(number){
    return number**2
})
console.log(square)

// filter
const products = [
    {name: 'banana', type:'fruit'},
    {name: 'onion', type:'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'lettuce', type: 'vegetable'},
]

const vegetableProducts = products.filter(function(product){
    return product.type == 'vegetable'
})

console.log(vegetableProducts)


// find
const users = [
    {name:'HARRY'},
    {name:'ADMIN'},
    {name:'MANSU'}
]

const findUser = users.find(function(user){
    return user.name == 'ADMIN'
})

console.log(findUser)

// every & some

const computers = [
    {name: 'macbook', ram: 16},
    {name: 'gram', ram: 8},
    {name: 'series9', ram:32},
]

const everyComputerAvailable = computers.every(function(computer){
    return computer.ram > 16
})

const someComputerAvailable = computers.some(function(computer){
    return computer.ram > 16
})

console.log(everyComputerAvailable)
console.log(someComputerAvailable)


// 연습 2

// forEach
const newNum = []
for (var i=1; i<11; i++){
    newNum.push(i)
}
console.log(newNum)

newNum.forEach(function(number){
    console.log(number**3)
})


// map
const tripleNum = newNum.map(function(number){
    return number ** 3
})

console.log(tripleNum)

// filter
const students = [
    {name: 'Harry', gender: 'M', height: '180'},
    {name: 'MANSUK', gender: 'F', height: '160'},
    {name: 'DOHUCK', gender: 'M', height: '175'},
    {name: 'MIJIN', gender: 'F', height: '155'},

]

const maleStudents = students.filter(function(student){
    return student.gender == 'M'
})

console.log(maleStudents)

// find

const findName = students.find(function(student){
    return student.name == 'DOHUCK'
})

console.group(findName)

// some & every
const someAvailable = students.some(function(student){
    return student.height > '160'
})

const everyAvailable = students.every(function(student){
    return student.height > '160'
})

console.log(someAvailable)
console.log(everyAvailable)

