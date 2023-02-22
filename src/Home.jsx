import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleClick = (event)=>{
       navigate('/question')
    }
  return (
    <main className="bg-secondary-100 text-primary-100 max-w-[550px] mx-auto my-20 aspect-square relative">
      <img className="absolute top-0 right-0" src="/blobs.svg"/>
      <img className="absolute bottom-0 left-0" src="/blobs_2.svg"/>
     <div className="flex flex-col items-center h-full justify-center gap-4 ">
    <h1 className=" font-bold text-[31.25px]">Quizzical</h1>
    <p className="text-[16px] mb-4">Some description if needed</p>
    <button onClick={handleClick} className="bg-primary-200 text-secondary-100 text-[16px] font-medium leading-[19.36px] rounded-[15px] w-[193px] h-[52px]">Start quiz</button>
     </div>
    </main>
  )
}

export default Home