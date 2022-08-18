class Animal{
    constructor(name,type,color){
        this.name=name;
        this.type=type;
        this.color=color;
    }
}
class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type,color);
    }
    sound(){
        console.log(`Moo!! My name is ${this.name} ,my type is ${this.type} , my color is ${this.color}`)
    }
}
var cow1 = new Mamal('Mahima' , 'jersey' , 'Black'); //instance of a class is called an object
var cow2 = new Mamal('Basanti' , 'Randi' , 'pink')
cow1.sound()
cow2.sound()
