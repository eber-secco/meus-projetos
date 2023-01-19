var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function() {

  console.log("Clicou");

  console.log(this);

  this.style.color = "red";

});

var title = document.querySelector("#title");

title.addEventListener("click", function() {

  console.log("Teste");

})
