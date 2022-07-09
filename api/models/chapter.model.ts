import { Schema, Document, model } from 'mongoose';
import lessonModel, { ILesson } from './lesson.model';

export interface IChapter extends Document {
    name: string;
    photo?: string;          // image url
    lesson: ILesson['_id'] 
}

export const ChapterSchema = new Schema<IChapter>({
    name: { type: String, required: true, unique: true },
    photo: { type: String },
    lesson: { 
        type: Schema.Types.ObjectId,
        ref: lessonModel,
        required: true,
    }
});

export default model<IChapter>('Chapter', ChapterSchema);
