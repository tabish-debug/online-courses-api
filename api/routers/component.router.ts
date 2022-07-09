import { Router } from "express";
import { 
    componentCreateControl,
    componentUpdateControl,
    componentDeleteControl
} from "../controllers/component.control";

const router = Router();

router.post("/components/:page_id", componentCreateControl);
router.patch("/component/:_id", componentUpdateControl);
router.delete("/component/:_id", componentDeleteControl);

export default router;
