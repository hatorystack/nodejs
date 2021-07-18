const os = require('os');

console.log(os.EOL === '\n'); // Mac
console.log(os.EOL === '\r\n'); // Window

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
