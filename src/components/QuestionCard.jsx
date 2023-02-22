import React,{useState} from 'react'

const QuestionCard = ({question, choices, correct, checked,setPassed}) => {
  const [submitted, setSubmitted] = useState(null);
  // if(checked&&correct==choices[submitted]){
  //   console.log(submitted)
  //  setPassed(prev=>prev+1) 
  // }
  console.log(checked)
  return (
    <div className='w-[399px] flex flex-col gap-2 border-b-[1px] py-4 px-2'>
    <h1>{question}</h1>
    <ul className='flex items-center gap-8'>
      {choices.map((choice, index) => <li key={index} className={`border whitespace-nowrap border-primary-100 rounded-[7.94px] px-2 py-1 ${submitted==index&&!checked&&"bg-secondary-200"} ${correct===choice&&checked&&"bg-success-100"} ${submitted==index&&correct!==choice&&checked&&"bg-danger-100"} `} disabled={checked}><button onClick={()=>setSubmitted(index)} className="text-[16px] text-primary-100">{choice}</button></li>)}
    </ul>
    </div>
  )
}

export default QuestionCard