import { useState } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <SideBar></SideBar>

    </>
  )
}

export default App
