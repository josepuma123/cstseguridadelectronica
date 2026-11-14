# Guía sencilla para mantener la web de CST

Esta página está hecha con archivos sencillos: HTML para el contenido, CSS para la apariencia y JavaScript para los datos y las acciones. Puedes editar estos archivos con un editor de texto. Antes de hacer cambios, duplica la carpeta completa como respaldo.

> Si es tu primera vez, empieza por la guía visual [INICIO-AQUI.md](../INICIO-AQUI.md). Para fotos y videos, usa la [guía de fotos y videos](guia-fotos-y-videos.md).

## Archivos principales

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | Textos, secciones, preguntas frecuentes, navegación y formulario. |
| `assets/css/estilos.css` | Colores, tamaños, espacios y diseño para celulares y computadores. |
| `assets/js/sitio.js` | Dirección, contactos, horarios, redes, reseñas, mapa y envío del formulario. |
| `assets/images/brand/` | Logotipo y paquete de favicon. |
| `assets/images/media/` | Fotos y videos publicados en la página. |
| `fuentes/identidad/originales/` | Copias originales de logos y favicon; no se publican directamente. |
| `fuentes/referencias/` | Banner de referencia que se conserva, pero no se muestra en la web. |
| `assets/site.webmanifest` | Nombres y rutas de iconos para instalar la página en un celular. |
| `guia-fotos-y-videos.md` | Pasos ilustrados para cambiar multimedia. |

Mantén la carpeta `assets` junto a `index.html`. La página usa rutas relativas, por ejemplo `assets/images/brand/logo-cst.png`; si mueves o renombras un archivo, actualiza también su ruta en el HTML.

### Estado actual de los datos

La dirección, ciudad, WhatsApp, correo, Facebook y TikTok ya están escritos en `assets/js/sitio.js`. Confirma que sigan correctos antes de publicar. El teléfono fijo, el horario, LinkedIn e Instagram están vacíos; se mostrarán como pendientes o inactivos hasta que CST los confirme.

## 1. Completar los datos oficiales

Abre `assets/js/sitio.js` y busca `CST_SETTINGS`, cerca del inicio del archivo. Reemplaza las comillas vacías por los datos confirmados de la empresa:

- `address`: calle principal, calle secundaria, sector y referencias necesarias.
- `city`: ciudad y país. El mapa se muestra solo cuando hay dirección y ciudad.
- `phoneFixed`: teléfono fijo, si CST tiene uno.
- `phoneMobile`: celular corporativo que se mostrará en contacto y en el pie de página. Si lo dejas vacío, se muestra el número de WhatsApp.
- `whatsapp`: número de WhatsApp con código de país, solo números, sin `+`, espacios ni guiones.
- `email`: correo oficial de atención.
- `hours`: horario de atención comercial y, si aplica, horario de soporte técnico.

Ejemplo de **formato**, no de datos de CST:

```js
phoneMobile: "593XXXXXXXXX",
whatsapp: "593XXXXXXXXX",
email: "correo@dominio-confirmado.com",
```

Al guardar estos cambios, los teléfonos y el correo se vuelven enlaces. La dirección y ciudad activan el mapa de Google. El formulario abre WhatsApp; si no hay WhatsApp configurado, prepara un correo cuando exista una dirección de email.

## 2. Añadir redes cuando CST cree sus perfiles

En el mismo objeto `CST_SETTINGS`, completa `socials` con el enlace completo de cada perfil oficial:

```js
socials: {
  linkedin: "https://www.linkedin.com/company/URL-OFICIAL",
  facebook: "https://www.facebook.com/URL-OFICIAL",
  instagram: "https://www.instagram.com/URL-OFICIAL",
  tiktok: "https://www.tiktok.com/@USUARIO-OFICIAL",
},
```

Reemplaza cada ejemplo por el enlace real. Deja en blanco los perfiles que aún no existan. Los botones usan marcas reconocibles de LinkedIn, Facebook, Instagram y TikTok; se activan automáticamente cuando añades una dirección `https://`.

## 3. Añadir reseñas verdaderas

Busca `CST_TESTIMONIALS` en `assets/js/sitio.js`. Añade solo comentarios reales que CST tenga autorización para publicar. Cada reseña lleva el comentario, el nombre aprobado para mostrar y el tipo de cliente:

```js
const CST_TESTIMONIALS = [
  {
    quote: "Texto aprobado por el cliente.",
    name: "Nombre autorizado",
    context: "Hogar",
  },
];
```

Para añadir otra reseña, copia el bloque `{ ... }` y sepáralo del anterior con una coma. No publiques ejemplos como si fueran opiniones reales.

