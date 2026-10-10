# 🏔️ Huancayo Explorer

Panel turístico de la ciudad de **Huancayo** (3 259 msnm) hecho con **React + Vite**.
Práctica 05 · Desarrollo de Aplicaciones Web (IS093A) · Universidad Nacional del Centro del Perú.

## 🌐 Demo en vivo

**https://stevenhuamanlazo.github.io/practica-05-react-huancayo-explorer/**

## ✨ Qué incluye

- **Panel:** métricas de Huancayo, lugares imperdibles (Torre Torre, Convento de Ocopa, Laguna de Paca) y sabores típicos (papa a la huancaína, pachamanca, cuy colorado).
- **Componentes:** explica el paso de props y children con el código real del proyecto.
- **Estilado:** contrasta CSS Modules, estilos inline y CSS global, y muestra la colisión de estilos.
- **CSR:** checklist de validación de Client-Side Rendering.

## 🧩 Conceptos aplicados

| Concepto | Dónde se ve |
|---|---|
| Vite + React (sin create-react-app) | `package.json`, `vite.config.js` |
| `App` como orquestador | `src/App.jsx` |
| Props y `children` con JSDoc | `MetricCard`, `Dashboard`, `Hero`, `Footer`, `Pagina` |
| CSS Modules | `*.module.css` por componente |
| Estilos inline | `Dashboard.jsx` |
| CSS global (solo reglas base) | `src/styles/global.css` |
| Client-Side Rendering | `index.html` con `div#root` vacío |
| Estado mínimo | un `useState` en `App` para cambiar de pestaña |

## 📁 Estructura

    src/
      components/   Navbar, Hero, Footer, Dashboard, MetricCard, Pagina, CodeBlock
      pages/        Panel, Componentes, Estilado, Csr
      data/         lugares.js, ejemplos.js
      styles/       global.css
      App.jsx       orquestador
      main.jsx      punto de entrada
    public/img/     fotografías e ilustraciones

## 🚀 Ejecutar en local

Requiere Node.js 20 o superior.

    npm install
    npm run dev

Para generar la versión de producción:

    npm run build
    npm run preview

## 🔄 Despliegue

Cada `push` a la rama `main` publica automáticamente la web en GitHub Pages mediante GitHub Actions (`.github/workflows/deploy.yml`).

## 📝 Notas

- Las distancias y los precios son referenciales.
- Fotografías: [indicar autor o fuente].

## 👤 Autor

**Steven Huamanlazo Pariona**
Programa de Ingeniería de Sistemas · UNCP
