/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./JS/nav.js

//esta porcion de codigo es para cuando se hace click en el boton que aparece en la barra (navbar) en un dispositivo
//movil aprarezca y desaparezca el menu
 function navDesplegable()  {
  if (document.getElementById("navbarCollapse").style.display == "none") {
    document.getElementById("navbarCollapse").style.display = "block";
  } else if (
    document.getElementById("navbarCollapse").style.display == "block"
  ) {
    document.getElementById("navbarCollapse").style.display = "none";
  }
}  


;// CONCATENATED MODULE: ./JS/Carusel.js



'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

punto.forEach( ( cadaPunto , i )=> {

    punto[i].addEventListener('click',()=>{

        let posicion  = i
        let operacion = posicion * -25
        grande.style.transform = `translateX(${ operacion }%)`
        punto.forEach( ( cadaPunto , i )=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')

    })
})



//encondemos el div del nav
document.getElementById("navbarCollapse").style.display = "none";
//Agregamos un simple addEventListener para saber cuando dan click al boton
document.getElementById("collapse_but").addEventListener("click", navDesplegable);
/******/ })()
;