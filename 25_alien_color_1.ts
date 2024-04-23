// Alien_Color variable
let Alien_Color : string = 'Green' ;

// statement to test whether alien color is green. If it is print a message then player earned 5 pointd
if(Alien_Color === "Green") {
    console.log("Player just earn 5 points !") ;
} ;

// other version that fails
Alien_Color = "yellow" ;

// the version that fail no have output
if(Alien_Color === "Green") {
    console.log("Player just earn 5 points !") ;
}