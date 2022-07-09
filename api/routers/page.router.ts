import { Router } from "express";
import { 
    pageCreateControl, 
    pageUpdateControl,
    pageDeleteControl, 
    pageGetControl,
} from "../controllers/page.control";

const router = Router();

router.post("/pages", pageCreateControl);
router.get("/pages", pageGetControl);
router.patch("/page/:_id", pageUpdateControl);
router.delete("/page/:_id", pageDeleteControl);
router.get("/pages/:_id", pageGetControl);

export default router;
