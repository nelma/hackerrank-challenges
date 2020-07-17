'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    let s1Splited = [];
    let isShared = false;
    
    if(s1 && s2) {
        let result = 'NO';

        s1Splited = s1.split('');
        for(let letter of s1) {
            if(s2.indexOf(letter) > -1) {
                result = 'YES';
                break;
            } 
        }

        return result;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);
    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();
        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
