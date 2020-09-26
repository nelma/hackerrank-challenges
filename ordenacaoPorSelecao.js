
//Maior por menor
function ordenacaoSelecao(vetor) {
  
  let n = vetor.length;
  
  for (let i = 0; i < n - 1; i++) {
    
    let max_idx = n - 1; //i=5
    
    for (let j = i + 1; j < n; j++)
      
      if (vetor[j] > vetor[max_idx])
        max_idx = j; //j=1
    
    
    //Faz a troca de posicao
    let temp = vetor[max_idx]; //[2]
    vetor[max_idx] = vetor[i]; //vetor[i]=5
    vetor[i] = temp; //vetor[i]=2
  }
  
  console.log(vetor);
}

ordenacaoSelecao([5, 2, 4, 6, 1, 3])


//==========================================================================


// //Menor para o maior
function ordenacaoSelecao(vetor) {
  
  let n = vetor.length;
  
  for (let i = 0; i < n - 1; i++) {
    
    //Separa o primeiro index
    let min_idx = i; //i=0
    
    for (let j = i + 1; j < n; j++)
      
      if (vetor[j] < vetor[min_idx])
        min_idx = j; //j=1
    
    
    //Faz a troca de posicao
    let temp = vetor[min_idx]; //[2]
    vetor[min_idx] = vetor[i]; //vetor[i]=5
    vetor[i] = temp; //vetor[i]=2
  }
  
  console.log(vetor);
}

ordenacaoSelecao([5, 2, 4, 6, 1, 3])