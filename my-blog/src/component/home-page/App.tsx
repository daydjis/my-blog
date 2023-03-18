import { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)
    const decrementCount = () => {
      if(count > 0) {
        setCount((count) => count - 1)
      }
    }

    return (
        <div className="main-page">
            <h1>Vite + React</h1>
            <div className="card">
                <h1> count is {count} </h1>
                <button
                    className="btn-success"
                    onClick={() =>
                        setCount((count) => count + 1)
                    }
                >
                    Прибавить
                </button>
                <button
                    className="btn-danger"
                    onClick={() =>
                        decrementCount()
                    }
                >
                    Убавить
                </button>
            </div>
        </div>
    )
}

export default App
