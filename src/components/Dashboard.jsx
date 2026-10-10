const estiloSeccion = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '32px 24px 8px',
}

const estiloTitulo = {
  margin: '0 0 20px',
  paddingLeft: '14px',
  borderLeft: '6px solid #d97706',
  color: '#431407',
  fontSize: '1.6rem',
}

const estiloGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '20px',
}

/**
 * Contenedor principal del panel (estilos inline).
 * @param {Object} props
 * @param {string} props.titulo - Título de la sección
 * @param {React.ReactNode} props.children - Tarjetas u otro contenido
 */
function Dashboard({ titulo, children }) {
  return (
    <section style={estiloSeccion}>
      <h2 style={estiloTitulo}>{titulo}</h2>
      <div style={estiloGrid}>{children}</div>
    </section>
  )
}

export default Dashboard
