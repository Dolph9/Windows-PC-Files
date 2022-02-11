//Advanced Arrays

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach(num => {
    double.push(num * 2);
})
console.log('forEach', double);

//map, filter, reduce

//map -> applies function to each iteration in array. acts a cleaner written 'forEach' statement

const mapArray = array.map(num => num * 2);
console.log("map", mapArray);

//filter -> passes each iteration through a filter. if true, stays in the array.

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//reduce -> returns the sum of all values in an array

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5);
// 5 will act as a starting point. When using reduce, 5 or whatever number you use will act as a starting point.
console.log('reduce', reduceArray);





// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const triple = []
  const feArray = array.forEach(num => {
      triple.push(num.username + '!');
  })
  console.log("forEach adding ! to the end of usernames in database", triple);
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const mapArray = array.map(name => name.username + '?');
  console.log("using map to add ? to each username", mapArray);
  
  //Filter the array to only include users who are on team: red
  const filterArray = array.filter(name => name.team === "red");
  console.log("filtered Array", filterArray);
  
  //Find out the total score of all users using reduce
  const reducArray = array.reduce((acc, num) => {
    return acc + num.score
  },0) 
  console.log("Reduced Array", reducArray)
  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i);
      alert(num);
      return num * 2;
  })

  //pure:
  const newsArray = arrayNum.map((num, i) => {
    return num * 2;
  })
  console.log("newsArray", newsArray)
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  const bonusArray = array.map(name => {
    name.items = name.items.map(words => {
      return words + "!";
    })
    return name;
  })
  console.log("bonusArray", bonusArray)
  