// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 

var caracter = prompt("Ingrese el caracter S o N");
caracter = caracter.toUpperCase();

if (caracter == "S" || caracter == "N" ) {
    alert("El caracter es Correcto!!")
} else{
    alert("INCORRECTO!!")
}