## 4. Editar preguntas frecuentes y textos

Las preguntas frecuentes están en `index.html`, dentro de la sección con `id="preguntas"`. Cada bloque comienza con `<details class="faq-item">`; edita el texto de `<summary>` para cambiar la pregunta y el de `<p>` para cambiar la respuesta. Conserva las etiquetas de apertura y cierre.

Los títulos, servicios y demás textos también están en `index.html`. Puedes cambiar las palabras dentro de las etiquetas sin borrar etiquetas como `<h2>`, `<p>` o `<a>`. Los enlaces del menú apuntan a los `id` de las secciones; conserva esos identificadores si no vas a actualizar también los enlaces.

## 5. Cambiar colores, logotipo y favicon

- **Colores del sitio:** en `assets/css/estilos.css`, al comienzo, edita las variables de `:root`: `--navy`, `--blue`, `--cyan` y `--red`.
- **Logotipo:** en `assets/images/brand/`, reemplaza `logo-cst.png` por un PNG nuevo, transparente y horizontal, con el mismo nombre. El encabezado y el pie usan este único archivo.
- **Favicon:** reemplaza los iconos de `assets/images/brand/` con los nuevos archivos del paquete, conservando sus nombres. Las rutas están señaladas con un comentario `FAVICON` en el `<head>` de `index.html`.
- **Redes:** los iconos están en el bloque `icon-library` de `index.html`; las direcciones oficiales se actualizan en `socials`, dentro de `assets/js/sitio.js`.

## 6. SEO: cómo cambiar títulos e imágenes

La parte SEO está al principio de `index.html`, dentro de `<head>`. Busca el comentario `SEO` para encontrarla.

1. Actualiza `<title>` con el nombre de CST y el servicio principal. Procura que sea breve y específico.
2. Actualiza `meta name="description"` con una frase fiel a los servicios. Esta es la descripción que puede aparecer en buscadores.
3. Si cambias esos textos, actualiza también `og:title`, `og:description`, `twitter:title` y `twitter:description` para que al compartir la web se vea la misma información.
4. La página ya tiene un solo `<h1>` principal y usa `<h2>` para las secciones. Conserva esa jerarquía al añadir contenido.
5. Toda foto informativa nueva debe incluir `alt="..."`, con una frase que diga qué aparece. El logo ya tiene texto alternativo.

El dominio de CST aún no está escrito en el proyecto. Cuando exista, quien publique la web debe añadir su URL pública en una etiqueta canonical y en `og:url`; la imagen `og:image` también debe usar una dirección pública completa que empiece por `https://`. No copies direcciones de ejemplo ni rutas de tu computador.

El bloque se vería así, reemplazando `https://DOMINIO-OFICIAL` por la dirección real y publicada de CST:

```html
<link rel="canonical" href="https://DOMINIO-OFICIAL/" />
<meta property="og:url" content="https://DOMINIO-OFICIAL/" />
<meta property="og:image" content="https://DOMINIO-OFICIAL/assets/images/imagen-social.jpg" />
<meta property="og:image:alt" content="Descripción de la imagen de CST" />
```

No publiques literalmente `DOMINIO-OFICIAL`. Para `imagen-social.jpg`, prepara una imagen corporativa aprobada y súbela primero a `assets/images/`.

## 7. Añadir fotos y videos

Sigue los ejemplos de [guia-fotos-y-videos.md](guia-fotos-y-videos.md). Guarda fotos y videos aprobados dentro de `assets/images/media/`. El código ya incluye un comentario `INICIO DEL BLOQUE MULTIMEDIA` y otro `FIN`; reemplaza únicamente el contenido entre esas marcas.

## 8. Publicar los cambios

Guarda los archivos en UTF-8 y conserva juntos `index.html`, `assets`, `docs`, `fuentes` e `INICIO-AQUI.md`. Para publicar la web, sube `index.html` y la carpeta `assets`; no hace falta subir `docs` ni `fuentes`. Para compartir en redes, cuando CST tenga un dominio oficial, añade la dirección completa a `og:url`, `og:image` y a `rel="canonical"` en el `<head>` de `index.html`.

### Si algo deja de verse

1. Confirma que el nombre del archivo y su ruta coincidan, incluidas mayúsculas y minúsculas. Por ejemplo: `assets/images/brand/logo-cst.png`.
2. Si cambiaste un `id` en `index.html`, actualiza también los enlaces que llevan a esa sección.
3. En `assets/js/sitio.js`, conserva las comas entre los datos del objeto y las comillas alrededor de cada texto.
4. Si una red aún no tiene perfil, deja su dirección vacía; el icono queda inactivo hasta que agregues el enlace oficial.
