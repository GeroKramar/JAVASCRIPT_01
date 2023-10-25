// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 


function muestraMensaje() {
    var opc = parseInt(prompt('Ingresa el numero de la operacion a realizar'));
    var num1 = parseInt(prompt("Ingrese el primer numero"));
    var num2 = parseInt(prompt("Ingrese el segundo numero"));
    switch (opc) {
        case 1: alert(num1 + num2);
    
            break;
        case 2: alert(num1 - num2);
    
            break;
        case 3: alert(num1 * num2);
    
            break;
        case 4: alert(num1 / num2);
    
            break;
        default:
            alert("La operacion ingresada es incorrecta")
            break;
    }

}
document.getElementById("b1").onclick = muestraMensaje;
