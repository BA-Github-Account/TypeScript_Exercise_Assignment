
// Equility and Inequility Test 1
console.log("Equility test with string: ", "Apple" === "Apple") ;
// Iquility and Inequility Test 2
console.log("Equility test with string: ", ("Apple" as string) != "Orange") ;

// Tests using Lower Case Function
console.log("Lower Case Function test: ", "HELLO".toLowerCase() === "hello") ;

// Numerical tests with Equility  Test
console.log("Equility test with numbers: ", 26 === 26) ;
// Numerical tests with Inequility Test
console.log("Iequility test with numbers: ", (26 as number) != 35) ;

// Greater than  tests
console.log("Greater than test: ", 10 > 5) ;
// Less than tests
console.log("Greater than test: ", 5 < 10) ;

// Greater than less or equal to tests
console.log("Greater than test or equal to test: ", 5 >= 5) ;

// less than  or equal to tests
console.log("less than test or equal to test: ", 5 <= 10) ;

// Tests using "and" operator
console.log("And Operator test: ", 5 ===5 && 10 > 5) ;

// Tests using  "or" operator
console.log("Or Operator test: ", 5 ===5 || 10 > 5) ;

// Test whether an item is in  array
const fruit: string []=["Nashpati", "Apple", "Banana"] ;
console.log('Test "Nashpati" in the array:', fruit.includes("Nashpati") ) ;

// Test whether an item is not in  array
const fruits: string [] = ["Nashpati", "Apple", "Banana"] ;
console.log('Test "Orange" in the array:', !fruits.includes("Orange") ) ;