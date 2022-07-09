import { Request, Response } from "express";
import componentService from "../services/component.service";

export const componentCreateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await componentService.create(params.page_id ,body);
    return res.json(data);
}

export const componentUpdateControl = async (req: Request, res: Response) => {
    const { body, params } = req;
    const data = await componentService.update(params._id, body);
    return res.json(data);
}

export const componentDeleteControl = async (req: Request, res: Response) => {
    const { params } = req;
    const data = await componentService.delete(params._id);
    return res.json(data);
}
