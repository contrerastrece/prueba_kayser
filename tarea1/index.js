/*
Crea una función en JavaScript llamada SysBsqd que tome un array de números
enteros consecutivos del 1 al n, pero con un número faltante, y retorne el número
que falta.
Requisitos:
• La función debe recibir un array de enteros con los números desordenados,
del 1 al n, excepto uno que falta.
• Debe retornar el número faltante.
Resultado:
SysBsqd ([3, 7, 1, 2, 8, 4, 5]) // Output: 6
SysBsqd ([1, 2, 4, 5, 6]) // Output: 3
*/

const arrar1 = [3, 7, 1, 2, 8, 4, 5];
const arrar2 = [1, 2, 4, 5, 6];
const arrar3 = [8, 1, 9, 7, 3, 2, 4, 5, 6];


const SysBsqd = (ar) => {
  // calcular la longitud del array
  const n = ar.length + 1;

  // calcular la suma esperada del array
  const sumaEsperada = n * (n + 1) / 2;

  // calcular la suma del array recibido
  const sumReal = ar.reduce((num, acc) => acc + num, 0);

  // retornar el numero faltante
  return sumaEsperada - sumReal;


}

console.log(SysBsqd(arrar1))