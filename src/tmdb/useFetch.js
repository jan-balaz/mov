import { useState, useCallback } from "react"
import { createTmdbUrl } from "./tmdbUtils"

const useFetch = ({url, params}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)

    fetch(createTmdbUrl(url, params))
    .then((res) => {
      if (res.ok) {
        res.json().then((resData) => {
          setLoading(false)
          setData(resData)
        })
      } else {
        setError(true)
        setLoading(false)
      }
    })
    .catch(() => {
      setError(true)
      setLoading(false)
    })
  }, [url, params])

  return {data, loading, error, load}

}

export default useFetch
