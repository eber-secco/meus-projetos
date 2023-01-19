// criar a tag firstly
var novoParagrafo = document.createElement('p');

var texto = document.createTextNode('Este é o conteúdo do parágrafo');

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

// chamei o body e eu posso chamar um element dentro dele
var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById('container');

var elemento = document.createElement('span');

elemento.appendChild(document.createTextNode('Texto do span'));

container.appendChild(elemento);

console.log(container);