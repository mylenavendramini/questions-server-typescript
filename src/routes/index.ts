import { Router } from "express";
import {
  getQuestions,
  createQuestion,
  deleteQuestionFromPage,
  updateQuestion,
  deleteQuestion,
} from "../controllers/questions/index";

const router: Router = Router();

router.get("/", getQuestions);
router.post("/create-question", createQuestion);
router.put("/update-question/:id", updateQuestion);
router.put("/delete-question/:id", deleteQuestionFromPage);
router.delete("/delete-question/:id", deleteQuestion);

export default router;
