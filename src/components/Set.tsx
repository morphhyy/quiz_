import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Set.css";
import { Questions } from "../Question";
import { IQuestion, ISelectAnswer, Quizparams } from "../models/models";
import SetInside from "./SetInside";
import Score from "./Score";

const Set: React.FC = () => {
    const { setnumber } = useParams<Quizparams>();
    const [filterquestion, setFilterQuestion] = useState<IQuestion[]>([
        Questions[0],
    ]);
    const [selected, setSelected] = useState<number>(1);
    const [selectAnswer, setSelectAnswer] = useState<ISelectAnswer[]>([]);
    const [buttonText, setButtonText] = useState("Next");
    const [timer, setTimer] = useState<string>("02:00");
    const [submit, setSubmit] = useState<string>("");
    const navigate = useNavigate();
    const goback = () => {
        navigate(-1);
    };

    useEffect(() => {
        const data = Questions.filter((k) => k.id === selected);
        setFilterQuestion(data);
        if (selected > 6) {
            setButtonText("Submit");
            /* eslint-disable */
            const correct = selectAnswer.filter((s) => s.correct === true);
            setSubmit(`${correct.length}`);
        } else if (selected < 1) {
            setSelected(1);
        } else if (selected > 0 && selected <= 6) {
            setButtonText("Next");
        }
    }, [selected]);

    return (
        <div className="set">
            {timer !== "00:00" ? (
                <SetInside
                    goback={goback}
                    setnumber={setnumber}
                    selectAnswer={selectAnswer}
                    time={timer}
                    setTime={setTimer}
                    filterquestion={filterquestion}
                    setSelectAnswer={setSelectAnswer}
                    selected={selected}
                    buttonText={buttonText}
                    submit={submit}
                    setSubmit={setSubmit}
                    setSelected={setSelected}
                    setFilterQuestion={setFilterQuestion}
                />
            ) : (
                <Score submit={submit} />
            )}
        </div>
    );
};

export default Set;
