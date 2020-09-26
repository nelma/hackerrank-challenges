function ordenacaoInsercao(vetor) {
  
  let n = vetor.length;
  
  for (let i = 1; i < n; i++) {
    
    let key = vetor[i];
    let j = i - 1;

      //Faz a troca de posicao, nesse caso de maior para o menor
      while (j >= 0 && vetor[j] > key) {
          vetor[j+1] = vetor[j];
          j = j - 1;
      }
      vetor[j+1] = key;
  }

  console.log(vetor);
}

ordenacaoInsercao([5, 2, 4, 6, 1, 3]);