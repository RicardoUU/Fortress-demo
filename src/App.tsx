import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      change 08
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        i am test hotfix 04
        test 09
        test 10
        test 11
        test15
        test 17
        test 18 
        test 19 
        test 20
      </p>
      i ma chage 
      test test
      test dev 10
      test dev 11
    </>
  )
}

export default App
