import React from 'react'
import './App.css'
import WelcomeMessage from './WelcomeMessage'
import AppLayout from './AppLayout'

export default function App() {
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  )
}
