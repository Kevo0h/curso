var valor = prompt('Ingrese la distancia a recorrer:');
const recorrido = ['pie','bicicleta','colectivo','auto','avion'];



if (valor >= 100000 ){
var asd = recorrido[4];
}
else if (valor >= 1000 & valor < 10000 ){
    var asd = (recorrido[1]);
}
else if (valor >= 10000  & valor < 30000  ){
    var asd = recorrido[2];
}
else if (valor >= 30000   & valor < 100000   ){
   var asd =recorrido[3];
}
else{
    var asd = recorrido[0];
}

document.write('<h1>EJERCICIO 1 - DETERMINAR QUE MEDIO UTILIZAR SEGUN LA DISTANCIA A RECORRER</h1> <BR> <h3> Segun la distancia a recorrer  ('+valor+'metros), <br> Le conviene realizar el viaje a: '+asd+'</h3>');


alert('Ahora vamos a crear un array con numeros y devolver el mayor');
var valor1 = prompt('Ingrese el 1er valor:');
var valor2 = prompt('Ingrese el 2do valor:');
var valor3 = prompt('Ingrese el 3er valor:');
var valor4 = prompt('Ingrese el 4to valor:');

document.write('<br><br><h1>EJERICICIO DOS - INGRESAR UN ARRAY DE NUMEROS Y DEVOLVER EL MAYOR</H1> <BR> <H3>Los valores ingresados fueron:'+valor1+'  '+valor2+'  '+valor3+'    y '+valor4+'</H3>');

array1 = [valor1,valor2,valor3,valor4];
var NumMayor= (Math.max(...array1));
document.write('<h3>Cuyo numero mayor es el: '+NumMayor+'</h3>'); 