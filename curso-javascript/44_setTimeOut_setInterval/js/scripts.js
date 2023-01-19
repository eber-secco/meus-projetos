// setTimeout

console.log("antes do setTimeout");

setTimeout (function() {

  console.log("testando o setTimeout");

}, 2000);

console.log("depois do setTimeout");

// setInterval

setInterval(() => {
  
  console.log("testando o setInterval");

}, 1000);
