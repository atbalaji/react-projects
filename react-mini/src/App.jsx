import { useState } from 'react'
import Accordian from './components/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Accordian />
    </div>
  )
}

export default App;
