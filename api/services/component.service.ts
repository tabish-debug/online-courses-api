import { IComponent, IPage } from "../models";
import componentModel from "../models/component.model";
import pageModel from "../models/page.model";

class ComponentServices {
    async create(pageId: IPage['_id'], data: IComponent) {
        const component = await componentModel.create(data);
        await pageModel.findByIdAndUpdate(pageId, {
            $push: {
                components: {
                    _id: component._id,
                    element: component.element
                }
            }
        })
        return component;
    }
    async update(componentId: IComponent['_id'], data: IComponent){
        const response = await componentModel.findByIdAndUpdate(componentId, data);
        return response
    }
    async delete(componentId: IComponent['_id']) {
        const response = await componentModel.deleteOne({ _id: componentId });
        return response 
    }
}

export default new ComponentServices();