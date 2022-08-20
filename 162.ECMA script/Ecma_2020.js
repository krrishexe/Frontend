// ReplaceAll feature :
const str = " krish is the best teacher the best";
str.replace('best', 'worst'); // replaces only a single word
str.replaceAll('best' , 'worst'); //replaces all the words


// 1). BigInt
// just type (n) after a number to convert it is not a bigInt

//NUMBER.MAX_SAFE_INTEGER = 9007199254740992 

// typeof BigInt

// 2). Optional Chaining Operator (?.)
let will_pokemon ={
    pikachu : {
        species :'mouse pokemon',
        height : 0.4,
        weight: 6,
    }
}
let krish_pokemon ={
    raichu: {
        species :'mouse pokemon',
        height : 0.8,
        weight: 70,
    }
}
let weight = will_pokemon.pikachu.weight;
console.log('weight :' , weight); 

let weight2 = krish_pokemon.pikachu.weight;
console.log('weight2 :' , weight); // will give an error

let weight3 = krish_pokemon?.pikachu?.weight
console.log(weight3); // undefined

// 3). Nullish Coalescing Operator
// its used to check if the object includes a property or not.

let harsh_pokemon ={
    raichu: {
        species :'mouse pokemon',
        height : 0.8,
        weight: 70,
        power: ''
    }
}
// let power = (harsh_pokemon?.raichu?.power ||'no power')
// console.log(power);
// it will still give the string 'no power' coz its empty. but what if we want to just let it be .
// then we use '??' operator

let power = (harsh_pokemon?.raichu?.power ??'no power')
console.log(power);
