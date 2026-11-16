import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Ash",
    age: 20
  }

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className='bg-slate-500 text-slate-900 px-200 rounded-xl mb-200'>Tailwind test</h1>
      <Card username="chai aur code" someObj={newArr} />
    </>
  )
}

export default App
