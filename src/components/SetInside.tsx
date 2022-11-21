import React from "react";
import { IDataContext, useDataContext } from "../context/DataContext";
import { Questions } from "../Question";
import { AiOutlineLeft } from "react-icons/ai";
import QuestionNumber from "./QuestionNumber";
import Score from "./Score";
import Timer from "./Timer";

interface props {
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
}

const SetInside: React.FC<props> = ({ time, setTime }) => {
    const {
        goback,
        setnumber,
        selectAnswer,
        filterquestion,
        setSelectAnswer,
        setSelected,
        selected,
        buttonText,
        setFilterQuestion,
        setSubmit,
    } = useDataContext() as IDataContext;

    const skip = () => {
        setSelectAnswer([...selectAnswer, { id: selected, skip: true }]);
        setSelected((previous) => previous + 1);
        selectAnswer.map((s) => console.log(s));
    };

    const previous = () => {
        setSelected((previous) => previous - 1);
        const data = Questions.filter((k) => k.id === selected);
        setFilterQuestion(data);
    };

    const next = () => {
        setSelected(selected + 1);
        const data = Questions.filter((k) => k.id === selected);
        setFilterQuestion(data);
        const correct = selectAnswer.filter((s) => s.correct === true);
        setSubmit(`${correct.length}`);
    };

    const clickAnswer = (answer: string) => {
        const [data] = filterquestion;
        const result = data.answers.indexOf(answer);
        if (result === data.correctIndex) {
            const duplicate = selectAnswer.find((k) => {
                if (k.id === selected) {
                    return true;
                }
                return false;
            });
            if (!duplicate) {
                setSelectAnswer([
                    ...selectAnswer,
                    { id: selected, answer, correct: true },
                ]);
            }
        } else {
            setSelectAnswer([
                ...selectAnswer,
                { id: selected, answer, correct: false },
            ]);
        }
    };

    return (
        <div>
            <div className="set_inside">
                <span className="set_inside_text" onClick={goback}>
                    <AiOutlineLeft /> Question Groups
                </span>
                <h1>Question Set {setnumber}</h1>
            </div>
            <div className="set_container">
                <div className="set_left">
                    <div>
                        {Questions.map((s) => (
                            <QuestionNumber
                                key={s.id}
                                value={s}
                                setFilterQuestion={setFilterQuestion}
                                setSelected={setSelected}
                            />
                        ))}
                    </div>
                    <Timer time={time} setTime={setTime} />
                </div>
                <div className="set_right">
                    {filterquestion.map(({ id, question, answers }) => {
                        return (
                            <div className="question">
                                <div className="question_top">
                                    <h2 className="question_number">
                                        Question {id}
                                    </h2>
                                    <p className="question_question">
                                        {question}
                                    </p>
                                </div>
                                <div className="question_answer">
                                    <div className="skip" onClick={skip}>
                                        <span>SKIP</span>
                                    </div>
                                    {answers.map((answer) => {
                                        return (
                                            <p
                                                onClick={() =>
                                                    clickAnswer(answer)
                                                }
                                                className="question_answer_set"
                                            >
                                                {answer}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}

                    {selected === 8 ? (
                        <Score />
                    ) : (
                        <div className="all_button">
                            <button onClick={previous}>PREVIOUS</button>
                            <button onClick={next}>{buttonText}</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SetInside;
