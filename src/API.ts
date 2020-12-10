import { shuffleQuestions } from "./utils";


export type Question = {
    category: string;
    correct_answer: string;
    difficulty: Difficulty;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
};

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&category=21&difficulty=${difficulty}&type=multiple`;
    const promise = await fetch(endPoint);
    const data = await promise.json()


    return data.results.map((question: Question) => {
        return ({
            ...question,
            answers: shuffleQuestions([...question.incorrect_answers, question.correct_answer])
        })
    });
}