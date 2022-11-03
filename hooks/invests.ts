import { useState, useEffect } from 'react'

const useInvests = () => {
  const [invests, setInvests] = useState([])

  useEffect(() => {
    fetch('/api/invests')
      .then((response) => {
        if (response.status === 200) return response.json()
        throw Error('Wrong API')
      })
      .then((response) => {
        if (response.data) {
          setInvests(response.data)
        }
      })
      .catch(() => {})
  }, [])

  return invests
}

export default useInvests
