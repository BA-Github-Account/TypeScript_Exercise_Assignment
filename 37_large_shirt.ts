// Creating function

function make_shirt(size:string='Large', text:string='I Love TypeScript.'){

    console.log(`Creating a ${size} shirt with the message: ${text}`);

}

// calling function with by default message

make_shirt();

// calling function with mediam size

make_shirt('Mediam');

// calling function with any size & other message

make_shirt('Small', 'I Love made in Pakistan.' );