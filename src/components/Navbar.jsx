import styles from './Navbar.module.css'

/**
 * Barra de pestañas.
 * @param {Object} props
 * @param {{id: string, texto: string}[]} props.secciones
 * @param {string} props.activa - id de la sección activa
 * @param {(id: string) => void} props.onCambiar
 */
function Navbar({ secciones, activa, onCambiar }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.marca}>🏔️ Huancayo Explorer</span>
      <div className={styles.tabs}>
        {secciones.map((s) => (
          <button
            key={s.id}
            onClick={() => onCambiar(s.id)}
            className={s.id === activa ? `${styles.tab} ${styles.activa}` : styles.tab}
          >
            {s.texto}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

