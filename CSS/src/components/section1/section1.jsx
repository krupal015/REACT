
import Navbar from './navbar'
import Page1Content from './Page1Content'
const section1 = (props) => {

  //  console.log(props.users)

  return (
   
    <div>
      <Navbar/>
      <Page1Content users={props.users}/>
    </div>
  )
}

export default section1