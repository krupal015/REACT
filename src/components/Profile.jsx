import React, { useState } from 'react'

const Profile = () => {
    const[name,setName] = useState("krupal");
    const[age,setAge]=useState(21);

    const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  return (
    <div>
      <h1>Profile</h1>
      <h2>Name : {name}</h2>
      <h2>Age:{age}</h2>

      <input type="text" value={newName} placeholder='Change Name' onChange={(e)=>setNewName(e.target.value)} />
      <button onClick={()=>{setName(newName); setNewName("");}}>Change Name</button>
<br />
<br />
       <input type="text" value={newAge} placeholder='Change Age' onChange={(e)=>setNewAge(e.target.value)} />
      <button onClick={()=>{setAge(newAge); setNewAge("")}}>Change Age</button>
    </div>
  )
}

export default Profile
