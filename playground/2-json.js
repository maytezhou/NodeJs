const fs = require('fs');
const person = {
    name:'Almendra',
    age:21,
    height:1.57
}
console.log(JSON.stringify(person))
fs.writeFileSync('2-json.json',JSON.stringify(person)); 
person.name = 'Zalet';
person.age = 25;
fs.writeFileSync('2-json.json',JSON.stringify( person));

