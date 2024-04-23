let guest_list : string [] = ['Nawaz Shareef', 'Asif Ali Zardari', 'Imran khan'] ;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You!') ;
    
}

let absent_guest : string = 'Imran Khan' ;

let new_guest : string = 'Kamran Tessori' ;

guest_list [2] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You! \n\n') ;
    
} 

console.log(`Mr. ${absent_guest} is not coming to the party.`) ;