let guest_list : string [] = ['Nawaz Shareef', 'Asif Ali Zardari', 'Imran khan'] ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You!') ;
    

let absent_guest : string = 'Imran Khan' ;

let new_guest : string = 'Kamran Tessori' ;

guest_list [2] = new_guest ;

for(let i=0; i<guest_list.length; i++){

    console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You! \n\n') ;
    
} 

console.log(`Mr. ${absent_guest} is not coming to the party.`) ;

console.log('Good News! We find big table so we inviting 3 more guests') ;

guest_list.unshift('Bashir Ahmed') ;

guest_list.splice(2 , 0 , 'Maryam Nawaz') ;

guest_list.push('Bilwal Bhuto Zardari') ;

for(let i=0; i<guest_list.length; i++) {

console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You! \n\n') ;
}

    
    