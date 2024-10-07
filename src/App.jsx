import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=white&json=true`

export function App() {
  const [fact, setFact] = useState('lorem ipsum cat fact')
  const [imageUrl, setImageUrl] = useState()

  /* La primera vez que se renderiza el componente, se hace el fetching de datos */
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
        const firstWord = fact.split(' ')[0];
        /* Generación de la imagen con el hecho */
        setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontColor=white&fit=contain`)
    })
  }, [])

  return (
    <main>
      <h1>
        Cat facts
      </h1>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={imageUrl}/>}
    </main>
  )
}