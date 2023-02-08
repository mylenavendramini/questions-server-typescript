"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
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
exports.default = (0, mongoose_1.model)("Question", questionSchema);
