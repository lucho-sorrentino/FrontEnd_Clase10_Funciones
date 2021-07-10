// ********************* EJERCICIOS DE FUNCIONES *********************

//      function sumar(numero1, numero2) {
//          return numero1 + numero2;
//      }

        // alert(sumar(5, 2));


// ************ EJERCICIO 1 ************
// Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

// function edadPerro(edad, multiplicador) {
//     return edad * multiplicador;
// }
// const edadAnimal = edadPerro(43,7);
// console.log(edadAnimal);

// También asi:
// function edadPerro(edadHumana) {
//     return edadHumana * 7;
// }
// let edad = parseInt(prompt("Ingrese su edad para saber a cuánto equivale en años perros:"));
// alert("Su edad en años perros es: " + edadPerro(edad));


// ************ EJERCICIO 2 ************
// Crear una función que reciba un nombre y devuelva un saludo.

// function saludo(name) {
//     return "Hola " + name;
// }       

// let nombre = prompt("¿Cuál es su nombre?");
// let perro = prompt("Cual es el nombre de tu perro:?");
// console.log(saludo(nombre));
// console.log(saludo(perro));




// ************ EJERCICIO 3 ************
// Crear una función que salude.

// function saludo() {
//     return "Buenas tardes";
// }
// console.log(saludo());




// ************ EJERCICIO 4 ************
// Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).

// grados = parseFloat(prompt("Ingrese el valor de temperatura:"));
// sist = prompt("Ingrese la unidad de medida de temperatura, donde 'C' corresponde a Celsius y 'F' corresponde a Fahrenheit:")
// function convertidor(grados, sist) {
//     let resultado;
//      if (sist === "F") {
//          resultado = ((grados-32)/1.8);
//          return alert("La temperatura de " + grados + " grados Fahrenheit equivale a " + resultado + " grados centígrados");
//      } else if (sist === "C") {
//          resultado = ((grados*1.8)+32);
//          return alert("La temperatura de " + grados + " grados centígrados equivale a " + resultado + " grados Fahrenheit");
//      } else {
//          alert("La unidad métrica ingresada no es válida");
//      }
// }
// convertidor(grados, sist);
// convertidor(32, "C");
// convertidor(32, "F");


// Si recibo F => (grados - 32) / 1.8
// Si recibo C => (grados * 1.8) +32 
// ºF = (ºC * 1,8) + 32
// ºC = (ºF - 32) / 1,8


// ###### RESOLUCION CLASE ######
// let temperatura;
// let sistema;
// temperatura = parseInt(prompt("Ingrese la temperatura:"));
// sistema = prompt("ingrese el sistema al que desea convertir su temperatura; \n 1.Farenheit \n 2.Celsius");
// function Calcular (temp,sis) {
//     let resultado;
//     if (sis == 1) {
//         resultado = (temp - 32) * (5/9);        
//         console.log(resultado);
//         return alert("Su temperatura en grados Celsius es de: " + resultado + "º");
//     } else if (sistema == 2) {
//         resultado = (temp * 9/5) + 32;
//         console.log(resultado);
//         return alert("Su temperatura en grados Farenheit es de: " + resultado + "º");
//     }
// }
// Calcular(temperatura,sistema);



	

// ************ EJERCICIO 5 ************
// Realizar una función que reciba como parámetro un número. Si está entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor, aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
// 6 → 6! = 720
// 4 → |4| = 4
// -8 → |-8| = 8
// 50 → 100
// 11 → 22

// módulo de 1500 = 1500
// módulo de -1500 = 1500
// Para sacar el módulo de un número negativo hay que multiplicarlo por -1


// let numUser = parseFloat(prompt("Ingrese un número:"));
// if (numUser>4 && numUser<=10) {
//     factorial(numUser);
// } else if (numUser<5) {
//     modulo(numUser);
// }else if (numUser>10) {
//     doble(numUser);
// }


// function factorial(numero) {
//     let saver = 1;
//     for (i=1; i<=numero; i++) {
//         saver = saver * i;
//     }
//     return alert("El factorial de " + numero + " es: " + saver);
// }


// function modulo(numero) {
//     let resultadoNegativos;
//     if (numero < 0) {
//         resultadoNegativos = numero * (-1);
//         return alert("El módulo de " + numero + " es: " + resultadoNegativos);
//     } else {
//         return alert("El módulo de " + numero + " es: " + numero);
//     }
// }


// function doble(numero) {
//     let doble;
//     doble = numero * 2;
//     return alert("El doble de " + numero + " es: " + doble);
// }




// ************ EJERCICIO 6 ************
// Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
// (Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)

