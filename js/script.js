'use estrict';

document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.getElementById("formLogin");
  const mensaje = document.getElementById("mensaje");

  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();

    if (usuario === "" || clave === "") {
      mensaje.style.color = "red";
      mensaje.textContent = "Por favor, completa todos los campos.";
      return;
    }

    // Muestra los datos que el usuario escribió
    mensaje.style.color = "withe";
    mensaje.innerHTML = `
      <strong>Datos recibidos:</strong><br>
      Usuario: ${usuario}<br>
      Contraseña: ${clave}
    `;

    formLogin.reset(); 
  });
});





 

