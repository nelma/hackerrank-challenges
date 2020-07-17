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
    var a = [];
    var result_1 = 0;
    var result_2 = 0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
        
       //primeira diagonal 
       var values = a[a_i][a_i];  
       result_1 = values + result_1;
        
       //segunda diagonal
       var length = a[a_i].length - a_i; 
       var values_2 = a[a_i][length - 1];
       result_2 = values_2 + result_2;
    }
    console.log(Math.abs(result_1 - result_2));
}
