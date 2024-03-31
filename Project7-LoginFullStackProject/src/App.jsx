import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Link className='links' to="/register">Register</Link>
        <Link className='links' to="/login">Login</Link>
      </div>
    </>
  )
}

export default App
