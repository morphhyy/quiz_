import React from "react";
import QuestionGroup from "../components/QuestionGroup";
import "./Home.css";
const Home: React.FC = () => {
    const rows = [1, 2, 3];
    return (
        <div className="Home">
            <h1>My Question Groups</h1>
            <div className="question_group">
                {rows.map((p) => (
                    <QuestionGroup key={p} value={p} />
                ))}
            </div>
        </div>
    );
};

export default Home;
