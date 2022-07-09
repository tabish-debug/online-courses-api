import { ICourse } from "../models";
import courseModel from "../models/course.model";

class CourseServices {
    async create(data: ICourse) {
        const response = await courseModel.create(data);
        return response;
    }
    async update(courseId: ICourse['_id'], data: ICourse){
        const response = await courseModel.findByIdAndUpdate(courseId, data);
        return response
    }
    async delete(courseId: ICourse['_id']) {
        const response = await courseModel.deleteOne({ _id: courseId });
        return response 
    }
}

export default new CourseServices();