//los comentarios son explicaciones y ejemplos

// Capitulo 1
// 1) variables

//Como poner una variable Ejemplo las variables pueden cambiar su valor en este ejemplo en la variable guardamos papel

//var recipiente = "papel"

//alert(recipiente)

// tipos datos

//string = "cadena de texto"
//number = 20 no se pone entre parentesis ni no es un string
//boleano = true false

// declaracion de variables
//var,let,const

//const el valor de la variable no cambia

//ejemolo

//const numero = "pepe"
//let se puede modificar tiene menos alcance que var
// var se puede modificar
//undefinded que en el programa exeste pero no tieme un valor tendremos que darle un valor para que funcione ejemplo

//ejemplo 1
//let numero
//numero = 30

//ejemplo 2
//de  esta forma lo acortamos

//let numero = 30
//alert(numero)

//tambien se puede hacer lo mismo con var podemos ponerlo junto o separado

//const se inicializa cuando se declara

//const edad = 26

//podemos tener varias variables en una misma linea

//let nombre1 = "pepe" , nombre2 = "luis"

//tambien se puede hacer asi

//let numero1 = 5;

//let numero2 = 19;

//valor null es una variable con una valor vacio

//let vacio = null;

// valor nan cuando por ejemplo multiplicamos  un string mas un numero con la suma no pasa porque concatena

//prompt es una funcion debuelve el valor que escribimos el usuario nos proporciona el nombre y se hace dimamico

//const nombre = prompt("escribe tu nombre")

//alert(nombre)

// en el ejemplo de arriba el nombre que intruduzcamos se guardara en la variablle nombre
// otro ejemplo

//const nombre = prompt("escribe tu mierda de nombre")
//alert("hola " + nombre)

//5) adicion y asignacion

// 5.1 operadores de asignacion
//numero = 20;

// += añadimos al numero 20 15
//numero += 15

// document.write Escribe en todo el documento
//document.write(numero)

// tambien se puede hacer con otros operadores

// %=  resto de una division se redondea hacia el numero mas cercano si tenemos 50 :6 el resto es 2

// extonente **

// asignacion =

//mirar de nuevo operadores aritmeticos

//concatenacion ejemplo

//let nombre = "cesar"

//let apellidos = " Garcia muñoz"

//let comollamas = nombre + apellidos

//document.write(comollamas)

//ejemplo de concatanacion con backtick es un poco mas sencillo podemos dar saltos de linea podemos tambien escribir codigo html

//nombre = "pepe";
//frase = `soy ${nombre} y estoy caminando`;
//document.write(frase);

// ESTO ESTA MAL  "hola" "soy tu amigo recuerdas juan"  si queremos coger todo el texto podemos empezar con comillas simples

// ESTO ESTA BIEN 'hola" "soy tu amigo recuerdas" juan' tambien sirven con backtiks

// 8) operadores de comparacion y logicos

//operadores de comparacion

//debuelven true o false  si se cumple la condicion sera verdadero si no sera falsa

//Ejemplo

//let numero1 = 23;

//let numero2 = 13;

//document.write(numero1 <= numero2)

//operadores mas importantes

// == igual a  no diferencia entre tipos de tados solo pregunta si es igual

// != distinto a

// === que sean extrictamente lo mismo tanto el valor como el tipo de dato

// !== si no es igual a

// !===  que no sean extrictamente lo mismo tanto el valor como el tipo de dato

// > mayor a

// >= mayor o igual

// < menor a

// <= menor o igual

// Operadores Logicos volver a mirar

//Ejemplo

//let valor = true

//let valor2 = true

//let resultado = valor && valor2;

//let resultado2 = valor || valor2;

//let resultado3 = valor =! valor2;

//document.write(false && false)

//num1 = 12
//num2 = 24

//afirmacion1 = num1 > num2
//afirmacion2 = num1 == num2

//document.write(!true)

//&& si las 2 condiciones se cumplen sera true  si una es falsa debuelve falso

// || si una de las condiciones es falsa sera falsa y si son las 2 verdaderas sera verdadoro

// ! debuelve lo contrario si una afirmacion es verdadera si ponemos este signo sera falsa

//9) camel case  la primera palabra va en minuscula y si es una palabra nueva comenzara en mayuscula siempre escribiremos asi

// Ejemplo variableDiaMes

//10) condicionales minuto 1:37:04

//Ejemplo if

//nombre = "cesar"
//apellido = "garcia"

//if (nombre != "cesar") {
//alert("ddd")
//}
//else if (apellido != "garcia"){
//alert("mi apellido es " + apellido)
//}
//else{
//alert("me hago la comida")
//}

// partes del bucle

// paso 1

// nombre = cesar inicializacion de las variables
// apellido garcia  inicializacion de las variables

//paso2

// comparacion comenzaremos siempre con (if si la condicion se cumple) en nustro caso nombre distinto de cesar  ejecuta alert("ddd") lo que ejecutara en el cuble esta entre llaves {}

// paso 3

