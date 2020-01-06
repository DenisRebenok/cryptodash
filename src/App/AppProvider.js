import React, {useState, createContext} from 'react'

export const AppContext = createContext()

export default function AppProvider(props) {
  const [page, setPage] = useState('settings')
  const [firstVisit, setFirstVisit] = useState(true)

  const savedSettings = () => {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'))
    if (!cryptoDashData) {
      setPage('settings')
      setFirstVisit(true)
    }
  }

  const confirmFavorites = () => {
    setFirstVisit(false)
    setPage('dashboard')
    localStorage.setItem('cryptoDash', JSON.stringify({test: 'hello'}))
  }

  return (
    <AppContext.Provider value={{page, setPage, savedSettings, confirmFavorites, firstVisit}}>
      {props.children}
    </AppContext.Provider>
  )
}
