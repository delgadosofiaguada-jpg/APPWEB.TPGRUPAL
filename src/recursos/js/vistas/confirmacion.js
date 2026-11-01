
// Vista: confirmación del pedido (paso 3 del proceso de compra).
import { leerPedido } from "../almacen.js";
import { crearElemento, formatearPrecio } from "../utilidades.js";
 
export function iniciarConfirmacion() {
    const contenedor = document.querySelector("#confirmacion");
    const pedido = leerPedido();
 
    if (!pedido) {
        contenedor.replaceChildren(
            crearElemento("p", "", "No hay ningún pedido reciente para mostrar.")
        );
        return;
    }
 
    const lista = crearElemento("ul", "confirmacion__lista");
    lista.append(
        ...pedido.items.map((i) =>
            crearElemento("li", "", `${i.cantidad} × ${i.nombre} — ${formatearPrecio(i.subtotal)}`)
        )
    );
 
    contenedor.replaceChildren(
        crearElemento("h2", "confirmacion__titulo", `¡Gracias, ${pedido.cliente.nombre}!`),
        crearElemento("p", "", `Tu pedido ${pedido.numero} fue registrado. Te enviaremos novedades a ${pedido.cliente.email}.`),
        lista,
        crearElemento("p", "confirmacion__total", `Total: ${formatearPrecio(pedido.total)}`)
    );
}
 
 