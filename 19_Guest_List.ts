let guest_list : string [] = ['Nawaz Shareef', 'Asif Ali Zardari', 'Imran khan'] ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You!') ; // let absent_guest : string = 'Imran Khan' ;
// let new_guest : string = 'Kamran Tessori' ;
// guest_list [2] = new_guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You! \n\n') ;
//     } 
// console.log(`Mr. ${absent_guest} is not coming to the party.`) ;
// console.log('Good News! We find big table so we inviting 3 more guests') ;

// 3 guets add in array.
// guest_list.unshift('Bashir Ahmed') ;
// guest_list.splice(2 , 0 , 'Maryam Nawaz') ;
// guest_list.push('Bilwal Bhuto Zardari') ;
// for(let i=0; i<guest_list.length; i++) {
// console.log('Dear Mr. ' + guest_list[i] + ',\n\nit our pleasure to invite you in our party.\n\nTank You! \n\n') ;
// }
// Soory message to guest not invited.
// 
// console.log('\nsorry we can nor arrange big table, only two people will be invited.') ;
// 4 Guest remove from array.
// while(guest_list.length > 2){
    let remove_guest = guest_list.pop()
//     // console.log(`sorry Mr. ${remove_guest}, You are not invited for Dinner.`) ;
// }
// Remaining 2 Guest.
// for(let i=0; i<guest_list.length; i++) {
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nit is our pleasure to still invite you in our party.\n\nTank You! \n\n') ;
// }
// All Guet remove from array.
guest_list. splice(0, 2) ;
console.log(guest_list) ;

// Exercise No 19

// Print a message indicating the number of peole you are inviting to dinner.

console.log(`Total number of Guest Are : ${guest_list.length}`) ;