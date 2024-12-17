/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */


function isAnagrama(palabra1, palabra2) {
    if (palabra1 === palabra2) {
        return false;
    }

    function normalizar(string) {
        return string.toLowerCase().split('').sort().join('');
        ;
    }

    console.log(normalizar(palabra1));
    console.log(normalizar(palabra2));

    return normalizar(palabra1) === normalizar(palabra2);
}

console.log(isAnagrama('Amor', 'Roma'));
console.log(isAnagrama('Hello', 'World'));