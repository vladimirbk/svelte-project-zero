const fs = require('fs');

let pathModules = './node_modules';
let pathPackageLock = './package-lock.json';

//TODO
if (fs.existsSync(pathModules) || fs.existsSync(pathPackageLock)) {
    fs.rmdirSync(pathModules, { recursive: true });
    fs.unlinkSync(pathPackageLock);
    console.log("Node modules were uninstalled");
} else {
    console.log("It's already deleted");
}