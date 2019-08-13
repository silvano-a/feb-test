'use strict';

let Schema = require('./Schema.js');

class Validator
{
    constructor(schema) {
        if(schema instanceof Schema === false) {
            throw new Error('argument "schema" is not an instance of the Schema object');
        }
        this.schema = schema.getSchema();
    }

    validate(object) {
        let result = {
            isValid: true
        };

        for(let key in this.schema) {
            let valueType = this.schema[key];
            let objectValue = object[key];

            if(valueType === 'array' || valueType === 'object') {
                this._validateCollection(objectValue, valueType, result);
            } else {
                this._validateSingleValue(objectValue, valueType, result)
            }
        }

        return result;
    }

    _validateCollection (value, requiredType, result) {

        if(requiredType === 'array') {
            if ((value instanceof Object && value instanceof Array === true) === false) {
                result.isValid = false;
            }
        } else {
            if ((value instanceof Object && value instanceof Array !== true) === false) {
                result.isValid = false;
            }
        }
    }

    _validateSingleValue(value, requiredType, result) {
        if ((typeof value === requiredType) === false) {
            result.isValid = false
        };
    }
}

module.exports = Validator;
