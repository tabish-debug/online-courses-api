import { Request, Response } from "express";
import pageService from "../services/page.service";

export const pageCreateControl = async (req: Request, res: Response) => {
    const { body } = req;
    const data = await pageService.create(body);
    return res.json(data);
}

export const pageUpdateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await pageService.update(params._id, body);
    return res.json(data);
}

export const pageDeleteControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await pageService.delete(params._id);
    return res.json(data);
}

export const pageGetControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await pageService.get(params?._id);
    return res.json(data)
}