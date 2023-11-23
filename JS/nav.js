
//esta porcion de codigo es para cuando se hace click en el boton que aparece en la barra (navbar) en un dispositivo
//movil aprarezca y desaparezca el menu
function navDeplegable() {
  if (document.getElementById("navbarCollapse").style.display == "none") {
    document.getElementById("navbarCollapse").style.display = "block";
  } else if (
    document.getElementById("navbarCollapse").style.display == "block"
  ) {
    document.getElementById("navbarCollapse").style.display = "none";
  }
}  
//encondemos el div
document.getElementById("navbarCollapse").style.display = "none";
//Agregamos un simple addEventListener para saber cuando dan click al boton
document.getElementById("collapse_but").addEventListener("click", navDeplegable);
