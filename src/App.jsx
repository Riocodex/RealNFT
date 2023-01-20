import React, { useEffect } from 'react'
import AppRouter from './router'
import './choices.min.css'

const App = () => {
  useEffect(() => {
    document.getElementById('theme-opt').href = './css/style.min.css'
  }, [])

  return <AppRouter />
}

export default App
