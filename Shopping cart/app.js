//Second cap of the course: LEER Y MODIFICAR HTML
/*
const parrafo = document.querySelector('#parrafo')
parrafo.textContent = 'texto desde JS'
parrafo.classList.add('clase-prueba')
*/

//Third cap of the course: CREATE ELEMENT

//las dos opciones que se explican acontinuacion no se recomiendan (createElement ó innerHTML
//debido al 'reflow', es decir, al crear un nuevo elemento y añadirlo al html desde JS,
//el browser tendrá que recargar toooodo el contenido que se agregó al HTML desde JS
/*
const lista = document.getElementById("lista");
//console.log(lista);

const arrayElements = ['primero', 'segundo', 'tercero']

arrayElements.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
})

arrayElements.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`
})
*/

//FRAGMENT

//Esto es para evitar el reflow
/*
const fragment = document.createDocumentFragment()
//const fragment = new DocumentFragment() //====> Hace lo mismo que createDocumentFragment()

//crea una lista en orden
arrayElements.forEach(item => {
    const li  = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})

//crea una lista en reversa
arrayElements.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item

    const childNode = fragment.firstChild
    fragment.insertBefore(li, childNode)
})

lista.appendChild(fragment)
*/

//TEMPLATE

//Se crea el siguiente template en el archivo HTML y ahí si se modifica acá
/*
<template id="template-li">
    <li class="list">
        <b>Nombre: </b><span class="text-danger">${item}</span>
    </li>
</template>
*/
/*
const lista = document.getElementById("lista");
const arrayElements = ["primero", "segundo", "tercero"];

const template = document.querySelector("#template-li").content;
const fragment = document.createDocumentFragment()

arrayElements.forEach( item => {
    template.querySelector('span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)
*/


// ADD EVENT LISTENER

/*
//const btnAumentar = document.querySelector(".btn-info");
//const btnDisminuir = document.querySelector(".btn-danger");

const container = document.querySelector(".container");
const span = document.getElementById("span");
let contador = 0;


btnAumentar.addEventListener("click", () => {
  contador++;
  span.textContent = contador;
});

btnDisminuir.addEventListener('click', () => {
    contador--;
    span.textContent = contador;
})


container.addEventListener("click", (e) => {
  //console.log(e.target.classList.contains("btn-info"));

  if (e.target.classList.contains("btn-info")) {
    contador++;
    span.textContent = contador;
  }

  if (e.target.classList.contains("btn-danger")) {
    contador--;
    span.textContent = contador;
  }
  e.stopPropagation() //Ésto para que se limite sólo al elemento en cuestion y nó ejecute funciones del padre
});
*/
