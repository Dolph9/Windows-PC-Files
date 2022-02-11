// Learning Objects

var Object1 = {
    ID: "1",
    Name: "Ron McDonald",
    Age: "25",
    Gender: "Male",
    isMarried: "True",
    canPerformFunction : function performance() {
        alert("Yes he can perform, its the only option");
        console.log("Yes he can perform, its the only option");
        console.error();
    }

} 

console.log(Object1.isMarried)
Object1.hasKids = "False"
console.log(Object1)

// Assignment #7 - Build Facebook (Object Version)

var list1 = {
    username: "John Doe",
    password: "secret"
}

var database = [list1]
  
var newsfeed = [{
    username: "Guy1",
    timeline: "",
    },
    {
    username: "Guy2",
    timeline: "",
    },
    {
    username: "Guy3",
    timeline: "",
    }
]
