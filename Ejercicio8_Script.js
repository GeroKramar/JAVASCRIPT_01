// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.


var numero = 0;
var numeromayor = 0;
var numeromenor = 0;
var suma = 0
var i = 0;
do {
    if (numero !== 0) {
        i++;
    }
    suma += numero;
    numero = parseInt(prompt("Ingrese numeros y cuando quiera terminar el programa ingrese el 0"));
    if (numero == 0) {
        break;
    }
    if (i == 1) {
        numeromayor = numero;
        numeromenor = numero;
    } else {

        if (numero > numeromayor) {

            numeromayor = numero;
        }
        if (numero < numeromenor) {
            numeromenor = numero;
        }
    }

} while (true);

var promedio = suma / i;
alert("El numero mayor es: " + numeromayor + " el numero menor es : " + numeromenor + " y el promedio es: " + promedio);



