/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

const PrimeDetector = () => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {  
            if (num % i === 0) return false;
        }
        return true;
    };

    for (i = 2; i < 100; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }

}

PrimeDetector();