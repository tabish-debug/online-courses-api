import { IPage } from "../models";
import pageModel from "../models/page.model";

class PageServices {
    async create(data: IPage) {
        const response = await pageModel.create(data);
        return response;
    }
    async update(pageId: IPage['_id'], data: IPage){
        const response = await pageModel.findByIdAndUpdate(pageId, data);
        return response
    }
    async delete(pageId: IPage['_id']) {
        const response = await pageModel.deleteOne({ _id: pageId });
        return response 
    }
    async get(_id?: IPage['_id']) {
        const query = _id ? {_id} : {}
        const response = await pageModel.find(query)
        .populate('components')
        .populate({
            path: 'chapter',
            populate: { 
                path: 'lesson', 
                populate: { 
                    path: 'course',
                }
            }
        });
        return response;
    }
}

export default new PageServices();