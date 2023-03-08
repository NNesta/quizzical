import { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";

const Question = () => {
  const [checked, setChecked] = useState(false);
  const [newData, setNewData] = useState([]);
  function shuffleQuestion(array) {
    const length = array == null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = [...array];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  }
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=23&type=multiple")
      .then((re) => re.json())
      .then((result) =>
        setNewData(
          result.results.map((item, index) => ({
            question: item.question,
            choices: shuffleQuestion([
              ...item.incorrect_answers,
              item.correct_answer,
            ]),
            correct_answer: item.correct_answer,
            id: index,
          }))
        )
      );
  }, []);

  const [success, setSuccess] = useState(Array.from({ length: 5 }));

  return (
    <main className="bg-secondary-100 flex flex-col gap-2 lg:px-32 justify-center items-center text-primary-100 w-full min-h-screen mx-auto relative py-4">
      <img className="fixed top-0 right-0 hidden lg:block" src="/blobs.svg" />
      <img
        className="fixed bottom-0 left-0 hidden lg:block"
        src="/blobs_2.svg"
      />
      <div className="flex flex-col gap-4">
        {newData.map((item, index) => (
          <QuestionCard
            key={index}
            question={item.question}
            choices={item.choices}
            correct_answer={item.correct_answer}
            id={item.id}
            checked={checked}
            setSuccess={setSuccess}
          />
        ))}
      </div>
      {checked ? (
        <div className="flex items-center gap-16 max-w-96 mx-auto">
          <h1 className="text-primary-100 font-bold text-xl leading-4">
            <span>You scored</span>{" "}
            <span>
              {success.filter((x) => x).length}/{newData.length}
            </span>{" "}
            <span>correct answers</span>{" "}
          </h1>
          <button
            onClick={() => window.location.reload(false)}
            className="text-white bg-primary-200 rounded-xl lg:px-2 py-1"
          >
            Play again
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-16 max-w-96 mx-auto">
          <button
            onClick={() => {
              setChecked(true);
            }}
            className="text-white bg-primary-200 rounded-xl px-2 py-1"
          >
            Check answers
          </button>
        </div>
      )}
    </main>
  );
};

export default Question;
