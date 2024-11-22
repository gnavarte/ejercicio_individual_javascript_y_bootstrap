// Agregar mensaje de confirmación al enviar el formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario para pruebas
    alert("¡Gracias por contactarnos! Hemos recibido tu consulta y nos pondremos en contacto pronto.");
});
