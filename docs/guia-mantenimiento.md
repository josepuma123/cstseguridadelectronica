# Guía sencilla para mantener la web de CST

La mayoría de los cambios cotidianos se hacen en un solo lugar: **assets/js/sitio.js**, dentro de la configuración **CST_SETTINGS**. Ahí se administran contactos, redes, cobertura, tarjetas comerciales, infraestructura, multimedia, preguntas frecuentes y reseñas. No necesitas editar etiquetas HTML ni estilos para cambiar esos datos.

Antes de cambiar algo, duplica toda la carpeta del proyecto como respaldo. Abre los archivos con Bloc de notas o un editor de texto, nunca con Word.

## Archivos principales

| Archivo o carpeta | Para qué sirve |
| --- | --- |
| index.html | Estructura de las secciones y ajustes técnicos SEO. Para cambios cotidianos, no hace falta editarlo. |
| assets/js/sitio.js | Configuración central: contactos, textos de tarjetas, cobertura, multimedia, preguntas frecuentes y reseñas. |
| assets/css/estilos.css | Apariencia, colores, tamaños y diseño para celulares y computadores. |
| assets/images/brand/ | Logotipo y favicon que se muestran en la página. |
| assets/images/media/ | Fotografías y videos publicados en la página. |
| docs/ | Estas instrucciones sencillas para mantener la página. |
| fuentes/ | Originales del logotipo y material de referencia. No se publican en la web. |

## La forma segura de editar

~~~text
  1. DUPLICA LA CARPETA    2. ABRE sitio.js       3. CAMBIA EL TEXTO      4. GUARDA Y REVISA
  Crea una copia       →  Busca CST_SETTINGS  →  Conserva comas y llaves → Ctrl + S
~~~

1. En el Explorador de archivos, copia la carpeta PROPUESTA PARA LENNIS y pégala como respaldo.
2. Abre assets/js/sitio.js con Bloc de notas.
3. Pulsa **Ctrl + F**, escribe CST_SETTINGS y pulsa **Enter**.
4. Cambia solo el contenido entre comillas. No borres comas, llaves ni comillas.
5. Pulsa **Ctrl + S** y recarga la página para ver el cambio.

## 1. Actualiza contacto y ubicación

Dentro de CST_SETTINGS busca estos nombres. Reemplaza el texto entre comillas:

| Dato | Qué escribir |
| --- | --- |
| address | Calle, intersección y sector. |
| city | Ciudad o cantón. |
| province | Provincia. |
| country | País. |
| serviceArea | Cantones o zonas donde CST ofrece servicio. |
| phoneFixed | Teléfono fijo, si CST tiene uno. Si no tiene, déjalo como texto vacío. |
| phoneMobile | Celular corporativo. Si queda vacío, se usa el número de WhatsApp. |
| whatsapp | Número de WhatsApp con código de país, solo dígitos, sin +, espacios ni guiones. |
| email | Correo que recibirá las solicitudes. |
| hours | Horario comercial y de soporte. |

Ejemplo de formato:

~~~js
address: 'Av. Rafael Andrade y Magdalena Ushiña',
city: 'Loreto',
province: 'Orellana',
country: 'Ecuador',
~~~

El mapa usa automáticamente la dirección, ciudad, provincia y país. El formulario abre WhatsApp en una pestaña nueva y deja la página abierta. Si WhatsApp está vacío, prepara un correo con la solicitud.

## 2. Actualiza las redes sociales

En CST_SETTINGS, busca socials. Pega la dirección completa del perfil oficial. Deja vacío el perfil que todavía no exista:

~~~js
socials: {
  linkedin: '',
  facebook: 'https://www.facebook.com/URL-OFICIAL',
  instagram: '',
  tiktok: 'https://www.tiktok.com/@USUARIO-OFICIAL',
},
~~~

Los iconos de LinkedIn, Facebook, Instagram y TikTok ya tienen su forma reconocible. Al escribir un enlace oficial, el icono correspondiente se activa automáticamente.

## 3. Cambia las tarjetas de servicios y públicos

En sitio.js busca services para los cuatro servicios y audiences para hogares, negocios, empresas e instituciones. Cambia solo las palabras entre comillas.

~~~js
{ title: 'Venta de equipos', description: 'Texto breve del servicio.' },
~~~

Cada bloque tiene un título y una descripción. Si añades un bloque nuevo, duplica una línea completa y sepárala con una coma. Para añadir o quitar categorías visuales, pide ayuda de mantenimiento; no cambies la estructura HTML.

