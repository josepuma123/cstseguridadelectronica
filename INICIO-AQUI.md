# CST Seguridad Electrónica — empieza aquí

Esta guía es para hacer cambios sencillos sin saber programación. Si algo no te queda claro, detente y consulta a quien mantiene la web antes de borrar líneas.

## El recorrido más seguro

```text
  1. HAZ UNA COPIA       2. ABRE EL ARCHIVO       3. CAMBIA SOLO EL DATO       4. GUARDA Y REVISA
  Duplica la carpeta  →  Busca el nombre abajo →  No borres comillas/comas →  Abre index.html
```

## ¿Qué archivo debo abrir?

```text
📁 PROPUESTA PARA LENNIS
├── 📄 index.html                    Contenido y secciones de la página
├── 📄 INICIO-AQUI.md                Esta guía rápida
├── 📄 LEEME-PRIMERO.txt            Recordatorio de inicio
├── 📁 assets
│   ├── 📁 css/estilos.css           Colores y apariencia
│   ├── 📁 js/sitio.js               Contactos, redes, mapa y formulario
│   ├── 📁 images/brand              Logotipo y favicon activos
│   ├── 📁 images/media              Fotos y videos de la página
│   └── 📄 site.webmanifest          Iconos para dispositivos móviles
├── 📁 docs
│   ├── 📄 guia-mantenimiento.md     Guía completa de los archivos
│   └── 📄 guia-fotos-y-videos.md    Pasos para cambiar multimedia
└── 📁 fuentes                       Originales; no se suben a la web
    ├── 📁 identidad/originales      Logos y favicon recibidos originalmente
    └── 📁 referencias               Banner de ejemplo recibido
```

### 1. Haz una copia antes de editar

1. Abre el Explorador de archivos de Windows.
2. Haz clic derecho en la carpeta `PROPUESTA PARA LENNIS` y elige **Copiar**.
3. Haz clic derecho en un lugar seguro y elige **Pegar**.
4. Ponle a la copia un nombre fácil, por ejemplo `Respaldo CST antes de cambios`.

Si algo sale mal, puedes volver a los archivos de esa copia.

### 2. Abre un archivo sin cambiar su formato

1. Haz clic derecho en `assets/js/sitio.js` o `index.html`.
2. Elige **Abrir con → Bloc de notas** o un editor de texto.
3. No uses Word para guardar estos archivos: Word puede cambiar las comillas y el formato.
4. Pulsa **Ctrl + F**, escribe la palabra indicada en esta guía y pulsa **Enter** para encontrar el lugar exacto.

> **Regla de oro:** cambia el texto que está entre comillas. Conserva las comillas, las comas y las llaves que ya están alrededor.

### 3. Actualiza datos de contacto

1. Abre `assets/js/sitio.js` con Bloc de notas.
2. Pulsa **Ctrl + F** y busca `CST_SETTINGS`.
3. Busca el dato que vas a cambiar, por ejemplo `hours:`.
4. Reemplaza solo el contenido entre comillas.
5. Pulsa **Ctrl + S** para guardar.

Así se ve un horario. Sustituye el texto entre comillas; deja la coma al final:

```js
hours: "Lunes a viernes, 08:30 a 17:30",
```

Los datos disponibles se muestran en el sitio. La dirección y la ciudad activan el mapa. El formulario usa WhatsApp; si no hay WhatsApp, usa el correo configurado.

| Busca esto en `assets/js/sitio.js` | Escribe aquí |
| --- | --- |
| `address:` | Dirección exacta y referencias de CST. |
| `city:` | Ciudad y país. |
| `phoneFixed:` | Teléfono fijo, si existe. |
| `phoneMobile:` | Celular corporativo; si queda vacío se reutiliza el WhatsApp. |
| `whatsapp:` | Número con código de país, solo dígitos: sin `+`, espacios ni guiones. |
| `email:` | Correo oficial para recibir solicitudes. |
| `hours:` | Horario comercial y horario de soporte, si son distintos. |

### 4. Reemplaza el logotipo o el favicon

#### Logotipo de la página

