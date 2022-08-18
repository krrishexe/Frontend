// function sayhello(){
//     console.log("helloo")
// }
    
// sayhello();

// function  sing(song){
//                                             //  adding arguments to functions
//     console.log(song)                          
// }
// sing("laa diii daaaa");

// function multiply(a,b){
//     return a*b;
// }
// multiply(2,5);

// adding objects 
// var user = {
//     name: "john",
//     age:35,
//     hobby: "soccer",
//     isMarried:false,
//     spells:["abkrakadabra","cast spell"],
//                                                     // adding methods to object - : a method is bascially a fucntion inside an object.
//     shout: function(){                     
//         console.log("aaahhhhhh")
//     }
// };

// var list = [
//     {
//         name:"krish",
//         class:2,
//     },
//     {
//         name:"gaurav",
//         class:4
//     }
// ]

var todos = ["clean room","brush teeth","exercise","study js","eat healthy"];
//for loop
// for(var i=0 ; i<todos.length;i++){
//     todos[i]
// }
// while loop

// var a =10 ;
// while(a>0){
//     console.log(a);
//     a--;
// }
// do while loop 
// var a = 10 ;
// do{
// console.log(a);
// a--;
// }while(a>0)

// For EACH LOOP
todos.forEach(function(todos){
    console.log(todos)
})