La lista de infraestructura está en infrastructure. Puedes modificar los textos actuales, por ejemplo cableado de cobre, cajas estancas, discos de videovigilancia, baluns o UPS:

~~~js
infrastructure: [
  'Cableado estructurado 100 % cobre',
  'Cajas de paso estancas para exteriores',
],
~~~

## 4. Cambia una foto o un video

1. Copia la foto o el video aprobado a assets/images/media/.
2. En sitio.js busca media: {.
3. Cambia type, src, poster y alt según el ejemplo de [guia-fotos-y-videos.md](guia-fotos-y-videos.md).
4. Guarda y recarga la página.

~~~js
media: {
  type: 'video',
  src: 'assets/images/media/instalacion-local.mp4',
  poster: 'assets/images/media/instalacion-local.webp',
  alt: 'Video de una instalación de seguridad electrónica de CST',
},
~~~

Para una foto, usa type: 'image', escribe la ruta de la foto en src y describe lo que aparece en alt. No es necesario reemplazar bloques ni buscar etiquetas de cierre.

## 5. Edita las preguntas frecuentes

Busca faqs: [ dentro de CST_SETTINGS. Cada pregunta tiene question y answer:

~~~js
{
  question: '¿Puedo ver las cámaras desde el celular?',
  answer: 'Sí, si el equipo y la conexión se configuran para acceso remoto.',
},
~~~

Para añadir una pregunta, copia el bloque completo, cambia la pregunta y la respuesta, y deja la coma después de la llave de cierre. Para quitar una, elimina su bloque entero. La sección se oculta si la lista queda vacía.

## 6. Añade opiniones reales

Busca testimonials: [ dentro de CST_SETTINGS. Añade solo reseñas verdaderas con permiso del cliente:

~~~js
{
  quote: 'Texto aprobado por el cliente.',
  name: 'Nombre autorizado',
  context: 'Hogar',
},
~~~

Con la lista vacía, no aparece un espacio de reseñas en blanco ni un aviso interno. Al añadir la primera reseña, se muestran automáticamente la sección y su enlace.

## 7. Cambia el logotipo o el favicon

### Logotipo

1. Abre assets/images/brand/.
2. Copia el nuevo logotipo PNG, preferiblemente horizontal y con fondo transparente.
3. Ponle exactamente el nombre logo-cst.png y acepta reemplazar el archivo.
4. El encabezado y el pie de página se actualizan juntos.

### Favicon

El favicon es el icono pequeño que aparece en la pestaña del navegador y en algunos celulares.

1. Reemplaza los iconos dentro de assets/images/brand/ con el nuevo paquete.
2. Conserva exactamente estos nombres: favicon.svg, favicon-16x16.png, favicon-32x32.png, favicon.ico, apple-touch-icon.png, android-chrome-192x192.png y android-chrome-512x512.png.
3. No cambies assets/site.webmanifest; ya apunta a esos iconos.
4. En el navegador, pulsa **Ctrl + F5** para actualizar el icono guardado.

## 8. SEO: título, descripción e imágenes compartidas

Estos son cambios técnicos poco frecuentes. Si solo vas a actualizar contactos, redes, preguntas o fotos, no necesitas abrir index.html.

1. Abre index.html y busca el comentario SEO al principio.
2. Actualiza el título y la descripción para que describan con precisión a CST.
3. Si cambias esos textos, actualiza también los textos de Open Graph y Twitter que están junto a ellos.
4. Conserva un solo título principal H1; los títulos de sección usan H2.
5. Cada imagen informativa debe conservar un texto alternativo alt que explique qué aparece.
6. Cuando CST tenga un dominio publicado, completa las etiquetas canonical, og:url y og:image con direcciones públicas que empiecen por https://. No pegues una dirección de ejemplo.

## 9. Publica los cambios

Al subir cambios a GitHub Pages, publica index.html y la carpeta assets. Si añadiste una foto o un video, confirma que también se haya subido el archivo nuevo de assets/images/media/. No hace falta publicar docs ni fuentes.

## Si algo deja de funcionar

- Usa **Ctrl + Z** para deshacer el último cambio.
- Si ya guardaste, restaura la copia de respaldo.
- Revisa que cada texto siga entre comillas simples y que cada bloque conserve sus comas.
- En una foto o video, compara la ruta escrita en sitio.js con la carpeta y el nombre exacto del archivo.
- Si la página no carga, restaura la copia antes de seguir probando.
