import { useState, useEffect } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  /* La primera vez que se renderiza el componente, se hace el fetching de datos */
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then(res => res.json())
      .then(data => {
        const { fact } = data;
        setFact(fact);
    })
  }, [])

  /* Cada vez que se actualiza "fact", se busca la imagen */
  useEffect(() => {
    if (fact) {
      const firstWord = fact.split(' ')[0];
      /* Generación de la imagen con la primera palabra del hecho */
      setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontColor=white&fit=contain`)
    }
  }, [fact])

  return (
    <main>
      <h1>
        Cat facts
      </h1>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={imageUrl} alt={'Image of ' + fact}/>}
    </main>
  )
}