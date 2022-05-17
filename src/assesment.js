/*
Dado un array de enteros, calcular el puntaje total basado en lo siguiente:
  1.) Suma 1 punto por cada número par en el array
  2.) Suma 3 puntos por cada número impar en el array, a excepción del número "5"
  3.) Suma 5 puntos por cada número "5" en el array

  Nota: Recuerda que el 0 es considerado un número par
*/


const assesment = (numeros) => {
  let response = 0
  numeros.forEach(n => {
    if (n % 2 === 0) response++;
    else {
      if (n !== 5) {
        response += 3;
      } else {
        response += 5;
      }
    }

  })
  return response;
}

module.exports = assesment;
