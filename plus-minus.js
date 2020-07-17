process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var qtde_positive = 0;
    var qtde_negative = 0;
    var qtde_zero = 0;

    for(var i = 0; i < arr.length; i++) {

       if(arr[i] >= 0) {
           if(arr[i] == 0) {
              qtde_zero += 1;
           } else {
              qtde_positive += 1;
           }
       } else {
           qtde_negative += 1;
       }
    }
    
    var length = arr.length;
    var result_zero = qtde_zero / length;
    var result_postive = qtde_positive / length;
    var result_negative = qtde_negative / length;

    console.log(result_postive.toFixed(6));
    console.log(result_negative.toFixed(6));
    console.log(result_zero.toFixed(6));
}
