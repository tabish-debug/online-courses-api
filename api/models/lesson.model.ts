import { Schema, Document, model } from 'mongoose';
import courseModel, { ICourse } from './course.model';

export interface ILesson extends Document {
    name: string;
    description?: string;
    photo?: string;         // image url
    course: ICourse['_id'] 
}

export const LessonSchema = new Schema<ILesson>({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    photo: { type: String },
    course: { 
        type: Schema.Types.ObjectId, 
        ref: courseModel,
        required: true,
    }
});

export default model<ILesson>('Lesson', LessonSchema);
