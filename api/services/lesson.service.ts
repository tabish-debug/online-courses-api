import { ILesson } from "../models";
import lessonModel from "../models/lesson.model";

class LessonServices {
    async create(data: ILesson) {
        const response = await lessonModel.create(data);
        return response;
    }
    async update(lessonId: ILesson['_id'], data: ILesson){
        const response = await lessonModel.findByIdAndUpdate(lessonId, data);
        return response
    }
    async delete(lessonId: ILesson['_id']) {
        const response = await lessonModel.deleteOne({ _id: lessonId });
        return response 
    }
}

export default new LessonServices();