// Lower Case

import { log } from "console";

let personName: string = 'Bashir'
console.log('lowerCase:', personName.toLowerCase());

// Upper Case
console.log('upperCase:', personName.toUpperCase());

// Title case

console.log('titleCase:', personName.replace(/\)bw/g,c => c.toUpperCase()));
