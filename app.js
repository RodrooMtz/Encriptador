

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function encriptar() {
   
}

function desencriptar() {
    
}


asignarTextoElemento('h1','Ingrese el texto aqui');
asignarTextoElemento('p',`Indica solo letras minusculas y sin acentos`);