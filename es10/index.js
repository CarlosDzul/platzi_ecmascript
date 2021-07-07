/********************* ECMASCRIPT 10: JUN 2019
*/

//********** FLAT */
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat())
console.log(array.flat(2))
console.log(array.flat(3))


let array2 = [1,2,3,4,5]
console.log(array2.flatMap(value => [value, value*2]))

//********** TRIM */
let hello = '     hello world';
console.log(hello)
console.log(hello.trim())


let entries = [["name","oscar"], ["age","31"]]
console.log(Object.fromEntries(entries));

let mySymbl = 'My Symb'
let symbol = Symbol(mySymbl)
console.log(symbol.description)