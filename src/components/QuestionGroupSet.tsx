import React from "react";

interface props {
    go: (setNumber: number) => void;
    s: number;
}
const QuestionGroupSet: React.FC<props> = ({ go, s }) => {
    return (
        <div className="group_container" onClick={() => go(s)}>
            <h2>Question Set {s}</h2>
            <span>13 Questions</span>
        </div>
    );
};

export default QuestionGroupSet;
