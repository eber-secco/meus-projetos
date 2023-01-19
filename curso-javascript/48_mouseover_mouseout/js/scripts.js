// evento mouseover

var title = document.querySelector("#title");

title.addEventListener("mouseover", function() {

  this.style.backgroundColor = "Yellow";

});

// evento mouseout

title.addEventListener("mouseout", function() {

  title.style.backgroundColor = "blue";

});

// afetar outro elemento com mouseover

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.remove("hide");
});

subtitle.addEventListener("mouseout", function() {

  var legenda = document.querySelector("#legenda");

  legenda.classList.add("hide");
});