let Schema = require('./src/Schema.js');
let Validator = require('./src/Validator.js');

console.log('\nValidating cars:');
const carSchema = new Schema(
    {
        brand: 'string',
        type: 'string',
        milage: 'number',
        extras: 'array',
    }
);
const carValidator = new Validator(carSchema);
const mazda = {
    brand: 'Mazda',
    type: 'MX5 NB 1.8',
    milage: 199999.99,
    extras: [
        '2001 Special Edition'
    ],
};
console.log('mazda valid: ' + carValidator.validate(mazda).isValid);




const BMW = {
    brand: 'BMW',
    type: '335',
    milage: '100000', // < No number
    extras: [
        'LCI',
        'KW Coilovers',
    ],
};
console.log('BMW valid: ' + carValidator.validate(BMW).isValid);
