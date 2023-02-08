import { model, Schema } from "mongoose";
import { IQuestion } from "../types/question";

const questionSchema: Schema = new Schema({
  typeQuestion: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answerText: {
    type: String,
    required: true,
  },
  answerOptions: {
    type: [
      {
        answer: String,
        isCorrect: Boolean,
      },
      {
        answer: String,
        isCorrect: Boolean,
      },
      {
        answer: String,
        isCorrect: Boolean,
      },
      {
        answer: String,
        isCorrect: Boolean,
      },
    ],
    required: true,
  },
});

export default model<IQuestion>("Question", questionSchema);
