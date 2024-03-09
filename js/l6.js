const analogueSensor = Object.create(
  {
    calculateAge(){
      console.log('Age:', new Date().getFullYear()-this.year)
    }
},
{
  pin:{
    value: 'A0',
    enumerable: true,
    writable: true,
    configurable: true
  },
  year:{
    value: 1121,
    enumerable: true,
    writable: true,
    configurable: true
  },
  age:{
    get(){
      return new Date().getFullYear()-this.year
    },
    set(value){
      document.body.style.background='lightgreen',
      console.log('Set value', value)
    }
  }
})

// console.log(analogueSensor)

// const analogueSensor ={
//   pin:'A0',
//   time:111
// }


for(let key in analogueSensor){
  if (analogueSensor.hasOwnProperty(key)){
    console.log('key', key, analogueSensor[key])
  }
}