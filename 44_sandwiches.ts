// Sandwiches call in array

function makeSandwich (items:string[]){
    console.log('\nMaking your sandwich tith:');

    items.forEach(Element => console.log("- " + Element)) ;

    console.log('Enjoy your Sandwich!\n');

}

makeSandwich(['Ham', 'Lettus', 'Chees']);

makeSandwich(['Chiken', 'Butter', 'Green']);

makeSandwich(['Garlic', 'Chili Souce', 'Red Chili']);
