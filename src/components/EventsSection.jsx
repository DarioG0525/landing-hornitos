import { useEffect, useMemo, useState } from 'react'
import { getEventos, postEvento, removeEvento } from '../services/eventsService'

const initialForm = {
  titulo: '',
  fecha: '',
  cupos: '20',
  modalidad: 'Presencial',
  organizador: '',
}

function EventsSection() {
  const [eventos, setEventos] = useState([])
  const [formData, setFormData] = useState(initialForm)
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const eventosOrdenados = useMemo(
    () => [...eventos].sort((a, b) => a.fecha.localeCompare(b.fecha)),
    [eventos],
  )

  useEffect(() => {
    async function loadEventos() {
      try {
        setLoading(true)
        setError('')
        const data = await getEventos()
        setEventos(Array.isArray(data) ? data : [])
      } catch (loadError) {
        setError(loadError.message || 'No fue posible cargar los eventos.')
      } finally {
        setLoading(false)
      }
    }

    loadEventos()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const resetFeedback = () => {
    setError('')
    setSuccess('')
  }

  const validateForm = () => {
    if (formData.titulo.trim().length < 4) {
      return 'El titulo debe tener al menos 4 caracteres.'
    }

    if (!formData.fecha) {
      return 'Selecciona una fecha para el evento.'
    }

    if (Number(formData.cupos) < 5) {
      return 'Los cupos deben ser minimo 5.'
    }

    if (formData.organizador.trim().length < 3) {
      return 'El organizador debe tener al menos 3 caracteres.'
    }

    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    resetFeedback()

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    try {
      setCreating(true)
      const nuevoEvento = await postEvento({
        ...formData,
        titulo: formData.titulo.trim(),
        organizador: formData.organizador.trim(),
        cupos: Number(formData.cupos),
      })

      setEventos((prev) => [nuevoEvento, ...prev])
      setFormData(initialForm)
      setSuccess('Evento creado con exito.')
    } catch (createError) {
      setError(createError.message || 'No fue posible crear el evento.')
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (id) => {
    resetFeedback()

    try {
      await removeEvento(id)
      setEventos((prev) => prev.filter((evento) => evento.id !== id))
      setSuccess('Evento eliminado correctamente.')
    } catch (deleteError) {
      setError(deleteError.message || 'No fue posible eliminar el evento.')
    }
  }

  return (
    <section id="eventos" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-5">
        <article className="rounded-3xl border border-[#9dc6b8] bg-white p-6 shadow-[0_18px_45px_rgba(22,72,55,0.14)] lg:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f6c54]">Nuevo evento</p>
          <h2 className="mt-3 text-3xl font-black text-[#163527]">Crea tu proxima experiencia</h2>
          <p className="mt-2 text-sm text-[#2e614d]">
            Completa los datos y publica tu evento en segundos.
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm font-semibold text-[#1a4030]" htmlFor="titulo">
              Titulo
              <input
                id="titulo"
                name="titulo"
                type="text"
                value={formData.titulo}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-[#b7d7cb] px-3 py-2 outline-none transition focus:border-[#1e7b5d]"
                placeholder="Ej: Meetup de React"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-[#1a4030]" htmlFor="fecha">
              Fecha
              <input
                id="fecha"
                name="fecha"
                type="date"
                value={formData.fecha}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-[#b7d7cb] px-3 py-2 outline-none transition focus:border-[#1e7b5d]"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-[#1a4030]" htmlFor="cupos">
              Cupos
              <input
                id="cupos"
                name="cupos"
                min="5"
                type="number"
                value={formData.cupos}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-[#b7d7cb] px-3 py-2 outline-none transition focus:border-[#1e7b5d]"
                required
              />
            </label>

            <label className="block text-sm font-semibold text-[#1a4030]" htmlFor="modalidad">
              Modalidad
              <select
                id="modalidad"
                name="modalidad"
                value={formData.modalidad}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-[#b7d7cb] px-3 py-2 outline-none transition focus:border-[#1e7b5d]"
              >
                <option>Presencial</option>
                <option>Virtual</option>
                <option>Hibrido</option>
              </select>
            </label>

            <label className="block text-sm font-semibold text-[#1a4030]" htmlFor="organizador">
              Organizador
              <input
                id="organizador"
                name="organizador"
                type="text"
                value={formData.organizador}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-[#b7d7cb] px-3 py-2 outline-none transition focus:border-[#1e7b5d]"
                placeholder="Ej: Comunidad Front-end"
                required
              />
            </label>

            <button
              type="submit"
              disabled={creating}
              className="w-full rounded-xl bg-[#1f7356] px-4 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#195f47] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {creating ? 'Guardando...' : 'Crear Evento'}
            </button>
          </form>
        </article>

        <article className="rounded-3xl border border-[#9dc6b8] bg-white p-6 shadow-[0_18px_45px_rgba(22,72,55,0.14)] lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#1f6c54]">Agenda activa</p>
              <h3 className="mt-2 text-3xl font-black text-[#163527]">Eventos programados</h3>
            </div>
            <span className="rounded-full bg-[#e9f7f1] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#1f6c54]">
              Total: {eventos.length}
            </span>
          </div>

          {error && <p className="mt-4 rounded-lg bg-red-100 px-3 py-2 text-sm font-semibold text-red-700">{error}</p>}
          {success && <p className="mt-4 rounded-lg bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">{success}</p>}

          {loading ? (
            <p className="mt-6 text-sm font-semibold text-[#456555]">Cargando eventos...</p>
          ) : eventosOrdenados.length === 0 ? (
            <p className="mt-6 text-sm font-semibold text-[#456555]">No hay eventos registrados.</p>
          ) : (
            <ul className="mt-6 space-y-3">
              {eventosOrdenados.map((evento) => (
                <li
                  key={evento.id}
                  className="rounded-2xl border border-[#d6ece2] bg-[#f7fffb] p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-lg font-black text-[#1a3d2e]">{evento.titulo}</p>
                      <p className="text-sm text-[#2f6450]">Organiza: {evento.organizador}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDelete(evento.id)}
                      className="rounded-lg border border-red-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-red-700 transition hover:bg-red-100"
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#436656]">
                    <span>Fecha: {evento.fecha}</span>
                    <span>Cupos: {evento.cupos}</span>
                    <span>Modalidad: {evento.modalidad}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  )
}

export default EventsSection