'use strict';

class Schema {
    _schema = {};
    supportedTypes = [
        'string',
        'number',
        'array',
        'object',
        'boolean',
    ];

    constructor(schema) {
        if(schema instanceof Object === false) {
            throw new Error('Schema is not a valid object');
        }

        for(let key in schema) {
            if(this.supportedTypes.includes(schema[key]) === false) {
                throw new Error(schema[key] + ' is not a supported type');
            }
        }

        this._schema = schema;
    }

    getSchema () {
        return this._schema;
    }
}

module.exports = Schema;
