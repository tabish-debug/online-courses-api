import { Schema, Document, model } from 'mongoose';

export interface IComponent extends Document {
    element: string;
}

export const ComponentSchema = new Schema<IComponent>({
    element: { type: String, required: true },
});

export default model<IComponent>('Component', ComponentSchema);