//los comentarios son explicaciones y ejemplos 

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




// Operadores Logicos 

let valor = true

let valor2 = true


let resultado = valor && valor2;

let resultado2 = valor || valor2;

let resultado3 = valor =! valor2;

document.write(true && false)