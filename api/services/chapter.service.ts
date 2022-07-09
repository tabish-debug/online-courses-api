import { IChapter } from "../models";
import chapterModel from "../models/chapter.model";

class ChapterServices {
    async create(data: IChapter) {
        const response = await chapterModel.create(data);
        return response;
    }
    async update(chapterId: IChapter['_id'], data: IChapter){
        const response = await chapterModel.findByIdAndUpdate(chapterId, data);
        return response
    }
    async delete(chapterId: IChapter['_id']) {
        const response = await chapterModel.deleteOne({ _id: chapterId });
        return response 
    }
}

export default new ChapterServices();