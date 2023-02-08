import { Response, Request } from "express";
import { IQuestion } from "../../types/question";
import Question from "../../models/question";

const getQuestions = async (req: Request, res: Response): Promise<void> => {
  try {
    const questions: IQuestion[] = await Question.find().sort({ _id: -1 });
    res.status(200).json({ questions });
  } catch (error) {
    throw error;
  }
};

const createQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as IQuestion;
    const question: IQuestion = new Question({
      typeQuestion: body.typeQuestion,
      questionText: body.questionText,
      answerText: body.answerText,
      answerOptions: body.answerOptions,
    });
    const newQuestion: IQuestion = await question.save();
    const allQuestions: IQuestion[] = await Question.find().sort({ _id: -1 });
    res.status(201).json({
      message: "Question added",
      question: newQuestion,
      questions: allQuestions,
    });
  } catch (error) {
    throw error;
  }
};

const updateQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updatedQuestion: IQuestion | null = await Question.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allQuestions: IQuestion[] = await Question.find().sort({ _id: -1 });
    res.status(200).json({
      message: "Question updated.",
      question: updatedQuestion,
      questions: allQuestions,
    });
  } catch (error) {
    throw error;
  }
};

const deleteQuestionFromPage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const deletedQuestion: IQuestion | null = await Question.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allQuestions: IQuestion[] = await Question.find().sort({ _id: -1 });
    res.status(200).json({
      message: "Question removed from page.",
      question: deletedQuestion,
      questions: allQuestions,
    });
  } catch (error) {
    throw error;
  }
};

const deleteQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedQuestion: IQuestion | null = await Question.findByIdAndRemove(
      req.params.id
    );
    const allQuestions: IQuestion[] = await Question.find();
    res.status(200).json({
      message: "Question deleted",
      question: deletedQuestion,
      questions: allQuestions,
    });
  } catch (error) {
    throw error;
  }
};

export {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestionFromPage,
  deleteQuestion,
};
