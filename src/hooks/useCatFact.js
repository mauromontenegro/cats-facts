import { useState, useEffect } from 'react'
import { fetchRandomFact } from '../services/functions'

  /* Custom hook para obtener un fact */
  export function useCatFact () {
    const [fact, setFact] = useState()
    /* Función para obtener un fact */
    const getRandomFact = () => {
      fetchRandomFact().then(newFact => setFact(newFact))
    }
    /* La primera vez que se renderiza el componente, se hace el fetching de datos */
    useEffect(() => {
      getRandomFact()
    }, [])
    /* Devuelve el fact y la función para obtener un nuevo fact */
    return { fact, getRandomFact }
  }