import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { ContadorApp } from './ContadorApp'
import { CondicionalTernario } from './CondicionalTernario'
import { Maps } from './Maps'
import { Practica } from './practicas/PracticaUseState'
import { PracticaListado } from './practicas/PracticaListado'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <PracticaListado/>
  </StrictMode>,
)

// pasamos como una prop el valor (value) (ContadorApp) para hacer el contador