// стукаємо в ардуіно шилд

// async function logPins() {
//     const response = await fetch("http://192.168.0.177/json");
//     const pins = await response.json();
//     console.log(pins.response.pins.digital);
//     return pins.response
//   }

// logPins()
 
 //console.log('Request data...')

// setTimeout(()=>{
//   console.log('Preparing data...')

//   const backendData = {
//     server: 'aws',
//     port: 113,
//     status: 'working'
//   }

//   setTimeout(()=>{
//     backendData.modified = true
//     console.log('Data received', backendData)
//   },2000)
// },2000)


// ========promises

// const p = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     console.log('Preparing data...')

//     const backendData = {
//       server: 'aws',
//       port: 113,
//       status: 'working'
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then(data =>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       data.modified=true
//       resolve(data)
//     },2000)
//   })
// })
// .then(clientData=>{
//   console.log('Data received', clientData)
//   clientData.fromPromise = true
//   return clientData
// }).then(data=>{
//   console.log('Modified data', data)
// })
// .catch(err=> console.error('Error',err))
// .finally(()=>console.log('Finally'))





// =========All =========RACE

const sleep = ms=>{
  return new Promise(resolve=>{
    setTimeout(()=>resolve(),ms)
  })
}


sleep(2000).then(()=>console.log('after 2 secs'))
sleep(3000).then(()=>console.log('after 3sec'))


Promise.all([sleep(2000),sleep(4000)]).then(()=>{
  console.log('All promises')
})

Promise.race([sleep(2000),sleep(4000)]).then(()=>{
  console.log('Race promises')
})