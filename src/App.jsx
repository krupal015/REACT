
import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import Profile from './components/Profile'
import ShoppingList from './components/ShoppingList'
const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <Counter />
     <ToDoList />
     <Profile />
     <ShoppingList />
    </div>
  )
}

export default App











// import React, { useState } from 'react'


// const App = () => {

//   const[name,setName] = useState( () => {
//     const savedName = localStorage.getItem("name");
//     return savedName ? JSON.parse(savedName) : " ";
//  } )
//   return (
//     <div>
//       <h1>{name}</h1>
      
//     </div>
//   )
// }

// export default App







// const App = () => {

// const [friends,makeFriends] = useState(["krupal","krishna"])

// const newfriendadded = () =>makeFriends([...friends,"tanmay","devang","chirag"]);  
//   const oldfriendremoved = () => makeFriends(friends.filter((f) => f != "tanmay"))
//   return (
//     <div>
//       {friends.map((f) => (<li key={Math.random()}>{f}</li>))}

//       <button onClick={newfriendadded}>Add Friend</button>
//       <button onClick={oldfriendremoved}>Remove Friend</button>

      
//     </div>
    
//   )
// }

// export default App




// const App = () => {

// const [count,setCount] = useState(0);

// const increaseCount = () => setCount( count+1 )
// const decreaseCount = () =>  setCount( count+1 )
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>+</button>
//       <button onClick={decreaseCount}>-</button>
//     </div>
//   )
// }

// export default App







// import Weather from './components/weather'

// const App = () => {
//   return (
//     <div>
//       <Weather temp={14} />
//     </div>
//   )
// }

// export default App







// const Validpassword = () => <h1>Password is correct</h1>;
// const Invalidpassword = () => <h1>Password is Incorrect</h1>;


// const Password =  ({isValid}) =>{
//   if(isValid){
//     return <Validpassword />;
//   }else{
//   return <Invalidpassword />
//   }
// }
// const App = () => {
//   return (
//     <div>
//      <Password isValid={true} />
//     </div>
//   )
// }

// export default App
