function findMax(numeros) {
  if (numeros.length === 0) {
    return null;
  }
  
  let maximo = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  
  return maximo;
}

console.log(findMax([3, 7, 2, 9, 1])); 





function includes(lista, numero) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return true;
    }
  }
  
  return false;
}

console.log(includes([3, 7, 2, 9, 1], 7)); 





function sum(numeros) {
  let total = 0;
  
  for (let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  
  return total;
}

console.log(sum([3, 7, 2, 9, 1])); 




function missingNumbers(numeros) {
  if (numeros.length <= 1) {
    return [];
  }
  
  let minimo = numeros[0];
  let maximo = numeros[0];
  
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  
  let faltantes = [];
  
  for (let num = minimo + 1; num < maximo; num++) {
    let estaEnLista = false;
    
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] === num) {
        estaEnLista = true;
        break;
      }
    }
    
    if (!estaEnLista) {
      faltantes.push(num);
    }
  }
  
  return faltantes;
}

console.log(missingNumbers([1, 3, 5, 7, 9]));
