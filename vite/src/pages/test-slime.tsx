import { FC, useState } from "react";

const questions = [
  { question: "1 or 2 ?", type: 0 },
  { question: "a or b ?", type: 1 },
  { question: "A or B ?", type: 2 },
  { question: "가 or 나 ?", type: 3 },
];

const TestSlime: FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number[]>([0, 0, 0, 0]);

  const next = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const checkAnswer = (answer: number) => {
    const temp = totalScore.map((v, i) => {
      if (questions[currentQuestionIndex].type === i) {
        return v + answer;
      } else {
        return v;
      }
    });

    setTotalScore(temp);
  };
  const onClickA = () => {
    checkAnswer(1);
    next();
  };
  const onClickB = () => {
    checkAnswer(-1);
    next();
  };

  return (
    <div className="bg-blue-100 grow p-4">
      {questions.length === currentQuestionIndex ? (
        totalScore.map((v, i) => (
          <span key={i}>
            {i + 1} = {v},{" "}
          </span>
        ))
      ) : (
        <>
          <div>
            Q{currentQuestionIndex + 1}{" "}
            {questions[currentQuestionIndex].question}
          </div>
          <button onClick={onClickA}>A</button>
          <button onClick={onClickB}>B</button>
        </>
      )}
    </div>
  );
};

export default TestSlime;
