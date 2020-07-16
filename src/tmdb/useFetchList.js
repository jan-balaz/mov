import { useRef, useState, useCallback } from "react"
import { createTmdbUrl } from "./tmdbUtils"

const useFetchList = (locations) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const pageRef = useRef(1)

  const clear = useCallback(() => {
    pageRef.current = 1
    setData([])
  }, [])

  const load = useCallback(async () => {
    setLoading(true)

    locations.forEach(({url, params, processResponse}) => {
      fetch(createTmdbUrl(url, {...params, page: pageRef.current}))
      .then((res) => {
        if (res.ok) {
          res.json().then((resData) => {
            setLoading(false)
            setData((data) => {
              const newState = [...data, ...processResponse(resData)]
              return newState
            })
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
    })
    pageRef.current++
  }, [locations])

  return {data, loading, error, load, clear}

}

export default useFetchList
