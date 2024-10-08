const CAT_ENDPOINT_RANDOM_FACT_URL = 'https://catfact.ninja/fact'

/* Función que busca un hecho y lo setea */
export const fetchRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            return fact
        })
}

/* Función que devuelve la url de una imagen de gatitos con la primera palabra de una frase */
export const getImageUrl = (phrase) => {
    if (phrase) {
        const firstWord = phrase.split(' ')[0]
        /* Generación de la imagen con la primera palabra de la frase */
        return 'https://cataas.com/cat/says/' + firstWord + '?fontColor=white&fit=contain'
    }
}