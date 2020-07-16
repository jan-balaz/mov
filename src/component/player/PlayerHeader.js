import React, { useEffect, useState } from 'react'
import styles from './PlayerHeader.module.css'

const PlayerHeader = ({title, onClose, parent}) => {
  const [show, setShow] = useState(null)

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        setShow(mutation.target.getAttribute(mutation.attributeName))
      })
    })

    observer.observe(parent, {attributes: true, attributeFilter: ['shown']})

    return () => {
      observer.disconnect()
    }
  }, [parent])


  return (
    <div className={styles.container} style={{opacity: show ? 1 : 0}}>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>{title}</h3>
        <span onClick={() => onClose()} className={styles.closeButton}>X</span>
      </div>
    </div>
  )
}

export default PlayerHeader
