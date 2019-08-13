class Validator
{
    constructor(schema) {
        this.schema = schema;
    }

    validate(object) {
        for(let key in object) {
            let valueType = this.schema[key];

            if(valueType === 'array' || valueType === 'object') {
                this._validateCollection(object[key], valueType);
            } else {
                this._validateSingleValue(object[key], valueType)
            }
        }
    }

    _validateCollection (value, requiredType) {
        if(requiredType === 'array') {
            console.log(value instanceof Array);
        } else {
            console.log(value instanceof Object && value instanceof Array !== true);
        }
    }

    _validateSingleValue(value, requiredType) {
        console.log(typeof value === requiredType);
    }
}

let personValidator = new Validator(
    {
        name: 'string',
        age: 'number',
        siblings: 'array'
    }
);

let person = {
    name: 'Silvano',
    age: 25,
    siblings: {'test':'test'}
};


personValidator.validate(person);