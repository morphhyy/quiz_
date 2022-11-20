import React from "react";
import { IQuestion } from "../models/models";
import { Questions } from "../Question";
import { AiFillCheckCircle } from "react-icons/ai";

interface props {
    setFilterQuestion: React.Dispatch<React.SetStateAction<IQuestion[]>>;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    value: IQuestion;
}
const QuestionNumber: React.FC<props> = ({
    setFilterQuestion,
    setSelected,
    value,
}) => {
    const selectQuestion = (questionNumber: number) => {
        const data = Questions.filter((k) => k.id === questionNumber);
        setFilterQuestion(data);
        setSelected(questionNumber);
    };

    return (
        <div className="set_left_inside">
            <div
                className="set_left_inside_question"
                onClick={() => selectQuestion(value.id)}
            >
                Question {value.id}
            </div>
            <AiFillCheckCircle
                style={{
                    color: "green",
                    fontSize: "1.2rem",
                }}
            />
        </div>
    );
};

export default QuestionNumber;
