// const person = {
//     name: 'John',
//     age: 21,
//     greet: function(){
//         console.log('Hi, mazafaka!')
//     }
// }


const person = new Object({
    name: 'John',
    age: 21,
    greet: function(){
    console.log('Hi, mazafaka!')
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello,World!))')
}

const jane = Object.create(person)
jane.name = 'Jane'