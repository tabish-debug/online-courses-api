import { Request, Response } from "express";
import courseService from "../services/course.service";

export const courseCreateControl = async (req: Request, res: Response) => {
    const { body } = req;
    const data = await courseService.create(body);
    return res.json(data);
}

export const courseUpdateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await courseService.update(params._id, body);
    return res.json(data);
}

export const courseDeleteControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await courseService.delete(params._id);
    return res.json(data);
}
