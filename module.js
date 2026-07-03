let fs = require('fs');
let os = require('os');

let {log, warn} = require('console');

fs.writeFileSync('newFile.text', 'new modules learning');

console.log(os.hostname());
console.log(os.machine());
console.log(os.homedir());
console.log(os.platform());
// console.log(os.release());
// console.log(os.cpus());

// globale module console.log is global module we dont need to import this module
console.log('abc');
console.log(process.cwd());
console.log(process.pid);

log("hello logs");
warn("hello warn")