// const precioCerveza = 80;
// const precioJugo = 60;
// const precioAgua = 40;
// let precio = 0;
// let pago = 0;

// function verificadorEdad(edadCliente, choice) {
//     if (edadCliente < 18 && choice === 1) {
//         return alert("Usted es menor de edad. No puede comprar alcohol.");
//     } else {
//         pago = parseFloat(prompt("El precio de su bebida es de $" + precio + ". ¿Con cuánto va a abonar?"));
//         cobrador(pago, precio);    
//     }
// }

// function cobrador(dinero, costoItem) {
//     if (dinero < costoItem) {
//         alert("No le alcanza para pagar su bebida!!");
//     } else if (dinero === costoItem) {
//         alert("Gracias por su compra. Pagó con cambio justo, no recibe vuelto.");
//     } else {
//         alert("Gracias por su compra. Su vuelto es de $" + (dinero - costoItem) + ".");
//     }   
// }


// let edad = parseInt(prompt("Ingrese su edad:"));
// let bebida = parseInt(prompt("Ingrese el número de la bebida que desea. Disponemos de:" + "\n" +
//      "1. Cerveza" + "\n" + 
//      "2. Jugo" + "\n" +
//      "3. Agua"));
// switch(bebida) {
//     case 1:        
//         precio = precioCerveza;        
//         break;
//     case 2:        
//         precio = precioJugo;        
//         break;
//     case 3:        
//         precio = precioAgua;        
//         break;
//     default:
//         alert("El dato ingresado no es válido.");
//         break;
// }
// verificadorEdad(edad, bebida);







// ************ EJERCICIO 7 ************
// Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.

// let horas;
// let minutos;
// let segundos;
// let total;
// function conversor(hrs, min, seg){
//     hrs = ((hrs * 60) * 60);
//     min = min * 60;
//     seg = seg;    
//     total = hrs + min + seg;
//     return alert("El total de tiempo ingresado equivale a " + total + " segundos!");
// }

// horas = parseInt(prompt("Ingrese una cantidad de horas:"));
// minutos = parseInt(prompt("Ingrese una cantidad de minutos:"));
// segundos = parseInt(prompt("Ingrese una cantidad de segundos:"));
// conversor(horas, minutos, segundos);




// ************ EJERCICIO 8 ************
// Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 

// function listaNotasMaker() {
//     let lista = [];    
//     let confirma = true;
//     while (confirma) {
//         nota = parseInt(prompt("Ingrese la calificación que desee agregar a la lista:")); 
//         lista.push(nota);         
//         confirma = confirm("¿Desea agregar otra calificación?");
//     }
//     alert("La/s nota/s ingresada/s en la lista es/son: " + lista);             
//     return promedio(lista);
// }

// function promedio (array) {
//         let suma = 0;        
//         for (let i=0; i < array.length; i++) {
//         suma = suma + (array[i]);                
//         }
//         return alert("El promedio es: " + (suma/array.length));
// }

// listaNotasMaker();

        // ····· OTRA MANERA ·····
// function listaNotasMaker() {
//         let lista = [];    
//         let confirma = true;
//         while (confirma) {
//             nota = parseInt(prompt("Ingrese la calificación que desee agregar a la lista:")); 
//             lista.push(nota);         
//             confirma = confirm("¿Desea agregar otra calificación?");
//         }
//         alert("La/s nota/s ingresada/s en la lista es/son: " + lista);
//         return lista;
// }

// let notasAlumnos = listaNotasMaker();

// function promedio (array) {
//         let suma = 0;        
//         for (let i=0; i < array.length; i++) {
//         suma = suma + (array[i]);                
//         }
//         return alert("El promedio es: " + (suma/array.length));
// }
    
// promedio(notasAlumnos);




// ************ EJERCICIO 9 ************
// Escribir una función para cobrar en caja. Agregando funciones que: 
// * Si no es cliente A, agregue el IVA. 
// * Se solicite un monto de descuento a aplicar, y lo aplique.
// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.

// let montoIVA = 0;
// function condIva () {
//         let montoCobrar = parseFloat(prompt("Ingrese el monto a cobrar:"));        
//         let categoria = parseInt(prompt("Para factura 'A' ingrese 1. Para factura 'B' ingrese 2:"));
//         if (categoria === 1) {
//                 montoIVA = montoCobrar * 1.21;                
//         } else if (categoria === 2) {
//                 montoIVA = montoCobrar;
//         } else {
//                 alert("La opción ingresada no es válida!");
//         }
//         alert("El monto de la factura es de $" + montoIVA);
//         return descuento(montoIVA);
// }

