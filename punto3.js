function realizarOperacion() {
  while (true) {
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicaion, division)\n salir para salir del programa");
    if (operacion === "salir") {
      alert("Gracias por usar el programa...");
      break;
    }
    let num1 = parseFloat(prompt("Ingrese el valor del número 1"));
    let num2 = parseFloat(prompt("Ingrese el valor del número 2"));
    let resultado = 0;
    if (operacion === "suma") {
      resultado = num1 + num2;
    } else if (operacion === "resta") {
      resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
      resultado = num1 * num2;
    } else if (operacion === "division") {
      if (num2 != 0) {
        resultado = num1 /num2;
      } else {
        alert("No se puede dividir por cero");
      }
    } else {
      alert("Operación inválida");
      continue;
    }
    alert("El resultado de la operación es: " + resultado);
  }
}

realizarOperacion();