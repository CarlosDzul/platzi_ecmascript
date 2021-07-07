/********************* ECMASCRIPT 8*/

/********************************* Object */
// Devuelve key y value de los elementos de una matriz

const data = {
    frontend: 'Carlos',
    backend: 'Erika',
    design: 'Lana'
}

const entries = Object.entries(data)
console.log(entries) //
console.log(entries.length)//3
console.log(entries[0])    //[ 'frontend', 'Carlos' ]
console.log(entries[0][0]) //frontend

const data2 = {
    frontend: 'Carlos',
    backend: 'Erika',
    design: 'Lana'
}

const valores = Object.values(data2)
console.log(valores)
const llaves = Object.keys(data2)
console.log(llaves)

/********************************* PADSTART, PATEND */
const string_ = "hello"
console.log(string_.padStart(7,'hi')) //hihello
console.log(string_.padEnd(7,'hi')) //hellohi


/********************************* ASYNC, AWAIT */

const helloWorld = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=> resolve('Hello World'), 3000);
        }else{
            reject(new Error('Test Error'))
        }
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

const helloAsync2 = async () => {
    const hello2 = await helloWorld();
    console.log(hello2)
}


helloAsync()
helloAsync2()

const anotherFunction = async() =>{
    try{
        const hello = await helloWorld();
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}

anotherFunction()

/*
Una función async puede contener una expresión await, 
la cual pausa la ejecución de la función asíncrona y espera 
la resolución de la Promise pasada y, a continuación, reanuda 
la ejecución de la función async y devuelve el valor resuelto.
*/