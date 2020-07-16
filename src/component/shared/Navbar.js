import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from './Container'

const Navbar = () => {

  return (
    <nav className={styles.container}>
      <Container className={styles.linksContainer}>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
      </Container>
    </nav>
  )
}

export default Navbar
