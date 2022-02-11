// Exercise Build Facebook
// Building Exercise (10.30.2021)

var database = [
    {
        username: "Dar",
        password: "super"
    },
    {
        username: "Eman",
        password: "1234",
    },
    {
        username: "Dame",
        password: "abcde",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is very cool!"
    },
    {
        username: "Don Q",
        timeline: "Can't stand all of this js"
    }
];

function isUserValid(username,password) {
    for (var i=0; i < database.length; i++) {
        if (username === database[i].username && password === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username,password) === true) {
        console.log(newsFeed);
    } else { 
        alert("Sorry, wrong username and password!!");
    }
    // Can also write line 44 as if (isUserValid(username,password)) {...
}

// var userNamePrompt = prompt("What\'s your username?");
// var passwordPrompt = prompt("What\'s your password?");

// signIn(userNamePrompt,passwordPrompt);








//Below is original function, if you're using a database with one password and username!

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password) {
//         console.log(newsFeed);
//     } else {
//         alert("Sorry, wrong username and password!")
//     }
// }