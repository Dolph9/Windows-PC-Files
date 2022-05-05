//Making requests async and using promises.

//Fetching data from api (JSON Placeholder) to access JSON file:

function fetchfunction(){
    fetch('https://jsonplaceholder.cypress.io/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('It works');
    } else {
        reject('Error, its Broken')
    }
})

// Introducing async, await
async function factor() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}

//async await is a property of ES6
// async infront of function tells the console to run this function on its own.
// await acts as .then, await says run this line next in the async function

//introducing catch
//introducing multiple promises

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'));

//tying it all together with async function + await
//introducing try/catch

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('Users', users)
        console.log('Posts', posts)
        console.log('Albums', albums)

    } catch (err) {
        console.log(err, 'NO NO NO')
    }
}

//Assessment Below:

// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then(console.log);

async function fetchStarship() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json())),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }),
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};