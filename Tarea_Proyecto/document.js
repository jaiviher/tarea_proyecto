//esta alerta con el mensaje se mostrará cada vez que se recargue mi página web
alert("Estás entrando a mi sitio Web donde hablo un poco sobre mí, ¿deseas continuar?");


//con esta linea puse la fecha y la hora al final de mi página
document.write(new Date());


/*cada vez que le des un click al logo de Facebook, se mandará una alerta en la página
*
*con un mensaje que contendrá los datos de mi cuenta personal.
*
*/
let face = document.querySelector('.facebook');
face.addEventListener('click', mensajef);

function mensajef() {
    alert("Javi Hernan Dez")
}


/*cada vez que le des un click al logo de Whatsapp, se mandará una alerta en la página
*
*con un mensaje que contendrá mi número telefónico.
*
*/
let whats = document.querySelector('.whatsapp');
whats.addEventListener('click', mensajew);

function mensajew() {
    alert("5501020304")
}


/*cada vez que le des un click al logo de Instagram, se mandará una alerta en la página
*
*con un mensaje que contendrán los datos de mi cuenta personal.
*
*/
let insta = document.querySelector('.instagram');
insta.addEventListener('click', mensajei);

function mensajei() {
    alert("javier_aches")
}


/*cada vez que le des un click al logo de Instagram, se mandará una alerta en la página
*
*con un mensaje que contendrán los datos de mi correo electrónico.
*
*/
let gm = document.querySelector('.gmail');
gm.addEventListener('click', mensajeg);

function mensajeg() {
    alert("jaiviher@gmail.com")
}


/*cada vez que le des un click al botón que se encuentra en la division "Tiempo libre", 
*
*se mandará una alerta en la página con el mensaje que aparece en la función mensajeb1.
*
*/
let bot1 = document.querySelector('.boton1');
bot1.addEventListener('click', mensajeb1);

function mensajeb1() {
    alert("¿Estás seguro de que quieres leer más sobre mi tiempo libre?")
}


/*cada vez que le des un click al botón que se encuentra en la division "Educación", 
*
*se mandará una alerta en la página con el mensaje que aparece en la función mensajeb2.
*
*/
let bot2 = document.querySelector('.boton2');
bot2.addEventListener('click', mensajeb2);

function mensajeb2() {
    alert("¿Estás seguro de que quieres leer más sobre mi educación?")
}


/*cada vez que le des un click al botón enviar que se encuentra debajo del formulario, 
*
*se mandará una alerta en la página con el mensaje que aparece en la función mensajeb3.
*
*/
let bot3 = document.querySelector('.boton3');
bot3.addEventListener('click', mensajeb3);

function mensajeb3() {
    alert("¿Estás seguro de que quieres enviar tus datos?")
}



/*con cada una de las siguiente funciones, hacemos cambios de una imagen a otra cada vez
*
*que se le da un clic, tanto en las imagenes de las divisiones "Tiempo libre", "Educación",
*
*así como en la galeria de imágenes de la division "Vida Laboral".
*
*/
let camb = document.querySelector('.jdr');
camb.addEventListener('click', cambiai);

function cambiai() {
    let cm = document.querySelector('.jdr');
    cm.src = 'jovi.jpg';
}

let camb2 = document.querySelector('.uacm');
camb2.addEventListener('click', cambiaic);

function cambiaic() {
    let cm2 = document.querySelector('.uacm');
    cm2.src = 'cuautepec.jpg';
}

let camb3 = document.querySelector('.ing');
camb3.addEventListener('click', cambiaing);

function cambiaing() {
    let cm3 = document.querySelector('.ing');
    cm3.src = 'docencia.jpg';
}

let camb4 = document.querySelector('.doc');
camb4.addEventListener('click', cambiadoc);

function cambiadoc() {
    let cm4 = document.querySelector('.doc');
    cm4.src = 'ingeniero.jpg';
}

let camb5 = document.querySelector('.est');
camb5.addEventListener('click', cambiaest);

function cambiaest() {
    let cm5 = document.querySelector('.est');
    cm5.src = 'matematicas.jpg';
}

let camb6 = document.querySelector('.mat');
camb6.addEventListener('click', cambiamat);

function cambiamat() {
    let cm6 = document.querySelector('.mat');
    cm6.src = 'estudiante.jpg';
}

let camb7 = document.querySelector('.prog');
camb7.addEventListener('click', cambiaprog);

function cambiaprog() {
    let cm7 = document.querySelector('.prog');
    cm7.src = 'Tesis.png';
}

let camb8 = document.querySelector('.tes');
camb8.addEventListener('click', cambiates);

function cambiates() {
    let cm8 = document.querySelector('.tes');
    cm8.src = 'programacion.jpg';
}