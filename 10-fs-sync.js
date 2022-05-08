// Method 1
// const fs = require('fs');
// fs.readFileSync

// Method 2 || Destructure
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result.txt', `Here is the result: ${first}, and ${second}.`, {flag: 'a'})

console.log(first);
console.log(second);