
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
   console.log(props.users)
  return (
    <div className='py-3 px-18 flex items-center gap-10 h-[90vh]'>
        <LeftContent/>
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content