export const lugares = [
  { id: 1, icono: '🏞️', nombre: 'Torre Torre', distanciaKm: '3.5–4', imagen: '/img/torre-torre.jpg', descripcion: 'Formaciones rocosas con mirador sobre la ciudad. A pie hay una ruta más directa de unos 2.5 a 3 km.', actividades: ['Caminata', 'Fotografía', 'Mirador'] },
  { id: 2, icono: '⛪', nombre: 'Convento de Ocopa', distanciaKm: 28.4, imagen: '/img/convento-ocopa.jpg', descripcion: 'Convento franciscano en Concepción, con biblioteca y museo. Unos 35 a 45 minutos en colectivo o auto.', actividades: ['Visita guiada', 'Museo', 'Biblioteca'] },
  { id: 3, icono: '🌊', nombre: 'Laguna de Paca', distanciaKm: '48–50', imagen: '/img/laguna-paca.jpg', descripcion: 'Laguna en Jauja rodeada de restaurantes y paseos en bote. Aproximadamente 1 hora en colectivo o auto.', actividades: ['Paseo en bote', 'Gastronomía', 'Descanso'] },
]

export const platos = [
  { id: 1, icono: '🥔', nombre: 'Papa a la huancaína', precio: 12, imagen: '/img/papa-huancaina.jpg', descripcion: 'Papas con crema de ají amarillo y queso.', ingredientes: ['Papa', 'Ají amarillo', 'Queso fresco'] },
  { id: 2, icono: '🍖', nombre: 'Pachamanca', precio: 22, imagen: '/img/pachamanca.jpg', descripcion: 'Carnes y tubérculos cocidos bajo tierra con piedras calientes.', ingredientes: ['Carnes', 'Papa', 'Habas', 'Hierbas'] },
  { id: 3, icono: '🍲', nombre: 'Cuy colorado', precio: 22, imagen: '/img/cuy-colorado.jpg', descripcion: 'Cuy en salsa de ají panca y maní.', ingredientes: ['Cuy', 'Ají panca', 'Maní'] },
  { id: 4, icono: '🥣', nombre: 'Patasca', precio: 12, imagen: '/img/patasca.jpg', descripcion: 'Caldo de mondongo con mote, plato tradicional del valle.', ingredientes: ['Mondongo', 'Mote', 'Carne'] },
  { id: 5, icono: '🍖', nombre: 'Carnero al palo', precio: 20, imagen: '/img/carnero-al-palo.jpg', descripcion: 'Carnero preparado al palo, servido con papa y choclo.', ingredientes: ['Carnero', 'Papa', 'Choclo'] },
  { id: 6, icono: '🐟', nombre: 'Trucha frita', precio: 18, imagen: '/img/trucha-frita.jpg', descripcion: 'Trucha frita con arroz, papa, choclo y ensalada criolla.', ingredientes: ['Trucha', 'Arroz', 'Papa', 'Choclo'] },
]

export const metricas = [
  { id: 1, icono: '⛰️', titulo: 'Altitud', valor: 3259, unidad: 'msnm', nota: 'Plaza Constitución. El casco urbano varía entre 3 250 y 3 260 m.' },
  { id: 2, icono: '🌡️', titulo: 'Temperatura media', valor: 11.7, unidad: '°C', nota: 'Rango típico de 11 a 12 °C (registros SENAMHI e IGP).' },
  { id: 3, icono: '☀️', titulo: 'Máxima media', valor: '18–20', unidad: '°C', nota: 'Puede llegar a 22–23 °C en días despejados.' },
  { id: 4, icono: '❄️', titulo: 'Mínima media', valor: '4–5', unidad: '°C', nota: 'Cerca de 0 °C entre junio y agosto.' },
  { id: 5, icono: '📍', titulo: 'Lugares destacados', valor: lugares.length, unidad: 'sitios' },
  { id: 6, icono: '🍲', titulo: 'Platos emblemáticos', valor: platos.length, unidad: 'platos' },
]

