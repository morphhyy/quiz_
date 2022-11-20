import React, { useEffect } from "react";

interface props {
    time: string;
    setTime: any;
}
const Timer: React.FC<props> = ({ time, setTime }) => {
    const getTimeRemaining = (e: string) => {
        const total = Date.parse(e) - Date.parse(`${new Date()}`);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total,
            minutes,
            seconds,
        };
    };

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setMinutes(deadline.getMinutes() + 2);
        return deadline;
    };

    useEffect(() => {
        const startTimer = (e: string) => {
            let { total, minutes, seconds } = getTimeRemaining(e);
            if (total >= 0) {
                /* eslint-disable */
                setTime(
                    (minutes > 9 ? minutes : "0" + minutes) +
                        ":" +
                        (seconds > 9 ? seconds : "0" + seconds)
                );
            }
        };

        const clearTimer = (e: string) => {
            setInterval(() => {
                startTimer(e);
            }, 1000);
        };
        clearTimer(`${getDeadTime()}`);
    }, []);

    return (
        <div className="timer">
            <span className="time">{time}</span>
            <span className="timer_session">SESSION</span>
        </div>
    );
};
export default Timer;
