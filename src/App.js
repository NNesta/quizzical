import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Question from "./Question";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="question" element={<Question />} />
      </Routes>
    </div>
  );
};
export default App;
