import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import "./QuestionSet.css";
import QuestionGroupSet from "./QuestionGroupSet";

type QuizParams = {
    id: string;
};
const QuestionSet: React.FC = () => {
    const { id } = useParams<QuizParams>();
    const set: number[] = [1, 2, 3, 4, 5, 6];
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const go = (setNumber: number) => {
        navigate(`set/${setNumber}`);
    };
    return (
        <div className="QuestionSet">
            <div className="group_up">
                <span className="span_button" onClick={goBack}>
                    <AiOutlineLeft /> Question Groups
                </span>
                <h1>Question Group {id} </h1>
            </div>
            <div className="container">
                {set.map((s) => (
                    <QuestionGroupSet key={s} s={s} go={go} />
                ))}
            </div>
        </div>
    );
};

export default QuestionSet;
