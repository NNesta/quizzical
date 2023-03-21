import { useState, useEffect } from "react";

const QuestionCard = ({
  question,
  choices,
  correct_answer,
  id,
  checked,
  setSuccess,
}) => {
  const [submitted, setSubmitted] = useState(null);
  useEffect(() => {
    setSubmitted((submitted) => (!checked ? null : submitted));
  }, [checked]);
  return (
    <div className="flex w-full  flex-col gap-2 border-b py-4 px-2">
      <h1 dangerouslySetInnerHTML={{ __html: question }}></h1>
      <ul className="flex flex-wrap items-center gap-4 lg:gap-8">
        {choices.map((choice, index) => (
          <li
            key={id}
            className={`border whitespace-nowrap border-primary-100 hover:bg-secondary-200/50  rounded-lg px-2 py-1 ${
              submitted === index && !checked && "bg-secondary-200"
            } ${choice === correct_answer && checked && "bg-success-100"} ${
              submitted === index &&
              correct_answer !== choice &&
              checked &&
              "bg-danger-100"
            } `}
          >
            <button
              disabled={checked}
              onClick={() => {
                setSubmitted(index);
                setSuccess((prev) => {
                  prev[id] = choice === correct_answer;
                  return prev;
                });
              }}
              className="text-primary-100"
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
