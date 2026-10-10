import Pagina from '../components/Pagina'
import CodeBlock from '../components/CodeBlock'
import { ejHtml } from '../data/ejemplos'

/**
 * Elemento de checklist de validación.
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.detalle
 */
function Check({ titulo, detalle }) {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#f0fdf4', borderLeft: '4px solid #16a34a', borderRadius: '8px', padding: '10px 14px' }}>
      <span>✅</span>
      <div>
        <strong>{titulo}</strong>
        <div style={{ color: '#78716c', fontSize: '0.9rem' }}>{detalle}</div>
      </div>
    </div>
  )
}

/** Vista que explica Client-Side Rendering. */
function Csr() {
  return (
    <Pagina titulo="Client-Side Rendering (CSR)" subtitulo="El HTML llega vacío y React construye la página en el navegador">
      <Check titulo="HTML inicial vacío" detalle="View Page Source muestra <div id='root'></div> sin contenido" />
      <Check titulo="DOM inyectado" detalle="Elements muestra main, h1 y article creados por JavaScript" />
      <Check titulo="Árbol de componentes" detalle="React DevTools: App, Navbar y MetricCard con sus props" />
      <Check titulo="JS cargado" detalle="Network muestra main.jsx, App.jsx y react como módulos" />
      <Check titulo="Meta tags en index.html" detalle="viewport, description y title se leen antes de ejecutar JS" />
      <CodeBlock titulo="index.html - HTML inicial (CSR)" codigo={ejHtml} />
    </Pagina>
  )
}

export default Csr
