import React, { useState } from "react";

const QuestionCard = ({
  question,
  choices,
  correct_answer,
  id,
  checked,
  setSuccess,
}) => {
  const [submitted, setSubmitted] = useState(null);

  return (
    <div className="w-4/5 flex flex-col gap-2 border-b py-4 px-2">
      <h1>{question}</h1>
      <ul className="flex flex-wrap items-center gap-8">
        {choices.map((choice, index) => (
          <li
            key={index}
            className={`border whitespace-nowrap border-primary-100  rounded-lg px-2 py-1 ${
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
