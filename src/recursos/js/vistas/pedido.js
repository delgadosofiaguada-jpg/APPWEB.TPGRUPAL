// Vista: datos de entrega y pago (paso 2 del proceso de compra).
import { guardarPedido, obtenerItemsDetallados, vaciarCarrito, calcularSubtotal } from "../almacen.js";
import { calcularTotales, crearElemento, formatearPrecio } from "../utilidades.js";
import { actualizarResumen } from "./resumen.js";

function renderizarProductos(lista, items) {
    lista.replaceChildren(
        ...items.map(({ producto, cantidad, subtotal }) =>
            crearElemento(
                "li",
                "resumen__producto",
                `${cantidad} × ${producto.nombre} — ${formatearPrecio(subtotal)}`
            )
        )
    );
}

export function iniciarPedido() {
    const items = obtenerItemsDetallados();

    // Sin productos no tiene sentido continuar: se vuelve al carrito.
    if (items.length === 0) {
        window.location.replace("./carrito.html");
        return;
    }

    renderizarProductos(document.querySelector("#resumen-productos"), items);
    actualizarResumen();

    const form = document.querySelector("#form-pedido");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const datos = Object.fromEntries(new FormData(form));
        const totales = calcularTotales(calcularSubtotal());

        guardarPedido({
            numero: "MC-" + Date.now().toString().slice(-6),
            cliente: datos,
            items: items.map(({ producto, cantidad, subtotal }) => ({
                nombre: producto.nombre,
                cantidad,
                subtotal,
            })),
            ...totales,
        });
        vaciarCarrito();
        window.location.href = "./confirmacion.html";
    });
}