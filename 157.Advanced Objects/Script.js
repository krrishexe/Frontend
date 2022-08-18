// 3 things that are important as Objects ...

// Reference type
let object1 ={
    score :10 
};
let object2 = object1 ;
let object3 ={
    score: 10
}

//Context Type vs  
//Scope
function b() {
    let a = 4 ;  // this is a function and its scope is limited to the function variable not global.
}

//console.log(this === window) // 'this' keyword is a windows object.

// 'this' just refers to what obect its inside of.

//Instantiation 

class Player {
    constructor(name,type){
        console.log(this);
        this.name = name;
        this.type = type;
    }
    intro(){
        console.log(`HI I am ${this.name} , I'm a ${this.type}`)
    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type)     // Super goes to the constructor function and then runs it.
    }
    play(){
        console.log(`WWEEEEEEEEEEE I'M a ${this.type}`);
    }
}

const wizard1 = new Wizard('Archer','healer');    // 'new' is a keyword which creates and adds a new element to the class
const wizard2 = new Wizard('Barbarian','attacker');