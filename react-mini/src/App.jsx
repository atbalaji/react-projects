import { useState } from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/random-colour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Accordian />
    <RandomColor />
    </div>
  )
}

export default App;
