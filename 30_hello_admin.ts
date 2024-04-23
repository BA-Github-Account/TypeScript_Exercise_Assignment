import { Console } from "console";

const userNames: string [] = ['Admin', 'Bashir', 'Taha', 'Hamza', 'Shajeeha'];
for(let i=0; i<userNames.length; i++){
    if(userNames[i]==='Admin'){
    console.log('Heiio admin, would you like to see a status report?')
}
else{
    console.log('Hello $ {userNames[i]}, thank you logging for again')   
}
}