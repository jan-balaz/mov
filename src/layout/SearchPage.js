import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import useTmdbFetch from '../tmdb/useFetchList'
import Navbar from '../component/shared/Navbar'
import Container from '../component/shared/Container'
import PageTitle from '../component/shared/PageTitle'
import Carousel from '../component/carousel/Carousel'
import SearchBar from '../component/search/SearchBar'
import { processSearch } from '../tmdb/transform'
import Loading from '../component/shared/Loading'
import Error from '../component/shared/Error'

const SearchPage = () => {
  const {query} = useParams()
  const history = useHistory()

  const [fetchParams, setFetchParams] = useState([{
    url: '/search/multi',
    processResponse: processSearch
  }])

  const {data, loading, error, load, clear} = useTmdbFetch(fetchParams)

  useEffect(() => {
    if (query !== fetchParams[0]?.params?.query) {
      setFetchParams([{
        ...fetchParams[0],
        params: {query}
      }])
    }
  }, [query, fetchParams])

  useEffect(() => {
    if (query && query !== '' && query === fetchParams[0]?.params?.query) {
      clear()
      load()
    }
  }, [query, load, fetchParams, clear])

  const handleSearchQuery = (query) => history.push(`/search/query/${query}`)

  return (
    <>
      <Navbar />
      <Container>
        <PageTitle title='Search' />
        <SearchBar onSearchQuery={handleSearchQuery} defaultQuery={query} />
        {data.length !== 0 && 
          <Carousel
            title='Search results'
            items={data}
            onFinish={load}
          />
        }
        {loading && <Loading />}
        {error && <Error />}
      </Container>
    </>
  )
}

export default SearchPage
