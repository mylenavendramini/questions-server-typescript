import { Document } from "mongoose";

export interface IQuestion extends Document {
  typeQuestion: string;
  questionText: string;
  answerText: string;
  answerOptions: [
    {
      answer: string;
      isCorrect: boolean;
    },
    {
      answer: string;
      isCorrect: boolean;
    },
    {
      answer: string;
      isCorrect: boolean;
    },
    {
      answer: string;
      isCorrect: boolean;
    }
  ];
}
