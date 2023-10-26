// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
// funcionamiento de la función Substring().

// Variables
var frase = prompt("Introduce una frase");
var fraseEspaciada = "";

// Bucle
for (var i = 0; i < frase.length; i++) {
    fraseEspaciada += frase.substring(i, i + 1) + " ";
}

// Mostrar resultado
alert(fraseEspaciada);

