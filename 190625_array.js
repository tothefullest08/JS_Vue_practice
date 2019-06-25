// object
const me = {
    name: 'harry',
    'phone number': '01012341234',
    appleProduct: {
        ipad: true,
        iphone: 'X'
    }
}
console.log(me['name'])
console.log(me.name)
console.log(me.appleProduct)
console.log(me['appleProduct'])
console.log(me['phone number'])

const JsonData = JSON.stringify(me)
console.log(JsonData)
console.log(typeof JsonData)

const parseData = JSON.parse(JsonData)
console.log(parseData)
console.log(typeof parseData)

// object literal
const food = {
    fruits : ['apple', 'grapes'],
    vegetables : ['onion', 'lettuce']
};

const server = null;

const restaurant = {
    food,
    server
}

console.log(restaurant)

//method
const me2 = {
    name : 'LEE',
    greeting: function(message) {
        return `${this.name} : ${message}`
    }
}

console.log(me2.greeting('hi'))
me2.name = 'PARK'
console.log(me2.greeting('hello'))

const greeting = function(message) {
    return `${this.name} : ${message}`
}

const you = {
    name : 'you',
    greeting
}

console.log(you.greeting('hi'))
you.name = "KIM"
console.log(you.greeting('hello'))