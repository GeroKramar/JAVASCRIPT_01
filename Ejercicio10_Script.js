// Escribir una función flecha que reciba una palabra y la devuelva al revés.
//

// Variables
var palabra = prompt("Introduce una palabra");
var palabraAlReves = "";

ver = (palabra) => {
    for (var i = palabra.length - 1; i >= 0; i--) {
        palabraAlReves += palabra.substring(i, i + 1);
    }
    return palabraAlReves;
}

alert(ver(palabra));

