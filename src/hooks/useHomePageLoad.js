import { useContext, useMemo, useEffect } from "react"
import { MovieContext } from "../context/MovieContext"
import { TMDB_URLS } from "../tmdb/tmdbUtils"
import { processMovies, processSeries } from "../tmdb/transform"
import useFetchList from "../tmdb/useFetchList"

const useHomePageLoad = () => {
  const {movieGenres, serieGenres} = useContext(MovieContext)

  const popularMoviesParams = useMemo(() => ([
    {
      url: TMDB_URLS.POPULAR_MOVIES,
      processResponse: processMovies
    }
  ]), [])

  const popularSeriesParams = useMemo(() => ([
    {
      url: TMDB_URLS.POPULAR_SERIES,
      processResponse: processSeries
    }
  ]), [])

  const documentaryParams = useMemo(() => ([
    {
      url: TMDB_URLS.DISCOVER_MOVIES,
      params: {with_genres: movieGenres?.documentary},
      processResponse: processMovies
    },
    {
      url: TMDB_URLS.DISCOVER_SERIES,
      params: {with_genres: serieGenres?.documentary},
      processResponse: processSeries
    }
  ]), [movieGenres, serieGenres])

  const familyParams = useMemo(() => ([
    {
      url: TMDB_URLS.DISCOVER_MOVIES,
      params: {with_genres: movieGenres?.family},
      processResponse: processMovies
    },
    {
      url: TMDB_URLS.DISCOVER_SERIES,
      params: {with_genres: serieGenres?.family},
      processResponse: processSeries
    }
  ]), [movieGenres, serieGenres])

  const popularMovies = useFetchList(popularMoviesParams)
  const popularSeries = useFetchList(popularSeriesParams)
  const documentary = useFetchList(documentaryParams)
  const family = useFetchList(familyParams)

  const loadPopularMovies = popularMovies.load
  const loadPopularSeries = popularSeries.load
  const loadFamily = family.load
  const loadDocumentary = documentary.load

  useEffect(() => {
    if (movieGenres && serieGenres) {    
      loadPopularMovies()
      loadPopularSeries()
      loadDocumentary()
      loadFamily()
    }
  }, [movieGenres, serieGenres, loadPopularMovies, loadPopularSeries, loadDocumentary, loadFamily])

  return {
    popularMovies,
    popularSeries,
    family,
    documentary
  }
}

export default useHomePageLoad
