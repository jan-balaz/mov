const createTmdbUrl = (path, params) => {
  let queryParams = ''
  params && Object.entries(params).forEach(([key, value]) => {
    queryParams += '&' + key + '=' + value
  });

  return process.env.REACT_APP_TMDB_BASE_URL
    + path 
    + '?api_key=' + process.env.REACT_APP_TMDB_API_KEY
    + queryParams
}

const createTmdbImageUrl = (path) => {
  const secure_img_path = path || DEFAULT_IMG
  return process.env.REACT_APP_TMDB_BASE_IMAGE_URL
    + secure_img_path
    + '?api_key=' + process.env.REACT_APP_TMDB_API_KEY
}

const DEFAULT_IMG = '/xDp6vlqWwjnJc0TlF87dmuT9DMK.jpg'

const TMDB_URLS = {
  POPULAR_MOVIES: '/movie/popular',
  POPULAR_SERIES: '/tv/popular',
  DISCOVER_MOVIES: '/discover/movie',
  DISCOVER_SERIES: '/discover/tv',
  MOVIES_GENRES: '/genre/movie/list',
  SEREIS_GENRES: '/genre/tv/list'
}

export {createTmdbUrl, createTmdbImageUrl, TMDB_URLS}