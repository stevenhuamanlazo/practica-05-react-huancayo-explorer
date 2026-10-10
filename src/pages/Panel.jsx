import Dashboard from '../components/Dashboard'
import MetricCard from '../components/MetricCard'
import { metricas, lugares, platos } from '../data/lugares'

/** Vista principal: métricas, lugares y platos de Huancayo. */
function Panel() {
  return (
    <>
      <Dashboard titulo="Huancayo en cifras">
        {metricas.map((m) => (
          <MetricCard key={m.id} icono={m.icono} titulo={m.titulo} valor={m.valor} unidad={m.unidad}>
            {m.nota && <small>{m.nota}</small>}
          </MetricCard>
        ))}
      </Dashboard>

      <Dashboard titulo="Lugares imperdibles">
        {lugares.map((l) => (
          <MetricCard key={l.id} icono={l.icono} titulo={l.nombre} valor={l.distanciaKm} unidad="km aprox. del centro" imagen={l.imagen}>
            <p>{l.descripcion}</p>
            <ul>
              {l.actividades.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </MetricCard>
        ))}
      </Dashboard>

      <Dashboard titulo="Sabores de Huancayo">
        {platos.map((p) => (
          <MetricCard key={p.id} icono={p.icono} titulo={p.nombre} valor={p.precio} unidad="S/ referencial" imagen={p.imagen}>
            <p>{p.descripcion}</p>
            <ul>
              {p.ingredientes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </MetricCard>
        ))}
      </Dashboard>
    </>
  )
}

export default Panel
