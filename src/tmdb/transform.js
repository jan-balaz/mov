const processResponse = (type) => (newData) => {
  if (newData === null || Object.keys(newData).length === 0) return
  return newData.results
    .map((result) => {
      const title = type === 'movie' ? result.title : result.name
      return {
        id: result.id,
        poster: result.poster_path,
        title,
        type
      }
    })
}

const processMovies = processResponse('movie')
const processSeries = processResponse('tv')

const processSearch = (newData) => {
  if (newData === null || Object.keys(newData).length === 0) return
  return newData.results
    .filter((result) => result.media_type === 'movie' || result.media_type === 'tv')
    .map((result) => {
      const title = result.media_type === 'movie' ? result.title : result.name
      return {
        id: result.id,
        poster: result.poster_path,
        title,
        type: result.media_type
      }
    })
}

export {processMovies, processSeries, processSearch}
