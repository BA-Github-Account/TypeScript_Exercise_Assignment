// Programme that contains objects containing these items.

// let persone_Name : string ='Bashir Ahmed' ;

// const persone_Name_array:string[] =['person', 'car', 'cold drink'] ;

// data type of person object.
interface person {
    name : string,
    age : number,
    student : boolean,
    nationality : string
}
// person object.
let person = {
    name : 'Bashir Ahmed',
    age : 45,
    student : true,
    nationality: 'Pakistan'
}

// print person.
console.log(person);

// Data Type of object car,
interface person {
    namaker : string,
    model : number,
    automatic : boolean,
    color : string,
}
// car object.
let car = {
maker : 'Suzuki Cultus',
model : 2005,
color : 'Silver',
automatic : false,
}
// print data
console.log(car) ;

// Data Type

interface cold_drink {
    name : 'string'
    color : 'brown'
    quanty : 'number'
    maker : 'unilever'
}
// coldrink object.
let colddrink = {
name : 'pepsi',
color : 'brown',
quanty : 2.5,
maker : 'unilever'
}
// print object
console.log(colddrink) ;