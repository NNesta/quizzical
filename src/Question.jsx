import React, {useState, useEffect} from 'react';
import QuestionCard from './components/QuestionCard';
const _ = require('lodash');


const Question = () => {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([])
  const [newData, setNewData] = useState([])
  useEffect(()=>{
    fetch('https://opentdb.com/api.php?amount=5&category=23&type=multiple').then(re=>re.json()).then(result=>setNewData(result.results.map((item,index)=>({question:item.question, choices:_.shuffle([...item.incorrect_answers,item.correct_answer]), correct_answer:item.correct_answer, id:index})))
    )
  },[])

  const [success, setSuccess] = useState(Array.from({length:5}));
  console.log(success)
  // console.log(data.results&&data.results[0])
  return (
    <main className="bg-secondary-100 flex flex-col gap-2 px-32 justify-center text-primary-100 w-full h-fit mx-auto  relative">
      <img className="absolute top-0 right-0" src="/blobs.svg"/>
      <img className="absolute bottom-0 left-0" src="/blobs_2.svg"/>
     <div className="flex flex-col my-4  gap-4 ">
    {
      newData.map((item, index) =>  <QuestionCard key={index} question={item.question} choices={item.choices} correct_answer={item.correct_answer} id={item.id}   checked={checked} setSuccess={setSuccess} />)
        
      
    }
     </div>
   {  checked?<div className='flex items-center gap-16 w-[354px] mx-auto'>
      <h1 className='text-primary-100 font-[700] text-[12.8px] leading-[15.49px]'><span>You scored</span> <span>{success.filter(x=>x).length}/{newData.length}</span> <span>correct answers</span> </h1>
      <button onClick={()=>window.location.reload(false)} className='text-white bg-primary-200 rounded-[10px] px-2 py-1'>Play again</button>
     </div>:<div className='flex items-center gap-16 w-[354px] mx-auto'>
     <button onClick={()=>{setChecked(true);}} className='text-white bg-primary-200 rounded-[10px] px-2 py-1'>Check answers</button>

      </div>}
    </main>
  )
}

export default Question