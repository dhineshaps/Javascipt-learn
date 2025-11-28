//Try-Catch

'use strict'; //it strictly follows he rules
//variable = 'Dhin'; //-> this will work but it should not be - can be with const, let.
const variable = 'dhin';

//variable = 'Fet'; //by using the same name -> it will cause type error

const makeError = () => {
    try {
        const name = 'Dhinesh';
        name = 'Fet';
    } catch (err) {
        //console.error(err); //error
        //console.warn(err); //table
        //console.table(err);
        //console.err(err.message);
        console.err(err.stack);
    } finally {
        //always execute
        console.log('...finally');
    }
};

makeError();

const custError = () => {
    try {
        throw new Error('This is custom error !');
    } catch (err) {
        console.error(err.name);
    }
};

custError();

function customError(message) {
    this.message = message;
    this.name = 'CustomError';
    this.stack = `${this.name}: ${this.message}`;
}
