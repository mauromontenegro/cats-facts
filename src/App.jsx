import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}'size=50&color=white&json=true`

export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact')

  /* La primera vez que se renderiza el componente, se hace el fetching de datos */
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  return (
    <main>
      <h1>
        Cat facts
      </h1>
      <p>{fact}</p>
    </main>
  )
}