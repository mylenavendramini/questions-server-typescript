"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQuestion = exports.deleteQuestionFromPage = exports.updateQuestion = exports.createQuestion = exports.getQuestions = void 0;
const question_1 = __importDefault(require("../../models/question"));
const getQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield question_1.default.find().sort({ _id: -1 });
        res.status(200).json({ questions });
    }
    catch (error) {
        throw error;
    }
});
exports.getQuestions = getQuestions;
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const question = new question_1.default({
            typeQuestion: body.typeQuestion,
            questionText: body.questionText,
            answerText: body.answerText,
            answerOptions: body.answerOptions,
        });
        const newQuestion = yield question.save();
        const allQuestions = yield question_1.default.find().sort({ _id: -1 });
        res.status(201).json({
            message: "Question added",
            question: newQuestion,
            questions: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.createQuestion = createQuestion;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updatedQuestion = yield question_1.default.findByIdAndUpdate({ _id: id }, body);
        const allQuestions = yield question_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Question updated.",
            question: updatedQuestion,
            questions: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestionFromPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const deletedQuestion = yield question_1.default.findByIdAndUpdate({ _id: id }, body);
        const allQuestions = yield question_1.default.find().sort({ _id: -1 });
        res.status(200).json({
            message: "Question removed from page.",
            question: deletedQuestion,
            questions: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteQuestionFromPage = deleteQuestionFromPage;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedQuestion = yield question_1.default.findByIdAndRemove(req.params.id);
        const allQuestions = yield question_1.default.find();
        res.status(200).json({
            message: "Question deleted",
            question: deletedQuestion,
            questions: allQuestions,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteQuestion = deleteQuestion;
