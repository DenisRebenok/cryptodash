import React from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'
import AppBar from './AppBar'

export default function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeMessage />
    </AppLayout>
  )
}
