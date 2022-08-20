const flattend = [[0,1],[2,3],[3,4],[4,5]].reduce((a,b)=> a.concat(b),[]);

// Debugged function
//a = outer array
//b = inner array

const reduceArray = [[0,1],[2,3],[3,4],[4,5]].reduce((accumulator,array) => {
    console.log(accumulator);
    console.log(array);
    return accumulator.concat(array) ;
},[]);

// const reduceArray = [[0,1],[2,3],[3,4],[4,5]].reduce((accumulator,array) => {
//     debugger;
//     return accumulator.concat(array) ;
// },[]);


// const reduceArray = array.reduce((accumulator,num) => {
//     return accumulator+num ;
// },0);