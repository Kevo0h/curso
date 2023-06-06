
const cuadrado1 = document.getElementById('cuadrado1');
cuadrado1.addEventListener('click', function () {
    this.style.backgroundColor = '#ff0302'
});


const cuadrado2 = document.getElementById('cuadrado2');
cuadrado2.addEventListener('click', function () {
    this.style.backgroundColor = '#ff0302'
});


const cuadrado3 = document.getElementById('cuadrado3');
cuadrado3.addEventListener('click', function () {
    this.style.backgroundColor = '#ff0302'
});


function countChars(obj) {
    document.getElementById("contador").innerHTML = '  ' + obj.value.length;
}







var alumnos = [

    {

        nombre: 'Juan Gomez',

        nota: 7

    }, {

        nombre: 'Pedro Rodriguez',

        nota: 4

    }, {

        nombre: 'Roxana García',

        nota: 8

    }, {

        nombre: 'Luciano Lopez',

        nota: 5

    }, {

        nombre: 'Fernanda Gimenez',

        nota: 6

    }, {

        nombre: 'Florencia Martinez',

        nota: 10

    }, {

        nombre: 'Raul Sanchez',

        nota: 7

    }, {

        nombre: 'Sandra Figueroa',

        nota: 8

    }

];


var aprobados = alumnos.filter(function (alumnos) {
    if (alumnos.nota >= 7) {

     document.getElementById('aprobados').innerHTML += '<li>'+alumnos.nombre + ' ' + alumnos.nota + '</li>\n';
    }
});
