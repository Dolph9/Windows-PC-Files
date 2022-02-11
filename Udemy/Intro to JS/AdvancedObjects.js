//Advanced Objects

//Reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10};

//checking conditionals -> object1 === object2 is true. object3 === object1 is false.

//context vs scope

const object4 = {
    a: function(){
        console.log(this);
        //this should return {a: f}, where f is the function
    }
}

//Instantiation

class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        console.log(`Player ${name} has been created, this player is a ${type}`)
    }
    introduce(name, type) {
        console.log(`Hi my name is ${name}, my type is a ${type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super (name, type);
        console.log('Player', this);
    }
    play() {
        console.log('We\'re playing the Wizard')
    }
}

const wizard1 = new Wizard("Fafnor", "Mage")