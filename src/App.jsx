import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
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
      <Hero
        titulo="🏔️ Huancayo Explorer"
        subtitulo="Descubre la Ciudad Incontrastable: lugares, sabores y datos del valle del Mantaro."
      >
        <span>⛰️ 3 259 msnm</span>
        <span>📍 Valle del Mantaro</span>
        <span>🍲 Gastronomía andina</span>
      </Hero>
      <Navbar secciones={secciones} activa={activa} onCambiar={setActiva} />
      <main>
        <Vista />
      </main>
      <Footer>
        <p>🏔️ Huancayo Explorer · Práctica 05 · Desarrollo de Aplicaciones Web (IS093A)</p>
        <p>Universidad Nacional del Centro del Perú · React + Vite</p>
      </Footer>
    </>
  )
}

export default App
