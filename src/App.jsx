import Dashboard from './components/Dashboard'
import MetricCard from './components/MetricCard'
import { metricas, lugares } from './data/lugares'

function App() {
  return (
    <main>
      <h1>🏔️ Huancayo Explorer</h1>

      <Dashboard titulo="Huancayo en cifras">
        {metricas.map((m) => (
          <MetricCard
            key={m.id}
            icono={m.icono}
            titulo={m.titulo}
            valor={m.valor}
            unidad={m.unidad}
          >
            {m.nota && <small>{m.nota}</small>}
          </MetricCard>
        ))}
      </Dashboard>

      <Dashboard titulo="Lugares imperdibles">
        {lugares.map((l) => (
          <MetricCard
            key={l.id}
            icono={l.icono}
            titulo={l.nombre}
            valor={l.distanciaKm}
            unidad="km aprox. del centro"
          >
            <p>{l.descripcion}</p>
            <ul>
              {l.actividades.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </MetricCard>
        ))}
      </Dashboard>

      <p className="card" style={{ textAlign: 'center' }}>
        Soy un elemento con la clase global .card
      </p>
    </main>
  )
}

export default App