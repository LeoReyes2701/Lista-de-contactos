// const operation = prompt('Coloca tu operacion');

// const getNumbers = (signo) => {
//   const [num1, num2] = operation.split(signo);
//   return {
//     num1: Number(num1),
//     num2: Number(num2)
//   }
// }

// let result = 0;

// // 1. Obtener el signo
// if (operation.includes('+')) {
//   const { num1, num2 } = getNumbers('+');
//   result = num1 + num2;
// } else if (operation.includes('-')) {
//   const { num1, num2 } = getNumbers('-');
//   result = num1 - num2;
// } else if (operation.includes('x')) {
//   const { num1, num2 } = getNumbers('x');
//   result = num1 * num2;
// } else if (operation.includes('/')) {
//   const { num1, num2 } = getNumbers('/');
//   result = num1 / num2;
// } else {
//   result = 'Error';
// }

// console.log(result);

// if (Number.isFinite(result)) {
//   alert(`El resultado es: ${result}`)
// } else {
//   alert('Hubo un error colocando alguno de los dos numeros');
// }




//--------------------------------------------------------------------------------------------



// let users = [user1, user2, user3];
// let intentosUser = 3;
// let intentosPassword = 3;
// let usuarioIngresado = '';
// let passwordIngresado = '';




//// let userExist = users.find(user => usuarioIngresado === user.username);

  // while (intentosUser > 0 && intentosPassword > 0 && userExist?.password !== passwordIngresado){
  //   if (userExist) {
  //       passwordIngresado = prompt('Ingrese su password');
  //       intentosPassword = intentosPassword - 1;
  //   } else {
  //     usuarioIngresado = prompt('Ingrese su usuario');
  //     userExist = users.find(user => usuarioIngresado === user.username);
  //     intentosUser = intentosUser - 1;
  //   }
  // }


const Num1 = 3
const Num2 = 5
let intentosNum1 = 2
let intentosNum2 = 4
let Num1Ingresado = '';
let Num2Ingresado = '';

while ( intentosNum2 > 0 &&  Num1Ingresado != Num1 && Num2Ingresado != Num2 ) {
  if (intentosNum1 > 0){
    Num1Ingresado = prompt('Ingrese el primer numero secreto: ');
    intentosNum1 = intentosNum1 - 1;
    
  }else {
    Num2Ingresado = prompt('Ingrese el segundo numero secreto: ');
    intentosNum2 = intentosNum2 - 1;
    
  }
}

if (intentosNum2 === 0 && Num2Ingresado != Num2){
  alert('Perdiste giganton')
}else{
  alert('Ganaste masiso')
}
