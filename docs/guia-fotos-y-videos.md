# Guía sencilla para fotos y videos

Esta guía explica cómo cambiar la foto o el video de la sección **“Siempre a la vista”**. Solo modificarás un archivo de configuración y copiarás tu foto o video a la carpeta indicada. **No edites index.html ni estilos.css para cambiar la multimedia.**

## El recorrido

~~~text
  1. HAZ UN RESPALDO     2. COPIA EL ARCHIVO        3. CAMBIA 3 DATOS       4. GUARDA Y REVISA
  Duplica la carpeta  →  assets/images/media/  →  sitio.js: media       →  recarga la página
~~~

## Paso 1: prepara la foto o el video

1. Usa una foto o un video que CST tenga permiso para publicar.
2. Ponle un nombre corto, sin espacios ni tildes. Ejemplos: entrada-casa.webp o instalacion-nueva.mp4.
3. Copia el archivo dentro de assets/images/media/.
4. Para videos, usa formato MP4. Para fotos, usa JPG, PNG o WebP. Un archivo más pequeño cargará mejor en celulares.

La carpeta debe quedar así:

~~~text
PROPUESTA PARA LENNIS/
└── assets/
    └── images/
        └── media/
            ├── instalacion-local.mp4
            └── instalacion-local.webp
~~~

## Paso 2: abre la configuración

1. Haz una copia de respaldo de toda la carpeta del proyecto.
2. Abre assets/js/sitio.js con Bloc de notas o un editor de texto.
3. Pulsa **Ctrl + F** y busca media: {.
4. Verás estas líneas. Cambia solo el texto entre comillas:

~~~js
media: {
  type: 'video',
  src: 'assets/images/media/instalacion-local.mp4',
  poster: 'assets/images/media/instalacion-local.webp',
  alt: 'Video de una instalación de seguridad electrónica de CST',
},
~~~

## Para poner otro video

1. Mantén type en 'video'.
2. En src, escribe la ruta exacta del nuevo MP4.
3. En poster, escribe la ruta de una imagen de portada. Si no tienes portada, deja el valor vacío: poster: ''.
4. Cambia alt por una descripción breve del video.

Ejemplo:

~~~js
media: {
  type: 'video',
  src: 'assets/images/media/instalacion-nueva.mp4',
  poster: 'assets/images/media/portada-nueva.webp',
  alt: 'Video de cámaras instaladas en un negocio de Loreto',
},
~~~

El video tendrá controles para reproducir, pausar y ajustar el volumen. No comenzará solo.

## Para poner una fotografía

1. Cambia type a 'image'.
2. En src, escribe la ruta exacta de tu foto.
3. En alt, explica qué aparece en la fotografía. El texto ayuda a las personas que usan lectores de pantalla y a los buscadores.
4. poster se usa solo para videos; puedes dejarlo vacío.

Ejemplo:

~~~js
media: {
  type: 'image',
  src: 'assets/images/media/entrada-casa.webp',
  poster: '',
  alt: 'Cámara instalada por CST en la entrada de una vivienda',
},
~~~

## Paso 3: guarda y revisa

1. Pulsa **Ctrl + S**.
2. Abre index.html en el navegador y pulsa **Ctrl + R**.
3. Comprueba que se vea la foto o el video y que el video reproduzca con sonido.
4. Al publicar en GitHub Pages, sube tanto el cambio de assets/js/sitio.js como el archivo nuevo de assets/images/media/.

## Si no aparece

- Revisa que el archivo esté dentro de assets/images/media/.
- Compara cuidadosamente el nombre y la extensión en src con el nombre real del archivo.
- Conserva las comillas simples, las comas y las llaves del bloque.
- Si algo quedó mal, restaura la copia de respaldo y vuelve a intentarlo.

Para cambiar datos, preguntas frecuentes o reseñas, consulta [guia-mantenimiento.md](guia-mantenimiento.md). Para empezar, abre [INICIO-AQUI.md](../INICIO-AQUI.md).
