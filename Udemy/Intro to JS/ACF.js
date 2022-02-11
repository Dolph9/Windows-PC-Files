// Advanced Control Flow

// condition ? expr1 : expr2;
// ^ is this condition true? If yes, do expr1. If no, do expr2; (boolean)

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = 
    "Your account # is " + ( isUserValid(false)) ? "1234" : "Not available";
// If you change to true it will log "Not availbe"

function moveCommand(direction){
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster";
            break;
        case "back":
            whatHappens = "You arrived home";
            break;
        case "right":
            whatHappens = "You found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            WhatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//break -> breaks out of the switch.


//Assignment:

//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

//Simplified function (tenary)
function winBattle(bool){
	return bool;
}

var experiencePoints = winBattle(true)? 10 : 1;

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//#3 return value when moveCommand("back");
//#4 return value when moveCommand("right");
//#5 return value when moveCommand("left");
//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

// -->
const inputSwitch = function(input){
//can also be written as function inputSwitch(input)
    var event;
    switch(input){
        case "Vol up":
            event = "Volume increases by 1 (+1)";
            //Volume variable +1
            break;
        case "Vol down":
            event = "Volume decreases by 1 (-1)";
            //Volume variable -1
            break;
        case "Channel up":
            event = "Channel moves +1"
            //Channel variable +1
            break;
        case "Channel down":
            event = "Channel moves -1"
            //Channel variable -1
            break;
        default:
            event = "No input selected"
            //Nothing happens
    }
    return event;
}