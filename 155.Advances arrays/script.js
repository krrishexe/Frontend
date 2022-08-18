// Advanced Arrays

// doubling each element of an array
const array =[1,2,10,16];
const double = [];
const newArray = array.forEach((num) => {
    double.push(num*2);
})
console.log(double);

// 3 Very useful important js methods when using loops
// map , filter , reduce

//     MAP  ( we dont need to create a new double array in Map method)

const mapArray = array.map(num =>  num*2 );
console.log(mapArray); // map -> [2,4,20,32]

//      FILTER ( Any CONDITION OR ELEMENTS GREATER THAN 5 )

const filterArray = array.filter((num) => {
    return num>5;
})
console.log('filterArray' , filterArray); // filterArray -> [(2) , 10,16]

//      REDUCE

const reduceArray = array.reduce((accumulator,num) => {
    return accumulator + num ;
},0);
console.log('reduceArray' , reduceArray);