/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */


function imprimirFibonacci(n) {
    let a = 0, b = 1;
  
    console.log(a); // Imprime el primer número
    console.log(b); // Imprime el segundo número
  
    for (let i = 2; i < n; i++) {
      let siguiente = a + b;
      console.log(siguiente);
      a = b;
      b = siguiente;
    }
  }
  
  imprimirFibonacci(50);