```text
📁 assets/images/brand → 🖼️ reemplaza logo-cst.png → conserva exactamente el nombre → 🔄 recarga la página
```

1. Abre `assets/images/brand`.
2. Copia allí el nuevo logotipo en formato PNG, preferiblemente con fondo transparente y proporción horizontal similar al actual.
3. Ponle exactamente el nombre `logo-cst.png` y acepta **Reemplazar el archivo**.
4. El encabezado y el pie de página usan el mismo archivo; no tienes que modificar el código.

#### Favicon: icono de la pestaña y del celular

1. Pide o descarga un paquete de favicon con versiones SVG, PNG, ICO y para Apple/Android.
2. Abre `assets/images/brand` y reemplaza los archivos de icono por los nuevos con los mismos nombres.
3. Conserva estos nombres: `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `favicon.ico`, `apple-touch-icon.png`, `android-chrome-192x192.png` y `android-chrome-512x512.png`.
4. No cambies `assets/site.webmanifest`; ya apunta a los iconos móviles.
5. Guarda y, en el navegador, pulsa **Ctrl + F5** para actualizar el icono almacenado.

> Si solo recibes un archivo SVG, reemplaza `favicon.svg`. Los PNG e ICO son versiones de respaldo y pueden conservar el icono anterior hasta que recibas el paquete completo.

### 5. Activa una red social nueva

1. En `assets/js/sitio.js`, busca `socials:`.
2. Encuentra la red, por ejemplo `instagram:`.
3. Entre las comillas, pega la dirección completa del perfil oficial, empezando por `https://`.
4. Guarda con **Ctrl + S**.

```js
instagram: "https://www.instagram.com/tu-perfil-oficial",
```

Los iconos de LinkedIn, Facebook, Instagram y TikTok ya están dibujados con la apariencia de esas redes. Cuando pegas una URL válida, se activa el icono. Si CST crea otra red que todavía no aparece, pide que añadan su icono oficial en `index.html` antes de pegar el enlace.

### 6. Añade una foto o un video

Sigue la [guía de fotos y videos](docs/guia-fotos-y-videos.md). En resumen:

```text
📷 Elige el archivo → 📁 Guárdalo en assets/images/media → 🔎 Busca INICIO DEL BLOQUE MULTIMEDIA
→ Copia el bloque de foto/video de la guía → 💾 Guarda → 🔄 Recarga index.html
```

No borres los comentarios `INICIO DEL BLOQUE MULTIMEDIA` y `FIN DEL BLOQUE MULTIMEDIA`: sirven como marcas para encontrar el lugar correcto.

### 7. Revisa cómo quedó

1. Guarda los cambios.
2. Abre `index.html` con doble clic. Se verá en el navegador.
3. Para ver cambios nuevos, vuelve al navegador y pulsa **Ctrl + R**.
4. Si publicas la web, también debes subir los archivos actualizados al servicio donde está alojada.

### SEO: textos que aparecen en Google

Si necesitas cambiar cómo se presenta CST en buscadores, abre `index.html` y busca el comentario `SEO` al comienzo:

- Cambia el título y la descripción por información real y breve.
- Si cambias el título o la descripción, cambia también las etiquetas `og:` y `twitter:` que están justo ahí.
- Conserva un solo título principal `<h1>` en la página; las secciones usan `<h2>`.
- Cada foto nueva debe conservar un `alt` que explique qué se ve.
- La etiqueta de dominio público se completa cuando CST tenga su sitio publicado; no uses una ruta de tu PC.

## Si la página se desordena

- Pulsa **Ctrl + Z** inmediatamente para deshacer el último cambio.
- Si ya cerraste el archivo, recupera la copia que hiciste en el paso 1.
- No borres las comillas `"`, las comas `,`, las llaves `{ }` ni los comentarios grandes en mayúsculas.
- Si ves texto raro o la página no abre, no sigas borrando: restaura la copia y pide ayuda.

Para instrucciones detalladas, abre [la guía de mantenimiento](docs/guia-mantenimiento.md). Para cambiar fotografías y videos, abre [la guía de fotos y videos](docs/guia-fotos-y-videos.md).
