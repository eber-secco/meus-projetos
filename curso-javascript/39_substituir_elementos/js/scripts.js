// criar elemento

var element = document.createElement("h3");

element.classList = 'testando-classe';

var text = document.createTextNode('Este é o texto do h3');

element.appendChild(text);

console.log(element);

// selecionar o elemento que quero trocar

var title = document.querySelector("#title");

// selecionar o pai do elemento (body no caso)

var body = document.querySelector("body");

var pai = title.parentNode;

// trocar os elementos

pai.replaceChild(element, title);
