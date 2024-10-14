import { useState, useEffect } from 'react'
 
 /* Custom hook para manejar la lógica de setear la imagen cuando cambia el fact */
 export function useFactToImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
    /* Cada vez que se actualiza "fact", se busca la imagen */
    useEffect(() => {
      if (fact) {
        const firstWord = fact.split(' ')[0]
        /* Generación de la imagen con la primera palabra de la frase */
        const url = 'https://cataas.com/cat/says/' + firstWord + '?fontColor=white&fit=contain'
        setImageUrl(url)
      }
    }, [fact])
    return { imageUrl }
  }