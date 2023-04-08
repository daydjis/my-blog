import { useState } from 'react'
import './App.css'

const Home = () => {
  const [count, setCount] = useState(0)
  const decrementCount = (x: number) => {
    if (x === 1) {
      return 1
    } else {

      return x + decrementCount(x - 1)
    }
  }

  return (
    <div className='main-page'>
      <h1>Vite + React</h1>
      <div className='card'>
        <h1> count is {count} </h1>
        <button className='btn-success' onClick={() => setCount((count) => count + 1)}>
          Прибавить
        </button>
        <button className='btn-danger' onClick={() => decrementCount(100)}>
          Убавить
        </button>
      </div>
    </div>
  )
}

export default Home
