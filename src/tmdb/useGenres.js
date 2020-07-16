import { useState, useEffect } from "react"
import { createTmdbUrl } from "./tmdbUtils"


const useGenres = (url, genresNames) => {
  const [genres, setGenres] = useState()

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(createTmdbUrl(url))
        const resData = await res.json()
        const foundGenres = {}
        resData.genres.forEach(({id, name}) => {
          const lowerName = name.toLowerCase()
          genresNames.forEach((genreName) => {
            if (genreName === lowerName) {
              foundGenres[genreName] = id
            }
          })
        })
        setGenres(foundGenres)
      } catch (e) {}
    }
    fetchGenres()
  }, [url, genresNames])

  return genres
}

export default useGenres
