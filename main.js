//ejercicio 1
let numero = 2;
for (let i = 0; i <=20;  i++){
    let resultado = numero *i;
    console.log(numero + "x" + i + "=" + resultado);
}


//ejercicio 2
let numerosIngresados = []
let numeroIngresado = parseFloat(prompt("ingrese un numero. Cuando ingrese un 0 finaliza"));
while (numeroIngresado) {
numerosIngresados.push(numeroIngresado)
numeroIngresado = parseFloat(prompt("ingrese un numero. Cuando ingrese un 0 finaliza"));
}
console.log(numerosIngresados);

//ejercicio 3

let numeroIngresado = Number(prompt("Ingrese su numero para adivinar"))
let contador = 1
if (numeroIngresado == null || numeroIngresado == " ") {
    alert("No ingresaste un numero")
} else {
    while (numeroIngresado != ultimoNumero && numeroIngresado >= 1 && numeroIngresado <= 100) {
        contador++
        if (numeroIngresado > ultimoNumero) {
            alert("Es mas grande")
        } else {
            alert("Es mas chico")
        }
        numeroIngresado = Number(prompt("Ingrese un numero para adivinar"))
    }
    alert(Ganaste en ${contador} intentos)
}
console.log(Lo adivinaste en ${contador} intentos)

//ejercicio 4
//Realizar un programa que reciba un número y muestre de alguna forma todos sus divisores
let numeroej4 = 50;
for (let i = 1; i <=numeroej4;  i++) {
    if (numeroej4 % i === 0 ) {
        console.log("el divisor de este numero es", i);
}
}


//ejercicio 5
let arraydeportes elegir otro = [""]
for (let i = 0; i < array(aca va nombre de deportes o otro).length; i++) {
    console.log(arraydeportes[i]);
}

// ejercicio 6
const numeros = [ 6, 16, 24, 12, 5, 2, 8, 9, 10, 20 ]
for (const numero of numeros){
console.log(numero * 2);
}

//ejercicio 7
let mama = {
    nombre:"sara",
    edad: 49,
    altura:162,
    colorPelo:"negro",
}

let hermana ={
    nombre:"milena",
    edad:13,
    altura:160,
    colorPelo: "marron",
}
let tia ={
    nombre: "liliana",
    edad: 42,
    altura:162,
    colorPelo: "negro",
}
let prima ={
    nombre: "brisa",
    edad: 20,
    altura: 165,
    colorPelo: "negro",
}
let abuela ={
    nombre: "teresa",
    edad: 80,
    altura: 160,
    colorPelo: "blanco",
};

let familia = [mama, hermana, tia, prima, abuela]
for(let i = 0; i < familia.length; i++ ){
    console.log(`Bienvenido ${familia[i].nombre}, tenes ${familia[i].edad} años, tu altura es ${familia[i].altura} y tu color de pelo es ${familia[i].colorPelo}`);
}

//ejercicio 9
//Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
// los números impares. 
let arrayNumeross = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
for (let i = 0; i < arrayNumeross.length; i++) {
    if(arrayNumeross[i] % 2 !== 0)
    console.log("el numero es impar" + arrayNumeross[i]);
}

// ejercicio 10
// Realizar un programa que permita la entrada de números y calcule la suma de los
// números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
// usuario ingresa un 0. 
let arrayNumero = [];
let pares = 0;
let impares = 0;

let numeroIngresado = parseFloat(prompt("ingrese un numero. Cuando ingrese un 0 finaliza"));
while (numeroIngresado) {
arrayNumero.push(numeroIngresado)
numeroIngresado = parseFloat(prompt("ingrese un numero. Cuando ingrese un 0 finaliza"));
}
console.log(arrayNumero);
for (let i = 0; i < arrayNumero.length; i++) {
        if(arrayNumero[i] % 2 !== 0){
            impares += arrayNumero[i];
        }else{
        pares +=arrayNumero[i]
        }     
    }
console.log(`la suma de impares es: ${impares}`);
console.log(`la suma de impares es: ${pares}`);