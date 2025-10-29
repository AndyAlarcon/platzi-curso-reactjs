import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"
import Counter from "./components/Counter"

function App() {
  const [count, setCount] = useState(0)
  const items = ['React', 'JavaScript', 'Vite'];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <ul>
          {
            items.map((item, index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </div>

      <Card  title="Card 1" description="This is a description for Card 1"/>
      <Card  title="Card 2" description="This is another description for Card 2"/>

      <Counter />
    </>
  )
}

export default App
