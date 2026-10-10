import Pagina from '../components/Pagina'
import CodeBlock from '../components/CodeBlock'
import { ejPadre, ejHijo } from '../data/ejemplos'

/** Vista que explica props y children con el código real del proyecto. */
function Componentes() {
  return (
    <Pagina titulo="Arquitectura de Componentes" subtitulo="Flujo de datos con Props y Children">
      <p>
        Los datos bajan de padre a hijo (flujo unidireccional). El hijo no modifica sus props
        (inmutabilidad) y el contenido anidado llega por <strong>children</strong>.
      </p>
      <CodeBlock titulo="Ejemplo: Paso de Props" codigo={ejPadre} />
      <CodeBlock titulo="Ejemplo: Recepción de Props" codigo={ejHijo} />
    </Pagina>
  )
}

export default Componentes
