import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { TUpdateCategory } from "../../types/TUpdateCategory";

export class UpdateCategoryService{
    async execute({ id, description, order }: TUpdateCategory){
        const repo = connectionSource.getRepository(Category);
        const category = await repo.findOne({where: {id}});

        if(!category) return new Error("Módulo não existente");

        category.created_at = category.created_at;
        category.description = description ? description : category.description;
        category.order = order ? order : category.order;

        await repo.save(category);
        return category;
    }
}