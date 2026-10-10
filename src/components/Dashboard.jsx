/**
 * Contenedor principal del panel.
 * @param {Object} props
 * @param {string} props.titulo - Título del panel
 * @param {React.ReactNode} props.children - Componentes hijos a mostrar
 */
function Dashboard({ titulo, children }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <div>{children}</div>
    </section>
  )
}

export default Dashboard