// We're building some real Javascript //

//Building Assignment

function autoCar(age) {
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }

}

function checkDriverAge(age) {

    if (age == null){
        var age = prompt("What is your age?");
        autoCar(age)
    } else {
        autoCar(age)
        }
    }

    

    
    function checkDriverAge2(age) {

        if (age == null){
            var age = prompt("What is your age?");
            autoCar(age)
        } else {
            autoCar(age)
            }
        }

// checkDriverAge()




    


