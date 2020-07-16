import React, { useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ({onSearchQuery, defaultQuery}) => {

  const [query, setQuery] = useState(defaultQuery || '')

  const isDisabled = () => query.length < 2

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !isDisabled()) {
      e.preventDefault()
      onSearchQuery(query)
    }
  }
  

  return (
    <div className={styles.container}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        className={styles.input} />
      <button
        className={styles.button}
        disabled={isDisabled()}
        onClick={() => onSearchQuery(query)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar