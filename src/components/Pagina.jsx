import styles from './Pagina.module.css'

/**
 * Contenedor de una vista con título y subtítulo.
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.subtitulo
 * @param {React.ReactNode} props.children
 */
function Pagina({ titulo, subtitulo, children }) {
  return (
    <section className={styles.pagina}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.sub}>{subtitulo}</p>
      <div className={styles.contenido}>{children}</div>
    </section>
  )
}

export default Pagina