// let montoConDescuento = 0;
// function descuento () {        
//         let valorDescuento = parseFloat(prompt("Ingrese el valor del porcentaje de descuento a aplicar"));
//         if (valorDescuento === 0) {
//                 montoConDescuento = montoIVA;
//                 alert("El monto de la factura con descuento es de $" + montoConDescuento);
//         } else {
//                 montoConDescuento = montoIVA -  (montoIVA * valorDescuento / 100);
//                 alert("El monto de la factura con descuento es de $" + montoConDescuento);
//         }
//         return cobrador(montoConDescuento);
// }

// let pago = 0;
// function cobrador () {
//         let pago = parseFloat(prompt("¿Con cuánto va a pagar?"));
//         if (pago > montoConDescuento) {
//               return alert("Gracias por su compra. Su vuelto es de $" + (pago - montoConDescuento));
//         } else if (pago === montoConDescuento) {
//               return alert("Gracias por pagar con cambio justo!");
//         } else if (pago < montoConDescuento){
//              return alert("Sus $" + pago + " , no le alcanzan para pagar su compra de $" + montoConDescuento + "!");
//         }
        
// }

// condIva();



// // ************ EJERCICIO 10 ************
// // Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
// // Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
// // Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto). 

// const dolar = 99;
// const euro = 115;
// const real = 19;

// function conversor () {
//         let pesos;
//         let moneda = parseInt(prompt("¿Qué moneda desea comprar? \n1. Dólares \n2. Euros \n3. Reales"));
//         let monto = parseInt(prompt("Ingrese el monto de moneda extranjera que desea comprar:"));
//         if (moneda === 1) {
//                 pesos = monto * dolar;                
//         } else if (moneda === 2) {
//                 pesos = monto * euro;                
//         } else if (moneda === 3) {
//                 pesos = monto * real;
//         }
//         return pesos;
// }

// function llamarConversor () {
//         let totalPesos;
//         let parcialPesos1 = conversor();        
//         console.log("El total de pesos de la primera operación es de: " + parcialPesos1);
//         totalPesos = parcialPesos1        
//         let parcialPesos2 = conversor();
//         console.log("El total de pesos de la segunda operación es de: " + parcialPesos2);
//         totalPesos = totalPesos + parcialPesos2;
//         return alert("El total de pesos requeridos para ambas operaciones es de: " + totalPesos);        
// }

// llamarConversor ();





// ************ EJERCICIO 11 ************
// Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número una función que los triplique. Guardar todos los resultados en un array.
// Ejemplo: Paso por parámetro “4” a la función.
// Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.

// let iteraciones = parseInt(prompt("Ingrese la cantidad de números que desea triplicar:"));
// let contenedor1 = [];
// let contenedor2 = [];

// function multiplier (cantIteraciones) {        
//         for (let i = 0; i < cantIteraciones; i++) {
//         let numero = parseInt(prompt("Ingrese el número que desea triplicar:"));
//         contenedor1.push(numero);
//         console.log("Los números ingresados son: " + contenedor1);
//         contenedor2.push(numero * 3);
//         }
//         return alert("El resultado es: " + contenedor2);
// }

// multiplier(iteraciones);







// ************ EJERCICIO 12 ************
// Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media.

// function tempMedia () {
//         let sistema = prompt("Ingrese la unidad de medida de temperatura: 'C' o 'F'");
//         let sistMayuscula = sistema.toUpperCase()
//         let maxima = parseInt(prompt("Ingrese la temperatura máxima del día:"));
//         let minima = parseInt(prompt("Ingrese la temperatura mínima del día:"));
//         return alert("La temperatura media de día es " + ((maxima + minima) / 2 + sistMayuscula));
// }

// tempMedia ();







// ******************************* BONUS!! *******************************

// ************ EJERCICIO 13 ************
// Vamos a realizar una cotizadora de seguros! 
// * Como primer paso, vamos a solicitar al cliente los siguientes datos: Año de nacimiento, Nombre, sueldo bruto. 
// * En base a su año de nacimiento, vamos a calcular su edad. 
// * Luego, en base a su edad, seleccionar el plan que le corresponda:
// Hasta 18 años: Plan Niños ($4000)
// Hasta 30 años: Plan Joven. ($5200)
// Hasta 60 años: Plan Adulto ($6400)
// 60 en adelante: Plan Adultos Mayores. ($9700)
// * Luego en base al plan, mostrar el monto a pagar . 
// * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar el 20% del sueldo bruto!
// * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
// * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). El monto total del grupo familiar no debe superar el 30% del sueldo bruto.








// ************ EJERCICIO 14 ************
// Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, dolar, real, yen). 
