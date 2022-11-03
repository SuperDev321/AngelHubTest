import { useState, useEffect } from 'react'

const usePortfolios = () => {
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    fetch('/api/portfolios')
      .then((response) => {
        if (response.status === 200) return response.json()
        throw Error('Wrong API')
      })
      .then((response) => {
        if (response.data) {
          setPortfolios(response.data)
        }
      })
      .catch(() => {})
  }, [])

  return portfolios
}

export default usePortfolios
