//Modules
// by using 'use strict" can be used at top but it is default

//importig

import playGuitar from './guitar.js';
import {shredding as shred, plucking} from './guitar.js';
import User from './user.js';

// import * as Guitars from './guitar.js' -- but not suggested
//rename the function using 'as'
console.log(playGuitar());
console.log(shred());

const me = new User('daps@gmail.com', 'Dhinesh');
console.log(me);
console.log(me.greeting());
