import React from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
// import { AppContext } from "./AppProvider";

export default function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  )
}
