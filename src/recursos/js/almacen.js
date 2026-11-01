
// Estado del carrito. Se guarda en localStorage para sobrevivir entre páginas.
import { productos } from "./datos/productos.js";
 
const CLAVE = "molido-carrito";
const CLAVE_PEDIDO = "molido-ultimo-pedido";
 
function leer() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
    } catch {
        return [];
    }
}
 
function guardar(items) {
    localStorage.setItem(CLAVE, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("carrito:cambio"));
}
 
export function agregarAlCarrito(id) {
    const items = leer();
    const item = items.find((i) => i.id === id);
    if (item) item.cantidad += 1;
    else items.push({ id, cantidad: 1 });
    guardar(items);
}
 
export function cambiarCantidad(id, delta) {
    const items = leer();
    const item = items.find((i) => i.id === id);
    if (!item) return;
    item.cantidad += delta;
    guardar(items.filter((i) => i.cantidad > 0));
}
 
export function eliminarDelCarrito(id) {
    guardar(leer().filter((i) => i.id !== id));
}
 
export function vaciarCarrito() {
    guardar([]);
}
 
// Devuelve los items con los datos completos del producto.
export function obtenerItemsDetallados() {
    return leer()
        .map(({ id, cantidad }) => {
            const producto = productos.find((p) => p.id === id);
            return producto ? { producto, cantidad, subtotal: producto.precio * cantidad } : null;
        })
        .filter(Boolean);
}
 
export function contarUnidades() {
    return leer().reduce((suma, i) => suma + i.cantidad, 0);
}
 
export function calcularSubtotal() {
    return obtenerItemsDetallados().reduce((suma, i) => suma + i.subtotal, 0);
}
 
export function guardarPedido(pedido) {
    localStorage.setItem(CLAVE_PEDIDO, JSON.stringify(pedido));
}
 
export function leerPedido() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_PEDIDO));
    } catch {
        return null;
    }
}
 
