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
    var time = readLine();
    var pos = time.search(/[A-Z]{2}/);
    var period = time.substr(pos, 2);
    var completeHour = time.substr(0, pos);

    var hour = completeHour.split(':')[0];
    var minute = completeHour.split(':')[1];
    var second = completeHour.split(':')[2];
    if(period == 'PM') {
        if(hour == 00) {
            newHour = 12 + 12;
        }
        else if(hour < 12) {
            newHour = parseInt(hour) + 12;
        }
        else if(hour == 12) {
            newHour = hour;
        }
    } else {
        newHour = hour;
        if(hour == 12) {
          newHour = '00';
        }
    }

    console.log(newHour+':'+minute+':'+second);
}
