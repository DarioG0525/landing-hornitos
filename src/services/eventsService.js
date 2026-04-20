const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'
const EVENTS_ENDPOINT = `${API_BASE_URL}/eventos`

function buildApiError(status, payload) {
  if (payload && typeof payload === 'object' && payload.message) {
    return new Error(`Error ${status}: ${payload.message}`)
  }

  return new Error(`Error ${status}: no se pudo completar la solicitud`)
}

async function parseResponse(response) {
  const isJson = response.headers.get('content-type')?.includes('application/json')
  const payload = isJson ? await response.json() : null

  if (!response.ok) {
    throw buildApiError(response.status, payload)
  }

  return payload
}

export async function getEventos() {
  const response = await fetch(EVENTS_ENDPOINT)
  return parseResponse(response)
}

export async function postEvento(eventoData) {
  const response = await fetch(EVENTS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventoData),
  })

  return parseResponse(response)
}

export async function removeEvento(id) {
  const response = await fetch(`${EVENTS_ENDPOINT}/${id}`, {
    method: 'DELETE',
  })

  return parseResponse(response)
}