import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
    return (
      <div className="absolute top-0 left-0 h-full w-full p-10 justify-between flex flex-col ">
                <h2 className="p-5 flex justify-center font-bold items-center h-5 w-5 bg-amber-50 rounded-full">{props.no}</h2>
                <div>
                    <p className="text-lg leading-relaxed text-white  mb-10 ">{props.intro}</p>
                    <div className=' flex justify-between'>
                        <button className="bg-blue-600 text-white font-medium rounded-full px-7 py-2">{props.tag}</button>
                        <button className="bg-blue-600 text-white font-medium rounded-full px-3 py-1" ><MoveRight className='text-9xl' /></button>
                    </div>
                </div>
            </div>
    )
}

export default RightCardContent