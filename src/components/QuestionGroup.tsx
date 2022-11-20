import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
    value: number;
}
const QuestionGroup: React.FC<props> = ({ value }) => {
    const navigate = useNavigate();
    const go = (id: number) => {
        navigate(`group/${id}`);
    };
    return (
        <>
            <div className="question_container" onClick={() => go(value)}>
                <div className="upward">
                    <h3>Question Group {value} </h3>
                    <span className="text">Description</span>
                </div>
                <div className="downward">
                    <span className="text">12 Question Sets</span>
                </div>
            </div>
        </>
    );
};

export default QuestionGroup;
