import React, {useState} from 'react';
import QuestionCard from './components/QuestionCard';
import data from './data';

const Question = () => {
  const [checked, setChecked] = useState(false);
  const [passed, setPassed] = useState(0);
  return (
    <main className="bg-secondary-100 flex flex-col gap-2 px-32 justify-center text-primary-100 max-w-[750px] mx-auto my-20 aspect-square relative">
      <img className="absolute top-0 right-0" src="/blobs.svg"/>
      <img className="absolute bottom-0 left-0" src="/blobs_2.svg"/>
     <div className="flex flex-col my-4  gap-4 ">
    {
      data.map((item, index) =>  <QuestionCard key={index} question={item.question} choices={item.choices} correct={item.correct} checked={checked} setPassed={setPassed}/>)
        
      
    }
     </div>
   {  checked?<div className='flex items-center gap-16 w-[354px] mx-auto'>
      <h1 className='text-primary-100 font-[700] text-[12.8px] leading-[15.49px]'><span>You scored</span> <span>{passed}/{data.length}</span> <span>correct answers</span> </h1>
      <button onClick={()=>window.location.reload(false)} className='text-white bg-primary-200 rounded-[10px] px-2 py-1'>Play again</button>
     </div>:<div className='flex items-center gap-16 w-[354px] mx-auto'>
     <button onClick={()=>setChecked(true)} className='text-white bg-primary-200 rounded-[10px] px-2 py-1'>Check answers</button>

      </div>}
    </main>
  )
}

export default Question