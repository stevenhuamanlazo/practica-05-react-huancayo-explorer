import styles from './Hero.module.css'

/**
 * Portada principal de la aplicación.
 * @param {Object} props
 * @param {string} props.titulo
 * @param {string} props.subtitulo
 * @param {React.ReactNode} [props.children] - Insignias u otro contenido anidado
 */
function Hero({ titulo, subtitulo, children }) {
  return (
    <header className={styles.hero}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <p className={styles.subtitulo}>{subtitulo}</p>
      <div className={styles.insignias}>{children}</div>
    </header>
  )
}

export default Hero
