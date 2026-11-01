# Aplicaciones Web 1 - Proyecto SP4

## Molido Café — *El sabor de cada momento*

Este repositorio contiene el desarrollo del proyecto web frontend de **Molido Café**, una cafetería de especialidad y pastelería artesanal correspondiente a un caso de negocio ficticio.

El proyecto se encuentra actualmente en la etapa **SP3 - Estilización del HTML con CSS**, en la que se trabajó sobre la estructura HTML desarrollada previamente para incorporar identidad visual, organización de estilos, adaptación responsive y una mejor presentación general del sitio.

---

## Integrantes

- **Astudillo, Guadalupe**
- **Delgado, Sofía**
- **Roldán, Lara Martina**
- **Gaido, Leandro**

**Carrera:** Analista de Sistemas  
**Institución:** Colegio Universitario IES Siglo 21

---

## Objetivo del proyecto

Molido Café busca fortalecer la presencia digital del negocio mediante una aplicación web adaptable a dispositivos móviles y de escritorio.

La plataforma fue pensada para permitir:

- Presentar la marca y su propuesta de valor.
- Consultar el catálogo de productos.
- Buscar y filtrar productos.
- Visualizar cafés, productos de pastelería y combos.
- Gestionar productos dentro de un carrito.
- Realizar consultas mediante un formulario de contacto.
- Adaptar la interfaz a distintos tamaños de pantalla.

---

## Arquitectura y estrategia web

- **Modelo de negocio:** B2C (*Business to Consumer*), orientado directamente al consumidor final.
- **Arquitectura propuesta:** enfoque híbrido MPA/SPA.
- **MPA:** utilizada para organizar las diferentes páginas principales del sitio.
- **SPA:** prevista para módulos de mayor interacción, como filtros, carrito y validaciones dinámicas, en etapas posteriores.
- **Dominio propuesto:** `molidocafe.com.ar`.

En la etapa actual, el proyecto se encuentra desarrollado principalmente con **HTML5 y CSS3**.

---

## SP3 - Estilización del HTML con CSS

Durante esta etapa se incorporó la identidad visual del sitio mediante una hoja de estilos CSS compartida entre las distintas páginas.

Se trabajó en:

- Creación de estilos generales.
- Definición de una paleta de colores.
- Organización de clases.
- Uso de Flexbox y CSS Grid.
- Adaptación responsive mediante media queries.
- Ajuste visual de imágenes.
- Estilización de tarjetas de productos.
- Estilización de botones.
- Estilización de formularios.
- Estilización del carrito.
- Mejora de la navegación.
- Organización de los recursos del proyecto.

---

## Identidad visual

Se definió una paleta basada principalmente en:

- Verde oscuro.
- Verde intermedio.
- Mostaza suave.
- Crema.
- Tonos neutros para textos, fondos y bordes.

Los valores principales se encuentran centralizados mediante variables CSS declaradas en `:root`.

Ejemplo:

```css
:root {
    --verde-oscuro: #2f4a3e;
    --verde: #52705f;
    --mostaza: #d5b66a;
    --mostaza-claro: #f0e3b7;
    --crema: #faf7ef;
}

---

## SP4 - Integración con JavaScript (primera parte)

- **Catálogo renderizado con JavaScript**: las secciones y tarjetas se generan desde `src/recursos/js/vistas/catalogo.js`.
- **Datos en un módulo independiente**: `src/recursos/js/datos/productos.js`.
- **Código modularizado (ES Modules)**: `index.js` (punto de entrada), `almacen.js` (carrito en `localStorage`), `utilidades.js` y una vista por página en `vistas/`.
- **Eventos**: búsqueda, filtros y orden en tiempo real; agregar al carrito; cambiar cantidad / eliminar; envío de formularios; contador del carrito en el menú.
- **Vistas completas del proceso de compra**: `catalogo.html` → `carrito.html` → `pedido.html` → `confirmacion.html`.
- **Correcciones SP3**: `.fiveserverrc` con el nombre correcto, formulario de contacto estilizado, resumen del carrito visible en móvil y CSS reordenado (reglas genéricas primero, selectores combinados para contexto, media queries al final).

