/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// envió de formulario con x-www-form-urlencoded 

document.getElementById('button_submit').addEventListener('click', function (formulario) {
    formulario.preventDefault();

    var form = document.querySelector('.form')
    var data = new URLSearchParams(new FormData(form));

    fetch('http://localhost:3000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.confirmacion == true) {
  
          console.log('se encontro');
          window.location.href = './inicioSesión.html';
        } else {
          // Muestra un mensaje de error
          if (document.getElementById('ErrorBuscar')) {

            let errorMensaje = document.getElementById('ErrorBuscar')
            errorMensaje.textContent = response.error;

          }else{
              var errorDiv = document.createElement('div');
              errorDiv.id = "ErrorBuscar"
              errorDiv.textContent = response.error;
              form.insertBefore(errorDiv, form.firstChild);
          }
  
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
})

/******/ })()
;