import React, { useState } from 'react'

const App = () => {

//  const [counter, setCounter] = useState(0)

//  function setCountI(){
//   setCounter(counter+1)
//  }
//  function setCountD(){
// setCounter(counter-1)
//  }

 const [num,setNum] = useState({username:'sarthak',age:20})

function btnClicked(){
const newNum = {...num}
newNum.username = "krupal"
newNum.age=21;
setNum(newNum)
}

  return (
    <div>
      {/* <h1>Counter= {counter}</h1>
      <button onClick={setCountI}>Increase</button>
      <button onClick={setCountD}>Decrease</button> */}

        
          <h1>{num.username}{num.age}</h1>
          <button onClick={btnClicked}>change</button>
          
        
    </div>


  )
}

export default App