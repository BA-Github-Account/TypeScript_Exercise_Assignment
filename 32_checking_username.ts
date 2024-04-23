// creating array

let current_users: string [] = ['BaShir', 'Taha', 'HaMza', 'Shajeeha', 'Shabnam'] ;
 // creating adding new user name array 

 let new_users: string [] = ['BaShir', 'Bilal', 'HaMza', 'Shahid', 'Tahir'] ;

 new_users.forEach(newUsersname =>{
    let lowerCase: string = newUsersname.toLowerCase();
    if(current_users.map(c_user=>c_user.toLowerCase().includes(lowerCase))){
        console.log(`The username ${newUsersname} is not available. Please write a different username.`);

    }
    else{
        console.log(`The username ${newUsersname} is available`);
    }
 })