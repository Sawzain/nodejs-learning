// modules - encapsulated code (only share minimum)
// commonj, every file is module (by default)
const names = require("./4-names");
const sayHi = require("./5-utils");
const alternative = require("./6-alternative-flavour");
console.log(alternative);
require("./7-boggling");
sayHi("sajen");
sayHi(names.john);
sayHi(names.peter);
