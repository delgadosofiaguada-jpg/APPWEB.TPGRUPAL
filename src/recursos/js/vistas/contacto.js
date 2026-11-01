// Vista: contacto. Valida el formulario y muestra un mensaje de confirmación.
export function iniciarContacto() {
    const form = document.querySelector(".formulario");
    const estado = document.querySelector("#estado-formulario");
 
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = new FormData(form).get("nombre");
        estado.textContent = `Gracias, ${nombre}. Recibimos tu consulta y te responderemos a la brevedad.`;
        estado.hidden = false;
        form.reset();
    });
 
    form.addEventListener("reset", () => {
        estado.hidden = true;
    });
}