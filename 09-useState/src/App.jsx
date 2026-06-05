import React, { useState } from 'react'

const App = () => {

 const [counter, setCounter] = useState(0)

 function setCountI(){
  setCounter(counter+1)
 }
 function setCountD(){
setCounter(counter-1)
 }
  return (
    <div>
      <h1>Counter= {counter}</h1>
      <button onClick={setCountI}>Increase</button>
      <button onClick={setCountD}>Decrease</button>
    </div>


  )
}

export default App