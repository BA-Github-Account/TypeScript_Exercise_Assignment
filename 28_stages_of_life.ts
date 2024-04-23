// stage og life use if else chain
// set age variable
let age: number = 25
if(age < 2){
    console.log("Person is a baby") ;
}
else if(age >= 2 && age < 4){
    console.log("Person is a Toddler") ;
}
else if(age >= 4 && age < 13){
    console.log("Person is a Kid") ;
}
else if(age >= 13 && age < 20){
    console.log("Person is a Teenager") ;
}
else if(age >= 20  && age < 65){
    console.log("Person is a adult") ;
}
else{
    console.log("Person is an elder.")
}