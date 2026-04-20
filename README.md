# Simulacion, Consumo y Documentacion de API REST

Proyecto academico con React + Vite que integra una API REST simulada con JSON Server para gestionar eventos.

## Alcance de la actividad

La aplicacion permite:

- Listar eventos (GET)
- Crear eventos (POST)
- Eliminar eventos (DELETE)

Tambien incluye documentacion OpenAPI en YAML para visualizar endpoints en Swagger Editor.

## Arquitectura

- src/components: interfaz de usuario
- src/services: consumo de API con fetch
- db.json: datos mock para JSON Server
- docs/openapi.yaml: especificacion Swagger/OpenAPI
- docs/ENTREGA.md: documento de soporte para la entrega escrita

## Endpoints simulados

Base URL local:

- http://localhost:3001

Recursos:

- GET /eventos
- POST /eventos
- DELETE /eventos/{id}

## Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar API mock en una terminal:

```bash
npm run api
```

3. Iniciar front-end en otra terminal:

```bash
npm run dev
```

4. Abrir la URL indicada por Vite (normalmente http://localhost:5173)

## Variables de entorno

Puedes configurar la URL de la API copiando `.env.example`:

```env
VITE_API_URL=http://localhost:3001
```

## Swagger (OpenAPI)

Archivo de especificacion:

- docs/openapi.yaml

Para visualizarlo:

1. Abrir https://editor.swagger.io/
2. Copiar el contenido de `docs/openapi.yaml`
3. Pegar en el editor para ver endpoints y schemas

## Flujo de consumo de API en esta tematica

1. El componente principal de eventos llama `getEventos()` al cargar.
2. El servicio (`src/services/eventsService.js`) usa fetch para consultar `GET /eventos`.
3. El usuario llena el formulario y se envia `POST /eventos` con `postEvento()`.
4. La respuesta del POST se agrega al estado local con `useState`.
5. Al eliminar, se llama `removeEvento(id)` y se ejecuta `DELETE /eventos/{id}`.
6. Con cada respuesta, la interfaz se actualiza en tiempo real y muestra errores con try/catch.

## Evidencias sugeridas para la entrega

- Captura del listado de eventos
- Captura del formulario creando evento
- Captura eliminando un evento
- Captura de Swagger Editor mostrando los endpoints
- Enlace del repositorio en GitHub
