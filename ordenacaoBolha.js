function ordenacaoBolha(vetor) {
  
  let n = vetor.length;
  
  for (let i = 0; i < n - 1; i++)
  
    for (let j = 0; j < n - i - 1; j++)
    
      if (vetor[j] > vetor[j + 1]) {
        // troca temp and vetor[i]
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      
      }
 
  console.log(vetor);

}

ordenacaoBolha([5, 2, 4, 6, 1, 3])