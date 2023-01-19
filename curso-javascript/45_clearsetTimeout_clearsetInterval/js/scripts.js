var x = 0;

var myTime = setTimeout (function() {

  console.log("O x vale 0");

}, 1500);

x = 5;

if (x > 0) {
  clearTimeout(myTime);
  console.log("O x passou de 0");
}

var myInterval = setInterval(function() {
  console.log("Imprimindo interval");
}, 500);

setTimeout (function() {
  
  console.log("Não precisamos mais imprimir!");
  clearInterval(myInterval);

}, 1500);