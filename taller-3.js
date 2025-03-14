function desglosarString(texto, tipo) {
    let listaVocales = "aeiou";
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    
    for (let caracter of texto.toLowerCase()) {
        if (caracter >= 'a' && caracter <= 'z') {
            if (listaVocales.includes(caracter)) {
                contadorVocales++;
            } else {
                contadorConsonantes++;
            }
        }
    }
    
    if (tipo === "vocales") {
        return contadorVocales;
    } else if (tipo === "consonantes") {
        return contadorConsonantes;
    }
}

console.log("desglosarString('Hola Mundo', 'vocales') =", desglosarString('Hola Mundo', 'vocales')); 
console.log("desglosarString('Hola Mundo', 'consonantes') =", desglosarString('Hola Mundo', 'consonantes')); 


function twoSum(numeros, objetivo) {
    let mapaIndices = new Map();
    
    for (let indice = 0; indice < numeros.length; indice++) {
        let complemento = objetivo - numeros[indice];
        
        if (mapaIndices.has(complemento)) {
            return [mapaIndices.get(complemento), indice];
        }
        
        mapaIndices.set(numeros[indice], indice);
    }
    
    return -1;
}

console.log("twoSum([2, 7, 11, 15], 9) =", twoSum([2, 7, 11, 15], 9)); // Debería mostrar [0, 1]
console.log("twoSum([3, 2, 4], 6) =", twoSum([3, 2, 4], 6)); // Debería mostrar [1, 2]



function conversionRomana(romano) {
  const valores = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  let resultado = 0;
  
  for (let i = 0; i < romano.length; i++) {
    const valorActual = valores[romano[i]];
    
    const valorSiguiente = i + 1 < romano.length ? valores[romano[i + 1]] : 0;
    
    if (valorActual < valorSiguiente) {
      resultado -= valorActual;
    } else {
      resultado += valorActual;
    }
  }
  
  return resultado;
}

console.log("conversionRomana('LVIII') =", conversionRomana('LVIII'));   
console.log("conversionRomana('MCMXCIV') =", conversionRomana('MCMXCIV'));  
