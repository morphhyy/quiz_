export type Quizparams = {
    id?: string;
    setnumber: string;
};

export interface IQuestion {
    id: number;
    question: string;
    answers: string[];
    correctIndex: number;
}

export interface ISelectAnswer {
    id: number;
    answer?: string;
    correct?: boolean;
    selected?: boolean;
    skip?: boolean;
}
