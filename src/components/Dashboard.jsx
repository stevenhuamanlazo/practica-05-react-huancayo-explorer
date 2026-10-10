const estiloSeccion = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '24px',
}

const estiloGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
}

/**
 * Contenedor principal del panel.
 * @param {Object} props
 * @param {string} props.titulo - Título del panel
 * @param {React.ReactNode} props.children - Componentes hijos a mostrar
 */
function Dashboard({ titulo, children }) {
  return (
    <section style={estiloSeccion}>
      <h2 style={{ color: '#7c2d12' }}>{titulo}</h2>
      <div style={estiloGrid}>{children}</div>
    </section>
  )
}

export default Dashboard