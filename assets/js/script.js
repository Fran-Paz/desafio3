/*
<div id="ele1"> hello </div>

function pintar(){
  ele = document.getElementById("ele1")
  ele.style.backgroundColor = 'yellow'
}
ele = document.getElementById("ele1") ele.addEventListener("click", pintar)
*/


/*3.1 Modifica la función para que reciba el elemento clickeado de 
forma de no tener que seleccionarlo nuevamente dentro de la función (1 Punto). 
Para obtener el puntaje debes entregar el 3 pintar.html válido funcionando en 
conjunto con el código modificado. */

ele = document.getElementById("ele1")

function pintar() {
  ele.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", pintar);

/*
3.2. Modifica el código anterior para poder pasarle un color como 
argumento a la función pintar. El color debe ser verde (green) por defecto, 
al hacer clic en el párrafo se debe pasar amarillo como color. (1 Punto).
*/

ele = document.getElementById("ele1")

function pintar(color = "green") {
  ele.style.backgroundColor = color
}
ele.addEventListener("click", function () {
  pintar("yellow")
})