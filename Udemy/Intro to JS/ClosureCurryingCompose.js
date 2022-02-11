//Closures - a function ran, the function executed. It's mever going
// BUT it's going remember that there are references to those variables
// so the child scope always has access to the parent scope

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
// (f,g) => (a) => f(g(a)) / g(a) then f( )
const compose = (f,g) => (a) => f(7); 

const sum = (num) => num + 1;

compose(sum, sum)(5);

//Avouding side Effects, functional purity.
// functional purity -> we always want to return a value. Deterministic -> [input -> (5,10) => function() => return -> value]
//Determinism -> anything you put in the function will always return something. (which is functional purity)

var a = 1;
function b(){
    a = 2;
}

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//last line returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//last line returns 31 (30 + 1)

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//last line returns 17(12+5)

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
//last line returns 16

//What are the two elements of a pure function?
