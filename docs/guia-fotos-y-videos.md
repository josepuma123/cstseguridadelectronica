# Fotos y videos en la página de CST

Sigue estos pasos cuando quieras mostrar una instalación o un equipo real. No necesitas cambiar el diseño: el espacio ya está preparado.

## Primero: prepara los archivos

1. Elige una foto o video aprobado por CST.
2. En el Explorador de archivos, abre `assets`, luego `images` y después `media`.
3. Copia el archivo dentro de `assets/images/media/`. Esta carpeta ya existe.
5. Ponle un nombre corto, sin espacios ni tildes. Ejemplos: `acceso-casa.jpg`, `instalacion-local.mp4`.

La ruta completa se escribe así:

```text
assets/images/media/acceso-casa.jpg
```

JPG, PNG y WebP funcionan para fotos. Para videos, usa MP4. Un archivo más liviano se abre más rápido en celulares. No uses imágenes o videos que CST no tenga permiso para publicar.

## Dónde cambiar la ilustración

La sección **“Siempre a la vista”** ya muestra el video `instalacion-local.mp4` con su imagen de portada. El código marca el espacio de multimedia con dos comentarios fáciles de encontrar:

```text
<!-- INICIO DEL BLOQUE MULTIMEDIA ... -->
          AQUÍ ESTÁ EL BLOQUE ACTUAL DE FOTO O VIDEO
<!-- FIN DEL BLOQUE MULTIMEDIA ... -->
```

### Pasos para reemplazarla

1. Haz una copia de `index.html` antes de empezar.
2. Abre `index.html` con Bloc de notas o un editor de texto.
3. Pulsa **Ctrl + F**, busca `INICIO DEL BLOQUE MULTIMEDIA` y deja el cursor en esa zona.
4. Selecciona el bloque completo desde `<div class="monitoring-visual">` hasta su `</div>` final, justo antes del comentario `FIN DEL BLOQUE MULTIMEDIA`.
5. Copia uno de los bloques de ejemplo de abajo y pégalo en ese lugar.
6. Si pegaste una foto, cambia el nombre del archivo y su texto `alt`. Si pegaste un video, cambia el nombre del MP4 y de la imagen de portada.
7. No borres los comentarios `INICIO` y `FIN`; así sabrás dónde hacer el siguiente cambio.
8. Pulsa **Ctrl + S**. Abre `index.html` con doble clic y pulsa **Ctrl + R** para ver el cambio.

> Si no estás seguro de qué `</div>` corresponde al bloque, no borres nada. Usa la copia de seguridad o pide ayuda: los bloques tienen otros elementos dentro.

## Bloque listo para una fotografía

Copia el bloque completo. Cambia `acceso-casa.jpg` por el nombre exacto del archivo que guardaste en `assets/images/media/`. Cambia también `alt` para describir la imagen.

```html
<div class="monitoring-visual">
  <div class="monitoring-media">
    <img
      class="monitoring-media__asset"
      src="assets/images/media/acceso-casa.jpg"
      alt="Cámara instalada por CST en el acceso de una vivienda"
      loading="lazy"
    />
  </div>
</div>
```

**Ejemplo:** si el archivo se llama `instalacion-local.webp`, cambia la ruta por `assets/images/media/instalacion-local.webp`. El texto `alt` debe explicar qué se ve, no repetir el nombre del archivo.

## Bloque listo para un video

Antes de pegarlo, copia el video y una imagen de portada a `assets/images/media/`. La portada puede ser una foto JPG del video. Cambia ambos nombres por los archivos reales.

```html
<div class="monitoring-visual">
  <div class="monitoring-media">
    <video
      class="monitoring-media__asset"
      controls
      preload="metadata"
      poster="assets/images/media/instalacion-portada.jpg"
      aria-label="Video de una instalación de seguridad electrónica"
    >
      <source src="assets/images/media/instalacion-local.mp4" type="video/mp4" />
      Tu navegador no puede reproducir este video.
    </video>
  </div>
</div>
```

- El botón **controls** permite reproducir, pausar y ajustar el volumen.
- **No añadas `autoplay`**: el video no debe empezar solo.
- Si no tienes una imagen de portada, elimina solamente la línea `poster="..."`.

## Si la foto no aparece

1. Comprueba que el archivo esté dentro de `assets/images/media/`.
2. Comprueba que el nombre de `src` sea idéntico al del archivo, incluida la extensión `.jpg`, `.png` o `.webp`.
3. Revisa que las carpetas se llamen exactamente `assets`, `images` y `media`.
4. Guarda `index.html` y recarga el navegador con **Ctrl + R**.

Para instrucciones más generales sobre la página, consulta [INICIO-AQUI.md](../INICIO-AQUI.md) y [guia-mantenimiento.md](guia-mantenimiento.md).
