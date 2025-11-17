//JSON is used to send and receive data

const myObj = {
    name: 'Dhinesh',
    hobbies: ['eat', 'code', 'sleep'],
    hello: function () {
        console.log('help');
    },
};

console.log(myObj);

console.log(myObj.name);

console.log(typeof myObj);

//passing to json

const sendJSON = JSON.stringify(myObj); //converts json objects to string

console.log(sendJSON);

console.log(typeof sendJSON);

const recieveJSON = JSON.parse(sendJSON); //convert to object,

console.log(recieveJSON);
