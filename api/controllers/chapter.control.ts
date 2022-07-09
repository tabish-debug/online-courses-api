import { Request, Response } from "express";
import chapterService from "../services/chapter.service";

export const chapterCreateControl = async (req: Request, res: Response) => {
    const { body } = req;
    const data = await chapterService.create(body);
    return res.json(data);
}

export const chapterUpdateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await chapterService.update(params._id, body);
    return res.json(data);
}

export const chapterDeleteControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await chapterService.delete(params._id);
    return res.json(data);
}
