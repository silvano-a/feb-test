let Schema = require('./src/Schema.js');
let Validator = require('./src/Validator.js');

console.log('Validating Persons:');
const personSchema = new Schema(
    {
        name: 'string',
        age: 'number',
        siblings: 'array',
        metaData: 'object',
        active: 'boolean',
    }
);

//Silvano => output: true
const personValidator = new Validator(personSchema);
const Silvano = {
    name: 'Silvano Allemekinders',
    age: 25,
    siblings: ['Dave','Julian'],
    metaData: {
        job: 'Developer'
    },
    active: true
};
console.log('Silvano valid: ' + personValidator.validate(Silvano).isValid);


//James => output: true
const james = {
    name: 'James',
    age: 25,
    siblings: ['Johnnathan'],
    metaData: {},
    active: true,
};
console.log('james valid: ' + personValidator.validate(james).isValid);

//James faulty => output : false
const jamesFaulty = {
    name: 'James faulty',
    age: 25,
    active: true,
};
console.log('james Faulty valid: ' + personValidator.validate(jamesFaulty).isValid);
