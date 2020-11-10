const fs = require('fs');
const path = require('path');

let pathModules = './node_modules';
let pathPackageLock = './package-lock.json';

const modulesToDelete = [pathModules, pathPackageLock];

modulesToDelete.forEach((module) => {
    if (fs.existsSync(module) && path.basename(module)  === 'package-lock.json') fs.unlinkSync(module);
    else fs.rmdirSync(module, { recursive: true })
});