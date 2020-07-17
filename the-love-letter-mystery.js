function getCountOperations(word) {
 
  var count = 0;
  var middlePos = Math.floor(word.length/2);
  var reversePos;

  for (var i = 0; i < middlePos; i++) {
    reversePos = word.length - 1 - i;
    count += Math.abs(word.charCodeAt(i) - word.charCodeAt(reversePos));
  }

  return count;
}

function processData(input) {
  var linha = input.split('\n').slice(1); 
  linha = linha.map(getCountOperations);
  process.stdout.write(linha.join('\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
