import { navDesplegable } from '../JS/nav.js';
import '../CSS/catalogo.css'

//encondemos el div del nav
document.getElementById("navbarCollapse").style.display = "none";
//Agregamos un simple addEventListener para saber cuando dan click al boton
document.getElementById("collapse_but").addEventListener("click", navDesplegable);