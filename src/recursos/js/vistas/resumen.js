
// Componente: bloque de resumen de pedido (carrito y pedido).
import { calcularSubtotal } from "../almacen.js";
import { calcularTotales, formatearPrecio, ENVIO_GRATIS_DESDE } from "../utilidades.js";
 
export function actualizarResumen() {
    const { subtotal, envio, total } = calcularTotales(calcularSubtotal());
 
    const poner = (selector, valor) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = valor;
    };
 
    poner("[data-resumen='subtotal']", formatearPrecio(subtotal));
    poner("[data-resumen='envio']", envio === 0 && subtotal > 0 ? "Gratis" : formatearPrecio(envio));
    poner("[data-resumen='total']", formatearPrecio(total));
    poner("[data-resumen='nota']", `Envío gratis en pedidos sobre ${formatearPrecio(ENVIO_GRATIS_DESDE)}.`);
 
    const boton = document.querySelector("[data-resumen='confirmar']");
    if (boton) boton.setAttribute("aria-disabled", String(subtotal === 0));
}
 