//(else if si no se cumple) entonces ejecutara apellido es igual a garcia? (ordenador si es igual entonces lo mostraremos por pantalla con  alert("mi apellido es " + apellido))

// si no se cumple ninguna de las condiciones anteriores ejecutara el else la diferencia entre estos 2 es que else if podemos poner los que queramos y else solo uno

// practicas del primer capitulo

// Crear soluciones

//dineroSergio = prompt("cuanto dinero tienes Sergio?");

//dineroSergio = parseInt(dineroSergio)

//if (dineroSergio >= 0.6 && dineroSergio <1){
//alert("comprate el helado de agua");
//alert( "te sobran " + (dineroSergio - 0.6));
//}
//else if (dineroSergio >=1 && dineroSergio < 1.6){
//alert("comprate el helado crema");
//alert( "te sobran " + (dineroSergio - 1));
//}

//else if (dineroSergio >= 1.6 && dineroSergio < 1.7){
//alert("comprate el heledo heladix");
//alert( "te sobran " + (dineroSergio - 1.6));
//}

//else if (dineroSergio >= 1.7 && dineroSergio < 1.8){
//alert("comprate el helado heladovich");
//alert( "te sobran " + (dineroSergio - 1.7));
//}

//else if (dineroSergio >= 1.8 && dineroSergio < 2.9){
//alert("comprete el helado negro");
//alert( "te sobran " + (dineroSergio - 1.8));
//}
//else if (dineroSergio >= 2.9){
//alert("helado frio");
//alert( "te sobran " + (dineroSergio - 2.9));
//}

//else{
//alert("comsigue mas dinero probe asqueroso");
//}

// transformado a la vida real si el dinero de sergo es mayor que 0.6 podra comprarse un helado si es mejor que 1 no podra comprarse el siguemte por ultimo (si no tiene dinero else) no se podra comprar nada

//Ejemplo 2

//miEdadBeber = prompt("Intruduce tu edad")

//if (miEdadBeber >= 18){
//document.write("Puedes beber pero con moderacion")
//}

//else if ( 18 - miEdadBeber){
//let  falta = (18 - miEdadBeber )
// document.write("te falta " + falta + " para poder beber" )
//}

// Segundo capitulo

// 11) Arrays

// Que es

// Mientras que la variable solo puede almacenar un dato el array puede almacenar multiples tipos de  datos los array empiezan desde el 0

//como se crea un array

//let frutas = ["pera", "manzana", "fresa", "naranja"];

// si queremos mostrar fresa pondremos 2

//Mostrar elementos array

//document.write(frutas[2]);

// 12) array asociativos revisar

//podemos asociar array por sus nombres de variable en vez de sus posiciones

//let pc = {
//nombre: "cesarPC",
//ram: "16GB",
//espacio: "512",
//procesador: "I7",
//};

//document.write(pc["nombre"]);

//13) bucles e iteracion

// mientras que if solo pregunta una vez la condicion while la pregunta mas 1 vez si por ejemplo en while se cumple volvemod a preguntar
//si se cumple de nuevo  preguntaremos de nuevo mientras que if solo pregunta una vez

//ejemplo

//let numero = 0;

//while (numero < 6) {
//numero++;
//document.write(numero + "<br>");
//}

// En este ejemplo definimos 0 en la variable numero que hace while pregunta oye 0 es nemor que 6
//como no es menor suma 1 y lo muestra por pantalla le vuelve a preguntar lo mismo con el 1 asi hasta llegar a 5
//el ++ le sumaria 1 porque va despues de la condicion por lo cual al mostrarlo por pantalla el ultimo numero sera 6

// Do while a diferencia del while que primero pregunta y luego se ejecuta dicha el bucle  el Do while hace lo contrario
//primero ejecuta el bucle y luego pregunta  siempre se empieza con la sentencia DO y luego while

//let numero = 0;
//do {
//document.write(numero + "<br>");
//numero++;
//} while (numero > 6);

//Break sirve para detener un bucle si tenemos 100 numeros por ejemplo podemos hacer que se muestren solo los
//primeros 10 esto es muy bueno para terminar bucles

// Ejemplo

//let numero = 0;

//while (numero < 100) {
//numero++;
//document.write(numero + "<br>");

//if (numero == 10) {
//break;
//}
//}

//for

// for se usa para cuando nosotros sabemos cuando acaba el bucle este bucle no es infinito como while que si en el ejemplo
// de while anterior ponemos el numero++ no se cumpliria lo condicion y estaria todo el rato ejecutandose

// como funciona composicion

// declaramos la variable

// inicializamos variable

// iteramos ( iterar hacer lo mismo varias veces )

for (let i = 0; i < 20; i++) {
	if (i == 11) {
		continue;
	}
	document.write(i + "<br>");
}

// inicializamos la variable en 0 luego ponemos la condicion i<7 si es asi se sumara 1 luego se mostrara por pantalla (i + "<br>");
// con un salto de linea

// podemos usar continue para saltar una iteracion que queramos en este ejemplo solo saltaria el numero 11
