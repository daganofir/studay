let hello = "Hi everyone, shut up";

const path = require("path");

console.log(`The file name is ${path.basename(__filename)}`);

function grab(flag) {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}

let greeting = grab("--g");
let user = grab("--u");

console.log(`The user is: ${user}\nThe greeting: ${greeting}`);