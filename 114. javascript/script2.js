var database = [
    {
        username:"krish",
        password:"super"
    },
    {
        username:"prak",
        password:"super"
    },
    {
        username:"goyal",
        password:"s12"
    },
    {
        username:"piyush",
        password:"kkkkk"
    }
];
var newsfeed = [
    {
        username: "bobby",
        timeline:"so tired from all that learning"
    },
    {
        username: "susy",
        timeline: "JS is so Coool!"
    }
];

var usernameprompt= prompt("Whats ur username ?");
var passwordprompt = prompt("whats ur password?");

function signIn(a , b){

for (let i = 0; i < database.length; i++) {
    if(database[i].username === a &&
        database[i].password === b){
            console.log(newsfeed);
        }
    else{
        alert("sorry , wrong username and password")
    }
    
}


    // if(a === database[0].username &&
    //     b === database[0].password){
    //     console.log(newsfeed);
    // }
    // else{
    //     alert("Sorryyy!!!")
    // }
    
}

