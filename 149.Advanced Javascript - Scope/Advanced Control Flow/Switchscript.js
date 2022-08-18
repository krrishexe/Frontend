function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case  "forward":
            whatHappens = "you encounter a monster";
            break;
        case "backward":
            whatHappens = "you arrived home";
            break;
        case "leftward":
            whatHappens = "you found a quest";
            break;
        case "rightward":
            whatHappens = "nothing";
            break;
        default :
            whatHappens = "please enter a vald direction";
    }
    return whatHappens;
}