import { agregarAlCarrito, contarUnidades } from "./almacen.js";
import { iniciarCatalogo } from "./vistas/catalogo.js";
import { iniciarCarrito } from "./vistas/carrito.js";
import { iniciarPedido } from "./vistas/pedido.js";
import { iniciarConfirmacion } from "./vistas/confirmacion.js";
import { iniciarContacto } from "./vistas/contacto.js";
 
const vistas = {
    "pagina-catalogo": iniciarCatalogo,
    "pagina-carrito": iniciarCarrito,
    "pagina-pedido": iniciarPedido,
    "pagina-confirmacion": iniciarConfirmacion,
    "pagina-contacto": iniciarContacto,
};
 
function actualizarContador() {
    const contador = document.querySelector("#contador-carrito");
    if (!contador) return;
    const unidades = contarUnidades();
    contador.textContent = unidades;
    contador.hidden = unidades === 0;
}
 
// Delegación: cualquier botón [data-agregar] (catálogo o inicio) agrega al carrito.
document.addEventListener("click", (e) => {
    const boton = e.target.closest("[data-agregar]");
    if (!boton) return;
    agregarAlCarrito(boton.dataset.agregar);
    boton.textContent = "¡Agregado!";
    setTimeout(() => (boton.textContent = boton.dataset.texto ?? "Agregar al carrito"), 900);
});
 
document.addEventListener("carrito:cambio", actualizarContador);
 
actualizarContador();
const clasePagina = [...document.body.classList].find((c) => vistas[c]);
if (clasePagina) vistas[clasePagina]();