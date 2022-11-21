import React, { useState } from "react";
import "./Set.css";
import SetInside from "./SetInside";
import Score from "./Score";
import { DataProvider } from "../context/DataContext";

const Set: React.FC = () => {
    const [timer, setTimer] = useState<string>("02:00");
    return (
        <div className="set">
            <DataProvider>
                {timer !== "00:00" ? (
                    <SetInside time={timer} setTime={setTimer} />
                ) : (
                    <Score />
                )}
            </DataProvider>
        </div>
    );
};

export default Set;
