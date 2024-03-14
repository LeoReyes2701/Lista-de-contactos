
// 1. Obtener el signo
// 2. Dependiendo del signo obtener cada numero
// 3. Hacer la operacion
// 4. Mostar la operacion


//Primero creamos todas las funciones de todas las operaciones posibles

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2===0){
        return "Error no se puede dividir entre cero."
    }else {
    return num1 / num2;
    }
}

//Ahora vamos a crear la funcion que va a detectar que tipo de operacion es

function calcular(signo, num1, num2) {
    //El switch de lo que se encarga es de sustituir una serie de if else, en este caso lo que hace es verificar que signo hay en la operacion que el usuario colocó
    switch (signo){
        case "+":
            return sumar(num1,num2);
        case "-":
            return restar(num1, num2);
        case "*":
            return multiplicar(num1, num2);
        case "/":
            return dividir(num1,num2);

        //En este caso el default funciona como un else, si el usuario no coloco ningun signo, el programa va a retornar un error
        default:
            return "Error, operador no valido"
    }
}

//Aca vendra el input para el usuario

//Se coloca const ya que las variables no van a cambair

const entrada = prompt("Ingrese la operación y los números separados por espacios (ejemplo: 1 + 3):");

//Agarramos la opercion y los numeros de la entrada

//Aca el split va a separar todos los elementos de la entrada con un espacio, y va a colocar toods los elementos en un arreglo que se va a llamar elementos
const elementos = entrada.split(" ");

// Esta parte es para asignarle el signo a la variable operacion,ejemplo si es 2 + 3, va a asignar el + a operacion
const operacion = elementos[1];

//
const numero1 = parseFloat(elementos[0]);


const numero2 = parseFloat(elementos[2]);

// Mostramos el resultado en la consola
console.log(`Resultado: ${calcular(operacion, numero1, numero2)}`);