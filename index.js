// console.log(__dirname);
// console.log(__filename);

 const path = require('path');

// console.log(path.basename('C:\\temp\\myfile.html'));



// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));


console.log(path.parse(path.dirname(__filename)));