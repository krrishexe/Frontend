const player = 'bobby';     // const value cannot be changed !!!
let experience = 100;
let wizardLevel = false;

if(experience>90){
    let wizardLevel = true;    // if we use let here , its scope will remain in the "if" element only , and if we use "var" the value will change to false
}

//method is a function (self declared) which applies only to the given object
// use const ,if youre using a variable that doesnt change. 
// use let (instead of var cz variable scope is global and let scope is not) for a variable that can be changed.


                    //Destructuring. (basically another way of using this const and let)
const obj = {
    player : 'bobby',
    experience: 100,
    wizardLevel:false,
}
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;


//example:-

// const person = {};
// person.firstname = 'john';
// person.lastname = 'sharma';
// person.age = 34;
// person.sex= "male";


                    // Another Method

const {player, experience} = obj;
let{wizardLevel} = obj;

                //Template String
let name = "Sally";
const age = 45;
const pet = "dog";

const greeting = "Hello" + name + "you seem to be doing " + greeting + "!"
const greetingbest= `hello ${name} you seem to be of age ${age} , what a lovely ${pet} you have `

                //Default Arguments
function greet(name = '',age=30, pet='cat'){
    return `hello ${name} you seem to be of age ${age} , what a lovely ${pet} you have `
}


                            // arrow function
function add(a,b){
    return a+b;
}
const add2 = (a,b) => a+b;     //     fun(,) =>