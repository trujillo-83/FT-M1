'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  return parseInt(num, 2);

  /*let cadena = num.toString();
  let array = cadena.split("").reverse();
  let suma = 0;

  for (let i = 0; i < array.length ; i++) {
    if (Number(array[i]) === 1) {
      suma += Math.pow(2, [i]);
    }
  }
  return suma;*/
  
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = '';

  while (num > 0) {
    binario = (num % 2) + binario
    num = Math.floor(num / 2)
  }
  return binario; 

  /*return num.toString(2)*/

  /*let numero =  num;
    let result = [];
  
   while (numero >= 1) {
    const redondear = Math.floor(numero);
          numero = numero / 2;
    const resto = redondear % 2;
    const redondear2 = Math.floor(resto);

      result.push(redondear2);

  }
    return result.reverse().join(""); */


  /* let numeroEnBinario = [];
  
  while (numero >= 1) {
    numeroEnBinario.unshift(num % 2);
    num = Math.floor(num/2)
    //num = (num - (num % 2))/2
  }
  return numeroEnBinario.join("");
  } */
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}