import { Router } from "express";
import { 
    chapterCreateControl, 
    chapterUpdateControl,
    chapterDeleteControl, 
} from "../controllers/chapter.control";

const router = Router();

router.post("/chapters", chapterCreateControl);
router.patch("/chapter/:_id", chapterUpdateControl);
router.delete("/chapter/:_id", chapterDeleteControl);

export default router;
