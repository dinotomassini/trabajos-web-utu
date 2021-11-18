/**
 <form action="#" method="POST" id="frases">
<!-- Esta noche -->
<span id="span-frase1">Esta noche</span>
<input type="text" name="frase1" id="frase1" autofocus/>

<!-- Estamos -->
<span id="span-frase2">Estamos</span>
<input type="text" name="frase2" id="frase2" />

<!-- Hasta que salga el sol -->
<span id="span-frase3">Hasta que salga el sol</span>
<input type="text" name="frase3" id="frase3" />

<button id="btnForm">Probar Suerte</button>
</form>* 
 */

const frase1 = "esta noche".toUpperCase();
const frase2 = "estamos".toUpperCase();
const frase3 = "hasta que salga el sol".toUpperCase();

const btnForm = document.querySelector('#btnForm');

btnForm.addEventListener('click', (e) => {
  const inputFrase1 = document.querySelector('#frase1');
  const inputFrase2 = document.querySelector('#frase2');
  const inputFrase3 = document.querySelector('#frase3');
  
  if (inputFrase1.value === frase1) {
    // mostrar algo de que esta bien
  } else {
    //mostrar el span
  }

  if (inputFrase2.value === frase2) {
    // mostrar algo de que esta bien
  } else {
    //mostrar el span
  }

  if (inputFrase3.value === frase3) {
  // mostrar algo de que esta bien
  } else {
    //mostrar el span
  }

  if (inputFrase1.value === frase1 && inputFrase2.value === frase2 && inputFrase3.value === frase3) {
  // mostrar un modal de exito    
  }

});

function exito() {
  const modalText = "";
  const modal = document.createElement('div.modal');
  
}


const spanFrase1 = document.querySelector('#span-frase1');
const spanFrase2 = document.querySelector('#span-frase2');
const spanFrase3 = document.querySelector('#span-frase3');
