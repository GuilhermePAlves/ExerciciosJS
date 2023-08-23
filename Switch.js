let number1 = 40;
let number2 = 50;
let operador = '%'
let resultado

switch (operador) {
    
    case '+':
        resultado = number1 + number2;    
        break;
    case '-':    
        resultado = number1 - number2;
        break;
    case '*':
        resultado = number1 * number2;
        break;
    case '/':
        resultado = number1 / number2;
        break;
    case '%':
        resultado = number1 % number2;
    default:
        resultado = "Operador inválido"
        break;
}

console.log(resultado)