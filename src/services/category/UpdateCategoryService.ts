import { connectionSource } from "../../database/ormconfig";
import { Category } from "../../entities/Category";
import { TUpdateCategory } from "../../types/TUpdateCategory";

export class UpdateCategoryService{
    async execute({ id, description }: TUpdateCategory){
        const repo = connectionSource.getRepository(Category);
        const category = await repo.findOne({where: {id}});

        if(!category) return new Error("Módulo não existente");

        category.created_at = category.created_at;
        category.description = description ? description : category.description;

        await repo.save(category);
        return category;
    }
}