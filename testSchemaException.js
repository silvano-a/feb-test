let Schema = require('./src/Schema.js');

//schema is not an object, throws error
let invalidSchema = new Schema('string');

// Date is not a supported type, throws error
let unsupportedTypes = new Schema({
    name: 'string',
    dateOfBirt: 'Date' // <- unsupported type
});
