//web storage API

//not part of DOM - refers tot he window API
//Available to JS via the global variable: window

//we do not have to type window: it is implied

/*
window.alert(window.location); //to get the localhost
alert('ok!!!');

*/
const myArray = ['eat', 'sleep', 'code'];

const myObject = {
    name: 'Dhinesh',
    hobbies: ['eat', 'sleep'],
    logName: function () {
        console.log(this.name);
    },
};

// myObject.logName();

//session storaeg - when we login to website - once log out it will be deleted
//local storage - attached to browser - presistent data

//session storage

sessionStorage.setItem('mySessionStore', JSON.stringify(myObject)); //only stores sign data, if not converts to string and store

const mySessionData = JSON.parse(sessionStorage.getItem('mySessionStore'));

console.log(mySessionData);

sessionStorage.setItem('mySessionStoreArray', JSON.stringify(myArray)); //only stores sign data, if not converts to string and store

const mySessionDataArray = JSON.parse(
    sessionStorage.getItem('mySessionStoreArray'),
);

console.log(mySessionDataArray);

//local storage -- even after closing the browser , open again it will show up here
localStorage.setItem('myLocalStore', JSON.stringify(myObject)); //only stores sign data, if not converts to string and store

//const mySessionDataLocal = JSON.parse(sessionStorage.getItem('mySessionStore'));

//to remove the item

//localStorage.removeItem('myLocalStore');
const mySessionDataLocal = JSON.parse(sessionStorage.getItem('myLocalStore')); //returns null
console.log(mySessionDataLocal);

//to get particular

const key = localStorage.key(0);
console.log(key);

//how many items in local storge

const noOfItems = localStorage.length;
console.log(noOfItems);
