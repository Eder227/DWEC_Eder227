//1
let precioBase = parseFloat(prompt("introduce el precio del producto:"));
let iva = parseFloat(prompt("introduce el IVA (%):"));

let precioTotal = precioBase + (precioBase * iva / 100);

alert("El precio total es: " + precioTotal.toFixed(2) + " €");

//2
let lado = parseFloat(prompt("introduce el lado del cuadrado:"));
let area = lado * lado;
let perimetro = 4 * lado;
alert("area: " + area + " | perimetro: " + perimetro);

//3
let num1 = parseInt(prompt("introduce el primer numero:"));
let num2 = parseInt(prompt("introduce el segundo numero:"));
if (num2 === 0) {
  alert("no se puede dividir entre cero");
} else {
  alert("cociente: " + (num1 / num2));
}

//4
let a = parseInt(prompt("introduce el primer numero:"));
let b = parseInt(prompt("introduce el segundo numero:"));
let diferencia = Math.abs(a - b);
alert("diferencia: " + diferencia);

//5
let cantidad = parseInt(prompt("itroduce la cantidad de articulo:"));
let precioUnitario = parseFloat(prompt("introduce precio unitario:"));
let total = cantidad * precioUnitario;
if (cantidad > 10 && precioUnitario > 40) {
  total = total * 0.85;
}
alert("total a pagar: " + total.toFixed(2) + " €");

//6
let numero;
do {
  numero = parseInt(prompt("introduce un numero entre 1 y 5:"));
} while (numero < 1 || numero > 5);
alert("numero correcto: " + numero);

//7
let n = parseInt(prompt("Introduce un número:"));
let esPrimo = n > 1;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    esPrimo = false;
    break;
  }
}
alert(esPrimo ? "es primo" : "no primo");

//8
let max = null;
let min = null;
while (true) {
  let valor = parseInt(prompt("introduce un numero, 0 para salir:"));
  if (valor === 0) break;
  if (max === null || valor > max) max = valor;
  if (min === null || valor < min) min = valor;
}
alert("max: " + max + " | min: " + min);

//9
let dias = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
let indice = parseInt(prompt("introduce un numero entre 0 y 6:"));
alert("dia: " + dias[indice]);

//10 
function sumaLista(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}
alert(sumaLista([1, 2, 3, 4, 5]));

//11
function esVocal(letra) {
  let vocales = ["a","e","i","o","u"];
  return vocales.includes(letra.toLowerCase());
}
alert(esVocal(prompt("introduce una letra:")));

//12
function unirConGuion(arr) {
  let resultado = "";
  for (let i = 0; i < arr.length; i++) {
    resultado += arr[i];
    if (i < arr.length - 1) resultado += "-";
  }
  return resultado;
}
alert(unirConGuion(["hola", "mundo", "js"]));

//13
let productos = [
  ["monitor", 200],
  ["teclado", 50],
  ["raton", 25]
];
function precioProducto(nombre) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i][0] === nombre) return productos[i][1];
  }
  return null;
}
alert(precioProducto(prompt("introduce producto (monitor, teclado, raton):")));