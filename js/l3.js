// createCalc = function(n){
//     return function(){
//         console.log(1000*n)
//     }
// }



// const calc = createCalc(21)

// calc()

//ця функція бере число n та повертає функцію, яка бере число num і повертає num+n

// createIncrement = function(n){
//     return function(num){
//         return num+n
//     }
// }

// створюється нова функція addThree, яка містить в собі заперту createIncrement з n=3

// const addThree = createIncrement(3)

// // викликає addThree з num = 33
// console.log(addThree(33))
// console.log(addThree(53))

// createUrl = function(dom){
//     return function(site){
//         return`https://${site}.${dom}`
//     }
// }

// const comUrl = createUrl('com')
// console.log(comUrl('google'))

// function logPerson(){
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }



// const person1 = {name:'Alex', age:33, job:'SMM'}
// const person2 = {name:'Silvia', age:23, job:'Backend'}


// task1
// function bind(context,fn) {
//     return fn.apply(context)
// }




//logPerson.apply(person1)

// bind(person1.logPerson)
// bind(person2.logPerson)()




// стукаємо в ардуіно шилд


 