import React from "react";
import { useNavigate } from "react-router-dom";
import { IDataContext, useDataContext } from "../context/DataContext";

const Score: React.FC = () => {
    const { submit } = useDataContext() as IDataContext;
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
