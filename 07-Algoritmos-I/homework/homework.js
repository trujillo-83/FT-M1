'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let i = 2;

  while (num != 1) {
    if (num % i === 0) {
      array.push(i);
      num = num / i;
    } else {
      i++;
    }
  } return array;
}

function bubbleSort(array) { //se fija si el actual mayor al siguiente y hace swap(ordena de menor a mayor)
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante                      
  // Tu código:                                                 
  for (let i = 0; i < array.length; i++) { //recorre el arreglo o determina cuantas vueltas da              
    for (let j = 0; j < array.length; j++) { //recorre las posiciones                
      if (array[j] > array[j+1]) {                              
        var aux = array[j];                                     
        array[j] = array[j+1]                                   
        array[j+1] = aux;                                      
      }
    }    
  } return array;
}


function insertionSort(array) { //si el de la izquierda es mayor al actual, los intercambia (ordena de menor a mayor)
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) { //empieza en 1 porque la posicion 0 no tiene nada a la izquierda
    let pos = i;
    let aux = array[i];
    while (pos > 0 && array[pos-1] > aux) {
      array[pos] = array[pos-1];
      pos = pos-1;
    }
    array[pos] = aux;
  } return array;
}


function selectionSort(array) { //selecciona el mas pequenio y lo pone en la primera posicion, despues el segundo mas pequenio en la segunda y asi...
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
      } if (min != i) {
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
