import React from 'react'

const App = () => {

  return (
    <div  className = 'box'>
     <div onMouseMove={(elem)=>{
       console.log(elem);
     }}
     >
     </div>
    </div>
  )
}

export default App