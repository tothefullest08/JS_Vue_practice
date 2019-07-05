var arr = [1,2,3,4,5]
var cnt = 0
var sum = arr.reduce(function(acc, value){
    cnt ++ 
    return acc + value
}, 5);

console.log(cnt)
console.log(sum)


// 1. reduce vs map 

reduce
var num = [1,2,3]
var count = 0
var doubleNum = num.reduce(function(acc, value){
    // console.log(acc, value)
    acc.push(value*2)
    // console.log(acc)
    count ++
    return acc

}, []);

console.log(count)
console.log(doubleNum)

// map
var num2 = [1,2,3]
var doubleNum2 = num2.map(function(num){
    return num*2
})
console.log(doubleNum2)

// 2. reduce vs filter

// reduce

const products = [
    {name: 'banana', type:'fruit'},
    {name: 'onion', type:'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'lettuce', type: 'vegetable'},
]

var vegetableProducts = products.reduce(function(acc, value){
    if (value.type == 'vegetable') {
        acc.push(value)
    }
    return acc
}, [])
console.log(vegetableProducts)

// filter

const products2 = [
    {name: 'banana', type:'fruit'},
    {name: 'onion', type:'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'lettuce', type: 'vegetable'},
]

const vegetableProducts2 = products2.filter(function(product){
    return product.type == 'vegetable'
})

console.log(vegetableProducts2)


// 3. reduce vs find

// reduce 

const users = [
    {name:'HARRY'},
    {name:'ADMIN'},
    {name:'MANSU'}
]

const findUser = users.reduce(function(acc, value){
    if (typeof acc == 'undefined' && value.name == 'ADMIN'){
        acc = value;
    }
    return acc;
}, undefined)

console.log(findUser)

// find

const users2 = [
    {name:'HARRY'},
    {name:'ADMIN'},
    {name:'MANSU'}
]

const findUser2 = users2.find(function(user){
    return user.name == 'ADMIN'
})

console.log(findUser2)