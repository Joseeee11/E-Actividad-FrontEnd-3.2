import '../CSS/StylesCarusel.css';
import { navDesplegable } from '../JS/nav.js';

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