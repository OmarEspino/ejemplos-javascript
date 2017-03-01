
// var cajas = document.getElementsByTagName('div')
// var cajas = document.getElementsByClassName('caja')

var caja= document.getElementById('primera')
// cajas[0].textContent = 'Hola Mundo'
// cajas[1].innerHTML = '<b>Hola JavaScript</b>'
caja.textContent ='Primera caja'

// no se recomienda agregar elementos con el metodo write()
// document.write('<div class="caja"> Nuevo elemento </div>')

//5 pasos para agregar un nuevo elemento en el DOM
// paso 1. Crear el nuevo elemento con el metodo createElement()
var elementoNuevo = document.createElement('div')
// paso 2. Crear el contenido createTextNode()
var nodoContenido = document.createTextNode('Nuevo elemento')
// paso 3. añadir el contenido al elemento appendchild()
elementoNuevo.appendChild(nodoContenido)
// paso 4. agregar atributos al elemento setAttribute()
elementoNuevo.setAttribute('class','caja colorcoral')
// paso 5. agregar el elemento al documento appendchild()
// Agrega el nuevo elemento al final
// var contenedor = document.getElementById('contenedor')
// contenedor.appendChild(elementoNuevo)

// agrega el nuevo elemento al inicio
var contenedor = document.getElementById('contenedor')
var segunda = document.getElementById('segunda')
contenedor.insertBefore(elementoNuevo,segunda)

// eliminar la caja con el id= tercera

var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)