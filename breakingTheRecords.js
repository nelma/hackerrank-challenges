'use strict';

// Complete the breakingRecords function below.
function breakingRecords(scores) {

  let highest = scores[0] 
  let lowest = scores[0];
  let result = new Array(2).fill(0);

  scores.forEach(point => {

    if(point > highest) {
        highest = point;
        ++result[0];
    } else if(point < lowest) {
        lowest = point;
        ++result[1];
    }

    return result;

  })

  return result;
}