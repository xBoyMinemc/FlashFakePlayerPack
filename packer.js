const child_process = require('child_process');

child_process.fork('./.build/index.js', process.argv.slice(2), { stdio: 'inherit', cwd: process.cwd() });