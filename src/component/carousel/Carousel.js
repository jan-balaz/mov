import React, { useRef, useEffect, useCallback } from 'react'
import styles from './Carousel.module.css'
import CarouselItem from './CarouselItem'

const Carousel = ({title, items, onClick, onFinish}) => {
  const containerRef = useRef(null)

  const handleScroll = useCallback((event) => {
    const {scrollLeft, scrollWidth, clientWidth} = event.target
    if (scrollWidth - scrollLeft - clientWidth < 5) {
      onFinish()
    }
  }, [onFinish])

  useEffect(() => {
    const element = containerRef.current
    const handler = (e) => handleScroll(e)
    element.addEventListener('scroll', handler)
    return () => element.removeEventListener('scroll', handler)
  }, [containerRef, handleScroll])


  return (
    <div>
      <span className={styles.title}>{title}</span>
      <div className={styles.container} ref={containerRef}>
      {items.length === 0 && <span>No items</span>}
      {items.map((item) => (
          <CarouselItem 
            key={`${item.type}-${item.id}`}
            {...item}
            onClick={() => onClick(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
