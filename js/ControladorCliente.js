//Funciones landing page - Slider
const imagenes = document.querySelectorAll('#slider img');
let imagenActual = 0;
let interval;

function startSlider() {
	imagenes[imagenActual].classList.add('active');

	interval = setInterval(() => {
		imagenes[imagenActual].classList.remove('active');
		imagenActual++;
		if (imagenActual >= imagenes.length) {
			imagenActual = 0;
		}
		imagenes[imagenActual].classList.add('active');
	}, 5000);
}
startSlider();

//Función para mostrar y ocultalr las secciones
function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    var secciones = document.getElementsByTagName('section');
    for (var i = 0; i < secciones.length; i++) {
       
      secciones[i].style.display = 'none';
      console.log(i);
     
    }
    console.log(secciones);
    // Mostrar la sección seleccionada
    var seccion = document.getElementById(idSeccion);
    seccion.style.display = 'block';
  }
  mostrarSeccion(0);

  //Funcion para cambiar de un html a otro y mostrar una seccion especifica
  window.onload = function() {
    var seccionEspecifica = window.location.hash.substring(1);
    if (seccionEspecifica) {
      mostrarSeccion(seccionEspecifica);
    }
  };

  //Funciones para validar correo electronico y contraseña
  function validarEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
  }
  
  function validarPassword(password) {
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regexPassword.test(password);
  }

  //Validaciones de Inicio de Sesión
  document.getElementById('btnInicioSesion').addEventListener('click', function() {
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;
  
    if (!validarEmail(email)) {
      alert('El correo electrónico no es válido');
      return;
    }
  
    if (!validarPassword(password)) {
      alert('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
      return;
    }
  
    mostrarSeccion(3);
  });

  