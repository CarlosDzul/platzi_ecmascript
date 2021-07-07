/********************* ECMASCRIPT 8*/

/********************************* ...all  */

const obj = {
    name:'carlos',
    age: 32,
    country: 'MX'
}


//** un elemento + todos */
let { name, ...all} = obj;
console.log(name, all)

//** todos menos un elemento */
let  {country, ...all2} = obj;
console.log(all2)

//** Unir elementos */
const obj2 = {
    name:'erika',
    age: 27,
}

const obj3 = {   
    ...obj2, 
    country: 'MX'
}

console.log(obj3)

const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        (true)
        ? resolve("HelloWorld!")
        : reject(new Error("Test Error"))
    })
}


helloWorld()
.then(response => console.log(response))
.catch(error => console.log(console.error()))
.finally(() => console.log("finalizado"))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ //Formato fecha
const match = regexData.exec('2018-04-20')

const year = match[1]
const month = match[2]
const day = match[3]

console.log(day)

