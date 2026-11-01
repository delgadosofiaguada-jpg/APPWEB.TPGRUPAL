// Componente: tarjeta de producto (usado en catálogo).
import { crearElemento, formatearPrecio } from "../utilidades.js";
 
export function crearTarjeta(producto) {
    const tarjeta = crearElemento("article", "tarjeta");
 
    const img = crearElemento("img", "tarjeta__img");
    img.src = producto.imagen;
    img.alt = producto.alt;
    img.loading = "lazy";
 
    const boton = crearElemento("button", "btn btn--primario tarjeta__btn", "Agregar al carrito");
    boton.type = "button";
    boton.dataset.agregar = producto.id;
 
    tarjeta.append(
        img,
        crearElemento("h3", "tarjeta__titulo", producto.nombre),
        crearElemento("p", "tarjeta__detalle", producto.detalle),
        crearElemento("p", "tarjeta__precio", formatearPrecio(producto.precio)),
        boton
    );
    return tarjeta;
}