import { useState, useEffect } from "react";
import QuestionCard from "./components/QuestionCard";
import Loading from "./components/Loading";

const shuffleQuestion = (array) => {
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
};
const Question = () => {
  const [checked, setChecked] = useState(false);
  const [newData, setNewData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getQuestion = () => {
    setChecked(false);
    setIsLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&category=23&type=multiple")
      .then((re) => re.json())
      .then((result) => {
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
        );
        setTimeout(() => setIsLoading(false), 800);
      });
  };
  useEffect(() => {
    getQuestion();
  }, []);

  const [success, setSuccess] = useState(Array.from({ length: 5 }));

  return (
    <main className="bg-secondary-100 flex flex-col gap-2 px-4 lg:px-8   text-primary-100 w-full min-h-screen  relative py-2 lg:py-4">
      <img
        className="fixed top-0 right-0 hidden lg:block"
        src="/blobs.svg"
        alt=""
      />
      <img
        className="fixed bottom-0 left-0 hidden lg:block"
        src="/blobs_2.svg"
        alt=""
      />
      <h1 className="text-3xl font-bold mx-auto">Quizzical question</h1>
      <Loading isLoading={isLoading}>
        <div className="flex flex-col gap-4 lg:mx-80 my-8">
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
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16  lg:mx-96 my-8">
            <h1 className="text-primary-100 font-bold text-xl leading-4">
              <span>You scored</span>{" "}
              <span>
                {success.filter((x) => x).length}/{newData.length}
              </span>{" "}
              <span>correct answers</span>{" "}
            </h1>
            <button
              onClick={() => {
                setChecked(false);
                getQuestion();
              }}
              className="text-white bg-primary-200 rounded-xl px-2 py-1"
            >
              Play again
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-16 justify-center lg:mx-[600px]">
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
      </Loading>
    </main>
  );
};

export default Question;
