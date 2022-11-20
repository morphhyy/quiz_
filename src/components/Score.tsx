import React from "react";
import { useNavigate } from "react-router-dom";

interface props {
    submit: string;
}
const Score: React.FC<props> = ({ submit }) => {
    console.log(submit);
    const navigate = useNavigate();
    return (
        <div className="score">
            <div className="score_inside">
                <span className="score_text">You scored</span>
                <h1 className="score_score">{!submit ? "0" : submit}</h1>
            </div>
            <button className="goback" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
};

export default Score;
