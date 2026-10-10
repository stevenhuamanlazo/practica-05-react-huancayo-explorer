import styles from './Footer.module.css'

/**
 * Pie de página.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido del pie
 */
function Footer({ children }) {
  return <footer className={styles.footer}>{children}</footer>
}

export default Footer
