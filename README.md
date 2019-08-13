# Uitleg achter uitwerking

Mijn uitwerking bestaat uit 2 classes; een `Schema` en een `Validator`. 
Beide classes bevatten naast de checks of de schema's wel kloppen ook checks of de developer geen fout maakt.
Zo kan je bijvoorbeeld geen validatie uitvoeren zonder een valide `Schema`, en wordt er gecontroleerd of alle
gevraagde datatypes inderdaad wel ondersteund zijn door de validator. 

de usage van mijn code is alsvolgt;

eerst importeer je de 2 classes uit de src map:
```javascript
let Schema = require('./src/Schema.js');
let Validator = require('./src/Validator.js');
```

vervolgens maak je je eigen schema aan:
```javascript
let customSchema = new Schema({
    foo: 'string',
    bar: 'array',
    baz: 'number',
})
```

vervolgens maak je een validator aan voor dat specifieke schema:
```javascript
let customValidator = new Validator(customSchema);
```


vervolgens kan je in de `customValidator.validate()` method objecten laten testen:
```javascript
customValidator.validate({
    foo: 'zix',
    bar: ['yoda'],
    baz: 123    
});
```
bovenstaande zal het volgende returnen: 
```javascript
{
    isValid: true
}
```
Om het testen makkelijk te maken heb ik 5 testcases klaar gezet met o.a. de examples die werden gegeven;
```
node testValidatePersons
```

```
node testValidateBars
```

```
node testValidateCars
```

testcases van de developer checks:
```
node testSchemaException
```

```
node testValidatorExceptions
```

het script is geschreven en getest met `node v12.1.0`.  

Bij vragen hoor ik het graag.
