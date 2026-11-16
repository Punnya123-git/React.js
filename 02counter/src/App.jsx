import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  //let counter = 5;

  //useState is a hook which is used to manage the state of a component
  //it is used to store the value of a variable and update it when needed
  let [counter, setCounter] = useState(5); //useState is a function which takes an initial value as an argument and returns an array with two elements, the first element is the current value of the state and the second element is a function which is used to update the value of the state
  let [error, setError] = useState("");

  const addValue = () => {
    //counter += 1;
    setCounter(counter + 1) //or setCounter(counter);
    console.log("clicked", counter+1);
  } 

  const removeValue = () => {
    //counter -= 1;
    //setCounter(counter-1); //or setCounter(counter);
    if(counter <= 0){   
      setError("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
    setError("");
    console.log("clicked", counter-1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <p style={{ color: 'red' }}>{error}</p>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
