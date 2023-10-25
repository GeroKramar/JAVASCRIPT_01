// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”

var num1 = parseInt(prompt("Ingrese el numero para verificar si es par o impar"));

console.log(verificar());
function verificar() {
    var rta = num1 % 2;
    if (rta == 0) {
        alert("El numero ingresado es PAR");
    } else if (rta == 1) {
        alert("El numero ingresado es iMPAR");
    } else if (num1 == 0) {
        alert("el numero ingresado es 0");
    }
}
