import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Question from './Question';

export default function App() {
  return (
   <div>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='question' element={<Question/>} />
   </Routes>
   </div>
    
  )
}