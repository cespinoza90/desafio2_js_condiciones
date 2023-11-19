
/*REQUERIMIENTO No 1*/

function toggleBorder(img) {
    if (img.classList.contains('clicked')) {
      img.classList.remove('clicked');
    } else {
      img.classList.add('clicked');
    }
};

/*REQUERIMIENTO No 2*/

const sticker = document.querySelector(".bcomp")

sticker.addEventListener("click", function () {
const num1 = document.querySelector("#sticker1").value;
const num2 = document.querySelector("#sticker2").value;
const num3 = document.querySelector("#sticker3").value;

const total = +num1 + +num2 + +num3; 

if(total <= 10){
  document.querySelector("#resultadocompra").innerHTML = "llevas " + total;
}else{
  document.querySelector("#resultadocompra").innerHTML = "llevas demasiados Stickers"
}

});

/*REQUERIMIENTO No 3*/

function verificarPassword() {
  var password1 = document.getElementById('primero').value;
  var password2 = document.getElementById('segundo').value;
  var password3 = document.getElementById('tercero').value;

  if (password1 === '9' && password2 === '1' && password3 === '1') {
    mostrarResultado("Password 1 correcto");
  } else if (password1 === '7' && password2 === '1' && password3 === '4') {
    mostrarResultado("Password 2 correcto");
  } else {
    mostrarResultado("Password incorrecto");
  }
}

function mostrarResultado(mensaje) {
  var resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = mensaje;
}