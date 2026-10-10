import Dashboard from './components/Dashboard'
import MetricCard from './components/MetricCard'
import { metricas } from './data/lugares'

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
    </main>
  )
}

export default App