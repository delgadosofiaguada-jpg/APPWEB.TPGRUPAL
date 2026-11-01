
// Vista: carrito. Renderiza los items y gestiona cantidades y eliminación.
import {
    cambiarCantidad,
    eliminarDelCarrito,
    obtenerItemsDetallados,
} from "../almacen.js";
import { crearElemento, formatearPrecio } from "../utilidades.js";
import { actualizarResumen } from "./resumen.js";
 
function crearBotonCantidad(id, delta, etiqueta, simbolo) {
    const b = crearElemento("button", "cantidad__btn", simbolo);
    b.type = "button";
    b.setAttribute("aria-label", etiqueta);
    b.dataset.cantidad = id;
    b.dataset.delta = delta;
    return b;
}
 
function crearItem({ producto, cantidad, subtotal }) {
    const item = crearElemento("article", "item-carrito");
 
    const img = crearElemento("img", "item-carrito__img");
    img.src = producto.imagen;
    img.alt = producto.alt;
 
    const cant = crearElemento("div", "cantidad");
    cant.append(
        crearElemento("span", "", "Cantidad:"),
        crearBotonCantidad(producto.id, -1, "Disminuir cantidad", "-"),
        crearElemento("span", "cantidad__valor", String(cantidad)),
        crearBotonCantidad(producto.id, 1, "Aumentar cantidad", "+")
    );
 
    const eliminar = crearElemento("button", "btn btn--texto item-carrito__eliminar", "Eliminar");
    eliminar.type = "button";
    eliminar.dataset.eliminar = producto.id;
 
    item.append(
        img,
        crearElemento("h2", "item-carrito__titulo", producto.nombre),
        crearElemento("p", "item-carrito__detalle", producto.detalle),
        crearElemento("p", "item-carrito__detalle", "Precio: " + formatearPrecio(producto.precio)),
        cant,
        crearElemento("p", "item-carrito__subtotal", "Subtotal: " + formatearPrecio(subtotal)),
        eliminar
    );
    return item;
}
 
function renderizar(lista) {
    const items = obtenerItemsDetallados();
    lista.replaceChildren();
 
    if (items.length === 0) {
        const vacio = crearElemento("p", "carrito__vacio", "Tu carrito está vacío.");
        lista.append(vacio);
    } else {
        lista.append(...items.map(crearItem));
    }
 
    const volver = crearElemento("a", "enlace-volver", "← Seguir comprando");
    volver.href = "./catalogo.html";
    lista.append(volver);
 
    actualizarResumen();
}
 
export function iniciarCarrito() {
    const lista = document.querySelector("#lista-carrito");
 
    lista.addEventListener("click", (e) => {
        const botonCant = e.target.closest("[data-cantidad]");
        const botonEliminar = e.target.closest("[data-eliminar]");
        if (botonCant) cambiarCantidad(botonCant.dataset.cantidad, Number(botonCant.dataset.delta));
        if (botonEliminar) eliminarDelCarrito(botonEliminar.dataset.eliminar);
    });
 
    document.addEventListener("carrito:cambio", () => renderizar(lista));
    renderizar(lista);
}
 
 