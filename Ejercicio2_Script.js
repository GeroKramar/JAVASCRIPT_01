// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio 

const pi = Math.PI;
var radio = prompt("Ingrese el valor del radio");
var area = pi * Math.pow(radio, 2);
var perimetro = 2 * pi * radio;
alert("El Area de tu circunferencia es: " + area);
alert("El perimetro de tu circunferencia es: " + perimetro);