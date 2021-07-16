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
