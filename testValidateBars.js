let Schema = require('./src/Schema.js');
let Validator = require('./src/Validator.js');

console.log('\nValidating Bars:');
const barSchema = new Schema({
    name: 'string',
    address: 'string',
    drinks: 'object',
});
const barValidator = new Validator(barSchema);

//Jimmys => output: true
const jimmys = {
    name: 'Jimmys drinks',
    address: 'Somewhere over the rainbow',
    drinks: {
        beer: ['Straffe Hendrik', 'Rochefort', 'St Bernard'],
    },
};
console.log('jimmys valid: ' + barValidator.validate(jimmys).isValid);


//Sjonnies=> output: false
const sjonnies = {
    name: 'Sjonnies',
    address: 'Centrum 001',
    drinks: [ // < No object
        'Heineken',
    ]
};
console.log('sjonnies valid: ' + barValidator.validate(sjonnies).isValid);
