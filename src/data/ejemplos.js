export const ejPadre = `// App.jsx - Componente padre
<Dashboard titulo="Huancayo en cifras">
  {metricas.map((m) => (
    <MetricCard
      key={m.id}
      icono={m.icono}
      titulo={m.titulo}
      valor={m.valor}
      unidad={m.unidad}
    >
      {/* Children: contenido anidado */}
      {m.nota && <small>{m.nota}</small>}
    </MetricCard>
  ))}
</Dashboard>`

export const ejHijo = `// MetricCard.jsx - Componente hijo
/**
 * @param {Object} props
 * @param {string} props.titulo
 * @param {number} props.valor
 * @param {React.ReactNode} [props.children]
 */
function MetricCard({ icono, titulo, valor, unidad, children }) {
  return (
    <article className={styles.card}>
      <h3>{titulo}</h3>
      <p>{valor} {unidad}</p>
      {children}
    </article>
  )
}`

export const ejModulo = `/* MetricCard.module.css */
.card {
  background: #fff7ed;
  border-left: 6px solid #c2410c;
}
/* En el navegador se vuelve: _card_x7k2p_1 */`

export const ejHtml = `<!-- index.html - HTML inicial (CSR) -->
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Huancayo Explorer" />
    <title>Huancayo Explorer</title>
  </head>
  <body>
    <div id="root"></div> <!-- vacío inicialmente -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
