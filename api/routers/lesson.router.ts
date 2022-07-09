import { Router } from "express";
import { 
    lessonCreateControl, 
    lessonUpdateControl,
    lessonDeleteControl, 
} from "../controllers/lesson.control";

const router = Router();

router.post("/lessons", lessonCreateControl);
router.patch("/lesson/:_id", lessonUpdateControl);
router.delete("/lesson/:_id", lessonDeleteControl);

export default router;
