const sayHi = require('./utils');
const names = require('./names');

const globals = require('./globals');

sayHi(names.person1);
sayHi(names.person2);

console.log(typeof names.glocery);
