// Funciones auxiliares reutilizables (sin acceso al DOM de una página en particular).
 
export const COSTO_ENVIO = 3000;
export const ENVIO_GRATIS_DESDE = 50000;
 
export function formatearPrecio(valor) {
    return "$" + valor.toLocaleString("es-AR");
}
 
export function calcularTotales(subtotal) {
    const envio = subtotal === 0 || subtotal >= ENVIO_GRATIS_DESDE ? 0 : COSTO_ENVIO;
    return { subtotal, envio, total: subtotal + envio };
}
 
// Crea un elemento con clase y texto. Evita repetir createElement en cada vista.
export function crearElemento(etiqueta, clase, texto) {
    const el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto !== undefined) el.textContent = texto;
    return el;
}
 
export function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}