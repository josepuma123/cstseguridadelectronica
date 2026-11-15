# CST Seguridad Electrónica — empieza aquí

Esta guía es para hacer cambios sencillos sin saber programación. Para la mayoría de las actualizaciones, abre solo **assets/js/sitio.js**. No necesitas modificar la estructura HTML ni los estilos para cambiar los datos y el contenido normal de la página.

## El recorrido más seguro

~~~text
  1. HAZ UNA COPIA       2. ABRE sitio.js         3. CAMBIA SOLO EL DATO       4. GUARDA Y REVISA
  Duplica la carpeta  →  Busca CST_SETTINGS  →  No borres comas ni comillas → Ctrl + S y recarga
~~~

## ¿Qué hay dentro del proyecto?

~~~text
📁 PROPUESTA PARA LENNIS
├── 📄 index.html                    Estructura de las secciones y ajustes SEO
├── 📄 INICIO-AQUI.md                Esta guía rápida
├── 📄 LEEME-PRIMERO.txt             Recordatorio de inicio
├── 📁 assets
│   ├── 📁 css/estilos.css           Colores y apariencia
│   ├── 📁 js/sitio.js               Datos y textos editables de la página
│   ├── 📁 images/brand              Logotipo y favicon activos
│   ├── 📁 images/media              Fotos y videos de la página
│   └── 📄 site.webmanifest          Iconos para dispositivos móviles
├── 📁 docs
│   ├── 📄 guia-mantenimiento.md     Guía completa para administrar contenido
│   └── 📄 guia-fotos-y-videos.md    Pasos para cambiar multimedia
└── 📁 fuentes                       Originales; no se suben a la web
~~~

## 1. Haz una copia antes de editar

1. Abre el Explorador de archivos de Windows.
2. Haz clic derecho en PROPUESTA PARA LENNIS y elige **Copiar**.
3. Haz clic derecho en un lugar seguro y elige **Pegar**.
4. Ponle a la copia un nombre fácil, por ejemplo Respaldo CST antes de cambios.

## 2. Abre el archivo de configuración

1. Haz clic derecho en assets/js/sitio.js.
2. Elige **Abrir con → Bloc de notas** o un editor de texto.
3. No uses Word para guardar este archivo.
4. Pulsa **Ctrl + F**, escribe CST_SETTINGS y pulsa **Enter**.
5. Reemplaza solo el texto entre comillas simples. Conserva comillas, comas y llaves.
6. Al terminar, pulsa **Ctrl + S**.

Ejemplo: cambia solo el horario dentro de las comillas:

~~~js
hours: 'Lunes a viernes, 08:30 a 17:30',
~~~

## 3. ¿Qué puedes actualizar en sitio.js?

| Busca este nombre | Puedes cambiar |
| --- | --- |
| address, city, province, country | Dirección, ciudad, provincia y país. Estos datos forman la búsqueda del mapa. |
| serviceArea | Cantones y zonas de atención que se muestran desde la portada. |
| phoneFixed, phoneMobile, whatsapp, email | Números y correo de contacto. |
| hours | Horario comercial y de soporte. |
| socials | Enlaces oficiales de LinkedIn, Facebook, Instagram y TikTok. |
| services | Títulos y descripciones de las tarjetas de servicio. |
| infrastructure | Componentes de la instalación, por ejemplo UPS y cableado de cobre. |
| audiences | Textos para hogares, negocios, empresas e instituciones. |
| media | Foto o video destacado. |
| faqs | Preguntas y respuestas frecuentes. |
| testimonials | Opiniones reales autorizadas por sus clientes. |

Para ver ejemplos de cada cambio, abre [la guía completa de mantenimiento](docs/guia-mantenimiento.md).

## 4. Reemplaza el logotipo o el favicon

### Logotipo de la página

~~~text
📁 assets/images/brand → 🖼️ reemplaza logo-cst.png → conserva el nombre → 🔄 recarga la página
~~~

1. Abre assets/images/brand.
2. Copia allí el nuevo logotipo en PNG, preferiblemente con fondo transparente y forma horizontal.
3. Ponle exactamente el nombre logo-cst.png y acepta **Reemplazar el archivo**.
4. El encabezado y el pie de página usan el mismo archivo.

### Favicon: icono de la pestaña y del celular

1. Reemplaza los archivos de icono de assets/images/brand por el nuevo paquete.
2. Conserva estos nombres: favicon.svg, favicon-16x16.png, favicon-32x32.png, favicon.ico, apple-touch-icon.png, android-chrome-192x192.png y android-chrome-512x512.png.
3. No cambies assets/site.webmanifest.
4. Guarda y pulsa **Ctrl + F5** en el navegador para actualizar el icono almacenado.

## 5. Activa una red social

1. En assets/js/sitio.js, busca socials:.
2. Encuentra la red, por ejemplo instagram:.
3. Pega entre las comillas la dirección completa del perfil oficial, empezando por https://.
4. Guarda con **Ctrl + S**.

Deja vacío el perfil si todavía no existe. El icono se activa automáticamente al escribir el enlace oficial.

## 6. Añade una foto o un video

~~~text
📷 Elige una imagen o video aprobado
                 ↓
📁 Cópialo dentro de assets/images/media/
                 ↓
📝 Actualiza media en assets/js/sitio.js
                 ↓
💾 Guarda y recarga la página
~~~

Sigue los ejemplos de [la guía de fotos y videos](docs/guia-fotos-y-videos.md). No necesitas reemplazar bloques HTML.

## 7. Revisa cómo quedó

1. Guarda los cambios.
2. Abre index.html en el navegador y pulsa **Ctrl + R**.
3. Comprueba que el texto, el enlace, la foto o el video se vean bien.
4. Para publicar, sube index.html y la carpeta assets al servicio donde está alojada la página.

## SEO: título, descripción e imágenes compartidas

Estos son ajustes técnicos poco frecuentes. Si solo vas a cambiar los datos habituales, no necesitas abrir index.html.

- El título y la descripción se encuentran al principio de index.html, junto al comentario SEO.
- Conserva un solo título principal H1 y usa H2 para los títulos de cada sección.
- Toda foto informativa debe incluir texto alternativo alt que explique qué muestra.
- Cuando exista un dominio público de CST, actualiza también las direcciones canonical, og:url y og:image. No uses una ruta de tu computadora ni direcciones de ejemplo.

## Si la página se desordena

- Pulsa **Ctrl + Z** inmediatamente para deshacer el último cambio.
- Si ya guardaste, restaura la copia de respaldo.
- No borres comillas simples, comas ni llaves de la configuración.
- Si una foto o video no aparece, verifica que el nombre de archivo en sitio.js sea igual al nombre en assets/images/media/.

