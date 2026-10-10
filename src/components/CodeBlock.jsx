import styles from './CodeBlock.module.css'

/**
 * Bloque de código con título.
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.codigo
 */
function CodeBlock({ titulo, codigo }) {
  return (
    <div className={styles.bloque}>
      <p className={styles.titulo}>{titulo}</p>
      <pre className={styles.codigo}>{codigo}</pre>
    </div>
  )
}

export default CodeBlock
