// import '../CSS/InicioSesiónMain.css';
// envió de formulario con x-www-form-urlencoded 
document.getElementById('button_submit').addEventListener('click', function(e) {
  alert("toca")
    e.preventDefault();
  
    var form = document.querySelector('.form');
    var data = new URLSearchParams(new FormData(form));
  
    fetch('http://localhost:3000/iniciar_sesion', {
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
        window.location.href = './catalogo.html';
      } else {
        // Muestra un mensaje de error
        if (document.getElementById('ErrorBuscar')) {
          
        }else{
            var errorDiv = document.createElement('div');
            errorDiv.id = "ErrorBuscar"
            errorDiv.textContent = 'Usuario o contraseña incorrectos';
            form.insertBefore(errorDiv, form.firstChild);
        }

      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });