import { useState, useEffect } from 'react'
import './App.css'
import { fetchRandomFact, getImageUrl } from './services/functions'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  /* Función que maneja el click del botón */
  const handleClick = () => {
    fetchRandomFact().then(newFact => setFact(newFact))
  }

  /* La primera vez que se renderiza el componente, se hace el fetching de datos */
  useEffect(() => {
    fetchRandomFact().then(newFact => setFact(newFact))
  }, [])

  /* Cada vez que se actualiza "fact", se busca la imagen */
  useEffect(() => {
    if (fact) {
      setImageUrl(getImageUrl(fact))
    }
  }, [fact])

  return (
    <main>
      <h1>
        Cat facts
      </h1>
      <button onClick={handleClick}>Refresh fact</button>
     {fact && <p>{fact}</p>}
     {imageUrl && <img src={imageUrl} alt={'Image of ' + fact}/>}
    </main>
  )
}