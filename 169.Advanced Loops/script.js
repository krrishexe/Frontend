// 2 other ways of looping

const basket =['apples','oranges','grapes'];
const detailedBasket ={
    apples :5,
    oranges:10,
    grapes:1000
}
//forEach loop
basket.forEach(item => {
    console.log(item);
})

//For of loop (works on arrays and strings only)

//iterating - arrays ,Strings 

// (like map (runs on each element of an array or a string))

for(item of basket){
    console.log(item);
}

//For in loop  (works on objects only)
//in case of objects it is called "Enumerating" 
//Enumerating - objects

for(item in detailedBasket){
    console.log(item);
}