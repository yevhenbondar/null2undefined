#Example

```shell
$ npm install null2undefined --save
```

```javascript
var null2undefined = requiere('null2undefined');
//ES2015 modules
import null2undefined from 'null2undefined';

const convertedObject = null2undefined({
    value1: 'Hello world',
    value2: ['some string', 2, {
        value1: null
    }],
    value3: null
});

console.log(convertedObject);
//{
//    value1: 'Hello world',
//    value2: ['some string', 2, {
//        value1: undefined
//    }],
//    value3: undefined
//}
```