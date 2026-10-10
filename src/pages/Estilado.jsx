import Pagina from '../components/Pagina'
import CodeBlock from '../components/CodeBlock'
import MetricCard from '../components/MetricCard'
import { ejModulo } from '../data/ejemplos'

/** Vista que contrasta CSS Modules, estilos inline y CSS global. */
function Estilado() {
  return (
    <Pagina titulo="Estrategias de Estilado" subtitulo="CSS Modules vs inline vs global">
      <CodeBlock titulo="CSS Modules: scope local con hash" codigo={ejModulo} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <MetricCard icono="🧩" titulo="CSS Modules" valor={1} unidad="clase con hash">
          <small>Usa la clase .card, pero el navegador la renombra y no choca con nadie.</small>
        </MetricCard>
        <div style={{ background: '#dbeafe', border: '2px solid #1d4ed8', borderRadius: '12px', padding: '16px' }}>
          <strong>🎯 Inline</strong>
          <p>Estilo en el atributo style. Rápido, pero sin :hover ni media queries.</p>
        </div>
        <div className="demoGlobal">
          <strong>🌍 Global</strong>
          <p>Clase .demoGlobal de global.css. Afecta a toda la app y puede colisionar.</p>
        </div>
      </div>
    </Pagina>
  )
}

export default Estilado
