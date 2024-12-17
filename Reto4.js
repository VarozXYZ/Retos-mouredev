/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const PrimeDetector = () => {
    for (i = 0; i < 100; i++) {
        i%2 === 0 ? true : console.log(i);
    }

}

PrimeDetector();