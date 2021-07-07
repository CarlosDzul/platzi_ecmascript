
/********************* ECMASCRIPT 6*/

/**PARÁMETROS POR DEFECTO */

function newFunction(name, age, country){
    var name = name || 'Charls';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country)
}

// es6
function newFunction2(name='oscar', age=32, country="MX"){
    console.log(name, age, country)
}

newFunction2();
newFunction2('Carlos', 23, 'CO');


/** TEMPLATE LITERALS */

let hello = "Hello"
let world = "World"
let epic = hello + ' ' + world;
console.log(epic)
let epicTL = `${hello} ${world}`
console.log(epicTL)

/**MULTILINEA */
let lorem ="Frase que quiero separar \n"
+", con este texto"
console.log(lorem)

let lorem2 =`Frase que quiero separar,
con este texto`
console.log(lorem2)

/**DESESTRUCTURACIÓN */
let person = {
    'name':'carlos',
    'agre':31,
    'country':'MX'
}

console.log(person.name)

let {name, age, country} = person
console.log(name)

/**SPREAD OPERATOR */
 let team1 = ['Carlos','Julian','Ricardo']
 let team2 = ['Valeria', 'Jessica', 'Camilia']
 let education = ['David', ...team1,...team2]
 console.log(education)


 /** VAR, LET, CONST */

 /**OBJETOS */
 let name ='Carlos'
 let age = 31;

 obj = {name:name, age:age}  //es5
 obj2 = {name, age}  //es6

 console.log(obj2)

 /**ARROW FUNCTIONS */
 const names = [
     {
         name: 'Charls', age:31
     },
     {
         name: 'Erika', age:27
     }
 ]

 //es5
 let listName = names.map(function(item){
    console.log(item.name)
 })

 //es6
 let listName2 = names.map(item=> console.log(item.name))

 //es6
 const listName3 = (name, age) =>{
    console.log(name+" "+", "+age+" años.")
 }

 const listName4 = name =>{
     console.log(name)
 }

 listName3("carlos",31)
 listName4("chiquis")

 /**PROMESAS */
 
 const helloPromise = () =>{

     return new Promise((resolve, reject)=>{
         if(true){
             resolve('Hey!')
         }else{
             reject('Ups!')
         }
     })
 }

 const helloPromise2 = () =>{
     
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey2!')
        }else{
            reject('Ups2!')
        }
    })
}

 helloPromise()
 .then(response=> console.log(response))
 .catch(error => console.log(error))

 //** PROMESAS EJEMPLO */
 const accion1 = () =>{
     return new Promise((resolve, reject)=>{
         if(true)
            resolve("11");
         else
            reject("0");         
     })
 }

 const accion2 = (respo) =>{
     console.log(respo+respo+respo)    
     return new Promise((resolve, reject)=>{
        if(true)
            resolve("22");
         else
            reject("0");         
    })    
}

const accion3 = (respo) => console.log(respo+respo);

accion1()
.then(value => console.log(value))

accion1()
.then(value => accion2(value))
.then(value => accion3(value))


/** CLASES */

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(11,11))


//** MODULES */
import hello from './module.js';
hello();

/**YIELD */
