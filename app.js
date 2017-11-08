window.onload = function() {
  var board = document.querySelector(".board-js");
  board.addEventListener("click",function(event){
    event.target.style.backgroundColor ="red";
  });
  /*
  board.addEventListener("dblclick",function(event){
    event.target.style.backgroundColor ="yellow";
  });

  board.addEventListener("click",function(event){
    event.target.innerHTML = "X";
  });
  board.addEventListener("dblclick",function(event){
    event.target.innerHTML = "0";
      });
};
*/
board.addEventListener("click, addX");
};
var centinel = true;

function addX (event){
  if (centinel)
  event.target.textContent ="X"
  else {
    event.target.textContent ="0"

  }
  centinel =!centinel;
}
