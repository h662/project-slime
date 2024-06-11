import { FC, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SlimePersonalityCard from "../components/SlimePersonalityCard";

const questions: {
  question: string;
  answerA: [string, number];
  answerB: [string, number];
  questionType: number;
}[] = [
  {
    question: "question_1",
    answerA: ["answer_1_A", 1],
    answerB: ["answer_1_B", -1],
    questionType: 0,
  },
  {
    question: "question_2",
    answerA: ["answer_2_A", 1],
    answerB: ["answer_2_B", -1],
    questionType: 1,
  },
  {
    question: "question_3",
    answerA: ["answer_3_A", 1],
    answerB: ["answer_3_B", -1],
    questionType: 2,
  },
  {
    question: "question_4",
    answerA: ["answer_4_A", 1],
    answerB: ["answer_4_B", -1],
    questionType: 3,
  },
  {
    question: "question_5",
    answerA: ["answer_5_A", -1],
    answerB: ["answer_5_B", 1],
    questionType: 1,
  },
  {
    question: "question_6",
    answerA: ["answer_6_A", -1],
    answerB: ["answer_6_B", 1],
    questionType: 2,
  },
  {
    question: "question_7",
    answerA: ["answer_7_A", -1],
    answerB: ["answer_7_B", 1],
    questionType: 3,
  },
  {
    question: "question_8",
    answerA: ["answer_8_A", -1],
    answerB: ["answer_8_B", 1],
    questionType: 0,
  },
  {
    question: "question_9",
    answerA: ["answer_9_A", 1],
    answerB: ["answer_9_B", -1],
    questionType: 2,
  },
  {
    question: "question_10",
    answerA: ["answer_10_A", 1],
    answerB: ["answer_10_B", -1],
    questionType: 3,
  },
  {
    question: "question_11",
    answerA: ["answer_11_A", 1],
    answerB: ["answer_11_B", -1],
    questionType: 0,
  },
  {
    question: "question_12",
    answerA: ["answer_12_A", 1],
    answerB: ["answer_12_B", -1],
    questionType: 1,
  },
];

const MBTI = [
  ["E", "I"],
  ["N", "S"],
  ["F", "T"],
  ["P", "J"],
];

const slimePersonalities = [
  {
    id: 1,
    MBTI: "INFP",
    result: "infpResult",
  },
  {
    id: 2,
    MBTI: "ISTJ",
    result: "istjResult",
  },
  {
    id: 3,
    MBTI: "ESFP",
    result: "esfpResult",
  },
  {
    id: 4,
    MBTI: "ENTJ",
    result: "entjResult",
  },
  {
    id: 5,
    MBTI: "ISFJ",
    result: "isfjResult",
  },
  {
    id: 6,
    MBTI: "ENTP",
    result: "entpResult",
  },
  {
    id: 7,
    MBTI: "INFJ",
    result: "infjResult",
  },
  {
    id: 8,
    MBTI: "ENFJ",
    result: "enfjResult",
  },
  {
    id: 9,
    MBTI: "INTP",
    result: "intpResult",
  },
  {
    id: 10,
    MBTI: "ISFP",
    result: "isfpResult",
  },
  {
    id: 11,
    MBTI: "ESTP",
    result: "estpResult",
  },
  {
    id: 12,
    MBTI: "INTJ",
    result: "intjResult",
  },
  {
    id: 13,
    MBTI: "ESFJ",
    result: "esfjResult",
  },
  {
    id: 14,
    MBTI: "ENFP",
    result: "enfpResult",
  },
  {
    id: 15,
    MBTI: "ISTP",
    result: "istpResult",
  },
  {
    id: 16,
    MBTI: "ESTJ",
    result: "estjResult",
  },
];

const SlimePersonality: FC = () => {
  const { t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number[]>([0, 0, 0, 0]);
  const [resultSlime, setResultSlime] = useState<SlimeMetadata>();
  const [resultMessage, setResultMessage] = useState<string>("");
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [isHoveredA, setIsHoveredA] = useState<boolean>(false);
  const [isHoveredB, setIsHoveredB] = useState<boolean>(false);

  const { metadata } = useOutletContext<OutletContext>();

  const progressPercentage =
    ((currentQuestionIndex + 1) / questions.length) * 100;

  const next = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = (isA: boolean) => {
    const temp = totalScore.map((v, i) => {
      if (questions[currentQuestionIndex].questionType === i) {
        return isA
          ? v + questions[currentQuestionIndex].answerA[1]
          : questions[currentQuestionIndex].answerB[1];
      } else {
        return v;
      }
    });

    setTotalScore(temp);
  };

  const onClickA = () => {
    checkAnswer(true);
    setIsHoveredA(false);
    next();
  };
  const onClickB = () => {
    checkAnswer(false);
    setIsHoveredB(false);
    next();
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const mbtiResult = totalScore
        .map((v, i) => (v > 0 ? MBTI[i][0] : MBTI[i][1]))
        .join("");

      const matchedSlime = slimePersonalities.find(
        (v) => v.MBTI === mbtiResult
      );

      if (!matchedSlime) return;

      setResultSlime(metadata[matchedSlime.id - 1]);
      setResultMessage(t(matchedSlime.result));
    }
  }, [currentQuestionIndex]);

  return (
    <div className="grow max-w-screen-md mx-auto min-h-screen flex">
      <>
        {isStarted ? (
          <div className="p-4 grow flex flex-col justify-center items-center text-xs md:text-lg">
            {currentQuestionIndex === questions.length ? (
              resultSlime ? (
                <SlimePersonalityCard
                  slimeData={resultSlime}
                  resultMessage={resultMessage}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                  setTotalScore={setTotalScore}
                />
              ) : (
                <div>{t("loadingMessage")}</div>
              )
            ) : (
              <>
                <div className="w-full h-2 md:h-4 bg-gray-300 rounded-lg overflow-hidden">
                  <div
                    className={`h-2 md:h-4 transition-all duration-500 ease-in-out ${
                      progressPercentage < 20
                        ? "bg-slimeGreen-200"
                        : progressPercentage < 40
                        ? "bg-slimeGreen-300"
                        : progressPercentage < 60
                        ? "bg-slimeGreen-400"
                        : progressPercentage < 80
                        ? "bg-slimeGreen-500"
                        : "bg-slimeGreen-600"
                    }`}
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  ></div>
                </div>
                <div className="mt-4 md:mt-8">
                  Q{currentQuestionIndex + 1}.{" "}
                  {t(questions[currentQuestionIndex].question)}
                </div>
                <button
                  className={`mt-4 md:mt-8 ${
                    isHoveredA ? "text-slimeGreen-500" : ""
                  }`}
                  onClick={onClickA}
                  onMouseEnter={() => setIsHoveredA(true)}
                  onMouseLeave={() => setIsHoveredA(false)}
                  onTouchStart={() => setIsHoveredA(true)}
                  onTouchEnd={() => setIsHoveredA(false)}
                >
                  A. {t(questions[currentQuestionIndex].answerA[0])}
                </button>
                <button
                  className={`mt-2 md:mt-4 ${
                    isHoveredB ? "text-slimeGreen-500" : ""
                  }`}
                  onClick={onClickB}
                  onMouseEnter={() => setIsHoveredB(true)}
                  onMouseLeave={() => setIsHoveredB(false)}
                  onTouchStart={() => setIsHoveredB(true)}
                  onTouchEnd={() => setIsHoveredB(false)}
                >
                  B. {t(questions[currentQuestionIndex].answerB[0])}
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="relative flex flex-col justify-center items-center gap-2 md:gap-8">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              src="/images/slime_bg.jpg"
              alt="slime-bg"
            />
            <h1 className="bg-white bg-opacity-60 rounded-md mx-2 py-1 md:py-2 text-lg md:text-2xl px-4 flex flex-wrap items-center gap-2 md:gap-4">
              <img
                className="w-12 bg-white rounded-full"
                src="/images/logo.svg"
                alt="slime-project"
              />
              <span className="font-semibold">{t("slimePersonality")}</span> -{" "}
              {t("welcomeMessage")}
            </h1>
            <h2 className="bg-white bg-opacity-60 rounded-md mx-2 px-1 md:mx-4 md:px-2 flex flex-wrap text-xs md:text-lg gap-1 md:gap-2">
              <span>{t("testDescription")}</span>
            </h2>
            <img
              className="max-w-96 w-full px-4 rounded-full"
              src="/images/slime_personality.gif"
              alt="Slime Personality"
            />
            <h3 className="bg-white bg-opacity-60 rounded-md p-1 md:p-2 text-xs md:text-lg">
              {t("researchStartMessage")}
            </h3>
            <button
              className="button-style-lg bg-white border-2 border-slimeGreen-500"
              onClick={() => setIsStarted(true)}
            >
              {t("startButton")}
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default SlimePersonality;
