# Documento de soporte - Simulacion y consumo de API REST

## 1) Flujo de datos entre front-end y API

<!-- PEGAR PANTALLAZO AQUI: Vista general de la aplicacion abierta en el navegador (seccion principal + formulario + listado). -->

1. El componente de interfaz solicita datos al servicio.
2. El servicio ejecuta `fetch` hacia `http://localhost:3001/eventos`.
3. La respuesta actualiza el estado local de React (`useState`).
4. El estado se renderiza en la vista como listado de eventos.
5. En creacion, el front envia un `POST` y agrega el nuevo evento al estado.
6. En eliminacion, el front ejecuta `DELETE` y remueve el item del estado.

## 2) Uso de fetch para consumo de servicios

<!-- PEGAR PANTALLAZO AQUI: Codigo del archivo src/services/eventsService.js mostrando getEventos, postEvento y removeEvento. -->

El consumo HTTP se centralizo en `src/services/eventsService.js` para separar responsabilidades:

- `getEventos()` usa `GET /eventos`
- `postEvento(data)` usa `POST /eventos`
- `removeEvento(id)` usa `DELETE /eventos/{id}`

Esto evita duplicar logica HTTP en componentes de UI.

## 3) Manejo de estado y control de errores

<!-- PEGAR PANTALLAZO AQUI: Codigo del componente src/components/EventsSection.jsx donde se ve useState y try/catch. -->

<!-- PEGAR PANTALLAZO AQUI: Mensaje de error o exito visible en la interfaz despues de una accion (crear o eliminar). -->

En `src/components/EventsSection.jsx` se aplica:

- `useState` para `eventos`, `formData`, `loading`, `creating`, `error`, `success`.
- `try/catch` en carga inicial, creacion y eliminacion.
- Retroalimentacion visual por mensajes de error y exito.
- Validaciones basicas de formulario antes de enviar `POST`.

## 4) Organizacion del proyecto (arquitectura)

<!-- PEGAR PANTALLAZO AQUI: Estructura de carpetas en VS Code mostrando src/components, src/services, db.json y docs/openapi.yaml. -->

- `src/components`: componentes visuales (UI)
- `src/services`: capa de acceso a API (fetch)
- `db.json`: datos simulados para JSON Server
- `docs/openapi.yaml`: documentacion OpenAPI (Swagger)

Esta estructura mantiene separacion entre presentacion y logica de datos.

## 5) Documentacion Swagger (YAML)

<!-- PEGAR PANTALLAZO AQUI: Swagger Editor con el contenido de docs/openapi.yaml cargado y los endpoints visibles. -->

Se construyo manualmente `docs/openapi.yaml` con:

- URL del servidor (`http://localhost:3001`)
- Endpoints (`/eventos`, `/eventos/{id}`)
- Metodos (`GET`, `POST`, `DELETE`)
- Esquemas (`Evento`, `EventoInput`)

Abrir en Swagger Editor para visualizar endpoints y tomar capturas.

## 6) Dificultades y soluciones

- Dificultad: organizar la interfaz sin mezclar logica HTTP con UI.
  Solucion: separar componentes (interfaz) y services (fetch).

- Dificultad: mostrar claramente errores de red o respuestas fallidas.
  Solucion: usar try/catch y mensajes visuales de error o exito.

- Dificultad: evitar envios invalidos en el formulario.
  Solucion: aplicar validaciones basicas antes de ejecutar POST.

## 7) Evidencias a anexar en la entrega

Agregar capturas de pantalla de:

1. Listado de eventos cargado desde API (GET)
  <!-- PEGAR PANTALLAZO AQUI: Lista de eventos visible en la tarjeta "Eventos programados". -->
2. Creacion de evento con formulario (POST)
  <!-- PEGAR PANTALLAZO AQUI: Formulario completo antes de enviar y/o resultado despues de crear. -->
3. Eliminacion de evento (DELETE)
  <!-- PEGAR PANTALLAZO AQUI: Evento eliminado de la lista y mensaje de confirmacion en pantalla. -->
4. Visualizacion de `openapi.yaml` en Swagger Editor
  <!-- PEGAR PANTALLAZO AQUI: Panel de Swagger con /eventos (GET, POST) y /eventos/{id} (DELETE). -->

## 8) Enlace del repositorio

- Repositorio GitHub: _pendiente de agregar por el equipo_
