import { useState } from 'react'
import Navbar from './components/Navbar'
import Panel from './pages/Panel'
import Componentes from './pages/Componentes'
import Estilado from './pages/Estilado'
import Csr from './pages/Csr'

const secciones = [
  { id: 'panel', texto: '📊 Panel' },
  { id: 'componentes', texto: '🧩 Componentes' },
  { id: 'estilado', texto: '🎨 Estilado' },
  { id: 'csr', texto: '⚡ CSR' },
]

const vistas = { panel: Panel, componentes: Componentes, estilado: Estilado, csr: Csr }

function App() {
  const [activa, setActiva] = useState('panel')
  const Vista = vistas[activa]

  return (
    <>
      <h1>🏔️ Huancayo Explorer</h1>
      <Navbar secciones={secciones} activa={activa} onCambiar={setActiva} />
      <main>
        <Vista />
      </main>
    </>
  )
}

export default App
