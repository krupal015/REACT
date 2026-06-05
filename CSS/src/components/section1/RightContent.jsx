
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div className='h-full w-3/4 p-6 flex flex-nowrap gap-5 overflow-x-auto  '>
     {props.users.map(function(elems,index){
      return <RightCard no={elems.no} img={elems.img} intro = {elems.intro} tag={elems.tag} />
     })}

    </div>
  )
}

export default RightContent