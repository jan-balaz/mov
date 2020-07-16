import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useTmdbFetch from '../tmdb/useFetch'
import ShakaPlayer from '../component/player/ShakaPlayer'
import SerieDetail from '../component/detail/SerieDetail'
import MovieDetail from '../component/detail/MovieDetail'
import Error from '../component/shared/Error'
import Loading from '../component/shared/Loading'

const DetailPage = ({type}) => {
  const {id} = useParams()
  const {data, loading, error, load} = useTmdbFetch({url: `/${type}/${id}`})
  const [player, setPlayer] = useState(false)

  useEffect(() => {
    load()
  }, [load, id])

  if (error) return (
    <Error />
  )

  if (loading || !data) return (
    <Loading />
  )

  if (player) return (
    <ShakaPlayer 
      title={type === 'movie' ? data.title : data.name}
      onClose={() => setPlayer(false)}
    />
  )

  return type === 'movie' ? (
    <MovieDetail data={data} onPlay={() => setPlayer(true)} />
  ) : (
    <SerieDetail data={data} onPlay={() => setPlayer(true)} />
  )
}

export default DetailPage
