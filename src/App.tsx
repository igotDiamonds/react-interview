import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ListComponent } from './components/ListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ListComponent/>
    </div>
  )
}

export default App
