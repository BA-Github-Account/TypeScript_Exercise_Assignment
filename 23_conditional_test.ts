// = hum kisi value ko set/assign ker rahe hain.
// == hum kisi value ko chek ker rahe hain.
// === hum kisi value ko uski datatype k sath chek ker rahe hain.
// ! Not equial to.
// for auto compilation of TS to JS code 'npm install -g ts-node-dev'
// TypeScript File auto compilation code 'ts-node-dev conditional_test..tsts (file name with .ts)

// Write a series of conditional tests.
// Creating a car variable
let car :string = 'Subaru' ;

console.log("Is car = 'subaru'? I predict True.") ;
console.log(car = 'subaru') ;

// Test No 1
console.log("Is car === 'subaru'? I predict True.") ;
console.log(car === 'subaru') ;

// Test No 2
console.log("Is car == 'subaru'? I predict True.") 
console.log(car == 'subaru') 

// Test No 3
console.log("Is car != 'Honda'? I predict True.") ;
console.log(car != 'Honda') ; 

// Test No 4
console.log("Is car !== 'ford'? I predict True.") ;
console.log(car !== 'ford') ; 

// Test No 5
console.log("Is car.Upper Case == 'SUBARU'? I predict True.") ;
console.log(car.toUpperCase() == 'SUBARU') ; 

// Test No 6
console.log("Is car.Lower Case == 'SUBARU'? I predict True.") ;
console.log(car.toLowerCase() == 'SUBARU') ; 

// Test No 7
console.log("Is car.Lower Case === 'SUBARU'? I predict True.") ;
console.log(car.toLowerCase() === 'SUBARU') ; 

// Test No 8
console.log("Is car.Lower Case === 'Train'? I predict True.") ;
console.log(car.toLowerCase() === 'Train') ; 

// Test No 9
console.log("Is car.Lower Case === 'Bus'? I predict True.") ;
console.log(car.toLowerCase() === 'Bus') ;

// Test No 10
console.log("Is car.Lower Case === 'Cycle'? I predict True.") ;
console.log(car.toLowerCase() === 'Cycle') ;