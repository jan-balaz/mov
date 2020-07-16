import React from 'react'
import styles from './CarouselItem.module.css'
import { Link } from 'react-router-dom'
import { createTmdbImageUrl } from '../../tmdb/tmdbUtils'

const CarouselItem = ({title, poster, type, id}) => {
  return (
    <Link to={`/${type}/${id}`} className={styles.container}>
      <img src={createTmdbImageUrl(poster)} alt={title} className={styles.poster}/>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  )
}

export default CarouselItem
