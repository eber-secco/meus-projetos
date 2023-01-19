var element = document.createElement('div');

element.classList = 'div-criada';

console.log(element);

var container = document.querySelector("#container");

// appendChild

container.appendChild(element);

// insertBefore

var element2 = document.createElement('div');

element2.classList = 'div-before';

var element3 = document.querySelector('#container .div-criada');

container.insertBefore(element2, element3);