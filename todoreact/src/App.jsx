import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/todo'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='height'>
    <Todo/>
    </div>
    
    </>
  )
}

export default App