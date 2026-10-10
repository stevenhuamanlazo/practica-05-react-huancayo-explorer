/**
 * Tarjeta que muestra una métrica turística.
 * @param {Object} props
 * @param {string} props.icono - Emoji de la métrica
 * @param {string} props.titulo - Nombre de la métrica
 * @param {number} props.valor - Valor numérico
 * @param {string} props.unidad - Unidad de medida
 * @param {React.ReactNode} [props.children] - Contenido anidado opcional
 */
function MetricCard({ icono, titulo, valor, unidad, children }) {
  return (
    <article>
      <span>{icono}</span>
      <h3>{titulo}</h3>
      <p>
        <strong>{valor}</strong> {unidad}
      </p>
      {children}
    </article>
  )
}

export default MetricCard