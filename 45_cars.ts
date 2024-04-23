
// cars write a function that store carinformations

import { features } from "process";

function storeCarinfo(manufacturer:string, modelName:string, ...extraoption: {[key : string]: any}[]):
object{

    const carInfo = {
        manufacturer,
         modelName
         ... Object.assign({}, ...extraoption)
    }

    return carInfo;
}

let conclution = storeCarinfo('Toyota', 'GLI', {color:'Black'}, {features:['power windo', 'Power Straring']});

console.log(conclution);