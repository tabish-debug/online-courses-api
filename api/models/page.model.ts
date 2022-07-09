import { Schema, Document, model } from 'mongoose';
import chapterModel, { IChapter } from './chapter.model';
import Component, { IComponent } from './component.model';

export interface IPage extends Document {
    number: number;
    chapter: IChapter['_id']; 
    components: [IComponent['_id']]; 
}

export const PageSchema = new Schema<IPage>({
    number: { type: Number },
    components: [{
        type: Schema.Types.ObjectId,
        ref: Component,
    }],
    chapter: {
        type: Schema.Types.ObjectId,
        ref: chapterModel,
        required: true,
    }
});

export default model<IPage>('Page', PageSchema);
