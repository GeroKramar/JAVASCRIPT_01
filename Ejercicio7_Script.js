// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.

var limite = parseInt(prompt("Ingrese un valor límite positivo"));
if (limite <= 0 || isNaN(limite)) {
    alert("Por favor, ingrese un número válido y positivo como límite.");
} else {
    alert("INGRESE NUMEROS HASTA QUE SUPERE EL LIMITE");

    var suma = 0;
    
    do {
        
        var numero = parseInt(prompt("Ingrese un numero"));
        
       
        if (isNaN(numero)) {
            alert("Por favor, ingrese un número válido.");
        } else {
           
            suma += numero;
        }
    } while (suma <= limite);
    
  
    alert("La suma de los números ingresados ha superado el límite de " + limite + ". La suma total es " + suma + ".");
}