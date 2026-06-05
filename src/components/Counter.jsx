import React, { useState } from 'react'

const Counter = () => {
 const [count,setcount] = useState(0)

const countIncreaser = () => setcount(count + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countIncreaser}>Increase Count</button>
    </div>
  )
}

export default Counter
