const fs = require('fs');
/* const book = {
    title:'Ego is the enemy',
    author:'Ryan Holiday',
}
const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json',bookJSON); */



/* const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString());
const dataJSON = dataBuffer.toString();
const data =  JSON.parse(dataJSON);
console.log(data.title);
 */

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer.toString()); // json object
const dataJson = dataBuffer.toString();
const dataObject = JSON.parse(dataJson);
//console.log(dataObject.name);
dataObject.name = 'Mayte';
dataObject.age = 20 ;
console.log(dataObject);
console.log(JSON.stringify(dataObject));
const obj1 = dataObject;
const objJSON = JSON.stringify(obj1)
fs.writeFileSync('91-json.json',objJSON);

