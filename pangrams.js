function processData(input) {
   
  var result = [];
  var letters = 'abcdefghijklmnopqrstuvxywz';
  var str = input.toLowerCase();
  for(var i = 0; i <= 26; i++) {
    if(str.indexOf(letters.charAt(i)) == -1){
       result.push(0);
    } else {
      result.push(1);
    }
  }
  
  var final = "pangram";
  for(var x = 0; x < result.length; x++) {
    if(result[x] == 0){
      final = "not pangram";
    }
  }
  console.log(final);
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
