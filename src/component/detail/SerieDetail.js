import React from 'react'
import Navbar from '../shared/Navbar'
import Container from '../shared/Container'
import PageTitle from '../shared/PageTitle'
import { createTmdbImageUrl } from '../../tmdb/tmdbUtils'
import styles from './Detail.module.css'

const SerieDetail = ({data, onPlay}) => {
  return (
    <>
      <Navbar />
      <Container>
        <PageTitle title={data.name} />
        <div className={styles.poster}>
          <img src={createTmdbImageUrl(data.poster_path)} alt={data.title}/>
        </div>
        <div className={styles.info}>
          <p>Original title: {data.original_title}</p>
          <p>{data.overview}</p>
          <hr />
          <p>Language: {data.original_language}</p>
          <p>Genres: {data.genres.map((genre) => (
            <span key={genre.id} className={styles.listItem}>
              {genre.name}
            </span>
          ))}</p>
          <p>Seasons: {data.seasons.length}</p>
          <p>Production: {data.production_companies.map((country) => (
            <span key={country.id} className={styles.listItem}>
              {country.name}
            </span>
          ))}</p>
          <p>Release date: {data.release_date}</p>
          <button onClick={() => onPlay()} className={styles.button}>
            Watch now
          </button>
        </div>
      </Container>
    </>
  )
}

export default SerieDetail