import { useFactToImage } from './hooks/useFactToImage'
import './App.css'
import { useCatFact } from './hooks/useCatFact'

export function App() {
  const {fact, getRandomFact} = useCatFact()
  const {imageUrl} = useFactToImage({fact})

  /* Función que maneja el click del botón */
  const handleClick = () => {
    getRandomFact();
  }

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