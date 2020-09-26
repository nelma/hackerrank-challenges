function fibonacci(n) {
  
  const arrFibonacci = new Array(n);
  const length = arrFibonacci.length;
  
  arrFibonacci[0] = 0;
  arrFibonacci[1] = 1;
  
  if(length >= 3) {
    
    for(let i = 2; i < length; i++){    
      arrFibonacci[i] = arrFibonacci[i - 1] + arrFibonacci[i - 2]
    }
  }
  
  console.log(arrFibonacci);
}

fibonacci(20);