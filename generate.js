const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let obj = {};
for (let i = 0; i < 1000; i++) {
    obj[uuidv4()] = uuidv4();
}
console.log(fs.writeFileSync('data.json', JSON.stringify(obj), 'utf8'));