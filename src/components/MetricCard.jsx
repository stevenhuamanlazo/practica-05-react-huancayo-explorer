import styles from './MetricCard.module.css'

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
    <article className={styles.card}>
      <span className={styles.icono}>{icono}</span>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.valor}>
        <strong>{valor}</strong> {unidad}
      </p>
      <div className={styles.nota}>{children}</div>
    </article>
  )
}

export default MetricCard