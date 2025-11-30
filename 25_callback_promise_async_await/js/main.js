//Call Backs - passsed to other function as parameter

//const {use} = require('react');

function firstFunction(paramters, callback) {
    //do stuff
    callback();
}

//AKA "callback hell"  - to overcome call back-promise got into picture

//Promise - thenable

//3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;

    if (!error) {
        resolve('Yes ! resolved the promise'); //fulfilled
    } else {
        reject('No! rejected the promise'); //rejected
    }
});
//console.log(myPromise); //this will return the state

/*
myPromise
    .then((value) => {
        return value + 1; //this will be passed to below
    })
    .then((newValue) => {
        console.log(newValue);
    })
    .catch((err) => {
        console.log(err);
    });  */

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('myNextPromise resolved');
    }, 3000); //3 secs
});

//here because of 3 sec delay, myPromise which decalred next to myNextPromise executed first
//it allows others to execute and it waits
myNextPromise.then((value) => {
    console.log(value);
});

myPromise.then((value) => {
    console.log(value);
});

//pending state - using fetch api

const users = fetch('https://jsonplaceholder.typicode.com/users');

//pending

console.log(users); //here it will go pending and allow other to proceed

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        //console.log(response); //this will give status but not the json

        return response.json(); //here we getting the actual data
    })
    .then((data) => {
        console.log(data); //here data is displayed

        data.forEach((user) => {
            console.log(user); //getting data for each user
        });
    });

//Async Await

const myUsers = {
    userList: [],
};

console.log('satrting of async await');
const myCoolFunction = async () => {
    //wait till it get resolved
    //here both the fetch and response returns promise so using await
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    return jsonUserData;
};

//myCoolFunction();

const anotherFunc = async () => {
    const data = await myCoolFunction(); //wait to get the data
    //console.log(data);
    myUsers.userList = data; //adding to object
    console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList); // here we get empty because function call which await tells to go ahead so if the log is inside the function we can get ops
//above happpens first then the anotherFunc

//examples - workflow function

const getAllUsersEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    const userEmailArray = jsonUserData.map((user) => {
        return user.email;
    });

    console.log(userEmailArray);
    //return userEmailArray;

    postToWebPage(userEmailArray);
};

//console.log(getAllUsersEmails()); //this will results in pending
//getAllUsersEmails();

const postToWebPage = (data) => {
    console.log('here');
    console.log(data);
};

getAllUsersEmails();

//2nd paramter of fetch

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            //Accept: 'text/plain',
        },
    });
    const jsonJokeData = await response.json(); //for application/json'
    //const jsonJokeData = await response.text();
    //const textJokeData = await response.text();
    console.log('here for dad joke');
    console.log(jsonJokeData); //for application/json'
    //console.log(textJokeData);
};

getDadJoke();

//POST
const jokeObject = {
    id: 'e2obFd2oOf',
    joke: "I thought about going on an all-almond diet. But that's just nuts.",
};
const postData = async (jokeObject) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //Accept: 'text/plain',
        },

        body: JSON.stringify(jokeObject),
    });

    const jsonResponse = await response.json();
    console.log('post data');
    console.log(jsonResponse);
};

postData(jokeObject);

//requestJoke - passing parms in header

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`,
    );

    const jsonResponse = await response.json();
    console.log('Request Joke');
    console.log(jsonResponse.value);
};

//requestJoke('daps', 'fet');
