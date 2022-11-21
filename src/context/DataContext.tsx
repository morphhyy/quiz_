import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IQuestion, ISelectAnswer, Quizparams } from "../models/models";
import { Questions } from "../Question";

interface ProviderProps {
    children: React.ReactNode;
}

export interface IDataContext {
    goback: () => void;
    setnumber: any;
    selectAnswer: ISelectAnswer[];
    filterquestion: IQuestion[];
    setSelectAnswer: React.Dispatch<React.SetStateAction<ISelectAnswer[]>>;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    selected: number;
    submit: string;
    buttonText: string;
    setFilterQuestion: React.Dispatch<React.SetStateAction<IQuestion[]>>;
    setSubmit: React.Dispatch<React.SetStateAction<string>>;
}

export const DataContext = createContext<IDataContext | null>(null);
export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }: ProviderProps) => {
    const { setnumber } = useParams<Quizparams>();
    const [filterquestion, setFilterQuestion] = useState<IQuestion[]>([
        Questions[0],
    ]);
    const [selected, setSelected] = useState<number>(1);
    const [selectAnswer, setSelectAnswer] = useState<ISelectAnswer[]>([]);
    const [buttonText, setButtonText] = useState("Next");
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
        <DataContext.Provider
            value={{
                goback,
                setnumber,
                selectAnswer,
                filterquestion,
                setSelectAnswer,
                setSelected,
                selected,
                submit,
                buttonText,
                setFilterQuestion,
                setSubmit,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
