function realizarOperacion(num1, num2, operacion) {
    let resultado = 0;
    if(operacion === "suma"){
        return "La suma es: " + (num1 + num2);
    }else if(operacion === "resta"){
        return "La resta es: " + (num1 - num2);
    }else if(operacion === "multiplicacion"){
        return "La multiplicación es: " + (num1 * num2);
    }else if(operacion === "division"){
        if(num2 != 0){
            return "La división es: " + (num1 / num2);
        }else{
            return "No se puede dividir por cero";
        }
    }else{
        return "Operación inválida";
    }
}

let rpt = realizarOperacion(1, 0, "division");
console.log(rpt);