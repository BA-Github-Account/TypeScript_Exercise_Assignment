
// Alien color 3 if else chain from 25 26 Ex 
// Write three version of this programme make sure appropriate color display
let alienColor: string = "Green" ;
// if alien color is green, print a message player earned 5 points.
// if alien color is yellow, print a message player earned 10 points.
// if alien color is red, print a message player earned 15 points.

// version 1 of this programme
alienColor = "green" ;
if(alienColor === "green"){
    console.log("Version 1: Player earned 5 points");
}else if(alienColor==="yellow"){
    console.log("Player earned 10 points") ;
}else if(alienColor==="red"){
    console.log("Version 3: Player earned 15 points") ;
}
else {
    console.log('please select right color') ;
}
// version 2 of this programme
alienColor = "yellow" ;
if(alienColor === "green"){
    console.log("Version : Player earned 5 points");
}else if(alienColor==="yellow"){
    console.log("Version 2: Player earned 10 points") ;
}else if(alienColor==="red"){
    console.log("Player earned 15 points") ;
}
else {
    console.log('please select right color') ;
}
// Version 3 of this programme
alienColor = "red" ;
if(alienColor === "green"){
    console.log("Version : Player earned 5 points");
}else if(alienColor==="yellow"){
    console.log("Player earned 10 points") ;
}else if(alienColor==="red"){
    console.log("Version 3: Player earned 15 points") ;
}
else {
    console.log('please select right color') ;
}