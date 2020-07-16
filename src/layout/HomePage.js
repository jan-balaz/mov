import React from 'react'
import useHomePageLoad from '../hooks/useHomePageLoad'
import PageTitle from '../component/shared/PageTitle'
import Navbar from '../component/shared/Navbar'
import Container from '../component/shared/Container'
import Carousel from '../component/carousel/Carousel'

const HomePage = () => {
  const {popularMovies, popularSeries, family, documentary} = useHomePageLoad()

  return (
    <>
      <Navbar />
      <Container>
        <PageTitle title='MovieApp' />
        <Carousel 
          title='Popular movies'
          items={popularMovies.data}
          onFinish={() => popularMovies.load()}
        />
        <Carousel 
          title='Popular series'
          items={popularSeries.data}
          onFinish={() => popularSeries.load()}
        />
        <Carousel 
          title='Family'
          items={family.data}
          onFinish={() => family.load()}
        />
        <Carousel 
          title='Documentary'
          items={documentary.data}
          onFinish={() => documentary.load()}
        />
      </Container>
    </>
  )
}

export default HomePage