import { Router } from "express";
import { 
    courseCreateControl, 
    courseUpdateControl,
    courseDeleteControl, 
} from "../controllers/course.control";

const router = Router();

router.post("/courses", courseCreateControl);
router.patch("/course/:_id", courseUpdateControl);
router.delete("/course/:_id", courseDeleteControl);

export default router;
