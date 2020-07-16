import React, { createContext } from "react";
import useGenres from "../tmdb/useGenres";
import {TMDB_URLS} from '../tmdb/tmdbUtils'

export const MovieContext = createContext()

const SEARCHED_GENRES = ['family', 'documentary']

const MovieContextProvider = (props) => {

  const movieGenres = useGenres(TMDB_URLS.MOVIES_GENRES, SEARCHED_GENRES)
  const serieGenres = useGenres(TMDB_URLS.SEREIS_GENRES, SEARCHED_GENRES)
  
  const context = {
    movieGenres,
    serieGenres
  }

  return (
    <MovieContext.Provider value={context}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider
