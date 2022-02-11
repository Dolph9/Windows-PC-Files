// Learning For and While Loops

var todos = [
       "clean room",
       "brush teeth",
       "exercise",
       "study javascript",
       "eat healthy"
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i] + "!");
    console.log(i);
}

todos.forEach(function(todo){
    console.log(todo);
})
// forEach works as a for loop but simplified
// Can use forEach as function -->

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos)

var counterOne = 0;
while (counterOne < 20) {
    console.log(counterOne + " This works!");
    counterOne++;
}
//while loops, checks the condition (while(counterOne < 20)) then performs the action in the loop

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
//do loops, does the action first then checks the condition (while (counterTwo > 0))
