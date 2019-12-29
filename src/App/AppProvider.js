import React, {useState, createContext} from 'react'

export const AppContext = createContext()

export default function AppProvider(props) {
  const [page, setPage] = useState('dashboard')

  return (
    <AppContext.Provider value={{page, setPage}}>
      {props.children}
    </AppContext.Provider>
  )
}
