//object
const person = {
  name:'Vlad',
  age:39,
  job:'Teacher'
}

const op = new Proxy(person,{
  get(target,prop){
    // console.log('Target:', target)
    // console.log('Prop:', prop)
    //console.log(`Getting prop ${prop}`)
    if(!(prop in target)){
      console.log("prop.split('_') --->", prop.split('_'))
      console.log("prop.split('_').map(p=>target[p]) --->", prop.split('_').map(p=>target[p]))
      return prop
      .split('_')
      .map(p=>target[p])
      .join(' ')
    }
    return target[prop]
  },
  set(target,prop,value){
    if (prop in target){
      target[prop] = value
    } else {
      throw new Error(`No ${prop} field in target`)
    }
  },
  has(target,prop){
    return ['age','name','job'].includes(prop)
  },
  deleteProperty(target,prop){
    console.log('Deleting',prop)
    delete target[prop]
  }
})

//Functions
const log = text => `Log: ${text}`
const fp = new Proxy(log,{
  apply(target, thisArg, args){
     console.log('Calling fn...')

     return target.apply(thisArg,args)
  }
})

//Classes

class Person{
  constructor(name,age){
    this.name=name
    this.age=age
  }
}

const PersonProxy = new Proxy(Person,{
  construct(target,args){
    console.log('Construct...')

    return new Proxy(new target(...args),{
      get(t,prop){
        console.log(`Getting prop "${prop}"`)
        return t[prop]
      }
    })
  }
})

const p = new PersonProxy('max',30)