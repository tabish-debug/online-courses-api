import { Request, Response } from "express";
import lessonService from "../services/lesson.service";

export const lessonCreateControl = async (req: Request, res: Response) => {
    const { body } = req;
    const data = await lessonService.create(body);
    return res.json(data);
}

export const lessonUpdateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await lessonService.update(params._id, body);
    return res.json(data);
}

export const lessonDeleteControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await lessonService.delete(params._id);
    return res.json(data);
}
