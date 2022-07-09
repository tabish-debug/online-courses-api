import { Schema, Document, model } from 'mongoose';

export enum Language {
    english = 'English',
    german = 'German',
}

export interface ICourse extends Document {
    name: string;
    identifier: string;
    language: Language;
    description?: string;
    photo?: string;        // image url
}

const CourseSchema = new Schema<ICourse>({
    name: { type: String, required: true, unique: true },
    identifier: { type: String, required: true, unique: true },
    language: { type: String, enum: Object.values(Language) },
    description: { type: String },
    photo: { type: String }
});

export default model<ICourse>('Course', CourseSchema);
