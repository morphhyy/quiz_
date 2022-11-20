import { IQuestion } from "./models/models";

export const Questions: IQuestion[] = [
    {
        id: 1,
        question: "What is the scientific name of a butterfly?",
        answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
        correctIndex: 3,
    },
    {
        id: 2,
        question: "How hot is the surface of the sun?",
        answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
        correctIndex: 1,
    },
    {
        id: 3,
        question: "Who are the actors in The Internship?",
        answers: [
            "Ben Stiller, Jonah Hill",
            "Courteney Cox, Matt LeBlanc",
            "Kaley Cuoco, Jim Parsons",
            "Vince Vaughn, Owen Wilson",
        ],
        correctIndex: 3,
    },
    {
        id: 4,
        question: "What is the capital of Spain?",
        answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
        correctIndex: 2,
    },
    {
        id: 5,
        question:
            "What are the school colors of the University of Texas at Austin?",
        answers: [
            "Black, Red",
            "Blue, Orange",
            "White, Burnt Orange",
            "White, Old gold, Gold",
        ],
        correctIndex: 2,
    },
    {
        id: 6,
        question: "When was Mahatma Gandhi born?",
        answers: [
            "October 2, 1869",
            "December 15, 1872",
            "July 18, 1918",
            "January 15, 1929",
        ],
        correctIndex: 0,
    },
    {
        id: 7,
        question: "How far is the moon from Earth?",
        answers: [
            "7,918 miles (12,742 km)",
            "86,881 miles (139,822 km)",
            "238,400 miles (384,400 km)",
            "35,980,000 miles (57,910,000 km)",
        ],
        correctIndex: 2,
    },
];
