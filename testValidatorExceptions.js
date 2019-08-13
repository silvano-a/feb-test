let Validator = require('./src/Validator.js');

// validator argument requires a valid Schema object. throws error.
let faultyValidator = new Validator({
    name: 'silvano',
    age: 25
});