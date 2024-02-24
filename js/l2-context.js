function hello(){
    console.log('Yo, maboi, this is THIS', this)
}

const teach={
    name:'Mr.Squid',
    lvl:'beginer',
    sayHello:hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(job,phone){
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Level is ${this.lvl}`)
        console.log(`I am a ${job}`)
        console.log(`My number is ${phone}`)
        console.groupEnd()
    }
}

// виклик функції logInfo об'єкта teach з довільними параметрами job, phone

// teach.logInfo('tr','87877')

const proffesor={
    name:'Dumbldoor',
    lvl:'prof'
}

// створюємо функцію profLogInfo, яка до функції logInfo об'єкта teach прив'язує об'єкт proffesor

// const profLogInfo = teach.logInfo.bind(proffesor)

// викликаємо функцію з довільними параметрами job, phone
// profLogInfo('magician','888-666-000')

// додаємо параметри в метод bind

// const profLogInfo = teach.logInfo.bind(proffesor,'magician','888-666-000')()

// викликаємо функцію з заданими параметрами
// profLogInfo()

// порівнюємо з методом call - дужки в кінці не пишуться, тобто функція викликається відразу
// const profLogInfo = teach.logInfo.call(proffesor,'magician','888-666-000')

// порівнюємо з методом apply - параметри передаються масивом
teach.logInfo.apply(proffesor,['magician','888-666-000'])


// -----------=====================================


const array = [1,2,3,4,5]

// помножити кожен елемент масива на число

// function multiplyBy(arr,n){
//     return arr.map(function(i){
//         return i*n
//     })
// }
// console.log(multiplyBy(array,4))


Array.prototype.multiplyBy = function(n){
    return this.map(function(i){
        return i*n
    })
}

console.log(array.multiplyBy(3))