import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { IQuestion, ISelectAnswer } from "../models/models";
import { Questions } from "../Question";
import QuestionNumber from "./QuestionNumber";
import Score from "./Score";
import Timer from "./Timer";

interface props {
    goback: () => void;
    setnumber: any;
    selectAnswer: ISelectAnswer[];
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    filterquestion: IQuestion[];
    setSelectAnswer: React.Dispatch<React.SetStateAction<ISelectAnswer[]>>;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    selected: number;
    submit: string;
    buttonText: string;
    setFilterQuestion: React.Dispatch<React.SetStateAction<IQuestion[]>>;
    setSubmit: React.Dispatch<React.SetStateAction<string>>;
}
const SetInside: React.FC<props> = ({
    goback,
    setnumber,
    selectAnswer,
    time,
    setTime,
    filterquestion,
    setSelectAnswer,
    submit,
    selected,
    buttonText,
    setSelected,
    setFilterQuestion,
    setSubmit,
}) => {
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
            setSelectAnswer([
                ...selectAnswer,
                { id: selected, answer, correct: true },
            ]);
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
                        <Score submit={submit} />
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
