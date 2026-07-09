# InterioresWeb

Sitio web estatico de decoracion de interiores construido con **HTML + CSS + JavaScript / React por CDN**.

## Que hace esta web

- Muestra una experiencia visual de estilos de decoracion (Nordico, Minimalista, Bohemio, Industrial).
- Cambia contenido sin recargar la pagina.
- Incluye galeria por estilo, seccion panoramica, rangos de precios y footer de contacto.
- Tiene animaciones de entrada por scroll y efectos hover.
- Incluye menu modal de navegacion por secciones.

## Estructura de archivos

- `index.html`: punto de entrada.
- `css/stylesinterior.css`: estilos visuales, responsive, tema, animaciones y modal del menu.
- `js/interiores.js`: logica React (estados, render dinamico, scroll, navegacion interna).

## Como funciona

### 1) Carga inicial

`index.html` carga:

- Fuentes de Google.
- `css/stylesinterior.css`.
- React y ReactDOM desde CDN.
- Babel standalone para JSX en navegador.
- `js/interiores.js` con el componente principal `App`.

### 2) Componente principal (App)

En `js/interiores.js`, `App` controla:

- Estilo activo (`styleKey`).
- Texto de intro alternativo (`showingStyleInfo`).
- Estado del modal de menu (`isNavOpen`).
- Progreso de scroll (`scrollProgress`).
- Seccion activa en navegacion (`activeSection`).
- Mapeo de refs por seccion (`sectionRefs`).

### 3) Contenido dinamico por estilo

El objeto `dataByStyle` contiene para cada estilo:

- `title`
- `description`
- `intro`
- `introImage`
- `cards`

Al pulsar filtros, la UI actualiza texto e imagenes segun el estilo seleccionado, sin refrescar pagina.

### 4) Navegacion modal

- Boton flotante "Menu" abre el modal.
- El modal muestra accesos a secciones.
- Al seleccionar una seccion, hace scroll suave y cierra modal.
- Se cierra tambien con `Esc` o clic fuera (backdrop).

### 5) Animaciones e interactividad

- `IntersectionObserver` agrega clases de visibilidad (`is-visible`) al entrar en viewport.
- Clases `reveal`, `from-top`, `from-left`, `from-right` manejan las transiciones.
- Hover en cards, imagenes, botones y bloques principales.

### 6) Seccion de precios

`pricingByRoom` contiene datos por ambiente:

- Salon (Compacto / Espacioso)
- Cocina (Compacta / Espaciosa)
- Habitacion (Compacta / Espaciosa)

Cada variante muestra:

- Tamano (`size`)
- Rango (`price`)
- Descripcion (`description`)
- Imagen (`image`)

## Como personalizar

### Cambiar textos

Editar en `js/interiores.js`:

- Mensajes de bienvenida.
- Descripciones e intros por estilo.
- Textos de cards y precios.

### Cambiar imagenes

Actualizar rutas en `js/interiores.js`:

- `introImage`
- `cards[].image`
- `panoramaImages`
- `pricingByRoom[].plans[].image`

### Cambiar colores, tipografia y layout

Editar `css/stylesinterior.css`:

- Variables CSS en `:root`.
- Bloques `.welcome`, `.hero`, `.gallery`, `.price-section`, `.site-footer`.
- Responsive en media queries.

## Como ejecutar

1. Abrir `InterioresWeb/index.html` en navegador.
2. Si usas XAMPP, servir desde `htdocs` (ejemplo: `http://localhost/InterioresWeb/`).

## Notas

- Si una imagen no existe, algunos bloques usan fallback visual (placeholder).
- Es un sitio estatico; no necesita backend para funcionar.
